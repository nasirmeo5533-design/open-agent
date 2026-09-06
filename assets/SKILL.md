---
name: openagent-seo-blog-writer
description: Use this skill whenever the task involves writing a blog post, article, or any long-form content for open-agent.agency. Triggers include any mention of "blog likhna", "article", "SEO content", "post for website", "keyword ke liye likhna", or any topic related to real estate marketing, interior design marketing, AI automation, Meta ads, Google ads, or digital marketing for property/design niches. Also triggers when the user says "schedule a post", "daily blog", or "content calendar". This skill runs a complete loop: keyword selection → human-first article writing → on-page SEO → visual sourcing → publishing checklist → next article suggestion. The agent must follow every step in order and must ask the user for any information it cannot find or generate itself.
---

# OpenAgent SEO + GEO Blog Writing System

Complete content production skill for **open-agent.agency** — a boutique digital marketing agency run by Abeer Nasir, Karachi, targeting real estate agents, property developers, interior designers, and fit-out companies in Pakistan and the GCC.

**Primary goal:** Rank on Google within 30–60 days. Get cited by AI engines (ChatGPT, Gemini, Perplexity, Claude). Drive inbound client inquiries through organic search — zero paid budget on content.

---

## Agency Profile (Fixed — never ask again)

- **Website:** open-agent.agency
- **Owner:** Abeer Nasir, Karachi, Pakistan
- **Niches served:** Real estate, interior design, fit-out / contracting
- **Services:** AI agent development, AI automation, Meta & Google Ads, SEO, full-stack web development, video editing
- **Target markets:** Pakistan (Karachi, DHA, Bahria Town, Lahore) + GCC (Dubai, Abu Dhabi, UAE)
- **USP:** Solo operator, direct communication, no empty promises, practical AI-powered solutions
- **Tone:** Professional, honest, practical, no hype — sounds like a smart specialist, not a salesperson
- **Blog publish path:** GitHub Pages (open-agent.agency) — static HTML or Markdown files

---

## Step 0 — Before Writing Anything: Gather Requirements

Some information the agent CANNOT generate on its own. Before starting Step 1, check the conversation for these. If any are missing, ask the user in a single message (combine all questions together — do not ask one at a time):

**Ask the user if not already provided:**

1. **Topic or keyword idea** — Does the user have a topic in mind, or should the agent pick from the master keyword list below?
2. **Target audience for this post** — Real estate agent? Property developer? Interior designer? Fit-out company? (Affects tone and examples)
3. **Target market** — Pakistan only, UAE only, or both?
4. **Any personal story or case study to include?** — A real result (e.g., "got 55 leads for a client at Rs25 each") makes the article unique and impossible for AI to generate generically. Ask: "Koi real result ya client ka example hai jo include karna chahte ho?"
5. **Any specific CTA?** — Default is WhatsApp inquiry link. If different, ask.
6. **Publishing date** — If on a schedule, confirm the date.

If the user says "bas likh do" (just write it), proceed with defaults: pick the next keyword from the priority list, target both markets, use generic but specific examples, default CTA = WhatsApp.

---

## Step 1 — Keyword Selection

### Master Keyword List (Priority Order)

Always pick the next un-published keyword from this list. Track which ones have been used. If the user does not specify, pick the next one in order.

#### Tier 1 — High Commercial Intent (Write First)
These bring clients directly. Write one per week minimum.

| # | Keyword | Type | Market |
|---|---------|------|--------|
| 1 | digital marketing for real estate agents Pakistan | Commercial | PK |
| 2 | real estate lead generation agency Karachi | Local | PK |
| 3 | Meta ads for real estate Pakistan | Local | PK |
| 4 | interior design marketing agency | Commercial | Both |
| 5 | AI chatbot for property inquiries | Emerging | Both |
| 6 | real estate Facebook ads agency | Commercial | Both |
| 7 | property lead generation Dubai | Local | UAE |
| 8 | digital marketing for interior designers UAE | Local | UAE |
| 9 | fit-out company marketing agency | Commercial | Both |
| 10 | real estate Google ads management Pakistan | Local | PK |

