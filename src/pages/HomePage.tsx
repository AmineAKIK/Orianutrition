import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { brand } from '../config/site'

export function HomePage() {
  return (
    <>
      <section className="border-b border-sage bg-paper py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow">Concept portfolio</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
              Des repères qui s’adaptent à ton rythme.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
              {brand.description} Cette première PR installe uniquement un socle technique assaini ; le contenu final sera reconstruit dans les PR suivantes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/mon-approche" className="inline-flex min-h-12 items-center gap-2 bg-forest px-6 py-3 text-sm font-medium text-paper hover:bg-forest-dark">
                Explorer le concept <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/espace-client" className="inline-flex min-h-12 items-center border border-forest px-6 py-3 text-sm font-medium text-forest hover:bg-sage-light">
                Voir l’espace client
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-sage-light/50 py-14">
        <Container>
          <div className="flex max-w-2xl items-start gap-4">
            <ShieldCheck className="mt-1 shrink-0 text-forest" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-2xl">Données fictives par conception</h2>
              <p className="mt-2 leading-relaxed text-muted">
                Oria Nutrition est une étude de cas indépendante. Aucune identité, donnée client ou ressource éditoriale provenant d’un tiers n’est nécessaire à son fonctionnement.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
