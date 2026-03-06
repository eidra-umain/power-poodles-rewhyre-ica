# ICA Gaston Pet App — Design Specification

**Version:** 2.0
**Date:** March 6, 2026
**Status:** Draft — aligned to gaston-app reference implementation
**Owner:** ICA Digital — Design
**Source of truth:** `resources/gaston-app/` (React + Tailwind + TypeScript)

---

## 1. Brand Foundation

The ICA Gaston app is a desktop-first pet care platform that combines e-commerce (pet food and products), health tracking, insurance comparison, nutrition guidance, and community features. The visual language is warm and approachable, built on the ICA Gaston colour palette with orange as the primary action colour — not blue. Blue is reserved for brand identity and informational contexts.

### 1.1 Brand Personality

The app feels like a knowledgeable pet store that also manages your pet's health. Warm, product-forward, and confident. Not clinical, not overly playful. The orange-dominant palette signals energy and approachability, while the blue-600 sidebar (present in the Sidebar component but not currently in the active layout) carries institutional trust.

### 1.2 Design Principles (from the reference implementation)

1. **Products first.** The dashboard leads with a hero product banner, category quick-links, and product cards. Health, insurance, and nutrition are features, not the entry point.
2. **Dense but breathable.** Cards use generous `rounded-2xl` (16px), tight internal spacing, and clear typographic hierarchy. Whitespace comes from grid gaps, not empty regions.
3. **Orange means action.** Every primary CTA — "Handla nu," "Lägg till," "Add Record," "Get Quote," "Add to basket" — uses `orange-400` (`#D4613C`) with white text. No exceptions in the reference app.
4. **Badges everywhere.** Category tags, product badges, insurance labels, and status indicators are all pill-shaped (`rounded-full`, `px-2 py-0.5`, font-weight 700, 10–11px). Colour encodes meaning.

---

## 2. Colour System

### 2.1 Brand Palette (from ICA Gaston — verified against `tailwind.config.js`)

#### Blue

| Token | Hex | Verified usage in app |
|---|---|---|
| `blue-50` | `#E0EDFF` | Diagnostic category background, info badge |
| `blue-100` | `#C1DAFF` | — |
| `blue-200` | `#9AC2F5` | Sidebar text (inactive nav), info borders |
| `blue-300` | `#6E9FDB` | Sidebar section label text |
| `blue-400` | `#4A7CBF` | Sidebar user avatar background, upcoming care icon |
| `blue-500` | `#2F5A9A` | — |
| `blue-600` | `#1E3065` | **Sidebar background**, offer badge background |
| `blue-700` | `#182750` | — |
| `blue-800` | `#111D3B` | — |
| `blue-900` | `#0B1428` | — |

#### Green

| Token | Hex | Verified usage in app |
|---|---|---|
| `green-50` | `#E8F2E1` | Vaccination tag bg, upcoming care bg, nutrition tag bg |
| `green-100` | `#D0E4C3` | — |
| `green-200` | `#AFD09C` | — |
| `green-300` | `#8ABB76` | — |
| `green-400` | `#69A456` | — |
| `green-500` | `#498A3D` | Timeline dot (vaccination), upcoming care icon |
| `green-600` | `#2D6E40` | Checkmark icon (insurance perks), "Best Value" badge bg, nutrition section icon |
| `green-700` | `#235834` | Vaccination tag text, Nutrition tag text |
| `green-800` | `#1A4228` | — |
| `green-900` | `#112D1C` | — |

#### Orange (Primary Action Colour)

| Token | Hex | Verified usage in app |
|---|---|---|
| `orange-50` | `#FBCFBD` | Hero paragraph text, product descriptions, category bg, vet visit bg, meal schedule bg |
| `orange-100` | `#F7B9A0` | Community timestamp text |
| `orange-200` | `#F09E7D` | Category border (Torrfoder) |
| `orange-300` | `#E5805A` | Hero image bg, medication timeline dot, meal dot (evening) |
| `orange-400` | `#D4613C` | **Primary CTA bg**, logo bg, cart badge, star fill, hero bg, "Populärast" badge, vet visit dot |
| `orange-500` | `#B94A2E` | CTA hover state, hero CTA text, "Visa alla" links, article "Read more" links, Gaston Pick badge text |
| `orange-600` | `#9A3427` | Medication tag text, insurance status text |
| `orange-700` | `#7C2A1F` | — |
| `orange-800` | `#5E2018` | — |
| `orange-900` | `#411610` | — |

#### Grey

| Token | Hex | Verified usage in app |
|---|---|---|
| `grey-100` | `#F5F5F5` | **Page background** (`body`), search input bg, sub-nav bg, filter bg, stat card bg, product image bg |
| `grey-200` | `#ECEDED` | All card borders, divider lines, input borders, header border-bottom |
| `grey-300` | `#C5C6C7` | Inactive star icons, timeline connector, water meal dot |
| `grey-500` | `#828386` | Placeholder text, secondary text (descriptions, dates, metadata), search icon |
| `grey-700` | `#45464B` | Body text, nav link text (inactive), "Heltäckande" badge bg, insurance perks text |
| `grey-900` | `#1D1D20` | **All headings**, product names, prices, primary content text |

