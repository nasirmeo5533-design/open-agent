# Abeer Nasir — Portfolio

Personal portfolio for **Abeer Nasir** — Generative AI Specialist | AI Agent
Developer | Digital Marketing Specialist | Meta Ads (Karachi, Pakistan).

## Stack

- **Next.js 14** App Router + TypeScript (static export to `out/`)
- **Tailwind CSS 3** — design tokens in `tailwind.config.ts`
- **Framer Motion** — scroll-triggered animations, connector draw-in, hub spokes
- **lucide-react** — thin outlined icons
- **Fonts** — Playfair Display (display/serif) + Space Grotesk (body, `Copy` fallback per brand contract)

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint      # ESLint (next/core-web-vitals)
npm run build     # static export → out/
npm start         # serve out/ locally
```

## Sections

Nav → Hero → About → Services (hub-and-spoke) → Experience (glowing timeline)
→ Resources (free ebooks + archive) → Metrics (stat cards) → Contact (mailto
form) → Footer (availability badge).

## Deploy

- **Live site:** https://abeer-nasir-portfolio.netlify.app
- **GitHub:** https://github.com/nasirmeo5533-design/open-agent (branch `main`)
- **Netlify:** `netlify.toml` configured (build `npm run build`, publish `out/`)
- **Vercel:** import the repo at https://vercel.com/new — auto-detects Next.js

Full details: see `README.md` in this repo.
