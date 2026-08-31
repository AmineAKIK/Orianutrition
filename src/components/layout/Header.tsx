import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "../navigation/Logo";
import { mainNav } from "../../data/site";
import { PWAInstallButton } from "../pwa/PWAInstallButton";

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstMenuControl =
      mobileMenuRef.current?.querySelector<HTMLElement>(focusableSelector);
    firstMenuControl?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const menuControls = mobileMenuRef.current
        ? Array.from(
            mobileMenuRef.current.querySelectorAll<HTMLElement>(
              focusableSelector,
            ),
          )
        : [];
      const focusableElements = [menuButtonRef.current, ...menuControls].filter(
        (element): element is HTMLElement => Boolean(element),
      );
      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/97 backdrop-blur-sm transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_0_0_rgba(41,74,53,.12)]" : ""}`}
    >
      <div className="container-editorial flex h-16 items-center justify-between xl:h-20">
        <Logo />
        <nav
          className="hidden items-center gap-7 xl:flex 2xl:gap-9"
          aria-label="Navigation principale"
        >
          {mainNav.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `whitespace-nowrap text-sm font-medium transition-colors ${isActive ? "text-forest-dark" : "text-muted hover:text-forest-dark"}`
              }
            >
              {({ isActive }) => (
                <span
                  aria-current={isActive ? "page" : undefined}
                  className="relative py-1"
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gold-muted"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex 2xl:gap-6">
          <PWAInstallButton />
          <Link
            to="/espace-client"
            className="whitespace-nowrap text-sm font-medium text-forest-soft transition-colors hover:text-forest-dark"
          >
            Espace client
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-forest-dark"
          >
            Prendre RDV
          </Link>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          className="flex size-11 shrink-0 items-center justify-center text-forest-dark xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>
      {open && (
        <div
          ref={mobileMenuRef}
          id="mobile-nav"
          className="border-t border-sage bg-paper xl:hidden"
        >
          <nav
            className="container-editorial flex max-h-[calc(100dvh-64px)] flex-col overflow-y-auto py-3"
            aria-label="Navigation mobile"
          >
            {mainNav.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-11 items-center border-b border-sage-light py-3 text-base font-medium ${isActive ? "text-forest-dark" : "text-muted"}`
                }
              >
                {({ isActive }) => (
                  <span aria-current={isActive ? "page" : undefined}>
                    {link.label}
                  </span>
                )}
              </NavLink>
            ))}
            <div className="border-b border-sage-light py-1">
              <PWAInstallButton />
            </div>
            <Link
              to="/espace-client"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center py-3 text-base font-medium text-muted"
            >
              Espace client
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center bg-forest px-5 py-3 text-sm font-medium text-paper"
            >
              Prendre RDV
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
