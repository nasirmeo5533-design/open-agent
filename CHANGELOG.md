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

## Phase 1 — Core sections (parallel subagents A–D)

- **A (Nav + Hero)**: `Nav.tsx` rewritten — "OA" hex brand + "Open Agent" wordmark → `#top`; glow-sweep links Services `#services` / About `#about` / Team `#team` / Blog `/blog` / Contact `#contact`; primary "Book a call" → `#contact`; mobile panel with aria-expanded/controls, Escape close. `Hero.tsx` rewritten — `id="top"`, eyebrow "E-COMMERCE GROWTH TEAM", poster h1 "We don't just market your store. We **automate** it." (italic orange), rotating keyword chips (AI Agents / Meta Ads / SEO / Automation / Video) via `MotionConfig reducedMotion="user"`, dual CTA (growth plan → `#contact`, services → `#services`), proof line "30 qualified sales from a PKR 1,000 ad budget."
- **B (Services)**: `ServicesHub.tsx` rewritten (still **default export**) — `id="services"`, h2 "Everything your store needs to grow. Under one roof.", hub-and-spoke radial ≥1280px (glowing AI Core hub, PulseNode, dashed ring, 6 rotated spokes) + stacked card list below; 6 services each with lucide icon, punchy h3 hook, 2–3 sentence paragraph, and 3–4 always-visible sub-service chips (no JS-only reveal): Digital Marketing, SEO, Content Creation, AI Automation, AI Agent Development, Video Editing; CTA line + "Book a call" → `#contact`.
- **C (About + Team)**: `About.tsx` rewritten — `id="about"`, pull-quote "We don't just market your store. We automate it." with orange punch words, 2 short paragraphs (six specialists / one connected system / no handoffs), 4 key-fact GlowCards (AI-integrated, Small budgets, No handoffs, Built for D2C), proof line "Karachi. Remote worldwide." with PulseNode dots. New `Team.tsx` — `id="team"`, 6 member cards (GlowCard + two-letter monogram avatar): Abeer Nasir (Founder & Growth Strategist), Sarah Ahmed (SEO & Content Lead), Hamza Malik (AI Automation Engineer), Zain Ali (AI Agent Developer), Fatima Raza (Meta Ads Specialist), Bilal Khan (Video Editor).
- **D (Contact + Footer)**: `Contact.tsx` rewritten — `id="contact"`, h2 "Booking new clients.", 5-field form (Name / Email / Store URL / Budget select / Message) with native `<label htmlFor>` (no placeholder-as-label), mailto fallback to nasirmeo5533@gmail.com with `aria-live` confirmation, availability badge, hex-cut CTABanner "Ready to automate your growth?". `Footer.tsx` rewritten — brand + tagline, Quick links / Services / Connect columns, pulsing badge, dotted top separator, "© 2026 Open Agent".
- **Verification**: all subagents ran `npm run lint` (0 warnings/errors) + `npx tsc --noEmit` (clean); orchestrator re-ran lint + `npm run build` (static prerender OK). Section ids verified present: `#top #services #about #team #contact`.

## Phase 2 — Proof sections & blog (parallel subagents E–G)

