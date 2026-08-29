import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { StandardPage } from './StandardPage'
import { brand } from '../config/site'
import { ContactForm } from '../components/forms/ContactForm'

export function ContactPage() {
  return <StandardPage eyebrow="Contact" title="Parler de ton rythme et de ce que tu veux améliorer." intro="Un premier message suffit pour expliquer le contexte, les horaires concernés et les questions que tu veux poser.">
    <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
      <ContactForm />
      <aside className="border border-sage bg-cream p-5 sm:p-7 lg:p-9">
        <h2 className="text-[1.8rem] leading-[1.1] sm:text-3xl">Coordonnées</h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:mt-7 sm:space-y-5">
          <p className="flex items-start gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" /><span className="min-w-0 break-words">{brand.email}</span></p>
          <p className="flex items-start gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" /><span>{brand.phone}</span></p>
          <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" /><span>{brand.location}</span></p>
          <p className="flex items-start gap-3"><Clock3 size={17} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" /><span>{brand.availability}</span></p>
        </div>
        <div className="mt-7 border-t border-sage pt-5 sm:mt-8 sm:pt-6"><p className="font-serif text-xl text-forest-dark">Avant un premier rendez-vous</p><p className="mt-3 text-pretty text-sm leading-relaxed text-muted">Tu peux simplement indiquer le type d’horaires que tu fais actuellement, ce qui te pose le plus de difficulté et le format de rendez-vous que tu préfères. Aucun journal détaillé n’est nécessaire pour prendre contact.</p></div>
      </aside>
    </div>
  </StandardPage>
}
