"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  {
    num: "01 / IAAS",
    title: "Infraestructura\ncomo Servicio",
    desc: "Hardware dedicado, redes que sólo hablan lo que se les permite. Tu carga de trabajo corre en servidores que controlamos físicamente — aislada de cualquier otro cliente, sin compartir nada.",
    tags: ["Zero Trust VLANs", "IDS/IPS activo", "Cifrado LUKS", "SLA 99.9%"],
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <rect x="4" y="11" width="36" height="9" rx="2" />
        <rect x="4" y="24" width="36" height="9" rx="2" />
        <circle cx="34" cy="15.5" r="2" fill="currentColor" stroke="none" />
        <circle cx="34" cy="28.5" r="2" fill="currentColor" stroke="none" />
        <line x1="11" y1="15.5" x2="20" y2="15.5" />
        <line x1="11" y1="28.5" x2="20" y2="28.5" />
      </svg>
    ),
  },
  {
    num: "02 / PAAS",
    title: "Plataforma\ncomo Servicio",
    desc: "Ambientes PROD/STG/DEV completamente aislados. Despliegué contenedores con Kubernetes, pipelines CI/CD auditables y un solo punto de identidad para todos tus servicios.",
    tags: ["K3s Kubernetes", "Kerberos SSO", "LDAP unificado", "DevSecOps"],
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <polygon points="22,3 40,13 40,33 22,43 4,33 4,13" />
        <circle cx="22" cy="23" r="6" />
        <line x1="22" y1="3" x2="22" y2="17" />
        <line x1="22" y1="29" x2="22" y2="43" />
        <line x1="40" y1="13" x2="28" y2="20" />
        <line x1="16" y1="26" x2="4" y2="33" />
        <line x1="40" y1="33" x2="28" y2="26" />
        <line x1="16" y1="20" x2="4" y2="13" />
      </svg>
    ),
  },
  {
    num: "03 / SAAS",
    title: "Software\ncomo Servicio",
    desc: "Aplicaciones empresariales con acceso único, multitenant estricto y datos de cada cliente segregados criptográficamente. Ni en una recuperación de emergencia se mezclan.",
    tags: ["SSO Kerberos", "Multitenant", "GDPR", "Ley 18.331"],
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <rect x="6" y="6" width="32" height="32" rx="4" />
        <line x1="6" y1="18" x2="38" y2="18" />
        <line x1="18" y1="18" x2="18" y2="38" />
        <circle cx="30" cy="30" r="5" fill="rgba(0,200,240,.12)" />
        <path d="M28 30l1.5 1.5L33 28" strokeLinecap="round" />
      </svg>
    ),
  },
];

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}

function ServiceCard({ svc, delay }: { svc: typeof SERVICES[0]; delay: number }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`reveal reveal-d${delay} border-gradient-top bg-[var(--bg2)] hover:bg-[var(--bg3)] p-8 md:p-10 transition-colors`}
    >
      <div className="font-mono text-[.62rem] tracking-[.16em] text-[var(--textd)] mb-5">{svc.num}</div>
      <div className="w-11 h-11 text-[var(--cyan)] mb-4">{svc.icon}</div>
      <h3 className="font-display font-bold text-[1.45rem] tracking-[.02em] text-white mb-3 whitespace-pre-line">
        {svc.title}
      </h3>
      <p className="text-[.93rem] leading-[1.75] text-[var(--text)] font-light mb-5">{svc.desc}</p>
      <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
        {svc.tags.map((t) => (
          <li key={t} className="font-mono text-[.6rem] px-2 py-0.5 rounded-[2px] border border-[var(--borderh)] text-[var(--textd)] tracking-[.07em]">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  useReveal(headRef);
  useReveal(leadRef);

  return (
    <section className="py-20 md:py-24 px-5 md:px-7 relative z-[1]" id="servicios" aria-labelledby="svc-heading">
      <div className="max-w-[1140px] mx-auto">
        <p className="inline-flex items-center gap-2.5 font-mono text-[.65rem] tracking-[.2em] text-[var(--cyan)] uppercase mb-2.5 before:content-[''] before:w-5 before:h-px before:bg-[var(--cyan)]">
          01 — Servicios
        </p>
        <h2
          ref={headRef}
          id="svc-heading"
          className="reveal font-display font-extrabold leading-[1] tracking-[-0.02em] text-white mb-3"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
        >
          Control en cada capa.
        </h2>
        <p
          ref={leadRef}
          className="reveal reveal-d1 text-[1.03rem] leading-[1.8] text-[var(--textm)] font-light max-w-[520px] mb-12"
        >
          Tres modelos, una misma base: redes Zero Trust, identidad centralizada y trazabilidad auditable en cada capa. Elegís el alcance; nosotros garantizamos el control.
        </p>

        {/* Grid: 1 col mobile → 3 col lg */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[6px] overflow-hidden">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.num} svc={svc} delay={(i + 1) as 1 | 2 | 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
