import { ArrowRight } from 'lucide-react'
import { LinkButton } from '../ui/Button'
import { Container } from '../ui/Container'
import portrait from '../../assets/practitioner/elise-marceau-hero.png'

export function Hero() {
  return <section className="bg-paper"><Container className="pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-20 lg:pt-14"><div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] lg:gap-14">
    <div><p className="eyebrow mb-4 sm:mb-5">Nutrition · Sommeil · Horaires atypiques</p><h1 className="text-balance font-serif text-[2.25rem] leading-[1.07] text-forest-dark sm:text-5xl lg:text-[clamp(2.75rem,3.6vw,4.4rem)]">Manger, dormir et récupérer selon <span className="italic">ton</span> rythme — même quand il change.</h1><p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">Oria accompagne les personnes aux horaires de nuit, alternants ou variables vers des repères alimentaires et de récupération adaptés au quotidien réel.</p><div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"><LinkButton to="/accompagnements" className="w-full sm:w-auto">Découvrir les accompagnements <ArrowRight size={17} aria-hidden="true" /></LinkButton><LinkButton to="/mon-approche" variant="secondary" className="w-full sm:w-auto">Découvrir l'approche</LinkButton></div></div>
    <div><div className="aspect-[4/3] overflow-hidden border border-sage bg-cream sm:mx-auto sm:aspect-[4/5] sm:max-w-sm lg:max-w-none"><img src={portrait} alt="Portrait d’Élise Marceau" className="h-full w-full object-cover" style={{objectPosition:'50% 34%'}} width={1229} height={1536} fetchPriority="high" decoding="async" /></div><p className="mt-3 text-center font-serif text-sm italic leading-relaxed text-forest-soft sm:mt-4 lg:text-right">« Ton rythme mérite des repères qui peuvent bouger avec lui. »</p></div>
  </div></Container></section>
}
