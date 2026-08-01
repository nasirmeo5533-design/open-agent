# Open Agent - AI-Powered Digital Marketing Agency

Official website for **Open Agent**, an AI-powered growth team based in Karachi, Pakistan. Six specialists. One connected system. We automate marketing, content, and ads so stores grow while you sleep. Small budgets welcome.

> Live at [open-agent.agency](https://open-agent.agency)

## Tech Stack

- **HTML5** - semantic, accessible markup
- **CSS3** - vanilla CSS with design tokens (CSS variables), no frameworks
- **JavaScript** - vanilla JS for interactions, blog rendering, and sliders
- **GitHub Pages** - static deployment via GitHub Actions
- **SVG** - hand-crafted icons and portfolio visuals (no external images)

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Homepage - hero, stats, services, portfolio, testimonials, FAQ, footer |
| `blog.html` | Blog listing - all posts rendered from `js/posts.js` |
| `blog-post.html` | Blog post template - content injected dynamically |
| `contact.html` | Contact page - form and agency details |

## Sections (Homepage)

- Hero with live dashboard snapshot
- About / stats - "Leading AI-Powered Digital Marketing Agency in Pakistan"
- Services - Digital Marketing, SEO, Content Creation, AI Automation, AI Agent Development, Video Editing
- Why Us - personalized packages, customized approach, results-driven
- Impact band - proof over promises
- Clients marquee
- Testimonials slider
- Portfolio grid - real stores with real numbers
- FAQ
- Footer

## File Structure

```
├── index.html          # Homepage
├── blog.html           # Blog listing
├── blog-post.html      # Blog post template
├── contact.html        # Contact page
├── css/
│   └── style.css       # Global styles (design tokens, all sections)
├── js/
│   ├── main.js         # Interactions (nav, sliders, reveal effects)
│   └── posts.js        # Blog post data
├── assets/
│   ├── favicon.svg
│   └── images/         # Blog + portfolio SVG visuals
├── CNAME               # Custom domain (open-agent.agency)
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deploy to GitHub Pages on push to main
```

## Getting Started

1. Clone the repo:
   ```bash
   git clone git@github.com:nasirmeo5533-design/open-agent.git
   cd open-agent
   ```
2. No build step needed - just open `index.html` in a browser, or serve it:
   ```bash
   python -m http.server 8000
   # or: npx serve .
   ```

## Deployment

The site deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. The `CNAME` file points the deployment to `open-agent.agency`.

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

All content and code in this repository are the property of Open Agent. All rights reserved.
