"""Build OpenAgent service pages from tools/services_data.py.

Run from the repo root:  python tools/build_services.py

It (1) writes services/<slug>.html for every service, (2) writes noindex
redirect stubs for old service URLs, (3) refreshes the services list in the
desktop dropdown, mobile menu and footer of every active page, and
(4) rewrites the service URLs in sitemap.xml.
"""
import glob
import html
import json
import os
from datetime import date
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))
from services_data import SERVICES, REDIRECTS, GENERIC_WHY, IMAGES  # noqa: E402

SITE = "https://open-agent.agency"
WA = "https://wa.me/923703159642"
TOOLS = [("meta.webp", "Meta"), ("google-ads.webp", "Google Ads"), ("google-analytics.webp", "Google Analytics"),
         ("search-console.webp", "Google Search Console"), ("semrush.webp", "SEMrush"), ("chatgpt.webp", "ChatGPT"),
         ("claude.webp", "Claude"), ("gemini.webp", "Google Gemini"), ("n8n.webp", "n8n"), ("zapier.webp", "Zapier")]
CSS_VER = "20261128e"
PORTFOLIO_SLUGS = {"meta-ads", "social-media-marketing"}
READING = {
    "meta-ads": [("Meta Ads vs Google Ads: How to Choose for Your Business", "meta-vs-google-ads.html")],
    "google-ads": [("Meta Ads vs Google Ads: How to Choose for Your Business", "meta-vs-google-ads.html")],
    "social-media-marketing": [("How Often Should a Business Post on Social Media?", "social-media-posting-frequency.html")],
}
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def esc(t):
    return html.escape(t, quote=True)


def text(t):
    """Escape plain text for HTML body (keeps & as &amp;)."""
    return html.escape(t, quote=False)


def strip_tags(t):
    return html.unescape(re.sub(r"<[^>]+>", "", t))


def svc_links(prefix, icons=False):
    out = []
    for s in SERVICES:
        ic = f'<i class="{s["icon"]}" aria-hidden="true"></i> ' if icons else ""
        out.append(f'<a href="{prefix}{s["slug"]}.html">{ic}{text(s["nav"])}</a>')
    return "".join(out)


def footer_items(prefix):
    return "".join(f'<li><a href="{prefix}{s["slug"]}.html">{text(s["nav"])}</a></li>' for s in SERVICES)


def prefix_for(page):
    # 404.html is served for missing URLs at any depth, so it must use root-absolute links
    if os.path.basename(page) == "404.html":
        return "/services/"
    d = os.path.dirname(page).replace("\\", "/")
    if d == "services":
        return ""
    if d:
        return "../services/"
    return "services/"


def refresh_lists(src, prefix):
    src = re.sub(r'<div class="dropdown[^"]*">.*?</div>',
                 lambda m: f'<div class="dropdown dropdown--mega">{svc_links(prefix, icons=True)}</div>', src, count=1, flags=re.S)
    src = re.sub(r'<div class="oc-sub">.*?</div>',
                 lambda m: f'<div class="oc-sub">{svc_links(prefix)}</div>', src, count=1, flags=re.S)
    src = re.sub(r'(<h[34][^>]*>Services</h[34]>\s*<ul[^>]*>).*?(</ul>)',
                 lambda m: m.group(1) + footer_items(prefix) + m.group(2), src, count=1, flags=re.S)
    return src


def media(icon, label, extra="", slug=None):
    # Photo from IMAGES when there is one; otherwise an icon placeholder.
    img = IMAGES.get(slug, {}).get(label) if slug else None
    if img:
        load = 'loading="eager" fetchpriority="high"' if label == "hero" else 'loading="lazy"'
        pos = f' style="object-position:{img["pos"]}"' if img.get("pos") else ""
        return (f'<figure class="sv-media sv-media--photo {extra}" data-img-slot="{esc(label)}">'
                f'<img src="../assets/images/services/{slug}-{label}.webp" alt="{esc(img["alt"])}" '
                f'width="{img["w"]}" height="{img["h"]}"{pos} {load} decoding="async"></figure>')
    return (f'<figure class="sv-media {extra}" data-img-slot="{esc(label)}">'
            f'<i class="{icon}" aria-hidden="true"></i></figure>')


