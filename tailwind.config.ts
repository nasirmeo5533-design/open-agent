import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Digital Minds-style deep navy
        navy: {
          950: "#07122C",
          900: "#0B1B3A",
          800: "#10264D",
          700: "#16326B",
          600: "#1E408C",
          500: "#2A54AD",
        },
        orange: {
          core: "#FF6A00",
          bright: "#FF8C1A",
          dim: "#7A3B00",
        },
        // light theme
        white: "#FFFFFF",
        ink: "#0F172A",
        cloud: "#F4F7FB",
        line: "#E2E8F0",
        // legacy dark-theme aliases (kept until components are rewritten)
        primary: "#060606",
        elevated: "#0D0D0D",
        panel: "#111111",
        paper: "#F5F5F3",
        gray: {
          body: "#64748B",
          line: "#E2E8F0",
        },
      },
      fontFamily: {
        // Poppins — bold modern sans (Digital Minds style), both display + body
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 24px rgba(15, 23, 42, 0.08)",
        "card-lg": "0 16px 40px rgba(15, 23, 42, 0.14)",
        btn: "0 8px 20px rgba(255, 106, 0, 0.35)",
        "btn-lg": "0 12px 28px rgba(255, 106, 0, 0.45)",
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
