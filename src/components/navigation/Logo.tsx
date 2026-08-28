import { Link } from 'react-router-dom'
import { brand } from '../../config/site'

export function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-3" aria-label={`${brand.name} — Accueil`}>
      <span className="grid size-9 place-items-center border border-current font-serif text-lg" aria-hidden="true">
        O
      </span>
      <span>
        <span className="block font-serif text-lg leading-none">{brand.name}</span>
        <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.14em] text-muted">Portfolio case study</span>
      </span>
    </Link>
  )
}