def page(s):
    slug, name = s["slug"], s["name"]
    url = f"{SITE}/services/{slug}.html"
    og_img = f"{SITE}/assets/images/og/services/{slug}.jpg"
    why = [(ic, t, d.format(short=s["short"])) for ic, t, d in GENERIC_WHY]
    # Only services the portfolio actually shows results for link to it.
    if s["slug"] in PORTFOLIO_SLUGS:
        second_cta = '<a href="../portfolio.html" class="btn btn-ghost btn-lg">See My Work</a>'
    else:
        second_cta = '<a href="#faq" class="btn btn-ghost btn-lg">Read the FAQ</a>'
    # Articles that answer questions buyers of this service ask (internal links both ways).
    reading = ""
    if READING.get(slug):
        links = " ".join(f'<a href="../blog/{u}">{text(t)}</a>' for t, u in READING[slug])
        reading = f'    <p class="sv-reading"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Related reading: {links}</p>\n'
    faq_ld = {"@context": "https://schema.org", "@type": "FAQPage",
              "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in s["faq"]]}
    svc_ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Organization", "@id": f"{SITE}/#organization", "name": "OpenAgent", "url": f"{SITE}/",
         "logo": f"{SITE}/assets/images/branding/favicons/android-chrome-192x192.png"},
        {"@type": "Service", "name": name, "serviceType": name, "url": url, "provider": {"@id": f"{SITE}/#organization"},
         "areaServed": [{"@type": "Country", "name": "United States"}, {"@type": "Country", "name": "United Kingdom"}, {"@type": "Country", "name": "Canada"}, {"@type": "Country", "name": "Australia"}, {"@type": "Place", "name": "Europe"}], "description": s["desc"]}]}
    bc_ld = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE}/"},
        {"@type": "ListItem", "position": 2, "name": "Services", "item": f"{SITE}/services.html"},
        {"@type": "ListItem", "position": 3, "name": name}]}
    ld = lambda o: '<script type="application/ld+json">' + json.dumps(o, ensure_ascii=False, separators=(",", ":")) + "</script>"
    wa_msg = f"{WA}?text=" + re.sub(r"[^A-Za-z0-9]", lambda m: "%%%02X" % ord(m.group()), f"Hi Abeer, I want to discuss {name}.")
    title = esc(s["title"])
    desc = esc(s["desc"])

    head = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title><meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website"><meta property="og:url" content="{url}"><meta property="og:title" content="{title}"><meta property="og:description" content="{desc}"><meta property="og:image" content="{og_img}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:site_name" content="OpenAgent"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{title}"><meta name="twitter:description" content="{desc}"><meta name="twitter:image" content="{og_img}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"></noscript><link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></noscript>
<link rel="stylesheet" href="../assets/css/style.css?v={CSS_VER}"><link rel="stylesheet" href="../assets/css/monochrome.css?v={CSS_VER}"><link rel="stylesheet" href="../assets/css/services.css?v={CSS_VER}">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MYQHFB4QNL"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){{dataLayer.push(arguments)}}gtag('consent','default',{{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500,region:['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH']}});try{{if(localStorage.getItem('oa-consent')==='granted')gtag('consent','update',{{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'}})}}catch(e){{}}gtag('js',new Date());gtag('config','G-MYQHFB4QNL')</script>
{ld(svc_ld)}
{ld(faq_ld)}
{ld(bc_ld)}
<link rel="icon" type="image/png" sizes="32x32" href="../assets/images/branding/favicons/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="../assets/images/branding/favicons/apple-touch-icon.png">
<link rel="stylesheet" href="../assets/css/theme.css?v={CSS_VER}">
</head>
"""
    issues = "".join(f'<li><i class="fa-solid fa-circle-check" aria-hidden="true"></i>{text(i)}</li>' for i in s["issues"])
    core = "".join(f'<li><h3>{text(t)}</h3><p>{text(d)}</p></li>' for t, d in s["core"])
    inds = "".join(f'<li class="sv-tl-item"><span class="sv-tl-num">{n}</span><div class="sv-tl-card">{text(i)}</div></li>'
                   for n, i in enumerate(s["industries"], 1))
    whys = "".join(f'<article class="sv-why-card rv" data-delay="{n % 4}"><span class="sv-why-ic"><i class="fa-solid {ic}" aria-hidden="true"></i></span><h3>{text(t)}</h3><p>{text(d)}</p></article>'
                   for n, (ic, t, d) in enumerate(why))
    faqs = "".join(f'<div class="faq-item{" open" if n == 0 else ""}"><button class="faq-q" type="button"><span>{text(q)}</span><span class="chev"><i class="fa-solid fa-chevron-down"></i></span></button><div class="faq-a"><p>{text(a)}</p></div></div>'
                   for n, (q, a) in enumerate(s["faq"]))
    logos = "".join(f'<img src="../{f}" alt="{esc(a)}" width="148" height="148" loading="lazy">' for f, a in TOOLS)
    others = [o for o in SERVICES if o["slug"] != slug][:6]
    more = "".join(f'<a class="sv-more-card" href="{o["slug"]}.html"><i class="{o["icon"]}" aria-hidden="true"></i><span>{text(o["nav"])}</span><i class="fa-solid fa-arrow-right sv-more-arrow" aria-hidden="true"></i></a>' for o in others)

    main = f"""<main id="main-content" class="sv-page">
