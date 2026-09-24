"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { contact, navLinks, ecosystemLinks } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [ecoOpen, setEcoOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openEco = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setEcoOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setEcoOpen(false), 150);
  };

  const isEcoActive = ecosystemLinks.some((l) => pathname === l.href);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/70 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-6 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
        <Link href="/" className="leading-none justify-self-start">
          <span className="block font-display italic text-xl text-cream">Mahreen</span>
          <span className="block text-[10px] tracking-[0.3em] text-gold">INDONESIA</span>
        </Link>

        <div className="hidden sm:flex items-center gap-8 text-sm text-haze justify-self-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative transition-colors hover:text-cream ${
                  isActive ? "text-gold" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-gold/70 rounded-full" />
                )}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={openEco}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setEcoOpen((v) => !v)}
              className={`relative flex items-center gap-1.5 transition-colors hover:text-cream ${
                isEcoActive ? "text-gold" : ""
              }`}
            >
              Our Ecosystem
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${ecoOpen ? "rotate-180" : ""}`}
              />
              {isEcoActive && (
                <span className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-gold/70 rounded-full" />
              )}
            </button>

            {ecoOpen && (
              <div className="absolute top-full left-0 pt-3 w-56">
                <div className="rounded-xl border border-white/10 bg-ink/95 backdrop-blur-md shadow-xl shadow-black/40 py-2">
                  {ecosystemLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setEcoOpen(false)}
                        className={`block px-4 py-2.5 text-sm transition-colors hover:text-gold hover:bg-white/5 ${
                          active ? "text-gold" : "text-cream/90"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tombol menu — hanya tampil di layar kecil */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
          className="sm:hidden justify-self-end col-start-3 flex h-10 w-10 items-center justify-center rounded-lg text-cream hover:bg-white/5"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Panel menu mobile */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-white/5 bg-ink/95 backdrop-blur-md max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <div className="mx-auto max-w-6xl px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-base ${
                  pathname === link.href ? "text-gold" : "text-cream/90"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <p
              className={`mt-4 border-t border-white/10 pt-4 pb-1 text-[11px] uppercase tracking-[0.25em] ${
                isEcoActive ? "text-gold" : "text-haze"
              }`}
            >
              Our Ecosystem
            </p>
            {ecosystemLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 pl-3 text-base ${
                  pathname === link.href ? "text-gold" : "text-cream/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}