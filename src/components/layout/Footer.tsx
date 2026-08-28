import { Link } from 'react-router-dom'
import { brand } from '../../config/site'
import { footerNav } from '../../data/site'
import { PWAInstallButton } from '../pwa/PWAInstallButton'

export function Footer() {
  return <footer className="bg-forest-dark text-paper"><div className="container-editorial py-14 lg:py-20 grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
    <div><p className="font-serif text-3xl">{brand.name}</p><p className="mt-4 max-w-sm text-sm leading-relaxed text-sage">Des repères concrets pour organiser les repas, la récupération et le quotidien quand les horaires changent.</p><p className="mt-5 text-xs uppercase tracking-[.14em] text-sage/80">{brand.practitioner} · {brand.role}</p><PWAInstallButton/></div>
    <div><p className="text-xs uppercase tracking-[.18em] text-sage">Navigation</p><div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">{footerNav.map((link) => <Link key={link.path} to={link.path} className="text-sm text-sage hover:text-paper">{link.label}</Link>)}</div></div>
    <div><p className="text-xs uppercase tracking-[.18em] text-sage">Contact</p><p className="mt-4 text-sm text-sage">{brand.email}</p><p className="mt-2 text-sm text-sage">{brand.phone}</p><p className="mt-2 text-sm leading-relaxed text-sage">{brand.location}</p></div>
  </div></footer>
}
