import { useCallback, useEffect, useState } from 'react'
import { Download } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

interface RelatedApplication {
  id?: string
  platform?: string
  url?: string
}

type NavigatorWithInstalledApps = Navigator & {
  getInstalledRelatedApps?: () => Promise<RelatedApplication[]>
}

const PWA_ID = '/orianutrition/'

export function PWAInstallButton() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)

  const refreshInstalledState = useCallback(async () => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches
    if (standalone) {
      setIsInstalled(true)
      return
    }

    const navigatorWithInstalledApps = navigator as NavigatorWithInstalledApps
    if (!navigatorWithInstalledApps.getInstalledRelatedApps) {
      setIsInstalled(false)
      return
    }

    try {
      const relatedApps = await navigatorWithInstalledApps.getInstalledRelatedApps()
      setIsInstalled(relatedApps.some(app => app.platform === 'webapp' && app.id === PWA_ID))
    } catch {
      setIsInstalled(false)
    }
  }, [])

  useEffect(() => {
    function handleBeforeInstallPrompt(event: Event) {
      event.preventDefault()
      setInstallEvent(event as BeforeInstallPromptEvent)
      void refreshInstalledState()
    }

    function handleInstalled() {
      setIsInstalled(true)
      setInstallEvent(null)
    }

    function handleVisibilityChange() {
      if (document.visibilityState === 'visible') void refreshInstalledState()
    }

    function handleFocus() {
      void refreshInstalledState()
    }

    void refreshInstalledState()
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleInstalled)
    window.addEventListener('focus', handleFocus)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleInstalled)
      window.removeEventListener('focus', handleFocus)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [refreshInstalledState])

  if (isInstalled || !installEvent) return null

  async function install() {
    const event = installEvent
    if (!event) return

    await event.prompt()
    const choice = await event.userChoice
    setInstallEvent(null)

    if (choice.outcome === 'accepted') {
      setIsInstalled(true)
    }
  }

  return <button type="button" onClick={install} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-forest-soft transition-colors hover:text-forest-dark"><Download size={16} aria-hidden="true"/>Installer Oria</button>
}
