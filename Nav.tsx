"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { label: "Servicios",       href: "#servicios" },
  { label: "Por qué Bitera",  href: "#diferenciadores" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Contacto",        href: "#contacto" },
];

const WA_URL = "https://wa.me/59892420024";

/* Ícono hamburguesa */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      aria-hidden="true"
      className="transition-all duration-300"
    >
      {open ? (
        <>
          <line x1="2" y1="2"  x2="20" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="2" y1="14" x2="20" y2="2"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </>
      ) : (
        <>
          <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </>
      )}
    </svg>
  );
}

/* Ícono WhatsApp */
function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-.9-.3-.1-.5-.1-.7.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.6-3.8-3.3-.3-.5.3-.4.8-1.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.7.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4l-.9-.2z"/>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    close();
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-[200]
          border-b transition-all duration-300
          ${scrolled
            ? "bg-[rgba(4,9,15,.94)] border-[var(--border)] backdrop-blur-[16px]"
            : "border-transparent"
          }
        `}
        aria-label="Navegación principal"
      >
        <div className="max-w-[1140px] mx-auto px-5 md:px-7 h-[60px] md:h-[64px] flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 font-display font-extrabold text-[1.1rem] tracking-[.06em] text-white" aria-label="Bitera Digital — inicio">
            <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true" className="flex-shrink-0">
              <rect x=".5" y=".5" width="29" height="29" rx="3" stroke="#183355"/>
              <path d="M7 23V7h5.5c3 0 5 1.6 5 4.2 0 1.6-.85 2.8-2.1 3.5 1.85.65 2.85 2.05 2.85 3.95C18.25 21.5 16.2 23 13 23H7z" fill="none" stroke="#00C8F0" strokeWidth="1.4"/>
              <path d="M10 13.5h2.5c1.3 0 2.1-.65 2.1-1.75S13.8 10 12.5 10H10v3.5z" fill="rgba(0,200,240,.25)"/>
              <path d="M10 20.5h3c1.5 0 2.35-.75 2.35-2S14.5 16.5 13 16.5H10v4z" fill="rgba(0,200,240,.25)"/>
              <circle cx="22" cy="9" r="1.8" fill="#00C8F0" opacity=".5"/>
            </svg>
            <span>BITERA<span className="text-[var(--cyan)]">.</span>DIGITAL</span>
          </a>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleAnchor(e, l.href)}
                  className="font-display font-semibold text-[.87rem] tracking-[.05em] text-[var(--textm)] px-3.5 py-1.5 rounded-[3px] hover:text-white hover:bg-[rgba(0,200,240,.07)] transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href={WA_URL}
            className="hidden md:inline-flex items-center gap-2 font-display font-bold text-[.83rem] tracking-[.08em] uppercase px-5 py-2.5 rounded-[3px] bg-[var(--cyan)] text-[var(--bg)] hover:bg-white transition-all hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,200,240,.3)]"
            aria-label="Contactar por WhatsApp"
          >
            <WaIcon />
            Hablar ahora
          </a>

          {/* Hamburguesa mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-[var(--text)] border border-[var(--borderh)] rounded-[3px]"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <MenuIcon open={open} />
          </button>
        </div>

        {/* Drawer mobile */}
        <div
          id="mobile-drawer"
          className={`
            md:hidden overflow-hidden transition-all duration-300
            bg-[rgba(4,9,15,.98)] border-b border-[var(--border)]
            backdrop-blur-[20px]
            ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          `}
          aria-hidden={!open}
          role="navigation"
          aria-label="Menú móvil"
        >
          <div className="px-5 pt-2 pb-5 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className="font-display font-semibold text-[1rem] tracking-[.04em] text-[var(--textm)] px-3 py-3 rounded-[3px] hover:text-white hover:bg-[rgba(0,200,240,.07)] transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_URL}
              onClick={close}
              className="mt-2 flex items-center justify-center gap-2 font-display font-bold text-[.95rem] tracking-[.07em] uppercase py-3.5 rounded-[3px] bg-[var(--cyan)] text-[var(--bg)] hover:bg-white transition-all"
              aria-label="Contactar por WhatsApp"
            >
              <WaIcon />
              Hablar ahora
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