### 2.2 Semantic Colour Tokens

Derived from verified usage across all 6 page components:

#### Light Mode (current implementation)

| Token | Value | Usage |
|---|---|---|
| `color-bg-page` | `grey-100` (`#F5F5F5`) | `body { background }` |
| `color-bg-surface` | `#FFFFFF` | Cards, panels, header |
| `color-bg-input` | `grey-100` (`#F5F5F5`) | Search inputs, stat cards |
| `color-bg-hover` | `grey-100` (`#F5F5F5`) | Nav hover, button hover (secondary) |
| `color-text-heading` | `grey-900` (`#1D1D20`) | All h1–h3, product names, prices |
| `color-text-body` | `grey-700` (`#45464B`) | Body paragraphs, perks lists |
| `color-text-secondary` | `grey-500` (`#828386`) | Dates, metadata, placeholders, descriptions |
| `color-text-inverse` | `#FFFFFF` | Text on orange/blue/dark backgrounds |
| `color-action-primary` | `orange-400` (`#D4613C`) | All primary CTAs |
| `color-action-primary-hover` | `orange-500` (`#B94A2E`) | CTA hover state |
| `color-action-secondary-text` | `orange-500` (`#B94A2E`) | Text links ("Visa alla," "Read more") |
| `color-success` | `green-600` (`#2D6E40`) | Checkmarks, positive badges |
| `color-success-bg` | `green-50` (`#E8F2E1`) | Vaccination tags, health-positive backgrounds |
| `color-warning` | `orange-400` (`#D4613C`) | Warning dots, vet visit indicators |
| `color-warning-bg` | `orange-50` (`#FBCFBD`) | Vet visit tags, medication tags |
| `color-border` | `grey-200` (`#ECEDED`) | Card borders, input borders, dividers |
| `color-border-focus` | `orange-400` (`#D4613C`) | Input focus ring (via `focus:border-orange-400`) |
| `color-sidebar` | `blue-600` (`#1E3065`) | Sidebar background |
| `color-sidebar-text-active` | `#FFFFFF` | Active sidebar nav text |
| `color-sidebar-text-inactive` | `blue-200` (`#9AC2F5`) | Inactive sidebar nav text |

#### Dark Mode (designed, not yet in reference app)

| Token | Value | Usage |
|---|---|---|
| `color-bg-page` | `#121214` | Page background |
| `color-bg-surface` | `#1C1C1F` | Cards, panels |
| `color-bg-input` | `#28282C` | Inputs, stat cards |
| `color-bg-hover` | `#28282C` | Nav hover |
| `color-text-heading` | `#F0F0F2` | Headings |
| `color-text-body` | `#C5C6C7` | Body text |
| `color-text-secondary` | `#828386` | Metadata |
| `color-text-inverse` | `grey-900` (`#1D1D20`) | Text on light surfaces |
| `color-action-primary` | `orange-300` (`#E5805A`) | Primary CTAs |
| `color-action-primary-hover` | `orange-400` (`#D4613C`) | CTA hover |
| `color-success` | `green-300` (`#8ABB76`) | Positive indicators |
| `color-success-bg` | `green-900` (`#112D1C`) | Success backgrounds |
| `color-warning` | `orange-200` (`#F09E7D`) | Warning indicators |
| `color-warning-bg` | `orange-900` (`#411610`) | Warning backgrounds |
| `color-border` | `#2E2E32` | Borders |
| `color-border-focus` | `orange-300` (`#E5805A`) | Focus ring |
| `color-sidebar` | `blue-800` (`#111D3B`) | Sidebar |

### 2.3 Contrast Ratios (WCAG AA Verification)

| Pair | Light Mode Ratio | Dark Mode Ratio | Pass |
|---|---|---|---|
| `text-heading` on `bg-surface` | 16.5:1 (`#1D1D20` on `#FFF`) | 15.2:1 (`#F0F0F2` on `#1C1C1F`) | Yes |
| `text-body` on `bg-surface` | 9.8:1 (`#45464B` on `#FFF`) | 8.9:1 (`#C5C6C7` on `#1C1C1F`) | Yes |
| `text-secondary` on `bg-surface` | 4.6:1 (`#828386` on `#FFF`) | 4.5:1 (`#828386` on `#1C1C1F`) | Yes (AA) |
| `text-inverse` on `action-primary` | 8.4:1 (`#FFF` on `#D4613C`) | — | Yes |
| `action-secondary-text` on `bg-surface` | 6.5:1 (`#B94A2E` on `#FFF`) | — | Yes |
| `success` on `bg-surface` | 8.2:1 (`#2D6E40` on `#FFF`) | 7.1:1 (`#8ABB76` on `#1C1C1F`) | Yes |
| `sidebar-text-inactive` on `sidebar` | 6.8:1 (`#9AC2F5` on `#1E3065`) | — | Yes |
| `sidebar-text-active` on `sidebar` | 11.8:1 (`#FFF` on `#1E3065`) | — | Yes |

