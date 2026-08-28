import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('application shell', () => {
  it('renders the portfolio homepage and privacy notice', () => {
    window.location.hash = '#/'

    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /Des repères qui s’adaptent à ton rythme/i })).toBeInTheDocument()
    expect(screen.getByText(/Démonstration fictive — aucune donnée collectée/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Aller au contenu' })).toHaveAttribute('href', '#main-content')
  })

  it('keeps declared product routes reachable through the shared router', () => {
    window.location.hash = '#/sommeil'

    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Un outil de démonstration à reconstruire avec transparence/i,
      }),
    ).toBeInTheDocument()
  })
})
