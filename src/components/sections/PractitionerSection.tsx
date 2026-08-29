import { Container } from '../ui/Container'
import { LinkButton } from '../ui/Button'
import { brand } from '../../config/site'
import portrait from '../../assets/practitioner/elise-marceau-accueil.png'

export function PractitionerSection() {
  return <section className="section-pad"><Container><div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    <div className="aspect-[4/5] max-w-md overflow-hidden bg-sage-light border border-sage"><img src={portrait} alt={`Portrait de ${brand.practitioner}`} className="h-full w-full object-cover" width={1229} height={1536} loading="lazy" decoding="async" /></div>
    <div><p className="eyebrow mb-4">L'approche</p><h2 className="text-4xl lg:text-5xl">Un accompagnement pensé à partir de ton emploi du temps réel.</h2><p className="mt-6 text-muted leading-relaxed">{brand.practitioner}, {brand.role.toLowerCase()}, accompagne les personnes dont les horaires rendent les repas, la récupération et l’organisation moins prévisibles.</p><p className="mt-4 text-muted leading-relaxed">L’objectif n’est pas de faire entrer le quotidien dans un planning idéal, mais de construire quelques repères suffisamment simples pour rester utiles quand les semaines changent.</p><div className="mt-8"><LinkButton to="/mon-approche" variant="secondary">En savoir plus</LinkButton></div></div>
  </div></Container></section>
}
