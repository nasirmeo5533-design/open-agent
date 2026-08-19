# OpenAgent Design System

> Premium B2B Lead Generation Agency — International, Trustworthy, High-Value

---

## 1. Color Palette

### Primary Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--black` | `#0A0A0A` | `10, 10, 10` | Primary background, hero sections, nav bar |
| `--white` | `#FFFFFF` | `255, 255, 255` | Body text on dark, headings on dark, light surfaces |
| `--orange` | `#FF6B00` | `255, 107, 0` | Accent — CTAs, hover states, highlights (use sparingly) |
| `--gray` | `#B0B0B0` | `176, 176, 176` | Secondary text, captions, muted elements |

### Extended Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--gray-light` | `#F5F5F5` | Light section backgrounds |
| `--gray-medium` | `#6B6B6B` | Borders, dividers |
| `--black-soft` | `#1A1A1A` | Card backgrounds on dark sections |
| `--orange-glow` | `rgba(255,107,0,0.15)` | Subtle glow behind accent elements |
| `--orange-hover` | `#E55F00` | Orange button hover state |

### Color Rules

- **DO:** Use `#0A0A0A` as the dominant background color for premium sections
- **DO:** Use `#FF6B00` only for interactive elements (buttons, links, hover states) and small accent details
- **DO:** Use `#B0B0B0` for body text on dark backgrounds, captions, and secondary info
- **DO:** Use white `#FFFFFF` for primary headings and important body text on dark backgrounds
- **DON'T:** Fill large surfaces with orange — it should never exceed ~5% of any given section
- **DON'T:** Use orange for body text — it is an accent color only
- **DON'T:** Use gradients unless extremely subtle (e.g., dark to slightly lighter dark)
- **DON'T:** Use bright/neon variations of orange beyond `#FF6B00`

### Color Application Examples

```
Hero Section:
  Background: #0A0A0A
  Heading:    #FFFFFF
  Subtext:    #B0B0B0
  CTA Button: #FF6B00 bg, #FFFFFF text

Card Component:
  Background: #1A1A1A
  Border:     1px solid rgba(255,255,255,0.08)
  Title:      #FFFFFF
  Body:       #B0B0B0
  Icon:       #FF6B00

Light Section (alternate):
  Background: #F5F5F5
  Heading:    #0A0A0A
  Body:       #6B6B6B
  CTA:        #FF6B00
```

---

## 2. Typography Scale

### Font Families

| Role | Font | Weights | Source |
|------|------|---------|--------|
| Headings | Poppins | 600 (semi-bold), 700 (bold) | Google Fonts |
| Body | DM Sans | 400 (regular), 500 (medium) | Google Fonts |
| Fallback | system-ui, -apple-system, sans-serif | — | Native |

### Type Scale

| Token | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing | Font | Weight | Usage |
|-------|---------------|---------------|-------------|----------------|------|--------|-------|
| `display` | 64px / 4rem | 36px / 2.25rem | 1.1 | -0.02em | Poppins | 700 | Hero headline |
| `h1` | 48px / 3rem | 28px / 1.75rem | 1.15 | -0.015em | Poppins | 700 | Section headlines |
| `h2` | 40px / 2.5rem | 24px / 1.5rem | 1.2 | -0.01em | Poppins | 600 | Sub-section headlines |
| `h3` | 28px / 1.75rem | 22px / 1.375rem | 1.3 | -0.005em | Poppins | 600 | Card titles, feature headings |
| `h4` | 22px / 1.375rem | 18px / 1.125rem | 1.35 | 0 | Poppins | 600 | Sub-card headings |
| `body-lg` | 20px / 1.25rem | 18px / 1.125rem | 1.6 | 0 | DM Sans | 400 | Hero body, intro paragraphs |
| `body` | 16px / 1rem | 16px / 1rem | 1.6 | 0 | DM Sans | 400 | Default body text |
| `body-sm` | 14px / 0.875rem | 14px / 0.875rem | 1.5 | 0 | DM Sans | 400 | Captions, metadata |
| `label` | 12px / 0.75rem | 12px / 0.75rem | 1.4 | 0.08em | DM Sans | 500 | Tags, labels, eyebrows (uppercase) |
| `btn` | 16px / 1rem | 14px / 0.875rem | 1 | 0.02em | Poppins | 600 | Button text |

### Typography Rules

