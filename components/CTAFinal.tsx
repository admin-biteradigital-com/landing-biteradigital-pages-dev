"use client";

import { useEffect, useRef } from "react";

const WA_URL  = "https://wa.me/59892420024";
const CAL_URL = "https://calendar.app.google/gwwRwaJ2YVrCDS9b6";

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round"/>
    </svg>
  );
}

export default function CTAFinal() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leadRef  = useRef<HTMLParagraphElement>(null);
  const gridRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [titleRef.current, leadRef.current, gridRef.current].forEach((el, i) => {
      if (!el) return;
      const io = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.disconnect(); } },
        { threshold: 0.07 }
      );
      io.observe(el);
    });
  }, []);

  return (
    <section className="py-20 md:py-24 px-5 md:px-7 relative z-[1] overflow-hidden" id="contacto" aria-labelledby="cta-heading">

      {/* Glow inferior */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 80% at 50% 110%, rgba(0,200,240,.06), transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1140px] mx-auto relative z-[2]">
        <p className="inline-flex items-center gap-2.5 font-mono text-[.65rem] tracking-[.2em] text-[var(--cyan)] uppercase mb-2.5 before:content-[''] before:w-5 before:h-px before:bg-[var(--cyan)]">
          04 — Contacto
        </p>

        {/* Grid: texto izq · canales der — apilado en mobile */}
        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-px bg-[var(--border)] border border-[var(--border)] rounded-[8px] overflow-hidden"
        >
          {/* ── Columna izquierda: propuesta ── */}
          <div className="bg-[var(--bg2)] p-8 md:p-12 flex flex-col justify-center">
            <h2
              ref={titleRef}
              id="cta-heading"
              className="reveal font-display font-extrabold leading-[1.05] tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.7rem)" }}
            >
              ¿Su infraestructura puede<br />
              demostrar lo que promete?
            </h2>
            <p
              ref={leadRef}
              className="reveal reveal-d1 text-[1rem] leading-[1.8] text-[var(--textm)] font-light max-w-[420px] mb-6"
            >
              Hablamos con equipos técnicos y de compliance en banca, seguros, tecnología y gobierno que necesitan un proveedor que pueda <strong className="text-[var(--text)] font-medium">evidenciar cada control</strong>, no solo nombrarlo.
            </p>

            {/* Card agenda — protagonista */}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex flex-col sm:flex-row items-start sm:items-center gap-4
                p-5 rounded-[5px] mb-5
                border border-[rgba(0,200,240,.3)]
                bg-[linear-gradient(135deg,rgba(0,200,240,.06),var(--bg3))]
                hover:border-[var(--cyan)] hover:bg-[rgba(0,200,240,.09)]
                transition-all
              "
              aria-label="Agendar demo de 30 minutos en Google Calendar"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-[4px] bg-[rgba(0,200,240,.12)] border border-[rgba(0,200,240,.2)] text-[var(--cyan)] flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8"  y1="2" x2="8"  y2="6"/>
                  <line x1="3"  y1="10" x2="21" y2="10"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round" strokeWidth="2"/>
                </svg>
              </span>
              <div className="flex-1">
                <div className="font-display font-bold text-[1.05rem] text-white mb-1">
                  Demo de 30 minutos, sin compromiso
                </div>
                <div className="font-mono text-[.68rem] text-[var(--textm)] leading-[1.6]">
                  Dedicamos ese tiempo a <strong className="text-[var(--cyan)]">escuchar tu caso</strong> y presentarte un plan de trabajo concreto en función de lo que conversemos. Sin pitch genérico.
                </div>
              </div>
              <span className="text-[var(--textd)] group-hover:translate-x-1 group-hover:text-[var(--cyan)] transition-all flex-shrink-0 self-center">
                <ArrowRight/>
              </span>
            </a>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-[var(--border)]"/>
              <span className="font-mono text-[.58rem] tracking-[.18em] text-[var(--textd)] whitespace-nowrap">O contactanos directamente</span>
              <div className="flex-1 h-px bg-[var(--border)]"/>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={WA_URL}
                className="inline-flex items-center gap-2 font-display font-bold text-[.9rem] tracking-[.06em] px-5 py-3 rounded-[3px] bg-[var(--wa)] text-white hover:bg-[#1DB954] transition-all hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(37,211,102,.3)]"
                aria-label="WhatsApp +598 92 420 024"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.5 14.4c-.3-.1-1.7-.9-2-.9-.3-.1-.5-.1-.7.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.6-3.8-3.3-.3-.5.3-.4.8-1.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.7.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4l-.9-.2z"/>
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:administracion@biteradigital.com"
                className="inline-flex items-center gap-2 font-display font-semibold text-[.9rem] tracking-[.06em] px-5 py-3 rounded-[3px] border border-[var(--borderh)] text-[var(--text)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all"
                aria-label="Email administracion@biteradigital.com"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* ── Columna derecha: cards de contacto ── */}
          <div className="bg-[var(--bg3)] p-8 md:p-10 flex flex-col justify-center gap-4">
            <p className="font-mono text-[.63rem] tracking-[.18em] text-[var(--textd)] uppercase mb-1">
              Canales de contacto
            </p>

            {/* WhatsApp */}
            <a
              href={WA_URL}
              className="group flex items-center gap-4 px-4 py-4 rounded-[5px] border border-[var(--borderh)] bg-[var(--bg2)] hover:border-[var(--wa)] hover:translate-x-1 hover:shadow-[inset_3px_0_0_var(--wa)] transition-all"
              aria-label="WhatsApp +598 92 420 024 — respuesta en minutos"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-[4px] bg-[rgba(37,211,102,.1)] border border-[rgba(37,211,102,.2)] text-[var(--wa)] flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.5 14.4c-.3-.1-1.7-.9-2-.9-.3-.1-.5-.1-.7.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.6-3.8-3.3-.3-.5.3-.4.8-1.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.7.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4l-.9-.2z"/>
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-[.92rem] text-white">WhatsApp Empresarial</div>
                <div className="font-mono text-[.65rem] text-[var(--textm)]">+598 92 420 024 · Respuesta en minutos</div>
              </div>
              <span className="text-[var(--textd)] group-hover:translate-x-1 group-hover:text-[var(--wa)] transition-all flex-shrink-0"><ArrowRight/></span>
            </a>

            {/* Calendario — featured */}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-4 py-4 rounded-[5px] border border-[rgba(0,200,240,.3)] bg-[linear-gradient(135deg,rgba(0,200,240,.05),var(--bg2))] hover:border-[var(--cyan)] hover:translate-x-1 hover:shadow-[inset_3px_0_0_var(--cyan)] transition-all"
              aria-label="Agendar videollamada — elegí el horario que te quede bien"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-[4px] bg-[rgba(0,200,240,.1)] border border-[rgba(0,200,240,.2)] text-[var(--cyan)] flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8"  y1="2" x2="8"  y2="6"/>
                  <line x1="3"  y1="10" x2="21" y2="10"/>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-[.92rem] text-white">Agendar Videollamada</div>
                <div className="font-mono text-[.65rem] text-[var(--textm)]">Demo 30 min · Elegí el horario que te quede bien</div>
              </div>
              <span className="text-[var(--textd)] group-hover:translate-x-1 group-hover:text-[var(--cyan)] transition-all flex-shrink-0"><ArrowRight/></span>
            </a>

            {/* Email */}
            <a
              href="mailto:administracion@biteradigital.com"
              className="group flex items-center gap-4 px-4 py-4 rounded-[5px] border border-[var(--borderh)] bg-[var(--bg2)] hover:border-[var(--gold)] hover:translate-x-1 hover:shadow-[inset_3px_0_0_var(--gold)] transition-all"
              aria-label="Email administracion@biteradigital.com"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-[4px] bg-[rgba(240,168,48,.08)] border border-[rgba(240,168,48,.15)] text-[var(--gold)] flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-[.92rem] text-white">Email Corporativo</div>
                <div className="font-mono text-[.63rem] text-[var(--textm)] truncate">administracion@biteradigital.com</div>
              </div>
              <span className="text-[var(--textd)] group-hover:translate-x-1 group-hover:text-[var(--gold)] transition-all flex-shrink-0"><ArrowRight/></span>
            </a>

            {/* Ubicación */}
            <div className="flex items-center gap-3 px-4 py-3 font-mono text-[.66rem] text-[var(--textd)] border-t border-[var(--border)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="10" r="3"/>
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/>
              </svg>
              <span>Montevideo, Uruguay · Clientes en UY, LATAM, UE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
