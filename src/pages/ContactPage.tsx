import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { StandardPage } from './StandardPage'
import { brand } from '../config/site'
import { ContactForm } from '../components/forms/ContactForm'

export function ContactPage() {
  return <StandardPage eyebrow="Contact" title="Parler de ton rythme et de ce que tu veux améliorer." intro="Un premier message suffit pour expliquer le contexte, les horaires concernés et les questions que tu veux poser.">
    <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-14 items-start">
      <ContactForm />
      <aside className="bg-cream border border-sage p-7 lg:p-9">
        <h2 className="text-3xl">Coordonnées</h2>
        <div className="mt-7 space-y-5 text-sm text-muted">
          <p className="flex items-start gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" /><span>{brand.email}</span></p>
          <p className="flex items-start gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" /><span>{brand.phone}</span></p>
          <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" /><span>{brand.location}</span></p>
          <p className="flex items-start gap-3"><Clock3 size={17} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" /><span>{brand.availability}</span></p>
        </div>
        <div className="mt-8 border-t border-sage pt-6"><p className="font-serif text-xl text-forest-dark">Avant un premier rendez-vous</p><p className="mt-3 text-sm leading-relaxed text-muted">Tu peux simplement indiquer le type d’horaires que tu fais actuellement, ce qui te pose le plus de difficulté et le format de rendez-vous que tu préfères. Aucun journal détaillé n’est nécessaire pour prendre contact.</p></div>
      </aside>
    </div>
  </StandardPage>
}
