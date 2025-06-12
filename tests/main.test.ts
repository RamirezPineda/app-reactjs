import { describe, it, expect, vi } from 'vitest'

// Mock de createRoot de react-dom/client
vi.mock('react-dom/client', () => {
  return {
    createRoot: vi.fn(() => ({
      render: vi.fn(),
    })),
  }
})

describe('main.tsx', () => {
  it('monta la aplicación sin errores', async () => {
    // Simula un elemento root en el DOM
    const root = document.createElement('div')
    root.id = 'root'
    document.body.appendChild(root)

    // Importa el archivo principal (esto ejecuta el código)
    await import('@/main')

    // Verifica que createRoot haya sido llamado correctamente
    const { createRoot } = await import('react-dom/client')
    expect(createRoot).toHaveBeenCalledWith(root)
  })
})
