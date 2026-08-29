import { ArrowRight } from 'lucide-react'
import { LinkButton } from '../ui/Button'
import { Container } from '../ui/Container'
import portrait from '../../assets/practitioner/elise-marceau-hero.png'

export function Hero() {
  return <section className="bg-paper"><Container className="pt-10 pb-14 lg:pt-14 lg:pb-20"><div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
    <div><p className="eyebrow mb-5">Nutrition · Sommeil · Horaires atypiques</p><h1 className="font-serif text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[clamp(2.75rem,3.6vw,4.4rem)] text-forest-dark mb-6">Manger, dormir et récupérer selon <span className="italic">ton</span> rythme — même quand il change.</h1><p className="text-lg text-muted leading-relaxed max-w-md mb-8">Oria accompagne les personnes aux horaires de nuit, alternants ou variables vers des repères alimentaires et de récupération adaptés au quotidien réel.</p><div className="flex flex-col sm:flex-row gap-3"><LinkButton to="/accompagnements">Découvrir les accompagnements <ArrowRight size={17} aria-hidden="true" /></LinkButton><LinkButton to="/mon-approche" variant="secondary">Découvrir l'approche</LinkButton></div></div>
    <div><div className="aspect-[4/5] max-w-xs sm:max-w-sm lg:max-w-none mx-auto overflow-hidden bg-cream border border-sage"><img src={portrait} alt="Portrait d’Élise Marceau" className="h-full w-full object-cover" width={1229} height={1536} fetchPriority="high" decoding="async" /></div><p className="mt-4 text-center lg:text-right font-serif italic text-sm text-forest-soft">« Ton rythme mérite des repères qui peuvent bouger avec lui. »</p></div>
  </div></Container></section>
}
