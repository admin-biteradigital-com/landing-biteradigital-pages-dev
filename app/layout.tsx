import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* ── Fuentes ─────────────────────────────────────────────── */
const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

/* ── Metadata SEO ────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://biteradigital.com"),
  title: {
    default: "Bitera Digital — Infraestructura Soberana · Zero Trust · Uruguay",
    template: "%s | Bitera Digital",
  },
  description:
    "IaaS, PaaS y SaaS con certificación multinorma ISO 27001, ISO 22301 e ISO 9001. Zero Trust nativo, soberanía digital y trazabilidad ALCOA+ para clientes corporativos en Uruguay y LATAM.",
  keywords: [
    "infraestructura soberana",
    "zero trust",
    "ISO 27001",
    "ISO 22301",
    "ciberseguridad Uruguay",
    "IaaS PaaS SaaS",
    "ALCOA+",
    "Bitera Digital",
  ],
  authors: [{ name: "Zelmar Tiago Velazquez Borges" }],
  creator: "Bitera Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://biteradigital.com",
    siteName: "Bitera Digital",
    title: "Bitera Digital — Infraestructura Soberana · Zero Trust",
    description:
      "IaaS, PaaS y SaaS con certificación multinorma ISO 27001/22301/9001. Zero Trust y soberanía digital desde Uruguay.",
    locale: "es_UY",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bitera Digital — Infraestructura Soberana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitera Digital — Infraestructura Soberana",
    description:
      "Zero Trust, soberanía digital y trazabilidad ALCOA+ desde Uruguay.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://biteradigital.com",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/og.png", sizes: "1200x630" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04090F",
};

/* ── JSON-LD Schema ──────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bitera Digital",
  url: "https://biteradigital.com",
  email: "administracion@biteradigital.com",
  description:
    "Proveedor de IaaS, PaaS y SaaS con certificación multinorma ISO 27001, ISO 22301 e ISO 9001. Zero Trust y soberanía digital desde Uruguay.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UY",
    addressLocality: "Montevideo",
  },
  founder: {
    "@type": "Person",
    name: "Zelmar Tiago Velazquez Borges",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+59892420024",
    email: "administracion@biteradigital.com",
    contactType: "sales",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO/IEC 27001:2022",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO 22301:2019",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO 9001:2015",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO/IEC 27701",
    },
  ],
};

/* ── Root Layout ─────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preconnect para Google Fonts — reduce latencia de primer byte */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Accesibilidad: skip link */}
        <a
          href="#main"
          className="
            sr-only focus:not-sr-only
            fixed top-0 left-4 z-[9000]
            bg-[var(--cyan)] text-[var(--bg)]
            px-4 py-2 font-display font-bold text-sm
            rounded-b focus:outline-none
          "
        >
          Saltar al contenido principal
        </a>

        {children}
      </body>
    </html>
  );
}