#### Tier 2 — Long-Tail (High Conversion, Low Competition)
Write 3–4 per week. These rank faster and bring ready-to-buy visitors.

| # | Keyword | Market |
|---|---------|--------|
| 11 | how to get real estate leads on Facebook in Pakistan | PK |
| 12 | how to get interior design clients online | Both |
| 13 | best way to generate property leads online | Both |
| 14 | real estate landing page that converts | Both |
| 15 | how much do Facebook ads cost for real estate Pakistan | PK |
| 16 | how to run Google ads for property listings | Both |
| 17 | real estate agent marketing on a small budget | PK |
| 18 | interior design studio Instagram growth Pakistan | PK |
| 19 | real estate WhatsApp marketing strategy | PK |
| 20 | how to get high ticket interior design projects | Both |
| 21 | how to automate real estate lead follow-up | Both |
| 22 | AI tools for real estate agents 2026 | Both |
| 23 | how to market Bahria Town property listings | PK |
| 24 | property video marketing tips for developers | Both |
| 25 | how to rank a real estate website on Google | Both |

#### Tier 3 — Educational / AI-Indexed (GEO Authority)
These get cited by AI engines. Write 2 per week.

| # | Keyword / Topic |
|---|----------------|
| 26 | Meta ads vs Google ads for real estate: which works better |
| 27 | real estate marketing mistakes agents make |
| 28 | what is cost per lead in real estate Facebook ads |
| 29 | how to write real estate ad copy that gets clicks |
| 30 | AI tools changing real estate marketing in 2026 |
| 31 | best social media platforms for interior designers |
| 32 | how to build a real estate lead generation funnel |
| 33 | SEO guide for real estate agents Pakistan 2026 |
| 34 | n8n automation for real estate lead nurturing |
| 35 | interior design content ideas for Instagram Reels |

### Keyword Placement Rules (On-Page SEO)

Once the keyword is chosen, place it exactly as follows in every article:

| Location | Rule |
|----------|------|
| **Title (H1)** | Primary keyword must appear in the first 60 characters |
| **URL slug** | Lowercase, hyphens, primary keyword only (e.g. `/blog/real-estate-facebook-ads-pakistan`) |
| **Meta description** | 140–155 characters. Primary keyword in first 20 words. End with a benefit or question. |
| **First paragraph** | Primary keyword in the first 100 words, naturally |
| **One H2 subheading** | Primary keyword or a close variant |
| **Image alt text** | At least one image alt tag contains the primary keyword |
| **Last paragraph** | Primary keyword appears once more, naturally |
| **Keyword density** | 1–1.5% of total word count. Never stuff. |
| **LSI / related terms** | Use 3–5 semantically related terms throughout (e.g. for "Facebook ads real estate" → "Meta advertising", "property leads", "cost per lead", "real estate campaign") |

---

## Step 2 — Article Structure (Always Follow This)

Every article must follow this exact structure. Do not skip any section.

### Required Article Length by Type

| Article Type | Word Count | When to Use |
|-------------|------------|-------------|
| Long-tail how-to | 1,400–1,800 words | Tier 2 keywords |
| Commercial landing article | 1,800–2,500 words | Tier 1 keywords |
| Educational / GEO authority | 2,000–3,000 words | Tier 3 topics |
| Quick tip / listicle | 800–1,200 words | Filler days only |

Default: always write 1,600+ words minimum. Shorter articles do not rank.

---

### Article Template

Use this structure for every article:

