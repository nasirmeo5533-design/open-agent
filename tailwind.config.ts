import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // bg-primary
        primary: "#060606",
        // bg-elevated
        elevated: "#0D0D0D",
        // bg-panel
        panel: "#111111",
        orange: {
          core: "#FF6A00",
          bright: "#FF8C1A",
          dim: "#7A3B00",
        },
        // white (headline text)
        paper: "#F5F5F3",
        gray: {
          body: "#A3A3A3",
          line: "#262626",
        },
      },
      fontFamily: {
        // Playfair Display (serif) — hero statements + section titles
        display: ["var(--font-display)", "Georgia", "serif"],
        // TODO(font): brand typeface "Copy" is a licensed condensed grotesk;
        // Space Grotesk is the sanctioned free fallback per design contract.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(255,106,0,0.45)",
        "glow-strong": "0 0 32px rgba(255,106,0,0.6)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 12px rgba(255,106,0,0.25)" },
          "50%": { boxShadow: "0 0 28px rgba(255,106,0,0.55)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
