// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSG estático — genera carpeta /out lista para Cloudflare Pages
  output: "export",
  // Trailing slash para compatibilidad con Cloudflare Pages routing
  trailingSlash: true,
  // Sin optimización de imágenes de servidor (SSG puro)
  images: {
    unoptimized: true,
  },
  // Headers de seguridad — se complementan con public/_headers
  // (en SSG export los headers de next.config no se aplican en runtime,
  // Cloudflare Pages los lee desde public/_headers)
};

export default nextConfig;
