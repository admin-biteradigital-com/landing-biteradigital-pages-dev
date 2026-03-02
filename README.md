# landing-biteradigital-pages-dev

Sitio web de Bitera Digital · Next.js 14 SSG · Cloudflare Pages

## Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Despliegue:** Cloudflare Pages (SSG estático)
- **Output:** `out/` generado por `next build` con `output: "export"`

## Desarrollo local

```bash
npm install
npm run dev       # localhost:3000
npm run build     # genera carpeta /out
npm run lint
```

## Despliegue en Cloudflare Pages

### Configuración en el dashboard de Cloudflare:

| Campo             | Valor                   |
|-------------------|-------------------------|
| Framework preset  | `Next.js (Static HTML)` |
| Build command     | `npm run build`         |
| Build output dir  | `out`                   |
| Root directory    | `/` (raíz del repo)     |
| Node.js version   | `18` (o superior)       |

### Variables de entorno requeridas

Ninguna — el sitio es completamente estático y no requiere variables de entorno en tiempo de build.

### Dominio personalizado

1. Cloudflare Pages → Settings → Custom domains
2. Agregar `biteradigital.com`
3. Cloudflare configura automáticamente el DNS en la misma cuenta
4. SSL/TLS se activa automáticamente

### Headers de seguridad

Los headers están en `public/_headers` y Cloudflare Pages los aplica
automáticamente al servir los archivos estáticos del directorio `out/`.

Targets de calificación:
- **SSL Labs:** A+
- **SecurityHeaders.com:** A+
- **Mozilla Observatory:** A+
- **PageSpeed Insights:** 100/100/100/100

## Estructura del proyecto

```
src/
  app/
    layout.tsx          ← Root layout, fuentes, metadata SEO, JSON-LD
    page.tsx            ← Página principal (compone secciones)
    globals.css         ← Tailwind + variables CSS + animaciones
    components/
      GridBackground.tsx
      Nav.tsx           ← Navegación responsive mobile-first
      Hero.tsx          ← Hero con reloj UTC, KPIs y panel de estado
      Services.tsx      ← IaaS / PaaS / SaaS
      WhyBitera.tsx     ← 4 diferenciadores
      Certifications.tsx ← Marco ISO + links de validación externa
      CTAFinal.tsx      ← CTA con WhatsApp, Calendar, Email
      Footer.tsx
public/
  _headers             ← Security headers para Cloudflare Pages
  _redirects           ← www → apex 301
  robots.txt
```

## Política mobile-first

Todos los componentes usan clases de Tailwind sin prefijo para mobile
y `sm:`, `md:`, `lg:` para pantallas más grandes. El hero se apila
verticalmente en mobile y usa grid de dos columnas en `lg:`.

## Contacto

- **WhatsApp:** +598 92 420 024
- **Email:** administracion@biteradigital.com
- **Agenda:** https://calendar.app.google/gwwRwaJ2YVrCDS9b6