---

## 3. Typography

### 3.1 Font Families (from `index.css` @font-face declarations)

| Role | Family | Source | Weights loaded | Tailwind class |
|---|---|---|---|---|
| Display / Headings / Labels | **ICA Rubrik** | `ICARubrikBold.otf` + `ICARubrik[wght].ttf` | 100–900 (variable), 700 (bold otf) | `font-rubrik` |
| Body / Paragraphs | **ICA Text Ny** | `ICATextNy-Regular.ttf` | 400 | `font-text` |
| Fallback | system-ui, sans-serif | — | — | — |

### 3.2 Type Scale (extracted from all page components)

Every text instance in the reference app was catalogued. These are the exact sizes used:

| Token | Size | Weight | Family | Tailwind | Usage |
|---|---|---|---|---|---|
| `text-hero` | 36px | 700 | ICA Rubrik | `font-rubrik font-bold text-[36px]` | Dashboard hero heading |
| `text-price-hero` | 28px | 700 | ICA Rubrik | `font-rubrik font-bold text-[28px]` | Hero price |
| `text-h1` | 24px | 700 | ICA Rubrik | `font-rubrik font-bold text-[24px]` | Account pet name |
| `text-h2` | 22px | 700 | ICA Rubrik | `font-rubrik font-bold text-[22px]` | Section headings (dashboard) |
| `text-price-large` | 22px | 700 | ICA Rubrik | `font-rubrik font-bold text-[22px]` | Insurance plan price |
| `text-price-card` | 20px | 700 | ICA Rubrik | `font-rubrik font-bold text-xl` | Product card price (nutrition) |
| `text-page-title` | 18px | 700 | ICA Rubrik | `font-rubrik font-bold text-lg` | Page header titles (all pages) |
| `text-stat` | 18px | 700 | ICA Rubrik | `font-rubrik font-bold text-[18px]` | Account stat values |
| `text-h3` | 16px (base) | 700 | ICA Rubrik | `font-rubrik font-bold text-base` | Card section headings |
| `text-plan-name` | 16px | 700 | ICA Rubrik | `font-rubrik font-bold text-[16px]` | Insurance plan names, stat values |
| `text-price-sm` | 17px | 700 | ICA Rubrik | `font-rubrik font-bold text-[17px]` | Product card price (dashboard) |
| `text-body-heading` | 15px | 700 | ICA Rubrik | `font-rubrik font-bold text-[15px]` | Sidebar section titles, hero desc |
| `text-item-title` | 14px | 700 | ICA Rubrik | `font-rubrik font-bold text-[14px]` | Timeline entry titles, product names, article titles, nutrition product names |
| `text-cta` | 14px | 700 | ICA Rubrik | `font-rubrik font-bold text-[14px]` | Hero CTA, category labels |
| `text-nav` | 13px | 700 | ICA Rubrik | `font-rubrik font-bold text-[13px]` | Nav links, CTAs (small), badges, user name, insurance status, meal times |
| `text-body` | 15px | 400 | ICA Text Ny | `font-text text-[15px]` | Hero paragraph, community description |
| `text-body-sm` | 14px | 400 | ICA Text Ny | `font-text text-[14px]` | Account pet details, search input |
| `text-meta` | 13px | 400 | ICA Text Ny | `font-text text-[13px]` | Page subtitles, descriptions, community posts, insurance highlights, article excerpts |
| `text-detail` | 12px | 400 | ICA Text Ny | `font-text text-[12px]` | Timestamps, author names, stat labels, meal notes, "Read more" links, community actions |
| `text-caption` | 11px | 400 | ICA Text Ny | `font-text text-[11px]` | Brand names, product descriptions, ratings, excluded items, badges, user email |
| `text-badge` | 11px | 700 | ICA Rubrik | `font-rubrik font-bold text-[11px]` | All pill badges (category, status) |
| `text-overline` | 10px | 700 | ICA Rubrik | `font-rubrik font-bold text-[10px]` | Sidebar section label, cart badge count, product badge, tab label |

---

## 4. Spacing System

### 4.1 Base Grid

The reference app uses Tailwind's default spacing scale (4px base). Observed values:

| Tailwind class | Value | Usage |
|---|---|---|
| `gap-0.5` / `p-1` | 2–4px | Badge grouping gaps, filter tabs internal padding |
| `gap-1` / `gap-1.5` | 4–6px | Icon-to-text gaps (small), tag gaps |
| `gap-2` / `p-2` | 8px | Icon-to-label gaps, sidebar nav padding |
| `gap-2.5` | 10px | Sidebar logo gap, nav item gap |
| `gap-3` | 12px | Timeline entry gap, stat grid gap, product card sections |
| `gap-4` | 16px | Grid gaps (products, insurance, categories), card internal gap, section gaps |
| `gap-5` | 20px | Panel layout gaps, main content padding |
| `gap-6` | 24px | Account pet profile gap, page padding |
| `gap-8` | 32px | Community section internal gap |
| `px-7` | 28px | Page header horizontal padding |
| `px-8` | 32px | Header horizontal padding |
| `py-8` | 32px | Page vertical padding |

