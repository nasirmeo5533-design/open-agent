# OpenAgent — open-agent.agency

Official website for **OpenAgent**, a digital marketing studio specialising in **real estate and interior design**, run by **Abeer Nasir** (Karachi, Pakistan — working with clients worldwide).

> Live at [open-agent.agency](https://open-agent.agency) — hosted on **GitHub Pages** (auto-deploys on push to `main`).

## What's inside

- **HTML5 / CSS3 / JavaScript** — vanilla, no frameworks, no build step
- **GitHub Pages** — static deployment from `main` (`CNAME` = open-agent.agency, `.nojekyll` included)

### Active pages

| Page | Stylesheet |
|---|---|
| `index.html` (homepage) | `assets/css/home.css` |
| `about.html` | `assets/css/about.css` |
| `services.html` + 6 pages in `services/` | `assets/css/services.css` |
| `portfolio.html` | `assets/css/portfolio.css` |
| `contact.html` | `assets/css/contact.css` |
| `blogs.html` + 14 articles in `blog/` | `assets/css/blogs.css` |
| `404.html`, `privacy.html`, `terms.html` | `assets/css/style.css` (v2) |
| `industries.html`, `faq.html`, legacy `blog.html` | legacy orange theme |

All active pages share `assets/css/style.css` + `assets/js/main.js`, with a page-specific scoped stylesheet loaded after it. Tool logos for the homepage "Tools I Work With" section live at the repo root as `.webp` files. Blog imagery (Unsplash, free license) lives in `assets/images/blog/`; niche photos in `assets/images/niche/`; portfolio screenshots in `assets/images/portfolio/`.

## Getting started

```bash
git clone https://github.com/nasirmeo5533-design/open-agent.git
cd open-agent
python -m http.server 8080
```

No build step needed — just serve the static files.

## Conventions

- Pages under `services/` and `blog/` prefix every root-relative link and asset with `../`.
- Scoped CSS files and `main.js` carry `?v=YYYYMMDD` cache-busting params — bump them on every page that loads a file you change.
- Shared markup (header, offcanvas menu, footer, WhatsApp float) is copy-pasted on every page — replicate nav/footer changes across all pages.

## Deployment

Push to `main` → GitHub Pages auto-deploys (built-in "Deploy from a branch", no custom workflow). The `CNAME` file points to `open-agent.agency`. The `.nojekyll` file prevents Jekyll processing.

## Contact

- WhatsApp: [+92 370 3159642](https://wa.me/923703159642)
- Email: hello@open-agent.agency

## License

All content and code in this repository are the property of OpenAgent. All rights reserved.
