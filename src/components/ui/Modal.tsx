import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

const focusableSelector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function Modal({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
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
      openerRef.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return <div className="fixed inset-0 z-50 grid place-items-center bg-forest-dark/70 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="oria-dialog-title" className="w-full max-w-lg border border-sage bg-paper p-6 shadow-xl">
      <div className="flex items-start justify-between gap-6">
        <h2 id="oria-dialog-title" className="text-2xl">{title}</h2>
        <button type="button" onClick={onClose} aria-label="Fermer" className="grid size-11 shrink-0 place-items-center border border-sage text-forest hover:bg-sage-light"><X size={18}/></button>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  </div>
}
