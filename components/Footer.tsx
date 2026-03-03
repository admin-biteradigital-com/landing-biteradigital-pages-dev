const YEAR = new Date().getFullYear();

const LINKS = [
  { label: "Servicios",       href: "#servicios"       },
  { label: "Por qué Bitera",  href: "#diferenciadores" },
  { label: "ISO",             href: "#certificaciones" },
  { label: "Contacto",        href: "#contacto"        },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] py-9 px-5 md:px-7 relative z-[1]"
      role="contentinfo"
    >
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-5 flex-wrap">

        {/* Brand */}
        <div className="font-display font-extrabold text-[1rem] tracking-[.06em] text-white">
          BITERA<span className="text-[var(--cyan)]">.</span>DIGITAL
        </div>

        {/* Meta */}
        <p className="font-mono text-[.6rem] tracking-[.08em] text-[var(--textd)] text-center leading-[1.7]">
          © {YEAR} Bitera Digital · Zelmar Tiago Velazquez Borges · Montevideo, Uruguay<br />
          ISO 27001 · ISO 22301 · ISO 9001 · ISO 27701 · GDPR · Ley 18.331
        </p>

        {/* Nav */}
        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-4" role="list">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono text-[.62rem] tracking-[.06em] text-[var(--textd)] hover:text-[var(--cyan)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </footer>
  );
}