<section class="sv-hero">
  <div class="wrap sv-hero-grid">
    <div class="sv-hero-copy">
      <a class="breadcrumb" href="../services.html"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> All Services</a>
      <h1>{s["h1"]}</h1>
      <p class="sv-kicker">{text(s["kicker"])}</p>
      <p class="lede">{text(s["lede"])}</p>
      <div class="sv-actions">
        <a href="../contact.html" class="btn btn-primary btn-lg">Contact Now</a>
        {second_cta}
        <a href="{wa_msg}" class="btn sv-btn-wa btn-lg" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp Me</a>
      </div>
      <ul class="sv-trust">
        <li><i class="fa-solid fa-check" aria-hidden="true"></i> Direct with Abeer Nasir</li>
        <li><i class="fa-solid fa-check" aria-hidden="true"></i> Written scope first</li>
        <li><i class="fa-solid fa-check" aria-hidden="true"></i> Global clients</li>
      </ul>
    </div>
    {media(s["icon"], "hero", "sv-media--hero", slug)}
  </div>
</section>

<section class="sv-logos" aria-label="Tools I work with">
  <div class="wrap"><div class="sv-logos-row">{logos}</div></div>
</section>

<section class="section sv-problem">
  <div class="wrap sv-problem-grid">
    <div class="rv">
      <h2>{text(s["problem_h"])}</h2>
      <p class="sv-sub">{text(s["problem_sub"])}</p>
      <p>{text(s["problem_p"])}</p>
      <a href="../contact.html" class="btn btn-primary">Book a Free Strategy Call</a>
      <h3 class="sv-issues-h">Common Issues I Fix:</h3>
      <ul class="sv-issues">{issues}</ul>
    </div>
    <div class="sv-promise-wrap rv" data-delay="1">
      {media(s["icon"], "problem", "", slug)}
      <div class="sv-promise"><h3>My Promise:</h3><p>{text(s["promise"])}</p></div>
    </div>
  </div>
</section>

<section class="sv-core">
  <div class="wrap sv-core-grid">
    <div class="rv">
      {media(s["icon"], "core", "sv-media--wide", slug)}
      <h2>{text(s["core_h"])}</h2>
      <p>{text(s["core_p"])}</p>
    </div>
    <div class="sv-core-box rv" data-delay="1">
      <h2 class="sv-core-title">What's Included:</h2>
      <ul class="sv-core-list">{core}</ul>
    </div>
  </div>
</section>

<section class="section tint sv-industries">
  <div class="wrap sv-ind-grid">
    <div class="sv-ind-copy rv">
      <h2>Industries I Work With</h2>
      <p>Whether you're just starting or ready to scale, {text(s["short"])} is planned around your niche, your audience and your goals.</p>
      <a href="../contact.html" class="btn btn-primary">Contact Now</a>
    </div>
    <ol class="sv-tl rv" data-delay="1">{inds}</ol>
  </div>
</section>

<section class="section sv-why">
  <div class="wrap">
    <div class="section-head rv"><h2>Why OpenAgent?</h2><p>What working with me on {text(s["short"])} looks like.</p></div>
    <div class="sv-why-grid">{whys}</div>
  </div>
</section>

