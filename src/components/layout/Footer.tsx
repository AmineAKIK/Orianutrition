import { Container } from '../ui/Container'
import { brand, demo } from '../../config/site'

export function Footer() {
  return (
    <footer className="mt-auto bg-forest-dark py-10 text-sage-light">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-xl text-paper">{brand.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-sage">{brand.description}</p>
          </div>
          <p className="text-xs text-sage">
            {demo.collectsPersonalData ? 'Données actives' : 'Démonstration fictive — aucune donnée collectée'}
          </p>
        </div>
      </Container>
    </footer>
  )
}
