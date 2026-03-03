"use client";

import { useEffect, useRef } from "react";

const CERTS = [
  {
    name: "ISO/IEC 27001:2022",
    scope: "SGSI · Seguridad de la Información · Gestión de riesgos y 93 controles del Anexo A",
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M13 2L3 6v7.5c0 5.1 4 9.9 10 11.5 6-1.6 10-6.4 10-11.5V6L13 2z"/>
        <path d="M9 13l3 3 5-5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "ISO 22301:2019",
    scope: "BCMS · Continuidad del Negocio · RTO/RPO medidos y simulacros anuales validados",
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="13" cy="13" r="10"/>
        <path d="M13 7v6l4 2"/>
      </svg>
    ),
  },
  {
    name: "ISO 9001:2015",
    scope: "SGC · Calidad de Servicio · Satisfacción del cliente y mejora continua documentada",
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <rect x="3" y="3" width="20" height="20" rx="3"/>
        <circle cx="13" cy="10" r="3"/>
        <path d="M7 22c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
      </svg>
    ),
  },
  {
    name: "ISO/IEC 27701",
    scope: "PIMS · Privacidad · GDPR + Ley 18.331 Uruguay · Gestión de datos personales PII",
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="13" cy="13" r="10"/>
        <circle cx="13" cy="13" r="4"/>
        <line x1="13" y1="3"  x2="13" y2="9"/>
        <line x1="13" y1="17" x2="13" y2="23"/>
        <line x1="3"  y1="13" x2="9"  y2="13"/>
        <line x1="17" y1="13" x2="23" y2="13"/>
      </svg>
    ),
  },
];

const SEC_TESTS = [
  { label: "SSL Labs A+",           href: "https://www.ssllabs.com/ssltest/analyze.html?d=biteradigital.com",              desc: "TLS, HSTS, cipher suites" },
  { label: "SecurityHeaders A+",    href: "https://securityheaders.com/?q=biteradigital.com",                              desc: "9 HTTP security headers" },
  { label: "Mozilla Observatory A+",href: "https://observatory.mozilla.org/analyze/biteradigital.com",                    desc: "CSP, HSTS, cookies, XFO" },
  { label: "HSTS Preload",          href: "https://hstspreload.org/?domain=biteradigital.com",                             desc: "Navegadores preloaded" },
  { label: "CSP Evaluator",         href: "https://csp-evaluator.withgoogle.com/",                                        desc: "Google CSP strictness" },
  { label: "PageSpeed 100",         href: "https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fbiteradigital.com",       desc: "Core Web Vitals + Lighthouse" },
];

export default function Certifications() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    [headRef.current, leadRef.current].forEach((el) => {
      if (!el) return;
      const io = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.disconnect(); } },
        { threshold: 0.08 }
      );
      io.observe(el);
    });
    document.querySelectorAll(".cert-card").forEach((el) => {
      const io = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.disconnect(); } },
        { threshold: 0.06 }
      );
      io.observe(el);
    });
  }, []);

  return (
    <section className="py-20 md:py-24 px-5 md:px-7 relative z-[1]" id="certificaciones" aria-labelledby="cert-heading">
      <div className="max-w-[1140px] mx-auto">
        <p className="inline-flex items-center gap-2.5 font-mono text-[.65rem] tracking-[.2em] text-[var(--cyan)] uppercase mb-2.5 before:content-[''] before:w-5 before:h-px before:bg-[var(--cyan)]">
          03 — Marco normativo
        </p>
        <h2
          ref={headRef}
          id="cert-heading"
          className="reveal font-display font-extrabold leading-[1.02] tracking-[-0.02em] text-white mb-3"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
        >
          Cuatro normas ISO.<br className="hidden sm:block" /> Un solo sistema integrado.
        </h2>
        <p
          ref={leadRef}
          className="reveal reveal-d1 text-[1.03rem] leading-[1.8] text-[var(--textm)] font-light max-w-[520px] mb-12"
        >
          Implementadas bajo la Estructura de Alto Nivel (HLS) de ISO para eliminar duplicidades. Cada decisión técnica está respaldada por un control normativo documentado.
        </p>

        {/* Certs: 1 col mobile → 2 col sm → 4 col lg */}
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[6px] overflow-hidden mb-6">
          {CERTS.map((c, i) => (
            <div
              key={c.name}
              className={`cert-card reveal reveal-d${(i + 1) as 1|2|3|4} bg-[var(--bg2)] hover:bg-[var(--bg3)] px-6 py-8 text-center transition-colors flex flex-col items-center`}
            >
              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center border-2 border-[var(--gold)] bg-[rgba(240,168,48,.06)] text-[var(--gold)] mb-4 flex-shrink-0">
                {c.icon}
              </div>
              <dt className="font-display font-bold text-[.93rem] text-white tracking-[.02em] mb-1.5">{c.name}</dt>
              <dd className="font-mono text-[.62rem] text-[var(--textd)] tracking-[.07em] leading-[1.6]">{c.scope}</dd>
            </div>
          ))}
        </dl>

        {/* Panel de validación externa */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 border border-[var(--borderh)] rounded-[4px] px-5 md:px-7 py-5 bg-[var(--bg3)]" role="complementary" aria-label="Herramientas de validación de seguridad externa">
          <span className="font-mono text-[.62rem] tracking-[.16em] text-[var(--textd)] uppercase whitespace-nowrap">
            VALIDACIÓN EXTERNA
          </span>
          <div className="flex flex-wrap gap-2">
            {SEC_TESTS.map((t) => (
              <a
                key={t.label}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[.64rem] tracking-[.07em] px-3 py-1.5 rounded-[3px] border border-[var(--borderh)] text-[var(--textm)] hover:border-[var(--green)] hover:text-[var(--green)] hover:bg-[rgba(0,208,104,.06)] transition-all"
                aria-label={`${t.label} — ${t.desc}`}
                title={t.desc}
              >
                <span className="w-[5px] h-[5px] rounded-full bg-[var(--green)] flex-shrink-0" aria-hidden="true"/>
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
