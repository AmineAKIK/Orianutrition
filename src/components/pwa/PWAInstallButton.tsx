import { useCallback, useEffect, useRef, useState } from "react";
import { Download, RefreshCw } from "lucide-react";
import { publicAppId, publicManifestUrl } from "../../config/release";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

interface RelatedApplication {
  id?: string;
  platform?: string;
  url?: string;
}

type NavigatorWithInstalledApps = Navigator & {
  getInstalledRelatedApps?: () => Promise<RelatedApplication[]>;
};

function normalizeUrl(value: string | undefined) {
  if (!value) return undefined;
  try {
    return new URL(value, window.location.origin).href;
  } catch {
    return undefined;
  }
}

export function PWAInstallButton() {
  const [installEvent, setInstallEvent] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [needsRefresh, setNeedsRefresh] = useState(false);
  const wasInstalledRef = useRef(false);

  const refreshInstalledState = useCallback(async () => {
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    let installed = standalone;

    if (!installed) {
      const navigatorWithInstalledApps =
        navigator as NavigatorWithInstalledApps;
      if (navigatorWithInstalledApps.getInstalledRelatedApps) {
        try {
          const relatedApps =
            await navigatorWithInstalledApps.getInstalledRelatedApps();
          installed = relatedApps.some((app) => {
            if (app.platform !== "webapp") return false;
            const appId = normalizeUrl(app.id);
            const appUrl = normalizeUrl(app.url);
            return appId === publicAppId || appUrl === publicManifestUrl;
          });
        } catch {
          installed = false;
        }
      }
    }

    if (wasInstalledRef.current && !installed) setNeedsRefresh(true);
    wasInstalledRef.current = installed;
    setIsInstalled(installed);
  }, []);

  useEffect(() => {
    function handleBeforeInstallPrompt(event: Event) {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
      setNeedsRefresh(false);
      void refreshInstalledState();
    }

    function handleInstalled() {
      wasInstalledRef.current = true;
      setIsInstalled(true);
      setInstallEvent(null);
      setNeedsRefresh(false);
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") void refreshInstalledState();
    }

    function handleFocus() {
      void refreshInstalledState();
    }

    void refreshInstalledState();
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleInstalled);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleInstalled);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [refreshInstalledState]);

  if (isInstalled) return null;

  if (!installEvent) {
    if (!needsRefresh) return null;
    return (
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-forest-soft transition-colors hover:text-forest-dark"
      >
        <RefreshCw size={16} aria-hidden="true" />
        Actualiser pour réinstaller
      </button>
    );
  }

  async function install() {
    const event = installEvent;
    if (!event) return;

    await event.prompt();
    const choice = await event.userChoice;
    setInstallEvent(null);

    if (choice.outcome === "accepted") {
      wasInstalledRef.current = true;
      setIsInstalled(true);
    }
  }

  return (
    <button
      type="button"
      onClick={install}
      className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-forest-soft transition-colors hover:text-forest-dark"
    >
      <Download size={16} aria-hidden="true" />
      Installer Oria
    </button>
  );
}
