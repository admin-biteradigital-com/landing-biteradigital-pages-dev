#!/usr/bin/env node
// generate-og.mjs — Genera public/og.png desde un SVG inline usando sharp
// Ejecutar con: node generate-og.mjs
// Requiere: npm install sharp (ya en devDependencies)

import sharp from "sharp";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face { font-family: 'sans'; src: local('system-ui'); }
    </style>
    <linearGradient id="gridGrad" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="#00C8F0" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#00C8F0" stop-opacity="0.01"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00C8F0" stroke-width="0.5" opacity="0.12"/>
    </pattern>
    <radialGradient id="glow" cx="30%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#00C8F0" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#04090F" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#04090F"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="4" height="630" fill="#00C8F0" opacity="0.6"/>

  <!-- Logo mark (B icon) -->
  <g transform="translate(80, 200) scale(4.2)">
    <rect x=".5" y=".5" width="29" height="29" rx="3" fill="#060E1A" stroke="#183355" stroke-width="0.8"/>
    <path d="M7 23V7h5.5c3 0 5 1.6 5 4.2 0 1.6-.85 2.8-2.1 3.5 1.85.65 2.85 2.05 2.85 3.95C18.25 21.5 16.2 23 13 23H7z" fill="none" stroke="#00C8F0" stroke-width="1.4"/>
    <path d="M10 13.5h2.5c1.3 0 2.1-.65 2.1-1.75S13.8 10 12.5 10H10v3.5z" fill="rgba(0,200,240,0.25)"/>
    <path d="M10 20.5h3c1.5 0 2.35-.75 2.35-2S14.5 16.5 13 16.5H10v4z" fill="rgba(0,200,240,0.25)"/>
    <circle cx="22" cy="9" r="1.8" fill="#00C8F0" opacity=".5"/>
  </g>

  <!-- Brand name -->
  <text x="228" y="255" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="800" font-size="72" fill="white" letter-spacing="4">BITERA</text>
  <text x="554" y="255" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="800" font-size="72" fill="#00C8F0">.</text>
  <text x="574" y="255" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="800" font-size="72" fill="white" letter-spacing="4">DIGITAL</text>

  <!-- Divider -->
  <rect x="228" y="278" width="680" height="1" fill="#183355"/>

  <!-- Tagline -->
  <text x="228" y="320" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="300" font-size="26" fill="#5A8090" letter-spacing="2">Infraestructura Soberana · Zero Trust · Uruguay</text>

  <!-- Description -->
  <text x="228" y="372" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="400" font-size="20" fill="#3A6070">IaaS · PaaS · SaaS para empresas que no pueden permitirse una brecha</text>

  <!-- KPI badges -->
  <g transform="translate(228, 420)">
    <!-- 99.9% SLA -->
    <rect width="130" height="54" rx="3" fill="#060E1A" stroke="#183355" stroke-width="1"/>
    <text x="16" y="22" font-family="monospace" font-size="9" fill="#2A4858" letter-spacing="2">SLA UPTIME</text>
    <text x="16" y="42" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="20" fill="#00C8F0">99.9%</text>

    <!-- SSL A+ -->
    <rect x="142" width="110" height="54" rx="3" fill="#060E1A" stroke="#183355" stroke-width="1"/>
    <text x="158" y="22" font-family="monospace" font-size="9" fill="#2A4858" letter-spacing="2">SSL RATING</text>
    <text x="158" y="42" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="20" fill="#00C8F0">A+</text>

    <!-- 4 ISO -->
    <rect x="264" width="110" height="54" rx="3" fill="#060E1A" stroke="#183355" stroke-width="1"/>
    <text x="280" y="22" font-family="monospace" font-size="9" fill="#2A4858" letter-spacing="2">NORMAS ISO</text>
    <text x="280" y="42" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="20" fill="#00C8F0">4</text>

    <!-- RTO -->
    <rect x="386" width="120" height="54" rx="3" fill="#060E1A" stroke="#183355" stroke-width="1"/>
    <text x="402" y="22" font-family="monospace" font-size="9" fill="#2A4858" letter-spacing="2">RTO CORE</text>
    <text x="402" y="42" font-family="'Helvetica Neue', Arial, sans-serif" font-weight="700" font-size="20" fill="#00C8F0">&lt;4h</text>
  </g>

  <!-- ISO badges bottom -->
  <text x="228" y="515" font-family="monospace" font-size="12" fill="#183355" letter-spacing="3">ISO 27001 · ISO 22301 · ISO 9001 · ISO 27701 · GDPR · Ley 18.331</text>

  <!-- Bottom accent -->
  <rect x="0" y="626" width="1200" height="4" fill="#00C8F0" opacity="0.3"/>
  <rect x="0" y="626" width="400" height="4" fill="#00C8F0" opacity="0.6"/>
</svg>`;

const outputPath = join(__dirname, "public", "og.png");

await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 9 })
    .resize(1200, 630)
    .toFile(outputPath);

console.log("✅ og.png generado en public/og.png (1200×630)");
