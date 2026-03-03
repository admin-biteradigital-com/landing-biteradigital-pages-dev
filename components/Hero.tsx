"use client";

import { useEffect, useRef, useState } from "react";

const WA_URL  = "https://wa.me/59892420024";
const CAL_URL = "https://calendar.app.google/gwwRwaJ2YVrCDS9b6";

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-.9-.3-.1-.5-.1-.7.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.6-3.8-3.3-.3-.5.3-.4.8-1.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.7.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4l-.9-.2z"/>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function CalIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8"  y1="2" x2="8"  y2="6"/>
      <line x1="3"  y1="10" x2="21" y2="10"/>
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round" strokeWidth="2"/>
    </svg>
  );
}

const STATUS_LINES = [
  { key: "identity-layer", val: "Zero Trust",    ok: "ACTIVE"    },
  { key: "ssl-grade",      val: "Qualys A+",     ok: "ENFORCED"  },
  { key: "tls-version",    val: "1.3",            ok: "ONLY"      },
  { key: "csp-headers",    val: "strict",         ok: "SET"       },
  { key: "hsts-preload",   val: "63072000s",      ok: "READY"     },
  { key: "backup-3210",    val: "LUKS/WORM",      ok: "VERIFIED"  },
  { key: "iso-coverage",   val: "27001+22301",    ok: "ACTIVE"    },
];

const KPIS = [
  { n: "99.9%", l: "SLA Uptime"  },
  { n: "A+",    l: "SSL Rating"  },
  { n: "4",     l: "Normas ISO"  },
  { n: "<4h",   l: "RTO Core"    },
];

