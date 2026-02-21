"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import CvButton from "./CvButton";

export default function Header({ lang }: Readonly<{ lang: "fr" | "en" }>) {
  const isFr = lang === "fr";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { href: `/${lang}/`, label: isFr ? "Accueil" : "Home" },
      { href: `/${lang}#projects`, label: isFr ? "Projets" : "Projects" },
      { href: `/${lang}#experience`, label: isFr ? "Expérience" : "Experience" },
      { href: `/${lang}/about`, label: isFr ? "À propos" : "About" },
      { href: `/${lang}#contact`, label: isFr ? "Contact" : "Contact" },
    ],
    [lang, isFr]
  );

  // Close menu when route changes
  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    if (!openRef.current) return;
    const id = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(id);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={
        `sticky top-0 z-50 border-b transition-all duration-300 ease-in-out ${scrolled ? "border-neutral-800 bg-neutral-950/80 backdrop-blur-lg shadow-lg" : "border-neutral-900 bg-neutral-950/55 backdrop-blur"
        }`
      }
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href={`/${lang}`} className="group flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight text-neutral-100">
            {isFr ? "Portfolio Ingénierie" : "Engineering Portfolio"}
          </span>
          <span className="text-xs text-neutral-400 group-hover:text-neutral-300">
            {isFr ? "Structure • BIM • Plans" : "Structural • BIM • Drawings"}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? "text-white"
                  : "text-neutral-300 hover:text-white"
              }
            >
              {item.label}
            </Link>
          ))}

          <CvButton lang={lang} className="rounded-xl border border-neutral-800 px-3 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-900/40">
            CV
          </CvButton>

          <LanguageSwitcher lang={lang} />
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher lang={lang} />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? (isFr ? "Fermer le menu" : "Close menu") : (isFr ? "Ouvrir le menu" : "Open menu")}
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-xl border border-neutral-800 p-2 text-neutral-200 hover:bg-neutral-900/40"
          >
            {/* Icon */}
            {open ? (
              // X icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open ? (
        <div className="md:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50"
          />

          {/* Panel */}
          <div className="fixed left-0 right-0 top-16.25 z-50 border-b border-neutral-900 bg-neutral-950/95 backdrop-blur">
            <div className="mx-auto max-w-5xl px-6 py-5">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      isActive(item.href)
                        ? "rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-sm text-white"
                        : "rounded-xl border border-neutral-800 px-4 py-3 text-sm text-neutral-200 hover:bg-neutral-900/40"
                    }
                  >
                    {item.label}
                  </Link>
                ))}

                <CvButton lang={lang} className="rounded-xl border border-neutral-800 px-4 py-3 text-sm text-neutral-200 hover:bg-neutral-900/40" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
