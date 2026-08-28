import { useState, type FormEvent } from 'react'
import { brand } from '../../config/site'
import { buildContactMailto } from '../../lib/contact'
import { Toast } from '../ui/Toast'

export function ContactForm() {
  const [prepared, setPrepared] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity()
      return
    }
    const data = new FormData(event.currentTarget)
    const mailto = buildContactMailto(brand.email, {
      firstName: String(data.get('firstName') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    })
    setPrepared(true)
    window.location.assign(mailto)
  }

  return <form className="space-y-5" onSubmit={submit} noValidate>
    <label className="block"><span className="text-sm font-medium">Prénom</span><input required name="firstName" autoComplete="given-name" className="mt-2 w-full border border-sage bg-paper p-3"/></label>
    <label className="block"><span className="text-sm font-medium">Email</span><input type="email" required name="email" autoComplete="email" className="mt-2 w-full border border-sage bg-paper p-3"/></label>
    <label className="block"><span className="text-sm font-medium">Message</span><textarea required name="message" rows={6} className="mt-2 w-full border border-sage bg-paper p-3"/></label>
    <button type="submit" className="min-h-12 bg-forest px-6 text-paper">Préparer mon email</button>
    {prepared && <Toast message="Ton application de messagerie va s'ouvrir avec le message prérempli. Vérifie-le puis envoie-le depuis ta messagerie."/>}
  </form>
}
