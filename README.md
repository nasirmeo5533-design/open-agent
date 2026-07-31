# Open Agent — AI-Powered Growth Team for E-Commerce

Official website for **Open Agent** — a six-person growth team that automates
e-commerce brands with AI. Digital marketing, SEO, content, AI automation,
AI agents and video. Built with Next.js 14 (App Router) + TypeScript + Tailwind
CSS + Framer Motion + lucide-react.

Live site: https://open-agent.agency

## Stack

- **Next.js 14** App Router — fully static export (`output: "export"`)
- **Tailwind CSS 3** — design tokens live in `tailwind.config.ts` (navy/orange palette)
- **Framer Motion** — scroll-triggered reveals, dropdowns, carousel, accordion
- **lucide-react** — thin outlined icons
- **Poppins** — single font family (weights 400–800) via `next/font`
- **MDX blog** — `src/content/posts/` rendered with `next-mdx-remote/rsc`

## Commands

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint      # ESLint (next/core-web-vitals)
npm run build     # production build → static export to out/
npm start         # serve the exported build (out/) locally
```

The site is a **static export** — the whole page is prerendered into `out/` at
build time. No server or env vars needed; it runs on any static host.

## Structure

```
src/
  app/
    layout.tsx      # fonts, metadata, theme color
    page.tsx        # assembles sections in order
    globals.css     # tokens + component utilities (.btn-*, .card*, .band-*)
    blog/           # /blog index + /blog/[slug] MDX routes
  content/posts/    # blog posts (Markdown, frontmatter)
  lib/
    posts.ts        # MDX loader (fs + gray-matter)
    blog-categories.ts
  components/
    Nav.tsx         # sticky nav + Services mega-dropdown + mobile menu
    Hero.tsx        # navy band, orange headline, CSS dashboard card
    About.tsx       # Who We Are + proof numbers
    ServicesHub.tsx # 6-service grid
    WhyUs.tsx
    Impact.tsx      # navy counters (hydration-safe count-up)
    Clients.tsx     # wordmark strip
    Testimonials.tsx# carousel
    Portfolio.tsx   # real project screenshots (public/portfolio/)
    Faq.tsx         # accordion
    Blog.tsx        # latest posts preview
    Contact.tsx     # inquiry form (mailto fallback)
    Footer.tsx      # Digital Minds-style 5-column footer
```

Home page section order: Nav → Hero → About → ServicesHub → WhyUs → Impact →
Clients → Testimonials → Portfolio → Faq → Blog → Contact → Footer.

## Deploying

### GitHub Pages (automatic, free)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys
`out/` to Pages on every push to `main`. In repo Settings → Pages, set
**Source: GitHub Actions** and **Custom domain: `open-agent.agency`** (this
domain is also pinned in `public/CNAME`, which is copied into `out/`).

### Custom domain

The site serves at `https://open-agent.agency`. DNS points at GitHub: 4 `A`
records on the apex to `185.199.108.153` / `185.199.109.153` /
`185.199.110.153` / `185.199.111.153`, plus a `CNAME` for `www` →
`nasirmeo5533-design.github.io`. `metadataBase` in `src/app/layout.tsx` is set
to the custom domain.

## Content

All copy is hardcoded in `src/components/`. Contact email lives in
`Contact.tsx` / `Footer.tsx`. Portfolio images live in `public/portfolio/`.
Blog posts live in `src/content/posts/`.
