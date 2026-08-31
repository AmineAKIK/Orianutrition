import type { MouseEvent } from 'react'

export function SkipLink() {
  function focusMain(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const main = document.getElementById('main-content')
    if (!main) return

    main.focus({ preventScroll: true })
    main.scrollIntoView({ block: 'start', behavior: 'auto' })
  }

  return (
    <a
      href="#main-content"
      onClick={focusMain}
      className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-paper focus:px-4 focus:py-3"
    >
      Aller au contenu
    </a>
  )
}