```
[TITLE — H1]
Primary keyword in first 60 chars. Make it benefit-driven or curiosity-driven.
Examples:
  "How to Get Real Estate Leads on Facebook in Pakistan (2026 Guide)"
  "Meta Ads vs Google Ads for Real Estate: Which One Actually Works?"
  "AI Chatbot for Property Inquiries: How to Automate Your Real Estate Business"

[META DESCRIPTION — write this but label it clearly for Abeer to paste into his HTML]
140–155 chars. Primary keyword + benefit + subtle CTA.

[HOOK — First 2–3 paragraphs, ~150 words]
This is the most important part. It must do ONE of these:
  - Open with a shocking/surprising stat ("Most real estate agents spend Rs50,000 on ads and get zero leads. Here's why.")
  - Open with a relatable pain point ("If you're a real estate agent in Karachi, you already know how hard it is to get serious buyers.")
  - Open with a bold, specific claim ("Facebook ads can generate real estate leads at Rs15–30 each. But only if you set them up the right way.")
  - Open with a question the reader is already asking ("Is it worth running Google ads for property listings in Pakistan?")

Do NOT open with: "In today's digital world...", "In this article, we will discuss...", "Real estate is an important industry..." — these are the most common AI-sounding openers and will destroy credibility.

[TABLE OF CONTENTS — optional for articles over 1,800 words]
Simple list of H2 headings with anchor links.

[BODY SECTIONS — 4 to 7 H2 sections]

Each H2 section must:
  - Start with 1–2 sentences that explain WHY this section matters to the reader
  - Include at least one concrete example, number, or scenario (real or realistic)
  - Be 200–400 words
  - Use H3 subheadings if the section has 3+ sub-points
  - Include one bullet list or numbered list per 400 words (improves readability + AI indexing)

For Pakistan/GCC market articles, include:
  - Specific city references where relevant (Karachi, DHA, Bahria Town, Dubai, Abu Dhabi)
  - PKR or AED currency where costs are mentioned
  - Platform-specific advice (Meta Ads Manager, Google Ads, Zameen.com context)

[COMMON MISTAKES SECTION — include in every article]
H2: "Common Mistakes [Target Audience] Make with [Topic]"
List 3–5 specific mistakes. This section gets cited heavily by AI engines and shared on social media.

[FAQ SECTION — include in every article, minimum 4 questions]
H2: "Frequently Asked Questions"
Format each as:
  ### Question exactly as a user would type it in Google
  Answer in 2–4 sentences. Direct, no fluff.

This section is critical for:
  - Google's "People Also Ask" box
  - AI engine citation (ChatGPT, Gemini, Perplexity read FAQ sections heavily)
  - Featured snippet ranking

[CONCLUSION — 150–200 words]
  - Summarize the 2–3 most important takeaways
  - Acknowledge the reader's situation ("If you're a real estate agent in Pakistan trying to grow your business...")
  - End with a clear, specific CTA (see Step 4 for CTA rules)
  - Do NOT write "In conclusion, we have discussed..." — say something human

[AUTHOR BIO — short, add at bottom]
"Written by Abeer Nasir, founder of OpenAgent — a digital marketing agency specializing in real estate and interior design. Based in Karachi, Pakistan."
```

---

## Step 3 — Human-First Writing Rules

These rules are mandatory. Every article must pass all of them.

### Voice and Tone
- Write as Abeer Nasir — a sharp, experienced digital marketer who is honest and practical
- No corporate language. No "leverage synergies". No "in today's fast-paced digital landscape"
- Speak directly to the reader: "you", "your business", "your listings" — not "businesses" or "marketers"
- Use Pakistani/regional context naturally: mention Karachi, DHA, Zameen.com, property developer culture, WhatsApp as primary communication channel
- Confident but not arrogant. Helpful but not salesy

### Anti-AI-Sounding Patterns (Never Use These)
The agent must never write:
- "In today's digital world..."
- "It is important to note that..."
- "In conclusion, we have explored..."
- "There are many ways to..."
- "As we can see..."
- "This article will discuss..."
- "Furthermore, it is worth mentioning..."
- Any paragraph that could have been written about any industry with just the keyword swapped out

### What Makes Writing Sound Human
- Specific numbers: "Rs18 per lead" not "affordable cost per lead"
- Specific tools: "Meta Ads Manager's Campaign Budget Optimization" not "advanced advertising tools"
- Opinions: "Honestly, Google ads work better for high-intent buyers, but Meta wins for brand awareness" — take a position
- Admitting limits: "This approach doesn't work for every market, but for Karachi's property sector, it's the most reliable method we've tested"
- Short sentences mixed with longer ones. Vary sentence length constantly.
- Paragraph breaks after every 3–4 sentences maximum
- One-sentence paragraphs are allowed and encouraged for emphasis