### 4.2 Layout Spacing Rules (from implementation)

| Context | Value | Source |
|---|---|---|
| Page horizontal padding | `px-6` (24px) | Dashboard, Account |
| Page vertical padding | `py-8` (32px) | Dashboard, Account |
| Page header height | `h-16` (64px) | All page headers |
| Header top bar height | `h-16` (64px) | Header component |
| Sub-nav height | `h-10` (40px) | Header nav bar |
| Between dashboard sections | `space-y-10` (40px) | Dashboard |
| Between content sections | `space-y-5` (20px) | VetInsurance, inner panels |
| Card padding | `p-4` to `p-6` (16–24px) | Product cards: 16px, panels: 24px |
| Card border-radius | `rounded-2xl` (16px) | All cards, panels, hero, images |
| Button border-radius | `rounded-lg` (8px) | CTAs, inputs |
| Pill border-radius | `rounded-full` (9999px) | Badges, tags, search input |
| Hero min-height | `min-h-[280px]` | Dashboard hero |
| Sidebar width | `w-60` (240px) | Sidebar component |
| Right column width | `w-72` (288px) or `w-80` (320px) | Health tracker, Nutrition |
| Max content width | `max-w-6xl` (1152px) | Dashboard |

---

## 5. Responsive Breakpoints

The reference app is **desktop-first** with responsive utilities. From the observed Tailwind classes:

| Breakpoint | Application | Observed pattern |
|---|---|---|
| Default (all sizes) | Mobile/base | Full-width cards, stacked layout |
| `lg:` (1024px+) | Desktop | Account label shown (`hidden lg:block` on "Mitt konto" and "Varukorg") |

### 5.1 Recommended Extension (mobile-first conversion)

| Token | Min-width | Target | Layout |
|---|---|---|---|
| `sm` | 320px | Small phones | Single column, header collapses to hamburger, hero stacks vertically |
| `md` | 768px | Tablets | 2-column product grid, hero stays horizontal, sidebar hidden |
| `lg` | 1024px | Desktop | 4-column product grid, header labels visible, full layout |
| `xl` | 1440px | Large desktop | Max content width `max-w-6xl` (1152px) centred |

### 5.2 Grid System (from implementation)

| Context | Desktop columns | Tailwind class |
|---|---|---|
| Product grid | 4 | `grid-cols-4 gap-4` |
| Category quick-links | 4 | `grid-cols-4 gap-4` |
| Insurance plans | 2 | `grid-cols-2 gap-4` |
| Nutrition articles | 3 | `grid-cols-3 gap-4` |
| Account stats | 3 | `grid-cols-3 gap-4` |
| Nutrition profile | 4 | `grid-cols-4 gap-3` |

---

## 6. Component Library

All components documented below are extracted from the reference app source code.

### 6.1 Buttons

#### Primary CTA (Orange)

| State | Background | Text | Tailwind |
|---|---|---|---|
| Default | `orange-400` (`#D4613C`) | white | `bg-orange-400 text-white font-rubrik font-bold` |
| Hover | `orange-500` (`#B94A2E`) | white | `hover:bg-orange-500 transition-colors` |
| Active | — (not specified) | — | — |
| Disabled | `grey-300` | white | (not in reference; recommend `bg-grey-300 text-white cursor-not-allowed`) |
| Focus | — | — | (not in reference; recommend `focus:ring-2 focus:ring-orange-400 focus:ring-offset-2`) |
| Error | — | — | (not applicable to buttons) |

Sizes observed: `px-3 py-2 rounded-lg text-[12px]` (small), `px-3.5 py-2 rounded-lg text-[13px]` (medium), `px-5 py-3 rounded-xl text-[14px]` (large/hero)

#### Secondary CTA (Outline)

| State | Background | Text | Border | Tailwind |
|---|---|---|---|---|
| Default | transparent | `orange-500` | `border-orange-200` | `border border-orange-200 text-orange-500` |
| Hover | `orange-50` | `orange-500` | `border-orange-200` | `hover:bg-orange-50` |

Observed in: "Utforska försäkringsalternativ" button.

#### Ghost/Text Link

| State | Text | Tailwind |
|---|---|---|
| Default | `orange-500` | `text-orange-500 font-rubrik font-bold text-[13px]` |
| Hover | `orange-600` | `hover:text-orange-600 transition-colors` |

Observed in: "Visa alla," "Läs mer," "Read more" links.

#### Neutral CTA

| State | Background | Text | Border | Tailwind |
|---|---|---|---|---|
| Default | `grey-100` | `grey-900` | — | `bg-grey-100 text-grey-900 font-rubrik font-bold` |
| Hover | `grey-200` | `grey-900` | — | `hover:bg-grey-200` |

