# OpenAgent — open-agent.agency

Website for **OpenAgent**, a digital marketing service for U.S. businesses run by Abeer Nasir.
Static HTML, CSS and vanilla JavaScript, deployed with GitHub Pages.

## Quick start

```bash
python -m http.server 8080
```

Open <http://localhost:8080>. There is no install or build step for the site itself.

## Pages

| Path | What it is |
|---|---|
| `index.html` | Homepage |
| `about.html` | About Abeer Nasir |
| `services.html` | Overview of all 12 services |
| `services/<slug>.html` | 12 service pages (generated, see below) |
| `portfolio.html` | Real campaign screenshots |
| `blogs.html`, `blog/*.html` | Insights listing and 2 articles |
| `contact.html` | Contact page with a WhatsApp hand-off form |
| `404.html`, `privacy.html`, `terms.html` | Error and legal pages |

Nine old service URLs in `services/` (for example `performance-marketing.html`) are tiny
`noindex` redirect pages so links from Google and other sites keep working. Keep them.

## Styling

Every page loads a page stylesheet plus `assets/css/theme.css` **last**. `theme.css` holds the
purple `#2E0061` / yellow `#F3C90D` design system and overrides the older layers.

| Page | Stylesheets (in load order) |
|---|---|
| `index.html` | `tokens.css`, `base.css`, `home.css`, `theme.css` |
| `about.html` | `style.css`, `monochrome.css`, `about.css`, `theme.css` |
| `services.html`, `services/*.html` | `style.css`, `monochrome.css`, `services.css`, `theme.css` |
| `portfolio.html` | `style.css`, `monochrome.css`, `portfolio.css`, `theme.css` |
| `contact.html` | `style.css`, `monochrome.css`, `contact.css`, `theme.css` |
| `blogs.html`, `blog/*.html` | `style.css`, `monochrome.css`, `blogs.css`, `theme.css` |
| `404.html`, `privacy.html`, `terms.html` | `style.css`, `monochrome.css`, `mono.css`, `theme.css` |

All pages share `assets/js/main.js` (menu, dropdown, FAQ, reveal-on-scroll, WhatsApp form hand-off).

## Editing the service pages

The 12 service pages, the services lists in every menu and footer, the redirect pages and the
service URLs in `sitemap.xml` are generated:

1. Edit the copy in `tools/services_data.py`.
2. Run `python tools/build_services.py` from the repo root.

Do not edit `services/<slug>.html` by hand; the next build overwrites it.

### Photos

Each service page has three photos, `assets/images/services/<slug>-{hero,problem,core}.webp`.
The hero photo is also the thumbnail on the service cards (home, about, services). The current
photos are stock photos from [Unsplash](https://unsplash.com/license) (free for commercial use,
no attribution required). To use your own photo, save it under the same name (WebP, about
1200px wide), update its `alt`, `w` and `h` in `IMAGES` in `tools/services_data.py`, and rebuild.

Link previews (Facebook, LinkedIn, X, WhatsApp) use a 1200x630 JPEG per page in
`assets/images/og/services/` and `assets/images/og/blog/`; regenerate it when you replace a hero photo.
The builder only moves a service page's `<lastmod>` in `sitemap.xml` when the page's `<main>`
content changes; for hand-edited pages, update `<lastmod>` yourself when the content changes.

## Cache busting

CSS and JS links carry `?v=YYYYMMDD`. After changing a stylesheet or `main.js`, bump its version
on every page that loads it (and `CSS_VER` in `tools/build_services.py` for `theme.css`).

## Deployment

Push to `main`. GitHub Pages publishes the repo root to `open-agent.agency` (`CNAME`).
`.nojekyll` must stay. Everything committed is public, so never commit drafts, backups or secrets.

## Contact

- WhatsApp: [+92 370 3159642](https://wa.me/923703159642)
- Email: [abeerinfo5566@gmail.com](mailto:abeerinfo5566@gmail.com)
