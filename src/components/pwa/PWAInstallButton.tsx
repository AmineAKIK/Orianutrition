import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

export function PWAInstallButton() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    function handleBeforeInstallPrompt(event: Event) {
      event.preventDefault()
      setInstallEvent(event as BeforeInstallPromptEvent)
    }
    function handleInstalled() { setInstallEvent(null) }
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleInstalled)
    }
  }, [])

  if (!installEvent) return null

  async function install() {
    const event = installEvent
    if (!event) return
    await event.prompt()
    await event.userChoice
    setInstallEvent(null)
  }

  return <button type="button" onClick={install} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-forest-soft transition-colors hover:text-forest-dark"><Download size={16} aria-hidden="true"/>Installer Oria</button>
}
