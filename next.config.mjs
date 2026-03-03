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
  // Elimina X-Powered-By: Next.js (no aplica información de stack en producción)
  poweredByHeader: false,
  // React Strict Mode — detecta efectos secundarios involuntarios
  reactStrictMode: true,
};

export default nextConfig;