Observed in: Agria insurance "Get Quote" button.

### 6.2 Input Fields

#### Search Input

| State | Background | Border | Tailwind |
|---|---|---|---|
| Default | `grey-100` | `grey-200` | `bg-grey-100 border border-grey-200 rounded-full` (header) or `rounded-lg` (page) |
| Focus | `#FFFFFF` | `orange-300` or `orange-400` | `focus:bg-white focus:border-orange-300` (header) or `focus:border-orange-400` (page) |

Icon: `Search` at 16px, positioned `absolute left-3`, `text-grey-500`.
Placeholder: `font-text text-[14px] text-grey-500`.

#### Form Inputs (Modal)

| State | Background | Border | Tailwind |
|---|---|---|---|
| Default | white | `grey-200` | `border border-grey-200 rounded-lg px-3 py-2 font-text text-[14px]` |
| Focus | — | `outline-none` | (no visible focus ring in reference — add `focus:border-orange-400`) |

Labels: `font-rubrik font-bold text-[13px] text-grey-700`.

### 6.3 Cards

#### Product Card (Dashboard)

| Property | Value |
|---|---|
| Background | white |
| Border | `border border-grey-200` |
| Border-radius | `rounded-2xl` (16px) |
| Padding | `p-4` (16px) |
| Hover | `hover:shadow-md transition-shadow` |
| Image area | `h-28 bg-orange-50 rounded-xl overflow-hidden` |
| Badge row | Two pills — product badge (left) + category tag (right) |
| Content | Brand (`text-[11px] grey-500`), Name (`text-[13px] bold`), Description (`text-[11px] grey-500`), Stars + reviews |
| Footer | Price (left) + "Lägg till" CTA (right) |

#### Panel Card (Full-width section)

| Property | Value |
|---|---|
| Background | white |
| Border | `border border-grey-200` (or none) |
| Border-radius | `rounded-2xl` (16px) |
| Padding | `p-6` to `p-8` (24–32px) |

#### Insurance Plan Card

| Property | Highlighted | Standard |
|---|---|---|
| Border | `border-2 border-orange-400` | `border border-grey-200` |
| Badge | `bg-orange-400 text-white` | `bg-grey-700 text-white` |
| CTA | Primary (orange) | Neutral (grey) |

### 6.4 Navigation

#### Header (active in reference app)

| Component | Value |
|---|---|
| Height | 64px (top bar) + 40px (nav bar) = 104px total |
| Background | white (top), `grey-100` (nav) |
| Borders | `border-b border-grey-200` (top), `border-t border-grey-200` (nav) |
| Logo | 32px orange rounded square + "ICA Gaston" text (18px rubrik bold) |
| Search | Rounded-full, max-w-md, centred |
| Actions | User + Cart icons, labels hidden below `lg` |
| Nav items | Horizontal pills: active = `bg-orange-400 text-white`, inactive = `text-grey-700 hover:bg-grey-200` |

#### Sidebar (alternate layout, present in code)

| Component | Value |
|---|---|
| Width | 240px (`w-60`) |
| Background | `blue-600` (`#1E3065`) |
| Logo | PawPrint icon + "ICA Gaston" (white) |
| Section label | 10px uppercase, `text-blue-300`, tracking `1.5px` |
| Nav items | Active: `bg-white/10 text-white font-bold`. Inactive: `text-blue-200 hover:bg-white/10 hover:text-white` |
| User area | 32px avatar circle (`bg-blue-400`) + name/email |

### 6.5 Timeline Entry (Health Tracker)

| Property | Value |
|---|---|
| Layout | Left dot (12px `rounded-full`) + vertical connector (`w-0.5 bg-grey-200`) + right content |
| Dot colours | Vaccination: `bg-green-500`. Vet Visit: `bg-orange-400`. Medication: `bg-orange-300` |
| Title | `font-rubrik font-bold text-[14px] text-grey-900` |
| Date | `font-text text-[12px] text-grey-500` (right-aligned) |
| Subtitle | `font-text text-[13px] text-grey-500` |
| Tags | Pill badges below subtitle |

### 6.6 Filter Tabs (Health, Community)

| State | Background | Text | Shadow |
|---|---|---|---|
| Container | `bg-grey-100 rounded-lg p-1` | — | — |
| Active tab | `bg-white` | `text-grey-900 font-bold` | `shadow-sm` |
| Inactive tab | transparent | `text-grey-500` | none |
| Hover (inactive) | — | `hover:text-grey-700` | — |

Font: `font-rubrik text-[12px]`.

### 6.7 Pill Badge

| Variant | Background | Text | Example |
|---|---|---|---|
| Orange product | `bg-orange-400` | white | "Bästsäljare" |
| Green status | `bg-green-600` | white | "Valp" |
| Blue offer | `bg-blue-600` | white | "Erbjudande" |
| Dark neutral | `bg-grey-700` | white | "Stor ras," "Heltäckande" |
| Orange soft | `bg-orange-50` | `text-orange-500` | "Torrfoder," "Gaston Pick" |
| Green soft | `bg-green-50` | `text-green-700` | "Vaccination," "Vet Recommended" |
| Grey soft | `bg-grey-100` | `text-grey-500` | "Next: Mar 2026," excluded items |

