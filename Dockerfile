FROM node:22-alpine AS base

ENV DIR=/app
WORKDIR $DIR


FROM base AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY package.json pnpm-lock.yaml $DIR/

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY tsconfig*.json $DIR
COPY src $DIR/src
COPY public $DIR/public
COPY index.html $DIR/index.html
COPY vite.config.ts $DIR/vite.config.ts

RUN pnpm run build && pnpm prune --production


FROM nginx:1.27.4-alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
