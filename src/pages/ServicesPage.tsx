import { useState } from 'react'
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { LinkButton, Button } from '../components/ui/Button'
import { ServiceCard } from '../components/cards/ServiceCard'
import { OrientationQuiz } from '../components/sections/OrientationQuiz'
import { discoveryCall, servicePacks, serviceSteps } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export function ServicesPage(){
  usePageMeta('Accompagnements')
  const[quizOpen,setQuizOpen]=useState(false)
  return <>
    <section className="section-pad bg-paper"><Container><SectionHeading level={1} eyebrow="Accompagnements" title="Un accompagnement pensé pour ton emploi du temps, pas l'inverse" body="Plusieurs formats, du premier échange à un suivi plus régulier, pour avancer à ton rythme."/></Container></section>
    <section className="bg-paper pb-14 sm:pb-16 lg:pb-24"><Container>
      <div className="mb-10 flex flex-col gap-5 border border-gold-muted/50 bg-cream/60 p-5 sm:mb-12 sm:p-7 lg:mb-14 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8">
        <div className="flex items-start gap-3.5 sm:gap-4"><PhoneCall size={21} className="mt-1 shrink-0 text-gold-muted"/><div><h2 className="text-balance text-[1.55rem] leading-[1.12] sm:text-2xl">{discoveryCall.name} — {discoveryCall.price}</h2><p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted">{discoveryCall.description}</p></div></div>
        <LinkButton to="/contact" className="w-full lg:w-auto">Réserver mon appel <ArrowRight size={16}/></LinkButton>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-8">{servicePacks.map(service=><ServiceCard key={service.slug} service={service}/>)}</div>
      <div className="mt-10 flex flex-col gap-5 border-t border-sage pt-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between lg:mt-14 lg:pt-10"><div><p className="font-serif text-xl text-forest-dark">Tu hésites entre les formats ?</p><p className="mt-1 text-pretty text-muted">Trois questions rapides pour identifier le meilleur point de départ.</p></div><Button variant="secondary" onClick={()=>setQuizOpen(true)} className="w-full sm:w-auto">Trouver mon accompagnement <Sparkles size={16}/></Button></div>
    </Container></section>
    <section className="section-pad bg-sage-light/50"><Container><SectionHeading eyebrow="Déroulé" title="Comment se déroule un accompagnement"/><div className="mt-9 grid gap-7 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">{serviceSteps.map(([title,description],index)=><div key={title}><span className="font-serif text-2xl italic text-gold-muted">{String(index+1).padStart(2,'0')}</span><h3 className="mt-2 text-lg">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{description}</p></div>)}</div></Container></section>
    <OrientationQuiz isOpen={quizOpen} onClose={()=>setQuizOpen(false)}/>
  </>
}
