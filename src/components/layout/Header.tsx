import { NavLink } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Logo } from '../navigation/Logo'

const nav = [
  ['Approche', '/mon-approche'],
  ['Accompagnements', '/accompagnements'],
  ['Recettes', '/recettes'],
  ['Conseils', '/conseils'],
  ['Sommeil', '/sommeil'],
] as const

export function Header() {
  return (
    <header className="border-b border-sage bg-paper/95">
      <Container className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <nav aria-label="Navigation principale" className="-mx-1 overflow-x-auto px-1 sm:mx-0 sm:px-0">
          <div className="flex min-w-max items-center gap-5 sm:gap-6">
            {nav.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `min-h-11 inline-flex items-center text-sm ${
                    isActive ? 'text-forest-dark' : 'text-muted hover:text-forest-dark'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  )
}