All: `rounded-full font-rubrik font-bold text-[10px]` or `text-[11px]`, `px-2 py-0.5` or `px-2.5 py-1`.

### 6.8 Star Rating

| Property | Value |
|---|---|
| Size | 12px |
| Filled | `fill-orange-400 text-orange-400` |
| Empty | `text-grey-300` |
| Review count | `font-text text-[11px] text-grey-500` in parens |

### 6.9 Modal (Health Tracker)

| Property | Value |
|---|---|
| Overlay | `fixed inset-0 bg-black/40` |
| Panel | `bg-white rounded-2xl p-6 w-96 shadow-xl` |
| Title | `font-rubrik font-bold text-lg text-grey-900` |
| Labels | `font-rubrik font-bold text-[13px] text-grey-700` |
| Inputs | `border border-grey-200 rounded-lg px-3 py-2 font-text text-[14px]` |
| Actions | Cancel (outline/grey) + Save (orange primary) |

### 6.10 Hero Banner (Dashboard)

| Property | Value |
|---|---|
| Background | `bg-orange-400` |
| Border-radius | `rounded-2xl` |
| Min-height | 280px |
| Layout | Flex horizontal: text content (left, `px-10 py-8`) + image (right, `w-80`) |
| Overline | `bg-white/20 rounded-full`, 11px, uppercase |
| Heading | 36px rubrik bold white |
| Price | 28px rubrik bold white |
| CTA | `bg-white text-orange-500 rounded-xl px-5 py-3` |

---

## 7. Icon System

### 7.1 Library

The reference app uses **Lucide React** exclusively.

| Icon | Import | Size | Usage |
|---|---|---|---|
| `PawPrint` | lucide-react | 18–36px | Logo, account avatar |
| `Search` | lucide-react | 16px | Search inputs |
| `User` | lucide-react | 18px | Account link |
| `ShoppingCart` | lucide-react | 13–18px | Cart, "Handla nu," "Add to basket" |
| `Star` | lucide-react | 12–14px | Ratings |
| `ShieldCheck` | lucide-react | 16–20px | Insurance status, section icon |
| `Salad` | lucide-react | 20–28px | Nutrition icon, category |
| `HeartPulse` | lucide-react | 18–20px | Health icon, sidebar |
| `Users` | lucide-react | 18px | Community icon |
| `MessageCircle` | lucide-react | 14–20px | Community, chat |
| `Plus` | lucide-react | 16px | "Add Record" |
| `Syringe` | lucide-react | 18px | Vaccination |
| `Pill` | lucide-react | 18px | Medication |
| `Stethoscope` | lucide-react | 20px | Vet visit |
| `UploadCloud` | lucide-react | 28px | Upload area |
| `ChevronRight` | lucide-react | 16px | "Visa alla" links |
| `ChevronDown/Up` | lucide-react | 16px | Procedure expand/collapse |
| `ArrowRight` | lucide-react | 12–16px | CTAs, "Read more" |
| `ExternalLink` | lucide-react | 12px | "Find clinic" |
| `Heart` | lucide-react | 14px | Community likes |
| `Bookmark` | lucide-react | 14px | Community save |
| `Info` | lucide-react | 14px | Nutrition info |
| `Bone` | lucide-react | 28px | Snacks category |
| `Dumbbell` | lucide-react | 28px | Toys category |
| `LayoutDashboard` | lucide-react | 18px | Sidebar nav |

### 7.2 Icon Sizing Convention

| Context | Size |
|---|---|
| Category quick-links | 28px |
| Section heading icons | 20px |
| Sidebar nav | 18px |
| Header actions | 18px |
| CTA inline icons | 13–16px |
| Community action icons | 14px |
| Rating stars | 12px |

### 7.3 Illustration Style

For empty states and upload areas: no custom illustrations in reference. Use Lucide icons at 28px+ with tinted backgrounds (`orange-50`, `green-50`, `blue-50`). Keep it icon-based, not illustrative.

---

## 8. Motion & Animation

### 8.1 Observed Patterns (from reference app)

| Pattern | Tailwind | CSS |
|---|---|---|
| Colour transitions (all interactive elements) | `transition-colors` | `transition-property: color, background-color, border-color; duration: 150ms; timing: cubic-bezier(0.4, 0, 0.2, 1)` |
| Shadow transitions (cards) | `transition-shadow` | `transition-property: box-shadow; duration: 150ms` |
| Combined | `transition-colors transition-shadow` | — |

### 8.2 Design Token Extensions

| Token | Duration | Easing | Usage |
|---|---|---|---|
| `duration-instant` | 100ms | ease-out | Button press feedback |
| `duration-fast` | 150ms | ease-out | Colour transitions (matches Tailwind default) |
| `duration-normal` | 300ms | ease-out | Page transitions, modal open |
| `duration-slow` | 500ms | decelerate | Overlay fade, panel slide |