<section class="sv-cta">
  <div class="wrap sv-cta-inner rv">
    <h2>Ready to Grow With {text(name)}?</h2>
    <p>Tell me what you sell and what you want to improve. I'll reply with a practical first step and a written scope.</p>
    <div class="sv-actions sv-actions--center">
      <a href="../contact.html" class="btn btn-primary btn-lg">Get a Free Plan</a>
      <a href="{wa_msg}" class="btn sv-btn-wa btn-lg" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp Me</a>
    </div>
  </div>
</section>

<section class="section tint" id="faq">
  <div class="wrap narrow">
    <div class="section-head rv"><h2>Frequently Asked Questions</h2></div>
    <div class="faq-wrap">{faqs}</div>
{reading}  </div>
</section>

<section class="section sv-more">
  <div class="wrap">
    <div class="section-head rv"><h2>More Services</h2></div>
    <div class="sv-more-grid">{more}</div>
    <p class="sv-more-all"><a class="link-arrow" href="../services.html">View all services <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></p>
  </div>
</section>
</main>
"""
    top = open(os.path.join(ROOT, "tools", "service-shell-top.html"), encoding="utf-8").read()
    bottom = open(os.path.join(ROOT, "tools", "service-shell-bottom.html"), encoding="utf-8").read()
    doc = head + top + main + bottom
    return refresh_lists(doc, "")


def stub(target):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="robots" content="noindex, follow">
<title>Page moved | OpenAgent</title>
<link rel="canonical" href="{SITE}/services/{target}.html">
<meta http-equiv="refresh" content="0; url=../services/{target}.html">
<link rel="icon" type="image/png" sizes="32x32" href="../assets/images/branding/favicons/favicon-32x32.png">
</head>
<body>
<p>This page has moved. <a href="../services/{target}.html">Continue to the new page</a>.</p>
<script>location.replace('../services/{target}.html');</script>
</body>
</html>
"""


def write(path, content):
    with open(os.path.join(ROOT, path), "w", encoding="utf-8", newline="") as f:
        f.write(content)


def main_text(html):
    # The part that is about this page: <main> without shared nav/footer markup.
    m = re.search(r"<main\b.*?</main>", html, re.S)
    return re.sub(r"\s+", " ", m.group(0) if m else html)


def main():
    os.chdir(ROOT)
    slugs = {s["slug"] for s in SERVICES}
    sm_old = open("sitemap.xml", encoding="utf-8").read()
    lastmod = {}
    for s in SERVICES:
        path = f"services/{s['slug']}.html"
        html = page(s)
        old = open(path, encoding="utf-8").read() if os.path.exists(path) else ""
        prev = re.search(rf"<loc>{re.escape(SITE)}/services/{s['slug']}\.html</loc><lastmod>([^<]+)</lastmod>", sm_old)
        # Keep the old date unless what the page says changed (nav/footer edits don't count).
        lastmod[s["slug"]] = prev.group(1) if prev and old and main_text(old) == main_text(html) else date.today().isoformat()
        write(path, html)
    for old, new in REDIRECTS.items():
        assert old not in slugs and new in slugs, (old, new)
        write(f"services/{old}.html", stub(new))

    # refresh nav/footer lists on every other active page
    pages = glob.glob("*.html") + glob.glob("blog/*.html")
    for p in pages:
        src = open(p, encoding="utf-8", newline="").read()
        if "http-equiv=\"refresh\"" in src or "<body" not in src:
            continue
        new = refresh_lists(src, prefix_for(p))
        if new != src:
            write(p, new)

    # sitemap: replace all service detail URLs
    sm = open("sitemap.xml", encoding="utf-8", newline="").read()
    sm = re.sub(r"\s*<url><loc>https://open-agent\.agency/services/[^<]+</loc>.*?</url>", "", sm)
    entries = "".join(f'\n  <url><loc>{SITE}/services/{s["slug"]}.html</loc><lastmod>{lastmod[s['slug']]}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>' for s in SERVICES)
    sm = sm.replace(f"<url><loc>{SITE}/services.html</loc>", "<url><loc>" + SITE + "/services.html</loc>", 1)
    i = sm.index("</url>", sm.index(f"{SITE}/services.html")) + len("</url>")
    sm = sm[:i] + entries + sm[i:]
    write("sitemap.xml", sm)
    print(f"built {len(SERVICES)} service pages, {len(REDIRECTS)} redirects")


if __name__ == "__main__":
    main()
