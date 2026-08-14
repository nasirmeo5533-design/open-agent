# AGENTS.md

Marketing agency site (open-agent.agency) — **pure static HTML/CSS/JS, no build step.**

## Commands

- No build, test, lint, or install step. No root `package.json`.
- Local preview: `python -m http.server 8080` (or any static server). The system Python is uv-managed; if `pip install` fails with "externally managed", use a venv/uv instead.
- Deploy: push to `main` (remote `git@github.com:nasirmeo5533-design/open-agent.git`); the site serves from Vercel.

## Page structure (every page)

Each `.html` is fully self-contained and must copy the existing pattern:

- GA4 gtag (`G-MYQHFB4QNL`) + Google Fonts preconnect/link in `<head>`
- `<link rel="stylesheet" href="assets/css/style.css">` (prefix `../` inside `blog/`)
- `.topbar` header nav + `.footer`
- `<script src="assets/js/main.js">` at end of body (prefix `../` inside `blog/`)
- The AI chatbot embed (`https://personal-agent-nine-iota.vercel.app/embed.js`) exists **only on `index.html`** — don't assume it's on every page.

## Asset paths

- Current paths are `assets/css/style.css`, `assets/js/main.js`, `assets/images/...`.
- Legacy paths (`/assets/style.css`, `/images/...`) are kept alive via redirects in `vercel.json`. Keep those redirects; never reference legacy paths in new code.

## When adding a page

1. Add the HTML file (copy the pattern above; correct relative paths).
2. Add its URL to `sitemap.xml` (base `https://open-agent.agency/`; keep `robots.txt` pointing at it).
3. For a blog post: add the card to `blog.html` and a `sitemap.xml` entry.

## Don't touch

- `google3cef563566032184.html` — Google site-verification file.
- `versions/` — archived alternate builds (Next.js, skill-spark); not the live site. Live source of truth is the root `*.html` + `blog/`.

## Skills (`.opencode/skills/`)

- ~59 skills available (design/branding, marketing/CRO/SEO/copywriting, `web-asset-generator`, `agent-reach`). Newly installed skills only load after restarting the opencode session.
- `web-asset-generator` scripts need Python deps — use its dedicated venv: `.opencode/skills/web-asset-generator/.venv\Scripts\python.exe`. Do not `pip install` into the uv-managed system Python.
