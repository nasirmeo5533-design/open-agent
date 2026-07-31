# Abeer Nasir — Portfolio

Personal portfolio for **Abeer Nasir** — Generative AI Specialist | AI Agent
Developer | Digital Marketing Specialist | Meta Ads. Built with Next.js 14
(App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react.

## Stack

- **Next.js 14** App Router (static server components; client islands only for motion/animation)
- **Tailwind CSS 3** — design tokens live in `tailwind.config.ts`
- **Framer Motion** — scroll-triggered fade/rise, connector draw-in, hub spokes
- **lucide-react** — thin outlined icons (stroke-only, orange on hover)
- **Fonts** — Playfair Display (display/serif) + Space Grotesk (body; `Copy` fallback per contract, flagged with TODO)

## Commands

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint      # ESLint (next/core-web-vitals)
npm run build     # production build → static export to out/
npm start         # serve the exported build (out/) locally
```

The site is a **static export** (`output: "export"` in `next.config.mjs`) — the
whole page is prerendered into `out/` at build time. No server or env vars
needed; it runs on any static host.

## Structure

```
src/
  app/
    layout.tsx      # fonts, metadata, theme color
    page.tsx        # assembles sections in order
    globals.css     # tokens, clip-path utilities, glow-sweep, focus rings
  components/
    ui/             # shared primitives (Button, GlowCard, HexCard, SectionWrapper,
                    # ConnectorLine, PulseNode, CTABanner, Eyebrow)
    Nav.tsx         # sticky nav + mobile menu
    Hero.tsx        # hero statement + rotating title chips
    About.tsx       # editorial pull-quote summary
    ServicesHub.tsx # hub-and-spoke diagram
    Experience.tsx  # dotted-glow timeline + stat callouts
    Resources.tsx   # ebook + portfolio cards
    Metrics.tsx     # hex-cut stat-card grid
    Contact.tsx     # contact form (mailto fallback)
    Footer.tsx      # footer + availability badge
```

## Deploying to Vercel

1. Push this repo to GitHub, then import it at https://vercel.com/new
2. Vercel auto-detects Next.js — framework preset `Next.js`, build `npm run build`
3. No environment variables required (fully static data)
4. Set the production domain (e.g. `open-agent.agency`) in Project → Settings → Domains
5. Push to `main` to auto-deploy; previews are created for every PR

## Deploying to Netlify

`netlify.toml` is already configured (build `npm run build`, publish `out/`).

**Via the Netlify UI (recommended):**
1. Push this repo to GitHub, then go to https://app.netlify.com → **Add new site → Import an existing project → GitHub**
2. Select the `open-agent` repo — Netlify reads `netlify.toml` automatically (Build command `npm run build`, Publish directory `out`)
3. Click **Deploy site**. Done — every `git push` auto-deploys.

**Via Netlify CLI:**
```bash
npm i -g netlify-cli
netlify login            # opens browser to authenticate
netlify init             # or: netlify link --name <site-name>
netlify deploy --prod    # build + publish out/ to production
```

Custom domain notes: `metadataBase` in `src/app/layout.tsx` is set to
`https://open-agent.agency` — update it if you deploy elsewhere.

## Content

All copy is hardcoded in `src/components/`. Update contact details
(email, phone, WhatsApp, LinkedIn) in `Contact.tsx` / `Footer.tsx` /
`Hero.tsx` as needed. The free ebooks link to their existing short URLs.