### Readability Targets
- Flesch Reading Ease: aim for 60–70 (conversational, not academic)
- Average sentence length: 15–20 words
- Paragraphs: 3–4 sentences maximum
- Use subheadings every 300–400 words
- Bold key terms and phrases (not whole sentences)
- Use numbered lists for steps/processes, bullet lists for features/options

---

## Step 4 — CTA (Call to Action) Rules

Every article must have exactly TWO CTAs:

**CTA 1 — Mid-article (after the 2nd or 3rd H2 section)**
Soft CTA. Example:
> "If you're not sure which approach works for your market, [WhatsApp us for a free 15-minute strategy call](https://wa.me/[ABEER_WHATSAPP_NUMBER]). We'll tell you exactly what we'd do for your specific situation."

**CTA 2 — End of article (in Conclusion)**
Direct CTA. Example:
> "Ready to get real estate leads from Meta ads? [Talk to us on WhatsApp](https://wa.me/[ABEER_WHATSAPP_NUMBER]) and we'll audit your current setup for free."

**AGENT MUST ASK:** If the WhatsApp number is not stored, ask Abeer: "Apka WhatsApp number kya hai jo article mein CTA ke liye use karna chahte hain?"

### Internal Linking Rules
Every article must link to 2–3 other pages on open-agent.agency:
- Always link to the most relevant service page
- Link to 1–2 other blog articles if they exist
- Use descriptive anchor text (not "click here" — use "our Meta ads service for real estate" or "this guide on real estate SEO")

---

## Step 5 — Visuals: What to Add and Where to Get Them

### Visual Requirements per Article

Every article needs a minimum of 3 visuals:

| Visual | Placement | Purpose |
|--------|-----------|---------|
| Hero image | Top of article, before first paragraph | First impression, social share thumbnail |
| Body image 1 | After 2nd or 3rd H2 section | Break up text, illustrate the concept |
| Body image 2 | After 5th or 6th H2 section (or FAQ section) | Reinforce final points |
| Optional: Screenshot | When explaining a platform (Meta Ads Manager, Google Analytics) | Credibility, practical proof |
| Optional: Infographic | For data-heavy or step-by-step articles | Shareable, AI-indexed |

### Image Optimization Rules (SEO Critical)
- **File name:** Use the primary keyword (e.g. `real-estate-facebook-ads-pakistan.jpg` — not `image1.jpg`)
- **Alt text:** Describe the image AND include the primary keyword naturally (e.g. `Real estate agent reviewing Facebook ads campaign results in Karachi`)
- **File size:** Compress to under 150KB. Use tools like TinyPNG or Squoosh (free, browser-based)
- **Format:** Use WebP format when possible — faster loading, better Core Web Vitals score
- **Dimensions:** Hero image: 1200×630px. Body images: 800×500px minimum

### Free Stock Image Sources (All Commercial Use — No Attribution Required)

| Website | URL | Best For |
|---------|-----|----------|
| **Unsplash** | unsplash.com | Hero images — real estate, interiors, laptops, office, city |
| **Pexels** | pexels.com | Everything — most versatile library |
| **Pixabay** | pixabay.com | Large volume, includes vectors |
| **StockSnap** | stocksnap.io | Curated, high quality, CC0 |
| **Reshot** | reshot.com | Unique, less overused than Unsplash |
| **Burst (Shopify)** | burst.shopify.com | Business, marketing, workspace photos |
| **Freepik** | freepik.com | Illustrations, mockups, flat designs (attribution required on free plan) |
| **unDraw** | undraw.co | Free SVG illustrations — great for AI/tech articles |
| **DrawKit** | drawkit.com | Clean illustrations, no attribution |

### Recommended Search Terms by Article Type

| Article Topic | Search Terms to Use |
|--------------|-------------------|
| Real estate / property | "luxury real estate", "modern villa aerial", "real estate agent meeting client", "property keys handover", "city skyline apartments" |
| Interior design | "luxury interior living room", "modern kitchen design", "interior designer at work", "minimalist home decor" |
| Meta / Facebook Ads | "social media marketing dashboard", "digital advertising laptop", "Facebook campaign analytics", "marketing strategy meeting" |
| AI / Automation | "AI technology abstract", "automation workflow", "chatbot interface", "digital transformation business" |
| Google Ads / SEO | "Google search laptop", "SEO analytics graph", "search engine results", "keyword research screen" |
| General marketing | "digital marketing agency team", "marketing strategy whiteboard", "business growth chart" |
| Pakistan / Karachi context | "Karachi city skyline", "Pakistan business professional", "South Asian city real estate" |

