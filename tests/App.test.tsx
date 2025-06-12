import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '@/App'

describe('App', () => {
  it('renderiza sin errores y muestra el título principal', () => {
    render(<App />)
    // Verifica el título principal
    expect(
      screen.getByRole('heading', { name: /simplify your/i })
    ).toBeInTheDocument()
  })

  it('muestra el subtítulo de DevOps', () => {
    render(<App />)
    expect(screen.getAllByText(/DevOps/i).length).toBeGreaterThan(0)
  })

  it('renderiza múltiples ElegantShape', () => {
    const { container } = render(<App />)
    // Busca los divs con clase "absolute" (contenedor de ElegantShape)
    const shapes = container.querySelectorAll('div.absolute')
    // Hay al menos uno para el fondo y varios ElegantShape
    expect(shapes.length).toBeGreaterThanOrEqual(2)
  })

  it('integra correctamente el logo de React', () => {
    render(<App />)
    const logo = screen.getByAltText(/reactjs logo/i)
    expect(logo).toBeInTheDocument()
  })

  it('muestra el texto de descripción', () => {
    render(<App />)
    expect(
      screen.getByText(/automated testing, Docker builds, and live deployment/i)
    ).toBeInTheDocument()
  })
})
