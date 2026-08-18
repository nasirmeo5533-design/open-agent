# AGENTS.md

Marketing agency site (open-agent.agency) — **pure static HTML/CSS/JS, no build step.**

## Commands

- No build, test, lint, or install step. No root `package.json`.
- Local preview: `python -m http.server 8080` (or any static server). The system Python is uv-managed; if `pip install` fails with "externally managed", use a venv/uv instead.
- Deploy: push to `main`. Remote is **HTTPS** (`https://github.com/nasirmeo5533-design/open-agent.git`) — SSH key auth is not set up. GitHub Actions deploys to GitHub Pages (`CNAME` = open-agent.agency). Live host confirmed as GitHub Pages, **not** Vercel.

## Git history

- `main` is a **merge of two unrelated histories** (`git merge --allow-unrelated-histories`). Old commits from the remote share no ancestor with local commits; don't expect a clean linear log.
- The remote's GitHub Pages setup (`.github/workflows/deploy.yml`, `CNAME`) is now the deploy path. `vercel.json` redirects only apply if served from Vercel — they are inert on GitHub Pages; keep the file but don't rely on the redirects.

## Two coexisting site structures (IMPORTANT)

The merge left **two parallel, fully-working site versions** in the repo. Both are live on GitHub Pages. Do not "clean up" one by deleting it — the user decided to keep both as-is.

**Structure A — flat pages (primary / actively edited):**
- Root `*.html`: `index.html`, `about.html`, `services.html`, `pricing.html`, `portfolio.html`, `case-studies.html`, `faq.html`, `blog.html`, `contact.html`, `privacy.html`, `terms.html`, `refund.html`, `slides.html`.
- `blog/*.html` — static posts (linked from `blog.html`).
- Assets: `assets/css/style.css`, `assets/js/main.js`, `assets/images/...`.
- `sitemap.xml` lists ONLY these flat URLs.

**Structure B — folder pages (remote import, left untouched):**
- `about/`, `services/` (with 7 sub-pages), `pricing/`, `contact/`, `faq/`, `terms/`, `privacy/`, `blog/index.html`, `blog-post.html`, `blog-post/`.
- Root `css/style.css`, `js/main.js`, `js/posts.js` (a *different* style system).
- `404.html`, `llms.txt`, `llms-full.txt`, `site.webmanifest`, root favicon files, `assets/logo.png`, `assets/images/abeer.jpg`, `assets/images/portfolio-N.png`, `assets/images/blog-*.svg`.

Nothing in Structure A links to Structure B — they are independent. When editing, be sure you're touching the file for the structure you intend (e.g. `blog.html` vs `blog/index.html`).

## Blog duality

- **Flat blog**: `blog.html` → static cards → `blog/*.html` posts. This is the one to extend.
- **Dynamic blog**: `blog/index.html` + `blog-post.html` render content from `js/posts.js` (~11 posts not present as flat files). Keep it functional; don't assume a post exists in both systems.

## Page structure (when adding to Structure A)

Each `.html` is fully self-contained and must copy the existing pattern:

- GA4 gtag (`G-MYQHFB4QNL`) + Google Fonts preconnect/link in `<head>`
- `<link rel="stylesheet" href="assets/css/style.css">` (prefix `../` inside `blog/`)
- `.topbar` header nav + `.footer`
- `<script src="assets/js/main.js">` at end of body (prefix `../` inside `blog/`)
- Favicons reference `assets/images/branding/favicons/*` (not root favicon files, which belong to Structure B)
- The AI chatbot embed (`https://personal-agent-nine-iota.vercel.app/embed.js`) exists **only on `index.html`** — don't assume it's on every page.

## Asset paths

- Current paths are `assets/css/style.css`, `assets/js/main.js`, `assets/images/...`.
- Never reference legacy paths (`/assets/style.css`, `/images/...`) in new code.

## When adding a page

1. Add the HTML file in Structure A (copy the pattern above; correct relative paths).
2. Add its URL to `sitemap.xml` (base `https://open-agent.agency/`; keep `robots.txt` pointing at it).
3. For a blog post: add `blog/<slug>.html`, add the card to `blog.html`, and add a `sitemap.xml` entry. (Optionally mirror it into `js/posts.js` for the dynamic blog — not required.)

## Design system

- **Theme:** Dark — `--bg:#0B0A09`, `--surface:#1C1917`, `--text:#F5F3F0`
- **Primary:** Blue `#2563EB` (accent `#60A5FA`)
- **Fonts:** Inter (display + body), JetBrains Mono (labels/eyebrows)
- **Buttons:** Rounded `var(--r)` (12px), not pill-radius
- **Layout:** Full-width sections, boxed content via `.wrap` (max-width 1180px)
- Hero uses Unsplash stock images (set in `assets/js/main.js` `slides` array)

## Don't touch

- `google3cef563566032184.html` — Google site-verification file.
- `versions/` — archived alternate builds (Next.js, skill-spark); not the live site.
- Structure B folder pages and their assets — the user chose to keep the parallel structure.

## Skills (`.opencode/skills/`)

- ~59 skills available (design/branding, marketing/CRO/SEO/copywriting, `web-asset-generator`, `agent-reach`). Newly installed skills only load after restarting the opencode session.
- `web-asset-generator` scripts need Python deps — use its dedicated venv: `.opencode/skills/web-asset-generator/.venv\Scripts\python.exe`. Do not `pip install` into the uv-managed system Python.
- Those scripts crash on the Windows cp1252 console — set `$env:PYTHONIOENCODING='utf-8'` before running. When writing files via PowerShell, use UTF-8 with no BOM (`[System.IO.File]::WriteAllText(path, text, (New-Object System.Text.UTF8Encoding $false))`) to avoid mojibake.