- **E (Process)**: `Process.tsx` — `id="process"`, h2 "Five steps to a store that runs itself.", dotted glowing vertical spine (radial-gradient dots + drop-shadow, `scaleY` draw-in), alternating cards ≥1280px with `PulseNode` junctions snapped to the spine, single rail + left spine on mobile, hex number badges 01–05, lucide icons per step. Steps: Audit → Plan → Build → Launch → Grow. Payoff "Five steps. One system. No guesswork." + `ButtonLink` → `#contact`.
- **F (Impact)**: `Impact.tsx` — `id="impact"`, h2 "Proof over promises.", hex-cut stat grid with hydration-safe count-up (old Metrics hook verbatim: SSR final value, `useInView` + RAF easing, reduced-motion skips to final). Stats: 30 qualified sales / PKR 1,000, 6 leads / PKR 2,000, 3+ industries automated, 8+ brands on the system. Featured "30" card with `animate-pulse-glow` (gated on reduced-motion), proof line "Fashion. Home goods. Cosmetics."
- **G (Blog + MDX routes)**:
  - `src/components/Blog.tsx` — home preview (server comp), `id="blog"`, h2 "Ideas that grow stores.", `getPosts().slice(0,3)` → `BlogCard` grid, `ButtonLink` "Read all posts" → `/blog`.
  - `src/app/blog/page.tsx` — index with metadata, header, `<BlogFilter posts={posts}/>`, includes Nav/Footer.
  - `src/components/BlogFilter.tsx` — client comp: "All" + 6 category tabs (`aria-pressed`, orange active chip), `AnimatePresence popLayout` filtering under `MotionConfig reducedMotion="user"`.
  - `src/app/blog/[slug]/page.tsx` — `generateStaticParams` from `getPosts()`, Next-14 `{ params }` shape, `notFound()` guard, `generateMetadata` (title/excerpt), `MDXRemote` (`next-mdx-remote/rsc`) with a design-system component map (h2/h3/p/ul/li/a/strong/em), category chip + Clock read-time/date, back link, `border-t border-gray-line` article.
  - Loader fixes: `src/lib/posts.ts` now accepts both `.mdx` and `.md` seed files; `BLOG_CATEGORIES` extracted to `src/lib/blog-categories.ts` (re-exported from `posts.ts`) so `fs`/`gray-matter` never enter the client bundle.
- **Verification**: lint + `tsc --noEmit` clean; `npm run build` prerenders `/`, `/blog`, and all 6 `/blog/<slug>` SSG pages.

## Phase 3 — Assembly & QA (subagent H)

- **Assembly**: `src/app/page.tsx` renders one `<main>` with every section in order — `<Nav /> → <Hero /> → <About /> → <ServicesHub /> → <Team /> → <Process /> → <Impact /> → <Blog /> → <Contact /> → <Footer />`. No new motion wrappers added; each section already animates itself (`whileInView`/stagger).
- **Export audit**: every section is a named export except `ServicesHub`, which is imported as its default (`import ServicesHub from "@/components/ServicesHub"`). Verified against `rg "^export (default )?function" src/components` — no export-name fixes required.
- **QA findings (compiled `out/index.html`)**: exactly **1 `<h1>`** (the Hero) — all other section headers are `<h2>` (**7**: About, ServicesHub, Team, Process, Impact, Blog, Contact) and cards use `<h3>` (**34**). All ids present: `#top #about #services #team #process #impact #blog #contact`. Every in-page anchor resolves (Nav: `#services #about #team #contact` + `/blog` route; Hero/CTAs: `#contact #services`).
- **Metadata**: `<title>` "Open Agent — AI-Powered Growth Team for E-Commerce" + meta description rendered in `out/index.html` (UTF-8 em-dash intact).
- **No-JS verification**: framer-motion SSR-renders initial states as inline `opacity:0;transform:translateY(24px)` (confirmed on the Hero h1). The layout `<noscript>` block `[style*="opacity"]{opacity:1!important}[style*="translateY"]{transform:none!important}` is present in the compiled HTML (rendered entity-encoded as `&quot;`) and force-visibles every inline-hidden element, including the above-the-fold Hero h1 — no extra fix needed.
- **A11y spot-check (no regressions)**: mobile menu button keeps `aria-expanded`/`aria-controls` + `aria-label`; 106 `aria-hidden="true"` on decorative/icon-only elements; native `<label htmlFor>` on Contact form fields intact.
- **Verification**: `npm run lint` — 0 warnings/errors; `npx tsc --noEmit` — clean; `npm run build` — pass. Prerendered routes: `/` (static, 145 kB first-load JS), `/_not-found`, `/blog` (static), `/blog/[slug]` (SSG × 6: `meta-ads-ai`, `seo-for-d2c`, `automate-busywork`, `ai-agents`, `content-that-converts`, `video-hooks`). Spot-checks: `/blog` and `/blog/meta-ads-ai` render Nav + Footer + post content (h2/p/ul present).
