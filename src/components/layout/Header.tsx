import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from '../navigation/Logo'
import { mainNav } from '../../data/site'
import { PWAInstallButton } from '../pwa/PWAInstallButton'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return <header className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_0_0_rgba(41,74,53,.12)]' : ''}`}>
    <div className="container-editorial flex h-[72px] items-center justify-between lg:h-20">
      <Logo/>
      <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
        {mainNav.map(link => <NavLink key={link.path} to={link.path} className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-forest-dark' : 'text-muted hover:text-forest-dark'}`}>
          {({isActive}) => <span aria-current={isActive ? 'page' : undefined} className="relative py-1">{link.label}{isActive && <span aria-hidden="true" className="absolute -bottom-1 left-0 right-0 h-px bg-gold-muted"/>}</span>}
        </NavLink>)}
      </nav>
      <div className="hidden items-center gap-6 lg:flex">
        <PWAInstallButton/>
        <Link to="/espace-client" className="text-sm font-medium text-forest-soft transition-colors hover:text-forest-dark">Espace client</Link>
        <Link to="/contact" className="inline-flex min-h-11 items-center justify-center bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-forest-dark">Prendre RDV</Link>
      </div>
      <button ref={menuButtonRef} type="button" className="flex min-h-11 min-w-11 items-center justify-center text-forest-dark lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(v => !v)}>{open ? <X size={24} aria-hidden="true"/> : <Menu size={24} aria-hidden="true"/>}</button>
    </div>
    {open && <div id="mobile-nav" className="border-t border-sage bg-paper lg:hidden"><nav className="container-editorial flex flex-col py-4" aria-label="Navigation mobile">
      {mainNav.map(link => <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)} className={({isActive}) => `flex min-h-11 items-center border-b border-sage-light py-3.5 text-base font-medium ${isActive ? 'text-forest-dark' : 'text-muted'}`}>{({isActive}) => <span aria-current={isActive ? 'page' : undefined}>{link.label}</span>}</NavLink>)}
      <Link to="/espace-client" onClick={() => setOpen(false)} className="flex min-h-11 items-center py-3.5 text-base font-medium text-muted">Espace client</Link>
      <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 inline-flex min-h-11 items-center justify-center bg-forest px-5 py-3 text-sm font-medium text-paper">Prendre RDV</Link>
    </nav></div>}
  </header>
}