---

## Step 6 — On-Page SEO Technical Checklist

The agent must verify every item before marking the article complete. For items it cannot check itself, it must ask Abeer.

### Agent Can Handle Directly:
- [ ] Primary keyword in H1 title (first 60 characters)
- [ ] Primary keyword in first 100 words of body
- [ ] Primary keyword in at least one H2 subheading
- [ ] Meta description written (140–155 characters, keyword in first 20 words)
- [ ] URL slug written (lowercase, hyphens, keyword-based)
- [ ] All images have keyword-relevant alt text and keyword-based file names
- [ ] 2–3 internal links to other pages with descriptive anchor text
- [ ] 1–2 external links to authoritative sources (Google, Meta, Statista, industry reports)
- [ ] FAQ section with minimum 4 questions (structured as H3)
- [ ] Both CTAs placed (mid-article + conclusion)
- [ ] Word count meets minimum for article type
- [ ] Author bio at the bottom
- [ ] No duplicate H1 tags

### Agent Must Ask Abeer to Handle:
- [ ] **Schema markup:** Add `Article` + `FAQPage` JSON-LD schema to the HTML. Agent will write the schema code — Abeer must paste it into the `<head>` of the page.
- [ ] **Page speed:** Compress images before uploading using TinyPNG (tinypng.com) or Squoosh (squoosh.app)
- [ ] **Canonical tag:** Add `<link rel="canonical" href="[full URL]" />` in `<head>`
- [ ] **Open Graph tags:** For social sharing — agent will write the tags, Abeer pastes them
- [ ] **Google Search Console:** Submit the new URL for indexing after publishing
- [ ] **Internal link update:** Go to 1–2 existing blog posts and add a link to the new article where relevant

---

## Step 7 — GEO (Generative Engine Optimization) Rules

These rules make the article get cited by ChatGPT, Gemini, Perplexity, Claude, and other AI engines.

### Why GEO Matters
When someone asks ChatGPT "how do I get real estate leads in Pakistan", it pulls from authoritative web sources. If open-agent.agency has a well-structured, specific, factual article on this topic, AI engines will cite it — sending high-intent visitors directly.

### GEO Writing Rules (Apply to Every Article)

1. **Define things clearly.** AI engines love definitions. Start key sections with a clear, quotable definition. Example: "Cost per lead (CPL) in real estate Facebook ads refers to the total ad spend divided by the number of qualified leads generated. In Pakistan's property market, a good CPL ranges from Rs15–Rs50 depending on the city and property type."

2. **Use specific numbers.** AI engines prefer specificity. "Ads that include property prices get 3x more engagement than those that don't" is more citable than "specific ads perform better."

3. **Write standalone FAQ answers.** Each FAQ answer must make complete sense without reading the rest of the article. AI engines often pull just the FAQ answer.

4. **Include a "Key Takeaways" or "Summary" box.** Add this near the top or after the introduction. Use a simple bullet list of 4–5 key facts from the article. AI engines frequently index these.

5. **Use structured data.** Article schema + FAQPage schema (see Step 6 — agent writes the code, Abeer adds it).

6. **Be the primary source.** When possible, include original data — even a simple statement like "In our campaigns for real estate clients in Karachi, the average cost per WhatsApp inquiry was Rs22" is original data that AI engines cannot find anywhere else.

7. **Use clear heading hierarchy.** H1 → H2 → H3 only. Never skip levels. AI engines use heading structure to understand article organization.

8. **External citations.** Link to Meta's official advertising resources, Google's support pages, or recognized industry reports at least once. This signals credibility to both Google and AI engines.

---

## Step 8 — Daily Publishing Schedule

To rank within 30–60 days, Abeer needs consistent output. The agent must suggest the next article at the end of every session.