export default function Hero() {
  const [time, setTime] = useState("--:--:--");
  const panelRef = useRef<HTMLDivElement>(null);

  /* Reloj UTC */
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(
        [n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds()]
          .map((v) => String(v).padStart(2, "0"))
          .join(":")
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* Reveal observer */
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="relative z-[1] min-h-[100svh] flex items-center pt-[72px] pb-14 px-5 md:px-7 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute rounded-full" style={{
          width: "min(900px,120vw)", aspectRatio: "1",
          top: "-30%", left: "-15%",
          background: "radial-gradient(ellipse, rgba(0,200,240,.05) 0%, transparent 65%)",
          animation: "drift 14s ease-in-out infinite",
        }}/>
        <div className="absolute rounded-full" style={{
          width: "min(600px,80vw)", aspectRatio: "1",
          bottom: "-20%", right: "-10%",
          background: "radial-gradient(ellipse, rgba(0,100,200,.04) 0%, transparent 65%)",
          animation: "drift 18s ease-in-out infinite reverse",
        }}/>
      </div>

      <div className="max-w-[1140px] mx-auto w-full relative z-[2]">
        {/* Mobile: apilado · LG: dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center">

          {/* ── Columna izquierda ── */}
          <div>
            {/* Badge UTC */}
            <div className="inline-flex items-center gap-2 border border-[var(--borderh)] rounded-[2px] px-3 py-1.5 mb-6 font-mono text-[.67rem] tracking-[.16em] text-[var(--textm)]">
              <span className="pulse-dot" aria-hidden="true" />
              SISTEMA ACTIVO ·{" "}
              <time aria-live="polite" aria-label={`Hora UTC: ${time}`}>{time}</time> UTC
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="font-display font-extrabold leading-[.92] tracking-[-0.02em] text-white mb-5"
              style={{ fontSize: "clamp(2.8rem, 8vw, 5.6rem)" }}
            >
              Tu dato.<br />
              Tu control.<br />
              <span className="text-gradient-cyan">Sin excepciones.</span>
            </h1>

            <p className="text-[1.05rem] leading-[1.8] text-[var(--textm)] font-light max-w-[500px] mb-8">
              Infraestructura IaaS, PaaS y SaaS para empresas que{" "}
              <strong className="text-[var(--text)] font-medium">no pueden permitirse una brecha</strong>.
              Zero Trust nativo, cifrado en reposo y trazabilidad ALCOA+ certificada bajo marco multinorma ISO.
            </p>

            {/* KPIs */}
            <dl className="flex flex-wrap gap-5 mb-10" aria-label="Indicadores clave de Bitera Digital">
              {KPIS.map((k) => (
                <div key={k.l} className="border-l-2 border-[var(--cyand)] pl-3">
                  <dt className="font-mono text-[.6rem] tracking-[.12em] text-[var(--textd)] uppercase">{k.l}</dt>
                  <dd className="font-display font-extrabold text-[1.7rem] text-[var(--cyan)] leading-tight">{k.n}</dd>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_URL}
                className="inline-flex items-center gap-2.5 font-display font-bold text-[.95rem] tracking-[.06em] px-5 py-3.5 rounded-[3px] bg-[var(--wa)] text-white hover:bg-[#1DB954] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,.35)]"
                aria-label="Contactar por WhatsApp +598 92 420 024"
              >
                <WaIcon />
                Hablar ahora
              </a>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display font-semibold text-[.92rem] tracking-[.06em] px-5 py-3.5 rounded-[3px] border border-[var(--borderh)] text-[var(--text)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:bg-[rgba(0,200,240,.06)] transition-all"
                aria-label="Agendar videollamada de 30 minutos"
              >
                <CalIcon />
                Agendar demo
              </a>
            </div>
          </div>

          {/* ── Panel de estado (derecha / abajo en mobile) ── */}
          <div
            ref={panelRef}
            className="reveal border border-[var(--borderh)] rounded-[6px] bg-[var(--bg2)] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,.6)]"
          >
            {/* Barra del panel */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[var(--bg3)] border-b border-[var(--border)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true"/>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true"/>
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" aria-hidden="true"/>
              <span className="flex-1 text-center font-mono text-[.65rem] tracking-[.1em] text-[var(--textd)]">
                bitera-status --health
              </span>
            </div>

            {/* Líneas de status */}
            <div className="px-5 py-4 font-mono text-[.77rem] leading-[2]" aria-label="Estado operativo del sistema">
              <div className="text-[var(--cyand)]">$ bitera-status --health</div>
              {STATUS_LINES.map((l) => (
                <div key={l.key} className="flex gap-1.5 flex-wrap">
                  <span className="text-[var(--textd)] select-none">·</span>
                  <span className="text-[var(--textm)] min-w-[100px]">{l.key}</span>
                  <span className="text-[var(--cyan)]">{l.val}</span>
                  <span className="text-[var(--green)]">✓ {l.ok}</span>
                </div>
              ))}
              <div className="blink text-[var(--cyand)]" aria-hidden="true" />
            </div>

            {/* CTAs compactos del panel */}
            <div className="border-t border-[var(--border)] px-4 py-4 flex flex-col gap-2.5">
              {/* WhatsApp */}
              <a
                href={WA_URL}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-[3px] border border-[var(--borderh)] hover:border-[var(--wa)] hover:bg-[rgba(37,211,102,.06)] transition-all group"
                aria-label="WhatsApp +598 92 420 024"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-[3px] bg-[rgba(37,211,102,.1)] border border-[rgba(37,211,102,.2)] text-[var(--wa)] flex-shrink-0">
                  <WaIcon size={15}/>
                </span>
                <span className="flex flex-col font-mono leading-tight">
                  <strong className="text-[.75rem] text-white font-medium">WhatsApp</strong>
                  <span className="text-[.63rem] text-[var(--textm)]">+598 92 420 024</span>
                </span>
                <span className="ml-auto text-[var(--textd)] group-hover:translate-x-1 group-hover:text-[var(--cyan)] transition-all" aria-hidden="true">→</span>
              </a>

              {/* Calendario */}
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-[3px] border border-[rgba(0,200,240,.25)] bg-[rgba(0,200,240,.04)] hover:border-[var(--cyan)] hover:bg-[rgba(0,200,240,.08)] transition-all group"
                aria-label="Agendar videollamada"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-[3px] bg-[rgba(0,200,240,.1)] border border-[rgba(0,200,240,.2)] text-[var(--cyan)] flex-shrink-0">
                  <CalIcon size={15}/>
                </span>
                <span className="flex flex-col font-mono leading-tight">
                  <strong className="text-[.75rem] text-white font-medium">Agendar demo</strong>
                  <span className="text-[.63rem] text-[var(--textm)]">Elegí el horario que te quede bien</span>
                </span>
                <span className="ml-auto text-[var(--textd)] group-hover:translate-x-1 group-hover:text-[var(--cyan)] transition-all" aria-hidden="true">→</span>
              </a>

              {/* Email */}
              <a
                href="mailto:administracion@biteradigital.com"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-[3px] border border-[var(--borderh)] hover:border-[var(--gold)] hover:bg-[rgba(240,168,48,.06)] transition-all group"
                aria-label="Email administracion@biteradigital.com"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-[3px] bg-[rgba(240,168,48,.08)] border border-[rgba(240,168,48,.15)] text-[var(--gold)] flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span className="flex flex-col font-mono leading-tight min-w-0">
                  <strong className="text-[.75rem] text-white font-medium">Email</strong>
                  <span className="text-[.6rem] text-[var(--textm)] truncate">administracion@biteradigital.com</span>
                </span>
                <span className="ml-auto text-[var(--textd)] group-hover:translate-x-1 group-hover:text-[var(--gold)] transition-all flex-shrink-0" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
