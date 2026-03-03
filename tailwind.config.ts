import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Mobile-first: breakpoints estándar de Tailwind (sm=640, md=768, lg=1024, xl=1280)
    extend: {
      colors: {
        // Paleta Bitera Digital
        bd: {
          bg: "#04090F",
          bg2: "#060E1A",
          bg3: "#091422",
          border: "#0E2035",
          borderh: "#183355",
          cyan: "#00C8F0",
          cyand: "#0088AA",
          gold: "#F0A830",
          green: "#00D068",
          text: "#BACED8",
          textm: "#5A8090",
          textd: "#2A4858",
          wa: "#25D366",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        // Mobile-first: fluid type scale
        "fluid-xl": "clamp(2.4rem, 8vw, 5.6rem)",
        "fluid-lg": "clamp(1.8rem, 4vw, 3rem)",
        "fluid-md": "clamp(1.4rem, 2.5vw, 1.9rem)",
      },
      animation: {
        pulse: "pulse 2.2s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        blink: "blink 0.9s step-end infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(3%, 2%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