### Recommended Weekly Content Calendar

| Day | Article Type | Keyword Tier |
|-----|-------------|-------------|
| Monday | Long-tail how-to | Tier 2 |
| Tuesday | Educational / GEO | Tier 3 |
| Wednesday | Long-tail how-to | Tier 2 |
| Thursday | Commercial intent | Tier 1 |
| Friday | Long-tail or listicle | Tier 2 |
| Saturday | Educational / GEO | Tier 3 |
| Sunday | Rest or scheduling next week | — |

### Publishing Checklist (Final Steps Before Going Live)
1. Compress all images (TinyPNG or Squoosh)
2. Add JSON-LD schema to HTML `<head>`
3. Add Open Graph and Twitter Card meta tags
4. Add canonical tag
5. Push to GitHub Pages
6. Go to Google Search Console → URL Inspection → Request Indexing
7. Share the article link on WhatsApp status and Instagram Stories (minimum)
8. Add internal link from one existing page to the new article

---

## Step 9 — JSON-LD Schema Templates

The agent must generate this code for every article and give it to Abeer to paste.

### Article Schema Template
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[ARTICLE TITLE HERE]",
  "description": "[META DESCRIPTION HERE]",
  "author": {
    "@type": "Person",
    "name": "Abeer Nasir",
    "url": "https://open-agent.agency"
  },
  "publisher": {
    "@type": "Organization",
    "name": "OpenAgent",
    "url": "https://open-agent.agency"
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[FULL ARTICLE URL]"
  }
}
```

### FAQPage Schema Template
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[QUESTION 1 EXACT TEXT]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER 1 TEXT]"
      }
    },
    {
      "@type": "Question",
      "name": "[QUESTION 2 EXACT TEXT]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[ANSWER 2 TEXT]"
      }
    }
  ]
}
```

Wrap both schemas in a single `<script type="application/ld+json">` block in the HTML `<head>`.

---

## Step 10 — Output Format

When the agent delivers a completed article, it must output in this exact order:

```
## 📋 Article Brief
- Primary keyword:
- Secondary keywords (3–5):
- Target audience:
- Target market:
- Word count target:
- URL slug:
- Meta description:

---

## 🖼️ Visuals Needed
[List 3 images with: placement, search query for Unsplash/Pexels, suggested file name, alt text]

---

## 📝 Full Article
[Complete article from H1 title to author bio]

---

## 🔧 JSON-LD Schema
[Both Article + FAQPage schema blocks, ready to paste]

---

## ✅ Publishing Checklist
[Pre-filled checklist with article-specific details — items Abeer must handle are marked 🙋]

---

## ➡️ Next Article Suggestion
[Next keyword from the priority list + one-line reason why it should be next]
```

---

## Realistic Ranking Timeline

Set these expectations clearly with Abeer at the start of every new month:

| Weeks 1–2 | Weeks 3–4 | Month 2 | Month 3+ |
|-----------|-----------|---------|----------|
| Publish 10–14 articles | Google begins indexing all pages | Long-tail keywords begin ranking page 2–3 | Tier 1 commercial keywords reach page 1 |
| Set up Google Search Console | First impressions in Search Console | First organic visitors | AI engines begin citing articles |
| Add schema to all pages | Submit sitemap | 50–200 monthly organic visitors | 500+ monthly organic visitors |

**Honest note for Abeer:** No tool or skill can guarantee page 1 ranking in exactly 30 days — that would be a false promise. What this system guarantees is that if 1–2 articles are published daily, every technical requirement is met, and content quality stays high, the site will see measurable organic traffic growth within 30–45 days and meaningful client inquiries within 60–90 days. Consistency is the only variable that matters.

---

## Loop Behavior

At the end of every article session, the agent must automatically:

1. Confirm the article is complete and all sections are present
2. Present the Publishing Checklist (mark which items Abeer needs to do manually)
3. Suggest the next article from the keyword list
4. Ask: "Kya aaj ek aur article likhein, ya kal ke liye schedule karein?"

This loop continues indefinitely. The agent never stops after one article unless Abeer explicitly says "bas karo" or "stop for now."
