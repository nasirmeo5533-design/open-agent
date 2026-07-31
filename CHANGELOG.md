# CHANGELOG

## Phase 0 — Scaffold (orchestrator)

- Removed legacy agency site (receipt/ledger design); kept git history.
- Scaffolded Next.js 14 App Router + TypeScript + Tailwind CSS 3 + Framer Motion + lucide-react.
- `tailwind.config.ts`: full brand palette (primary/elevated/panel, orange core/bright/dim, paper, gray body/line), `shadow-glow`, `animate-pulse-glow`.
- `globals.css`: `.clip-hex(-sm/-lg)` 45° cut corners, `.bg-vignette` radial glow, `.glow-sweep` nav underline, global orange `:focus-visible` ring, `.eyebrow` micro-label.
- Fonts via `next/font`: Playfair Display (display) + Space Grotesk (body). "Copy" typeface flagged as TODO — not available via next/font, Space Grotesk is the sanctioned fallback.
- Shared UI primitives: `Button/ButtonLink`, `GlowCard`, `HexCard`, `SectionWrapper`, `ConnectorLine`, `PulseNode`, `CTABanner`, `Eyebrow` in `src/components/ui/`.
- Placeholder `app/page.tsx` + full `layout.tsx` (metadata, OG, themeColor #060606).
- README with Vercel deploy instructions; AGENTS.md rewritten for new stack.

## Phase 1 — Core sections (parallel subagents A–D)

- **A (Nav + Hero)**: `Nav.tsx` (sticky, backdrop-blur, `glow-sweep` links, mobile menu with aria-expanded/aria-controls, `#top` brand anchor) and `Hero.tsx` (rotating title chips respecting `prefers-reduced-motion`, poster-style h1, radial `bg-vignette` glow, staggered mount). `page.tsx` composes Nav + Hero.
- **B (Services)**: `ServicesHub.tsx` — glowing hub-and-spoke diagram (pulsing hub node, rotating dashed ring, 6 spokes with lucide icons), radial layout at ≥1280px, stacked cards on mobile, scroll draw-in connectors.
- **C (About)**: `About.tsx` — editorial Playfair pull-quote with orange italic punch words, narrative, 3 top-skill + 3 secondary chips, proof line with pulse dots.
- **D (Contact + Footer)**: `Contact.tsx` (mailto fallback form with `aria-live` confirmation, contact details, availability badge, hex-cut `CTABanner` closer) and `Footer.tsx` (quick links, connect links, pulsing availability badge, copyright).
- A11y review: confirmed native `<label>` usage on form fields; all icon-only elements aria-labeled; section ids `#about #services #experience #resources #contact` reserved for Phase 3 assembly.

## Phase 2 — Proof sections (parallel subagents E–G)

- **E (Experience)**: `Experience.tsx` — dotted glowing vertical spine (scaleY draw-in), alternating timeline cards at ≥1280px, single-rail with left spine on mobile, `PulseNode` junction on the recent role, two glowing `HexCard` stat callouts (30 sales / PKR 1,000; 6 leads / PKR 2,000).
- **F (Resources)**: `Resources.tsx` — three hex-cut cards (2 ebooks + archive), exact bit.ly URLs, primary/outline `ButtonLink`s, muted border on the archive card, dotted `ConnectorLine` under the intro.
- **G (Metrics)**: `Metrics.tsx` — hex-cut stat grid (30 / 6 / 3+ / 8+), hydration-safe count-up via `useInView` + `useReducedMotion` (skips to final value for reduced-motion), featured card #1 with `animate-pulse-glow` + vignette.

## Phase 3 — Assembly, motion polish & QA (subagent H)

- **`src/app/page.tsx`**: assembled the full page in order — `<Nav /> → <Hero /> → <About /> → <ServicesHub /> → <Experience /> → <Resources /> → <Metrics /> → <Contact /> → <Footer />` inside a single `<main>`. `ServicesHub` is imported as its default export (it is the one component that does not use a named export). No new motion wrappers added; sections already animate themselves.
- **Motion/no-JS fix**: framer-motion SSR-renders the Hero's `initial="hidden"` (and every section's `whileInView` initial state) as inline `opacity:0` — verified in the static build (63 inline `opacity:0` styles). Added a `<noscript>` style block in `src/app/layout.tsx` that forces `opacity:1` and resets inline `translateY`, so non-JS users never see an invisible above-the-fold.
- **A11y pass**: exactly one `<h1>` (Hero) + 6 section `<h2>`s + `<h3>` inside cards confirmed in compiled HTML; native `<label htmlFor>` on all form fields; nav brand/menu button `aria-label`; mobile menu `aria-expanded`/`aria-controls`/Escape close; global orange `:focus-visible` ring untouched; `.eyebrow` (11px `text-gray-body`) used only for micro-labels/form labels — contrast #A3A3A3 on #060606 ≈ 7.3:1 passes AAA, flagged in report only.
- **CTA & anchor audit**: all targets verified live — `#top #about #services #experience #resources #metrics #contact` present in build; Nav/Hero/Footer anchors resolve; Resources bit.ly links carry `target="_blank" rel="noopener noreferrer"`; Contact mailto (`nasirmeo5533@gmail.com`) / `tel:+923703159642` / LinkedIn valid; CTABanner defaults to mailto. No dead links found.
- **Font flag**: confirmed `TODO(font)` notes in `src/app/layout.tsx` and `tailwind.config.ts` (Space Grotesk fallback for licensed "Copy" typeface) are present and accurate — left as-is per contract.
- **Verification**: `npm run lint` (0 warnings/errors) and `npm run build` (static prerender, / = 145 kB first-load JS) both pass.

# CHANGELOG — OPEN AGENT AGENCY (v2)

> New build: the repo now ships the **Open Agent agency website** — a six-person
> growth team that automates e-commerce/D2C brands with AI. The previous
> personal portfolio lives on in git history.

## Phase 0 — Agency scaffold + MDX blog pipeline (orchestrator)

- Repositioned the build: `layout.tsx` metadata/OG now describes the agency ("Open Agent — AI-Powered Growth Team for E-Commerce"), keeping the Playfair Display + Space Grotesk fonts, `TODO(font)` flag, and `#060606` themeColor.
- Removed the three portfolio-only sections (`Experience.tsx`, `Resources.tsx`, `Metrics.tsx`); `page.tsx` reduced to a temporary `<Nav /> + <Hero />` placeholder for Phase 1 subagent A to own.
- Installed MDX tooling: `next-mdx-remote@5` + `gray-matter@4`.
- `src/lib/posts.ts`: frontmatter loader with `getPosts()` (sorted newest-first, safe on missing dir) and `getPost()`; exported `BLOG_CATEGORIES` = SEO | AI | Ads | Automation | Content | Video.
- `src/components/ui/BlogCard.tsx`: reusable hex-cut post card (category eyebrow, `font-display` title, gray excerpt, `Clock` read-time chip, `glow-sweep` link).
- `src/content/posts/`: 6 seed posts (one per category, short-sentence copy rules) — `meta-ads-ai`, `seo-for-d2c`, `automate-busywork`, `ai-agents`, `content-that-converts`, `video-hooks`.
- `src/app/blog` page tree comes in Phase 2 (subagent G).
