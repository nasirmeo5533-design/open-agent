# Abeer Nasir Portfolio — Agent Guide

## Commands

```bash
npm run dev        # dev server at localhost:3000
npm run lint       # ESLint (next/core-web-vitals) — run before finishing any task
npm run build      # production build — run to catch TS/static errors
```

## Architecture

- **Next.js 14 App Router** + TypeScript + Tailwind CSS v3 + Framer Motion + lucide-react
- `src/app/page.tsx` assembles the single-page site in section order
- Each section is its own component under `src/components/` (e.g. `Hero.tsx`, `ServicesHub.tsx`)
- Shared primitives live in `src/components/ui/` — ALWAYS import these instead of hand-rolling
- `"use client"` only where motion/interactivity is needed (ui primitives already handle this)

## Design system (strict — no deviation)

Tokens in `tailwind.config.ts` + `src/app/globals.css`:

- **Colors**: `bg-primary` (#060606), `bg-elevated` (#0D0D0D), `bg-panel` (#111111),
  `orange-core` (#FF6A00), `orange-bright` (#FF8C1A), `orange-dim` (#7A3B00),
  `text-paper` (#F5F5F3 headlines), `text-gray-body` (#A3A3A3), `border-gray-line` (#262626)
- **Tailwind classes**: `bg-primary`, `bg-elevated`, `bg-panel`, `bg-orange-core`,
  `text-orange-bright`, `text-paper`, `text-gray-body`, `border-gray-line`,
  `shadow-glow`, `shadow-glow-strong`, `animate-pulse-glow`
- **Fonts**: `.font-display` = Playfair Display (headlines/serif punch),
  `font-sans` = Space Grotesk (body). Micro-labels: `.eyebrow` class (uppercase, 0.08em tracking)
- **Motifs**: `.clip-hex`/`.clip-hex-sm`/`.clip-hex-lg` (45° cut corners),
  `.bg-vignette` (radial orange glow), `.glow-sweep` (nav hover underline)
- **Glow**: `box-shadow 0 0 24px rgba(255,106,0,0.45)` via `shadow-glow`
- **Icons**: lucide-react only, thin stroke (default `strokeWidth={1.5}`), orange on hover — never filled styles

## Rules

1. Dark theme only; every interactive element needs hover + `focus-visible` states (global orange ring already applies)
2. Real content only — never placeholder/lorem text; pull from resume data
3. 8px spacing grid; responsive at 375 / 768 / 1280 / 1920px
4. Do not introduce new dependencies without approval
5. Never edit a file owned by another active subagent
