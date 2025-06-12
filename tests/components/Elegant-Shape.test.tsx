import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ElegantShape } from '@/components/Elegant-Shape'

describe('ElegantShape', () => {
  it('renderiza correctamente con props por defecto', () => {
    const { container } = render(<ElegantShape />)
    // Debe renderizar un div con clases principales
    const mainDiv = container.querySelector('div.absolute')
    expect(mainDiv).toBeTruthy()
    // Debe tener un hijo con clase relative
    const relativeDiv = container.querySelector('div.relative')
    expect(relativeDiv).toBeTruthy()
    // Debe tener un div con el gradiente
    const gradientDiv = container.querySelector('div.bg-gradient-to-r')
    expect(gradientDiv).toBeTruthy()
  })

  it('aplica las props width, height y gradient correctamente', () => {
    const { container } = render(
      <ElegantShape width={123} height={45} gradient="from-pink-500" />
    )
    const relativeDiv = container.querySelector('div.relative')!;
    expect((relativeDiv as HTMLDivElement).style.width).toBe('123px')
    expect((relativeDiv as HTMLDivElement).style.height).toBe('45px')
    const gradientDiv = container.querySelector('div.from-pink-500')
    expect(gradientDiv).toBeTruthy()
  })

  it('aplica la clase personalizada', () => {
    const { container } = render(
      <ElegantShape className="z-50" />
    )
    const mainDiv = container.querySelector('div.absolute')
    expect(mainDiv?.className).toContain('z-50')
  })
})
