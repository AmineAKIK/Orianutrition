import { Container } from '../ui/Container'
import { LinkButton } from '../ui/Button'
import { brand } from '../../config/site'
import portrait from '../../assets/practitioner/elise-marceau-accueil.png'

export function PractitionerSection() {
  return <section className="section-pad"><Container><div className="grid items-center gap-8 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:gap-10 lg:grid-cols-2 lg:gap-16">
    <div className="aspect-[4/3] overflow-hidden border border-sage bg-sage-light sm:aspect-[4/5] sm:max-w-md md:max-w-none"><img src={portrait} alt={`Portrait de ${brand.practitioner}`} className="h-full w-full object-cover" style={{objectPosition:'50% 38%'}} width={1229} height={1536} loading="lazy" decoding="async" /></div>
    <div><p className="eyebrow mb-3 sm:mb-4">L'approche</p><h2 className="text-balance text-[2rem] leading-[1.08] sm:text-4xl md:text-[2.35rem] lg:text-5xl">Un accompagnement pensé à partir de ton emploi du temps réel.</h2><p className="mt-5 text-pretty leading-relaxed text-muted sm:mt-6">{brand.practitioner}, {brand.role.toLowerCase()}, accompagne les personnes dont les horaires rendent les repas, la récupération et l’organisation moins prévisibles.</p><p className="mt-4 text-pretty leading-relaxed text-muted">L’objectif n’est pas de faire entrer le quotidien dans un planning idéal, mais de construire quelques repères suffisamment simples pour rester utiles quand les semaines changent.</p><div className="mt-7 sm:mt-8"><LinkButton to="/mon-approche" variant="secondary" className="w-full sm:w-auto">En savoir plus</LinkButton></div></div>
  </div></Container></section>
}