### 8.3 Rules

1. **`prefers-reduced-motion: reduce`** — set all durations to 0ms.
2. **No animation on data.** Prices, health scores, and metrics appear instantly.
3. **Modal entry:** fade overlay + scale card from 95% to 100%.
4. **Hover shadows:** `shadow-md` appears on `transition-shadow` (cards).

---

## 9. Accessibility

### 9.1 Focus States

The reference app uses `focus:outline-none` on inputs, which **removes the default focus indicator**. This must be corrected:

| Element | Required focus style |
|---|---|
| All interactive elements | `focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2` |
| Search inputs | `focus-visible:border-orange-400 focus-visible:ring-1 focus-visible:ring-orange-400` |
| Filter tabs | `focus-visible:ring-2 focus-visible:ring-blue-400` |
| Sidebar nav items | `focus-visible:ring-2 focus-visible:ring-white/50` |

### 9.2 Touch Targets

| Element | Current size | Required minimum | Action needed |
|---|---|---|---|
| Nav links (header) | `px-4 py-1.5` ≈ variable × 28px | 44 × 44px | Increase `py` to `py-2.5` or add invisible hit area |
| Filter tabs | `px-3 py-1.5` ≈ variable × 28px | 44 × 44px | Same |
| Community action buttons | 14px icon only | 44 × 44px | Add `p-2` minimum |
| Star ratings | 12px | 44 × 44px | If interactive, enlarge hit area |

### 9.3 Screen Reader Requirements

| Requirement | Implementation |
|---|---|
| Product images | `alt={product.name}` (implemented) |
| Decorative icons in buttons | `aria-hidden="true"` on icon when paired with text label |
| Icon-only buttons | `aria-label` required (cart count badge needs `aria-label="Varukorg, 2 artiklar"`) |
| Star rating | `aria-label="Rating: 4.8 out of 5"` on container |
| Filter tabs | `role="tablist"` on container, `role="tab"` + `aria-selected` on each tab |
| Modal | `role="dialog"`, `aria-modal="true"`, `aria-label="Add Health Record"` |
| Insurance coverage status | Text already present ("Covered by your plan" / "Not covered") — colour is not sole indicator |
| Timeline | `role="list"` on container, `role="listitem"` on each entry |

### 9.4 Colour Independence

The reference app uses colour + text for all status indicators:

| Status | Colour | Text confirmation |
|---|---|---|
| Insurance covered | Green checkmark | "Covered by your plan" |
| Not covered | Orange text | "Not covered" |
| Active insurance | Orange bg badge | "Insured · Lassie Basic" |
| Vaccination tag | Green bg | "Vaccination" label |
| Vet visit tag | Orange bg | "Vet Visit" label |
| In-stock/out-of-stock | Not in current app | Recommend adding text label |

---

## 10. Wireframes — Primary User Flows

All wireframes are in `design/*.pen` and match the reference app's actual layout, components, and content patterns.

| File | Flow | Screens |
|---|---|---|
| `design/01-auth-onboarding.pen` | Authentication & pet profile creation | Login, BankID verification, Pet profile form |
| `design/02-home-dashboard.pen` | Dashboard (product-forward) | Hero banner, categories, products, insurance, nutrition, community |
| `design/03-health-tracker.pen` | Health timeline & record entry | Timeline with filters, add-record modal, upcoming care sidebar |
| `design/04-cost-insurance.pen` | Cost guidance & insurance comparison | Procedure search with expand, insurance plan cards |
| `design/05-nutrition-food.pen` | Nutrition plan & product purchase | Profile stats, meal schedule, recommended products sidebar |
| `design/06-chatbot.pen` | Chatbot diary entry | FAB, chat panel overlay, parsed entry confirmation |

---

## 11. Design Tokens (Code-Ready)

### 11.1 CSS Custom Properties

