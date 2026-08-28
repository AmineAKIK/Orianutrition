import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

const focusableSelector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function Modal({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const dialog = dialogRef.current
    const first = dialog?.querySelector<HTMLElement>(focusableSelector)
    first?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !dialog) return
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector))
      if (focusable.length === 0) return
      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      openerRef.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(<div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center">
    <button type="button" aria-label="Fermer la fenêtre" onClick={onClose} className="absolute inset-0 bg-ink/50 backdrop-blur-[1px]"/>
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="oria-dialog-title" tabIndex={-1} className="relative z-10 max-h-[92vh] w-full overflow-y-auto bg-paper shadow-2xl outline-none animate-[modal-in_260ms_ease-out] sm:max-w-lg">
      <div className="sticky top-0 flex items-center justify-between border-b border-sage bg-paper px-6 py-5 sm:px-8 sm:py-6">
        <h2 id="oria-dialog-title" className="text-xl text-forest-dark">{title}</h2>
        <button type="button" onClick={onClose} aria-label="Fermer la fenêtre" className="-mr-2 flex min-h-11 min-w-11 items-center justify-center text-muted transition-colors hover:text-forest"><X size={20} aria-hidden="true"/></button>
      </div>
      <div className="px-6 py-7 sm:px-10 sm:py-8">{children}</div>
    </div>
  </div>, document.body)
}