- All headings are **white (#FFFFFF)** on dark backgrounds, **deep black (#0A0A0A)** on light backgrounds
- Body text uses **soft gray (#B0B0B0)** on dark backgrounds, **medium gray (#6B6B6B)** on light backgrounds
- Eyebrow/label text is always **uppercase** with **0.08em letter-spacing** and **orange (#FF6B00)** accent
- Line height for body text is consistently **1.6** for comfortable reading
- Never use font sizes smaller than **12px / 0.75rem** — this is the absolute minimum

---

## 3. Spacing System

### Base Unit

All spacing is built on an **8px base unit**. Every spacing value is a multiple of 8.

### Section Spacing

| Token | Desktop | Mobile | Usage |
|-------|---------|--------|-------|
| `section-y` | 120px (7.5rem) | 80px (5rem) | Vertical padding inside major sections |
| `section-y-lg` | 160px (10rem) | 96px (6rem) | Hero sections, opening sections |
| `section-gap` | 0 | 0 | Between sections (no gap — flush sections) |

### Component Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px / 0.25rem | Tight internal spacing |
| `sm` | 8px / 0.5rem | Between related small elements |
| `md` | 16px / 1rem | Between card elements, form fields |
| `lg` | 24px / 1.5rem | Between cards in a grid |
| `xl` | 32px / 2rem | Between major content blocks |
| `2xl` | 48px / 3rem | Between unrelated content groups |
| `3xl` | 64px / 4rem | Hero content spacing from edges |

### Layout Spacing

| Token | Desktop | Mobile | Usage |
|-------|---------|--------|-------|
| `container-px` | 24px (1.5rem) | 16px (1rem) | Horizontal padding inside `.wrap` container |
| `grid-gap` | 32px (2rem) | 16px (1rem) | Gap between grid items |
| `card-padding` | 32px (2rem) | 24px (1.5rem) | Internal padding of cards |
| `card-padding-lg` | 48px (3rem) | 32px (2rem) | Internal padding of feature cards |

---

## 4. Component Specifications

### 4.1 Navigation Bar

**Desktop (>1024px)**
- Fixed top, full-width, transparent on hero (becomes solid `#0A0A0A` on scroll)
- Height: 72px
- Logo (left): SVG, max-height 32px
- Nav links (center-right): DM Sans 14px, weight 500, `#B0B0B0`, hover → `#FFFFFF`
- CTA button (right): `#FF6B00` bg, white text, padding 10px 24px, border-radius 12px
- Transition: background-color 0.3s ease on scroll

**Mobile (≤1024px)**
- Same height: 72px
- Logo (left), hamburger icon (right)
- Hamburger: 3 lines, white, animated to X on open
- Mobile menu: full-screen overlay, `#0A0A0A` bg, centered links, large touch targets (min 48px height)

### 4.2 Hero Section

- Full viewport width, min-height 100vh (desktop), min-height 90vh (mobile)
- Background: `#0A0A0A` with darkened background image (opacity 0.3-0.5)
- Content max-width: 800px, centered
- Eyebrow: `label` style, uppercase, `#FF6B00`, 12px, letter-spacing 0.08em
- Headline: `display` style, white, max 2 lines
- Subheadline: `body-lg`, `#B0B0B0`, max 3 lines
- CTA button: primary orange, padding 16px 40px, border-radius 12px
- Secondary CTA: text link, white with arrow icon, hover → orange
- Background image: `object-fit: cover`, subtle dark overlay gradient (top: transparent → bottom: `#0A0A0A`)

### 4.3 Service Cards

- Grid: 3 columns desktop, 1 column mobile
- Card background: `#1A1A1A`
- Border: 1px solid `rgba(255,255,255,0.08)`
- Border-radius: 16px
- Padding: 32px
- Hover: border becomes `rgba(255,107,0,0.3)`, subtle translate-up (-4px)
- Icon: 48x48px, `#FF6B00`, top-left of card
- Title: `h3` style, white
- Description: `body`, `#B0B0B0`, max 3 lines with ellipsis
- Arrow link: `#FF6B00`, bottom-right, appears on hover (desktop only)

### 4.4 Industry Cards

- Grid: 5 columns desktop (overflow scroll on mobile, snap)
- Each card: min-width 280px (horizontal scroll on mobile)
- Background image: `object-fit: cover`, height 320px
- Overlay: gradient from transparent to `rgba(10,10,10,0.85)` at bottom
- Title: `h3`, white, positioned at bottom-left with 24px padding
- Hover: image scales 1.05, overlay lightens slightly
- Border-radius: 16px
- No border

### 4.5 Process Steps

- Horizontal timeline on desktop, vertical on mobile
- Number badge: 48x48px circle, `#FF6B00` bg, white text, Poppins 700
- Connecting line: 2px, `rgba(255,107,0,0.3)`, runs between number badges
- Title: `h4`, white
- Description: `body-sm`, `#B0B0B0`, max 2 lines
- Active/completed step: filled `#FF6B00` badge
- Future step: outlined badge, `rgba(255,107,0,0.3)` border

### 4.6 Pricing Cards

- Grid: 3 columns desktop, 1 column mobile
- Card background: `#1A1A1A`
- Border: 1px solid `rgba(255,255,255,0.08)`
- Featured/recommended card: `#FF6B00` border (2px), slightly elevated (translateY -8px)
- Badge on featured: "Most Popular" — `#FF6B00` bg, white text, position top-center
- Plan name: `h3`, white
- Price: `display` size (48px), white, "/month" suffix in `#B0B0B0`
- Feature list: checkmark icons (orange), `body`, `#B0B0B0`
- CTA button: full-width, primary orange (featured), outlined white (others)
- Padding: 40px

### 4.7 FAQ Accordion

- Full-width, max-width 800px, centered
- Each item: border-bottom 1px solid `rgba(255,255,255,0.08)`
- Question: `h4`, white, padding 24px 0, cursor pointer
- Plus/minus icon: `#FF6B00`, right-aligned, rotates 45° on open
- Answer: `body`, `#B0B0B0`, max-height 0 → auto on open, with smooth transition (0.3s)
- Open state: question text → `#FF6B00`
- Mobile: same structure, smaller padding (16px vertical)

### 4.8 Contact Form

- Two-column layout on desktop (form left, info right), single column on mobile
- Form background: transparent
- Input fields:
  - Background: `rgba(255,255,255,0.05)`
  - Border: 1px solid `rgba(255,255,255,0.12)`
  - Border-radius: 12px
  - Padding: 16px
  - Text: `body`, `#B0B0B0` (placeholder), `#FFFFFF` (typed)
  - Focus: border `#FF6B00`, box-shadow `0 0 0 3px rgba(255,107,0,0.15)`
  - Height: 52px (text inputs), 120px (textarea)
- Submit button: primary orange, full-width, padding 16px, border-radius 12px
- Labels: `label` style, `#B0B0B0`, uppercase, above input
- Success state: green checkmark, "Thank you" message replaces form

### 4.9 Footer

- Background: `#0A0A0A` (same as main bg, distinguished by top border)
- Top border: 1px solid `rgba(255,255,255,0.08)`
- 4-column grid: Logo+tagline, Services, Company, Contact
- Logo: SVG, white, max-height 28px
- Column headings: `h4`, white
- Links: `body-sm`, `#B0B0B0`, hover → `#FF6B00`
- Bottom bar: copyright + social icons, `body-sm`, `#B0B0B0`
- Social icons: 20x20px, `#B0B0B0`, hover → `#FF6B00`
- Padding: 80px top, 32px bottom
- Mobile: single column, stacked

### 4.10 WhatsApp Floating Button

- Position: fixed, bottom-right, 24px from edges
- Size: 56x56px circle
- Background: `#25D366` (WhatsApp green)
- Icon: white WhatsApp SVG, 28x28px
- Shadow: `0 4px 12px rgba(37,211,102,0.4)`
- Hover: scale 1.1, shadow intensifies
- Z-index: 9999
- Tooltip on hover (desktop): "Chat with us" — white bg, black text, appears left
- Mobile: same size, slightly smaller margin (16px)

### 4.11 Trust Strip

- Full-width section, `#0A0A0A` bg
- Content: horizontal row of logos/metrics (client count, projects, countries, years)
- Each item: number (large, `#FF6B00`, Poppins 700, 48px) + label (`body-sm`, `#B0B0B0`)
- Divider: 1px vertical line between items, `rgba(255,255,255,0.08)`
- Horizontal scroll on mobile, snap alignment
- Padding: 48px vertical

### 4.12 Portfolio Cards

- Grid: 2 columns desktop, 1 column mobile
- Card: image + overlay on hover
- Image: `object-fit: cover`, aspect-ratio 16/10
- Overlay (hover): `rgba(10,10,10,0.8)` bg with project title + category
- Border-radius: 16px
- No border
- Hover: image scales 1.03

---

## 5. Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Desktop XL | >1440px | Max content width 1200px centered, larger spacing |
| Desktop | 1025px–1440px | Standard desktop layout, 3-4 column grids |
| Tablet | 768px–1024px | 2-column grids, smaller heading sizes, nav collapses to hamburger |
| Mobile L | 480px–767px | Single column, horizontal scroll for industry cards, reduced padding |
| Mobile | ≤479px | Single column, stack everything, min padding 16px |

### Breakpoint-Specific Changes

**≤1024px (Tablet & Mobile):**
- Navigation collapses to hamburger menu
- Hero min-height reduces to 90vh
- Service grid: 3 → 2 columns
- Process steps: horizontal → vertical timeline
- Footer: 4 → 2 columns

**≤767px (Mobile):**
- Service grid: 2 → 1 column
- Pricing grid: 3 → 1 column
- Contact form: 2 → 1 column
- Section padding: 120px → 80px vertical
- Grid gaps: 32px → 16px
- Hero heading: 64px → 36px
- All headings scale down per type scale

**≤479px (Small Mobile):**
- Card padding: 32px → 24px
- Section padding: 80px → 64px
- Button padding: reduces proportionally
- Trust strip: scrollable, not grid

---

## 6. Animation Rules

### Principles
- Animations must be **purposeful** — they guide attention, not decorate
- All animations use **ease** or **ease-out** timing functions
- No animation should block interaction or delay content access
- Respect `prefers-reduced-motion` media query

### Allowed Animations

| Element | Animation | Duration | Trigger |
|---------|-----------|----------|---------|
| Button hover | Background darken + slight scale (1.02) | 0.2s | Hover |
| Card hover | Border color shift + translateY(-4px) | 0.3s | Hover |
| Card image | Scale 1.03-1.05 | 0.4s | Hover |
| FAQ accordion | Max-height transition | 0.3s | Click |
| Nav scroll | Background opacity 0 → 1 | 0.3s | Scroll past hero |
| Scroll reveal | Fade up (translateY 20px → 0, opacity 0 → 1) | 0.5s | Intersection Observer |
| Mobile menu | Slide in from right | 0.3s | Hamburger click |
| WhatsApp button | Scale 1 → 1.1 on hover | 0.2s | Hover |
| Hamburger icon | 3 lines → X cross | 0.3s | Click |

### Prohibited
- No parallax scrolling effects
- No continuously looping animations
- No entrance animations that delay content visibility
- No cursor-following effects
- No particle effects or animated backgrounds
- No auto-playing video with sound

### Performance Requirements
- Use `transform` and `opacity` only for animations (GPU-accelerated)
- Avoid animating `margin`, `padding`, `width`, `height`
- Use `will-change` sparingly and only on actively animating elements
- Max 3 simultaneous animated elements

---

## 7. Layout Grid

### Container

| Token | Width | Usage |
|-------|-------|-------|
| `.wrap` | max-width: 1200px | Main content container, centered |
| `.wrap-narrow` | max-width: 800px | FAQ, contact form, text-heavy content |
| `.wrap-wide` | max-width: 1440px | Full-bleed sections (hero, trust strip) |

### Column System

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| Desktop (>1024px) | 12 | 32px | 24px |
| Tablet (768–1024px) | 8 | 24px | 24px |
| Mobile (≤767px) | 4 | 16px | 16px |

### Common Grid Patterns

```
Hero:        12 cols, text left-aligned or centered
Services:    3 cols (4 each on desktop), 2 cols tablet, 1 col mobile
Industries:  Horizontal scroll (5 items), or 5 cols on XL screens
Process:     4 cols (3 each on desktop), vertical stack mobile
Pricing:     3 cols, featured card spans same width
Testimonials: 2 cols or 1 col full-width
Footer:      4 cols, 2 cols tablet, 1 col mobile
```

### Alignment Rules
- Content within `.wrap` is always centered horizontally
- Section text is left-aligned by default; center only for hero and isolated CTAs
- Cards align to grid — no floating elements
- Images use `object-fit: cover` to maintain aspect ratio within grid cells

---

## 8. Border & Elevation Rules

### Borders
- Card borders: `1px solid rgba(255,255,255,0.08)` on dark backgrounds
- Section dividers: `1px solid rgba(255,255,255,0.08)` full-width
- Featured/accent borders: `2px solid #FF6B00`
- Input borders: `1px solid rgba(255,255,255,0.12)`

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--r-sm` | 8px | Input fields, small badges |
| `--r` | 12px | Buttons, cards |
| `--r-lg` | 16px | Feature cards, modals |
| `--r-full` | 9999px | Circular elements, pill buttons |

### Elevation (Box Shadows)

| Level | Shadow | Usage |
|-------|--------|-------|
| Low | `0 2px 8px rgba(0,0,0,0.3)` | Cards at rest |
| Medium | `0 4px 16px rgba(0,0,0,0.4)` | Cards on hover, dropdowns |
| High | `0 8px 32px rgba(0,0,0,0.5)` | Modals, popups |
| Accent | `0 4px 12px rgba(255,107,0,0.2)` | Orange CTA buttons |

---

## 9. Image Guidelines

### Usage Rules
- All hero/industry images: `object-fit: cover` with dark overlay
- Max image file size: 300KB after optimization (use WebP where supported)
- Always include `width` and `height` attributes to prevent CLS
- Use `loading="lazy"` for below-fold images
- Never use images with visible watermarks or text overlays
- Prefer architectural/interior photography over people for this brand

### Image Treatments
- **Hero:** Dark overlay gradient, image opacity 0.3-0.5
- **Cards:** No overlay at rest, slight dark overlay on hover
- **Industry cards:** Bottom gradient overlay (transparent → `rgba(10,10,10,0.85)`)
- **Portfolio:** Overlay on hover with project info

---

*Design System v1.0 — Last updated: August 2026*