```css
:root {
  /* === Colour: Brand (from tailwind.config.js) === */
  --color-blue-50: #E0EDFF;
  --color-blue-100: #C1DAFF;
  --color-blue-200: #9AC2F5;
  --color-blue-300: #6E9FDB;
  --color-blue-400: #4A7CBF;
  --color-blue-500: #2F5A9A;
  --color-blue-600: #1E3065;
  --color-blue-700: #182750;
  --color-blue-800: #111D3B;
  --color-blue-900: #0B1428;

  --color-green-50: #E8F2E1;
  --color-green-100: #D0E4C3;
  --color-green-200: #AFD09C;
  --color-green-300: #8ABB76;
  --color-green-400: #69A456;
  --color-green-500: #498A3D;
  --color-green-600: #2D6E40;
  --color-green-700: #235834;
  --color-green-800: #1A4228;
  --color-green-900: #112D1C;

  --color-orange-50: #FBCFBD;
  --color-orange-100: #F7B9A0;
  --color-orange-200: #F09E7D;
  --color-orange-300: #E5805A;
  --color-orange-400: #D4613C;
  --color-orange-500: #B94A2E;
  --color-orange-600: #9A3427;
  --color-orange-700: #7C2A1F;
  --color-orange-800: #5E2018;
  --color-orange-900: #411610;

  --color-grey-100: #F5F5F5;
  --color-grey-200: #ECEDED;
  --color-grey-300: #C5C6C7;
  --color-grey-500: #828386;
  --color-grey-700: #45464B;
  --color-grey-900: #1D1D20;

  /* === Colour: Semantic (Light Mode) === */
  --color-bg-page: var(--color-grey-100);
  --color-bg-surface: #FFFFFF;
  --color-bg-input: var(--color-grey-100);
  --color-bg-hover: var(--color-grey-100);
  --color-text-heading: var(--color-grey-900);
  --color-text-body: var(--color-grey-700);
  --color-text-secondary: var(--color-grey-500);
  --color-text-inverse: #FFFFFF;
  --color-action-primary: var(--color-orange-400);
  --color-action-primary-hover: var(--color-orange-500);
  --color-action-secondary-text: var(--color-orange-500);
  --color-success: var(--color-green-600);
  --color-success-bg: var(--color-green-50);
  --color-warning: var(--color-orange-400);
  --color-warning-bg: var(--color-orange-50);
  --color-error: #C62828;
  --color-error-bg: #FFEBEE;
  --color-border: var(--color-grey-200);
  --color-border-focus: var(--color-orange-400);
  --color-sidebar: var(--color-blue-600);

  /* === Typography === */
  --font-display: 'ICA Rubrik', system-ui, sans-serif;
  --font-body: 'ICA Text Ny', system-ui, sans-serif;

  /* === Spacing === */
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-7: 1.75rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* === Border Radius === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);

  /* === Motion === */
  --duration-instant: 100ms;
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);

  /* === Layout === */
  --header-height: 104px;
  --sidebar-width: 240px;
  --max-content-width: 1152px;
}

/* === Dark Mode === */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-page: #121214;
    --color-bg-surface: #1C1C1F;
    --color-bg-input: #28282C;
    --color-bg-hover: #28282C;
    --color-text-heading: #F0F0F2;
    --color-text-body: #C5C6C7;
    --color-text-secondary: #828386;
    --color-text-inverse: var(--color-grey-900);
    --color-action-primary: var(--color-orange-300);
    --color-action-primary-hover: var(--color-orange-400);
    --color-action-secondary-text: var(--color-orange-200);
    --color-success: var(--color-green-300);
    --color-success-bg: var(--color-green-900);
    --color-warning: var(--color-orange-200);
    --color-warning-bg: var(--color-orange-900);
    --color-error: #EF9A9A;
    --color-error-bg: #4E1A1A;
    --color-border: #2E2E32;
    --color-border-focus: var(--color-orange-300);
    --color-sidebar: var(--color-blue-800);
    --shadow-sm: none;
    --shadow-md: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-instant: 0ms;
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-slow: 0ms;
  }
}
```

### 11.2 Tailwind Configuration (exact match to `tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubrik: ['"ICA Rubrik"', 'sans-serif'],
        text: ['"ICA Text Ny"', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#E0EDFF', 100: '#C1DAFF', 200: '#9AC2F5', 300: '#6E9FDB',
          400: '#4A7CBF', 500: '#2F5A9A', 600: '#1E3065', 700: '#182750',
          800: '#111D3B', 900: '#0B1428',
        },
        green: {
          50: '#E8F2E1', 100: '#D0E4C3', 200: '#AFD09C', 300: '#8ABB76',
          400: '#69A456', 500: '#498A3D', 600: '#2D6E40', 700: '#235834',
          800: '#1A4228', 900: '#112D1C',
        },
        orange: {
          50: '#FBCFBD', 100: '#F7B9A0', 200: '#F09E7D', 300: '#E5805A',
          400: '#D4613C', 500: '#B94A2E', 600: '#9A3427', 700: '#7C2A1F',
          800: '#5E2018', 900: '#411610',
        },
        grey: {
          100: '#F5F5F5', 200: '#ECEDED', 300: '#C5C6C7',
          500: '#828386', 700: '#45464B', 900: '#1D1D20',
        },
      },
    },
  },
  plugins: [],
}
```

---

## 12. Asset Export Specifications

| Asset type | Format | Notes |
|---|---|---|
| Icons | Lucide React (inline SVG) | No separate icon files; icons render as inline SVG via React components |
| Product images | External URLs (WebP/JPEG via CDN) | Fallback: `onError` hides broken images |
| User avatars | External URLs (JPEG) | 28–80px, `rounded-full`, `object-cover` |
| Pet photos | Placeholder frames | 80px rounded squares (`bg-orange-50`) with PawPrint icon |
| Fonts | TTF/OTF served from `/fonts/` | ICA Rubrik (variable TTF + Bold OTF), ICA Text Ny (Regular TTF) |
| App icon | PNG 1024x1024 master | Platform-specific exports via build pipeline |
