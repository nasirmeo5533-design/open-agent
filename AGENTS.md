# AGENTS.md

**OpenAgent** — Premium B2B lead generation agency website (open-agent.agency).

## Architecture

- **Pure static HTML/CSS/JS** — no build step, no package.json, no framework
- Deployed via GitHub Actions to **GitHub Pages** (CNAME = open-agent.agency)
- Remote: `https://github.com/nasirmeo5533-design/open-agent.git` (HTTPS)
- Two coexisting site structures from a git merge — **do not delete Structure B**

## Commands

- No build, test, lint, or install step
- Local preview: `python -m http.server 8080` or any static server
- Deploy: push to `main` → GitHub Actions → GitHub Pages

## Design System

- **Theme:** Dark `#0A0A0A` with neon orange `#FF6B00` accent
- **Typography:** Poppins (headings 600-700), DM Sans (body 400-500), JetBrains Mono (labels)
- **Colors:** `--color-bg: #0A0A0A`, `--color-surface: #1A1A1A`, `--color-text: #FFFFFF`, `--color-text-secondary: #A0A0A0`, `--color-primary: #FF6B00`
- **Buttons:** Rounded `var(--r)` (12px), orange primary, ghost variant
- **Layout:** Full-width sections, boxed content via `.wrap` (max-width 1180px)
- **Responsive:** Mobile-first breakpoints at 560px, 768px, 900px

## File Structure (Structure A — active)

```
index.html          — Homepage (hero, trust, problem, services, industries, process, portfolio, why-us, pricing, FAQ, contact)
services.html       — 8 services detail page
industries.html     — 5 industry verticals
work.html           — Portfolio + case studies
pricing.html        — 3 pricing tiers
about.html          — Founder story + expertise
contact.html        — Form + WhatsApp
blog.html           — Blog listing (links to blog/*.html)
privacy.html        — Privacy policy
terms.html          — Terms of service
404.html            — Custom 404
assets/css/style.css — Complete CSS (~800 lines)
assets/js/main.js   — Vanilla JS (~200 lines)
assets/images/      — All images (portfolio, industries, OG, favicons, founder)
blog/*.html         — 12 static blog posts
```

## SEO

- GA4: `G-MYQHFB4QNL`
- Canonical: `https://open-agent.agency/`
- JSON-LD: Organization (every page), BreadcrumbList (inner pages), FAQPage, Service
- sitemap.xml lists only Structure A URLs
- robots.txt blocks Structure B pages (avoids duplicate content)

## Key Configuration

- **WhatsApp:** `+92 370 3159642` (configurable in main.js `SITE.whatsapp`)
- **Email:** `abeerinfo5566@gmail.com`
- **Social:** X (@Abeergrowth), Facebook, Instagram, LinkedIn
- **Favicons:** `assets/images/branding/favicons/`
- **OG images:** `assets/images/og/`

## Structure B (DO NOT TOUCH)

Folder-based pages (`about/`, `services/`, `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog/index.html`, `blog-post.html`, `blog-post/`) with separate CSS/JS (`css/style.css`, `js/main.js`, `js/posts.js`). Left untouched from the remote merge. Block crawlers via robots.txt.

## Don't Touch

- `google3cef563566032184.html` — Google site verification
- `versions/` — archived builds (gitignored)
- `CNAME` — custom domain config
- `.github/workflows/deploy.yml` — GitHub Pages deploy
- Structure B files and assets

## Target Audience

B2B project-based businesses:
1. Commercial Fit-Out & Design-Build
2. Healthcare / Clinic Fit-Out
3. Luxury Villa Interior / Design-Build
4. Hospitality Fit-Out
5. Commercial Landscaping

Markets: UAE, Saudi Arabia, Pakistan, USA, Canada

## Skills (`.opencode/skills/`)

- ~60 skills available (design, marketing, CRO, SEO, copywriting)
- `web-asset-generator` needs Python venv: `.opencode/skills/web-asset-generator/.venv\Scripts\python.exe`
- Set `$env:PYTHONIOENCODING='utf-8'` before running Python scripts on Windows
