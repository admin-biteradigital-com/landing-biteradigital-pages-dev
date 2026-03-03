"use client";

import { useEffect, useRef } from "react";

const REASONS = [
  {
    n: "01",
    title: "Zero Trust Architecture",
    desc: "Ningún acceso es implícito. La ubicación en la red no otorga privilegios. Cada identidad es verificada criptográficamente antes de cada operación. El compromiso de un segmento no es el compromiso del dato.",
    proof: "Autenticación multifactor + Kerberos V5 + LDAP en cada capa",
  },
  {
    n: "02",
    title: "Soberanía Digital Total",
    desc: "Sin identidades federadas en nubes públicas para el núcleo operativo. Claves, certificados y directorio de usuarios bajo control físico directo. Revocar un acceso toma milisegundos — no llamadas de soporte a un tercero.",
    proof: "CA interna propia · Sin dependencia de hyperscalers",
  },
  {
    n: "03",
    title: "Trazabilidad ALCOA+",
    desc: "Cada operación técnica es Atribuible, Legible, Contemporánea, Original y Exacta. Los logs de autenticación, acceso y cambio de configuración cumplen el estándar forense que exigen reguladores de salud, finanzas y gobierno.",
    proof: "Evidencia auditable en todos los niveles del stack",
  },
  {
    n: "04",
    title: "Resiliencia Documentada",
    desc: "El RTO y el RPO son resultados de simulacros bajo ISO 22301:2019 — no promesas de marketing. Backup 3-2-1-0 con copia inmutable y validación empírica de restauración. La continuidad que no puede probarse no existe.",
    proof: "RTO <4h Core · RPO <24h datos · Simulacros anuales documentados",
  },
];

export default function WhyBitera() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);

  const attachReveal = (el: Element | null, delay = 0) => {
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.disconnect(); } },
      { threshold: 0.07, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
  };

  useEffect(() => {
    attachReveal(headRef.current);
    attachReveal(leadRef.current);
    document.querySelectorAll(".why-card").forEach((el, i) => {
      setTimeout(() => attachReveal(el), i * 80);
    });
  }, []);

  return (
    <section className="py-20 md:py-24 px-5 md:px-7 bg-[var(--bg2)] relative z-[1]" id="diferenciadores" aria-labelledby="why-heading">
      <div className="max-w-[1140px] mx-auto">
        <p className="inline-flex items-center gap-2.5 font-mono text-[.65rem] tracking-[.2em] text-[var(--cyan)] uppercase mb-2.5 before:content-[''] before:w-5 before:h-px before:bg-[var(--cyan)]">
          02 — Por qué Bitera
        </p>
        <h2
          ref={headRef}
          id="why-heading"
          className="reveal font-display font-extrabold leading-[1.02] tracking-[-0.02em] text-white mb-3"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
        >
          Lo que los demás proveedores<br className="hidden sm:block" /> no pueden demostrar.
        </h2>
        <p
          ref={leadRef}
          className="reveal reveal-d1 text-[1.03rem] leading-[1.8] text-[var(--textm)] font-light max-w-[530px] mb-12"
        >
          No vendemos capacidad genérica. Vendemos control verificable, trazabilidad forense y resiliencia documentada — los tres atributos que exigen los equipos de compliance de banca, seguros y gobierno.
        </p>

        {/* Grid: 1 col mobile → 2 col md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[6px] overflow-hidden">
          {REASONS.map((r, i) => (
            <article
              key={r.n}
              className={`why-card reveal reveal-d${(i % 4) + 1 as 1|2|3|4} bg-[var(--bg2)] hover:bg-[var(--bg3)] p-8 md:p-10 flex gap-5 transition-colors`}
            >
              {/* Número decorativo — oculto en pantallas muy pequeñas */}
              <div
                className="hidden sm:block font-display font-extrabold text-[2.6rem] text-[var(--borderh)] leading-[1] flex-shrink-0 select-none transition-colors group-hover:text-[var(--cyand)]"
                aria-hidden="true"
              >
                {r.n}
              </div>
              <div>
                <h3 className="font-display font-bold text-[1.25rem] text-white tracking-[.02em] mb-2.5">{r.title}</h3>
                <p className="text-[.93rem] leading-[1.75] text-[var(--textm)] font-light mb-3">{r.desc}</p>
                <span className="font-mono text-[.63rem] text-[var(--cyan)] tracking-[.05em]">→ {r.proof}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
