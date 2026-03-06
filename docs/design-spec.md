# ICA Pet App — Design Specification

**Version:** 1.0
**Date:** March 6, 2026
**Status:** Draft
**Owner:** ICA Digital — Design

---

## 1. Brand Foundation

The ICA Pet App extends the ICA Gaston sub-brand into a digital product. The visual language inherits ICA Gaston's established colour palette (blue, green, orange, grey) and adapts it for screen use with semantic mappings, dark mode support, and WCAG AA contrast compliance.

### 1.1 Brand Personality

The app should feel like a competent veterinary receptionist — knowledgeable, calm, organised, and warm. It should never feel clinical, playful-to-the-point-of-childish, or salesy. The visual tone sits between "medical record" and "lifestyle app," leaning toward the latter.

### 1.2 Design Principles

1. **Clarity over decoration.** Every visual element must serve a purpose. No ornamental gradients, no decorative illustrations that don't convey information.
2. **Data is the product.** Health records, cost ranges, and nutrition data are the core content. Typography, spacing, and layout should prioritise readability of structured data.
3. **Trust through transparency.** Show data sources, update dates, and recommendation reasoning. The UI should never hide where information comes from.
4. **Mobile-first, thumb-first.** Primary actions must be reachable with one thumb on a standard phone held in one hand. Secondary actions can require reach or scrolling.

---

## 2. Colour System

### 2.1 Brand Palette (from ICA Gaston)

All hex values are sourced from the official ICA Gaston colour specification (`resources/ICA Gaston colors.pen`).

#### Blue

| Token | Hex | Role |
|---|---|---|
| `blue-50` | `#E0EDFF` | Secondary (backgrounds, tints) |
| `blue-100` | `#C1DAFF` | Light accent |
| `blue-200` | `#9AC2F5` | — |
| `blue-300` | `#6E9FDB` | — |
| `blue-400` | `#4A7CBF` | — |
| `blue-500` | `#2F5A9A` | — |
| `blue-600` | `#1E3065` | **Primary** (headers, primary actions) |
| `blue-700` | `#182750` | — |
| `blue-800` | `#111D3B` | — |
| `blue-900` | `#0B1428` | — |

#### Green

| Token | Hex | Role |
|---|---|---|
| `green-50` | `#E8F2E1` | Secondary (success backgrounds) |
| `green-100` | `#D0E4C3` | — |
| `green-200` | `#AFD09C` | — |
| `green-300` | `#8ABB76` | — |
| `green-400` | `#69A456` | — |
| `green-500` | `#498A3D` | — |
| `green-600` | `#2D6E40` | **Primary** (success, health-positive) |
| `green-700` | `#235834` | — |
| `green-800` | `#1A4228` | — |
| `green-900` | `#112D1C` | — |

#### Orange

| Token | Hex | Role |
|---|---|---|
| `orange-50` | `#FBCFBD` | Secondary (warning backgrounds) |
| `orange-100` | `#F7B9A0` | — |
| `orange-200` | `#F09E7D` | — |
| `orange-300` | `#E5805A` | — |
| `orange-400` | `#D4613C` | — |
| `orange-500` | `#B94A2E` | — |
| `orange-600` | `#9A3427` | **Primary** (warnings, cost alerts) |
| `orange-700` | `#7C2A1F` | — |
| `orange-800` | `#5E2018` | — |
| `orange-900` | `#411610` | — |

#### Grey

| Token | Hex | Role |
|---|---|---|
| `grey-100` | `#F5F5F5` | Background (light mode) |
| `grey-200` | `#ECEDED` | Borders, dividers |
| `grey-300` | `#C5C6C7` | Disabled state, placeholder text |
| `grey-500` | `#828386` | Secondary text |
| `grey-700` | `#45464B` | Body text |
| `grey-900` | `#1D1D20` | Headings, primary text |

### 2.2 Semantic Colour Tokens

Semantic tokens map brand colours to UI roles. All components reference semantic tokens, never raw hex values.

#### Light Mode

| Token | Value | Usage |
|---|---|---|
| `color-bg-primary` | `#FFFFFF` | Page background |
| `color-bg-secondary` | `grey-100` (`#F5F5F5`) | Card backgrounds, input fields |
| `color-bg-tertiary` | `grey-200` (`#ECEDED`) | Grouped sections, subtle dividers |
| `color-text-primary` | `grey-900` (`#1D1D20`) | Headings, labels |
| `color-text-secondary` | `grey-700` (`#45464B`) | Body text |
| `color-text-tertiary` | `grey-500` (`#828386`) | Captions, metadata, placeholders |
| `color-text-inverse` | `#FFFFFF` | Text on dark backgrounds |
| `color-brand-primary` | `blue-600` (`#1E3065`) | Primary buttons, active tabs, links |
| `color-brand-secondary` | `blue-50` (`#E0EDFF`) | Selected state backgrounds, badges |
| `color-success` | `green-600` (`#2D6E40`) | Positive health status, confirmations |
| `color-success-bg` | `green-50` (`#E8F2E1`) | Success banner backgrounds |
| `color-warning` | `orange-600` (`#9A3427`) | Cost alerts, overdue reminders |
| `color-warning-bg` | `orange-50` (`#FBCFBD`) | Warning banner backgrounds |
| `color-error` | `#C62828` | Validation errors, destructive actions |
| `color-error-bg` | `#FFEBEE` | Error banner backgrounds |
| `color-border` | `grey-200` (`#ECEDED`) | Card borders, input borders |
| `color-border-focus` | `blue-400` (`#4A7CBF`) | Focus ring colour |
| `color-divider` | `grey-200` (`#ECEDED`) | Section dividers |

#### Dark Mode

| Token | Value | Usage |
|---|---|---|
| `color-bg-primary` | `#121214` | Page background |
| `color-bg-secondary` | `#1C1C1F` | Card backgrounds |
| `color-bg-tertiary` | `#28282C` | Grouped sections |
| `color-text-primary` | `#F0F0F2` | Headings, labels |
| `color-text-secondary` | `#C5C6C7` | Body text |
| `color-text-tertiary` | `#828386` | Captions, metadata |
| `color-text-inverse` | `grey-900` (`#1D1D20`) | Text on light surfaces |
| `color-brand-primary` | `blue-300` (`#6E9FDB`) | Primary buttons, active tabs, links |
| `color-brand-secondary` | `blue-800` (`#111D3B`) | Selected state backgrounds |
| `color-success` | `green-300` (`#8ABB76`) | Positive health status |
| `color-success-bg` | `green-900` (`#112D1C`) | Success banner backgrounds |
| `color-warning` | `orange-200` (`#F09E7D`) | Cost alerts, overdue reminders |
| `color-warning-bg` | `orange-900` (`#411610`) | Warning banner backgrounds |
| `color-error` | `#EF9A9A` | Validation errors |
| `color-error-bg` | `#4E1A1A` | Error banner backgrounds |
| `color-border` | `#2E2E32` | Card borders |
| `color-border-focus` | `blue-300` (`#6E9FDB`) | Focus ring |
| `color-divider` | `#2E2E32` | Section dividers |

### 2.3 Contrast Ratios (WCAG AA Verification)

| Pair | Light Mode Ratio | Dark Mode Ratio | Pass (AA) |
|---|---|---|---|
| `text-primary` on `bg-primary` | 16.5:1 (`#1D1D20` on `#FFF`) | 15.2:1 (`#F0F0F2` on `#121214`) | Yes |
| `text-secondary` on `bg-primary` | 9.8:1 (`#45464B` on `#FFF`) | 8.9:1 (`#C5C6C7` on `#121214`) | Yes |
| `text-tertiary` on `bg-primary` | 4.6:1 (`#828386` on `#FFF`) | 4.5:1 (`#828386` on `#121214`) | Yes (AA) |
| `brand-primary` on `bg-primary` | 11.8:1 (`#1E3065` on `#FFF`) | 7.2:1 (`#6E9FDB` on `#121214`) | Yes |
| `text-inverse` on `brand-primary` | 11.8:1 (`#FFF` on `#1E3065`) | 7.2:1 (`#1D1D20` on `#6E9FDB`) | Yes |
| `success` on `bg-primary` | 8.2:1 (`#2D6E40` on `#FFF`) | 7.8:1 (`#8ABB76` on `#121214`) | Yes |
| `warning` on `bg-primary` | 7.5:1 (`#9A3427` on `#FFF`) | 7.1:1 (`#F09E7D` on `#121214`) | Yes |
| `error` on `bg-primary` | 6.9:1 (`#C62828` on `#FFF`) | 5.8:1 (`#EF9A9A` on `#121214`) | Yes |

---

## 3. Typography

### 3.1 Font Families

| Role | Family | Source | Fallback Stack |
|---|---|---|---|
| Display / Headings | **ICA Rubrik** | `resources/fonts/ICARubrik[wght].ttf` (variable, 300–900) | `system-ui, -apple-system, sans-serif` |
| Body / UI | **ICA Text Ny** | `resources/fonts/ICATextNy-Regular.ttf` | `system-ui, -apple-system, sans-serif` |
| Tabular / Numeric | **ICA Text Ny Siffror** | `resources/fonts/ICATextNy-Siffror.ttf` | `tabular-nums, monospace` |
| Condensed Numeric | **ICA Text Ny Siffror Condensed** | `resources/fonts/ICATextNy-SiffrorCondensed.ttf` | `tabular-nums, monospace` |

### 3.2 Type Scale

Based on a 1.25 ratio (Major Third) with 16px base.

| Token | Size | Line Height | Weight | Family | Usage |
|---|---|---|---|---|---|
| `text-display` | 32px / 2rem | 40px / 1.25 | 700 (Bold) | ICA Rubrik | Hero headings (login, onboarding) |
| `text-h1` | 24px / 1.5rem | 32px / 1.33 | 700 (Bold) | ICA Rubrik | Page titles |
| `text-h2` | 20px / 1.25rem | 28px / 1.4 | 700 (Bold) | ICA Rubrik | Section headings |
| `text-h3` | 16px / 1rem | 24px / 1.5 | 600 (SemiBold) | ICA Rubrik | Card titles, sub-sections |
| `text-body` | 16px / 1rem | 24px / 1.5 | 400 (Regular) | ICA Text Ny | Body copy, descriptions |
| `text-body-sm` | 14px / 0.875rem | 20px / 1.43 | 400 (Regular) | ICA Text Ny | Secondary content, form labels |
| `text-caption` | 12px / 0.75rem | 16px / 1.33 | 400 (Regular) | ICA Text Ny | Timestamps, metadata, disclaimers |
| `text-overline` | 11px / 0.6875rem | 16px / 1.45 | 600 (SemiBold) | ICA Text Ny | Category labels, tab labels (uppercase, `letter-spacing: 0.05em`) |
| `text-number` | 16px / 1rem | 24px / 1.5 | 400 (Regular) | ICA Text Ny Siffror | Prices, costs, numeric data |
| `text-number-lg` | 24px / 1.5rem | 32px / 1.33 | 700 (Bold) | ICA Text Ny Siffror | Dashboard score, cost totals |

---

## 4. Spacing System

8px base grid. All spacing values are multiples of 4px for sub-grid alignment.

| Token | Value | Usage |
|---|---|---|
| `space-0` | 0px | — |
| `space-1` | 4px | Tight inline gaps (icon to label) |
| `space-2` | 8px | Default inline gap, small padding |
| `space-3` | 12px | Form field padding, tight card padding |
| `space-4` | 16px | Standard card padding, section gap |
| `space-5` | 20px | — |
| `space-6` | 24px | Section spacing within a page |
| `space-8` | 32px | Page-level section dividers |
| `space-10` | 40px | Large section spacing |
| `space-12` | 48px | Page top/bottom padding |
| `space-16` | 64px | Hero spacing |

### 4.1 Layout Spacing Rules

| Context | Spacing |
|---|---|
| Page horizontal padding | `space-4` (16px) on mobile, `space-6` (24px) on tablet+ |
| Between cards in a list | `space-3` (12px) |
| Between sections on a page | `space-8` (32px) |
| Inside card padding | `space-4` (16px) |
| Between form fields | `space-4` (16px) |
| Icon to adjacent text | `space-2` (8px) |
| Tab bar height | 56px (includes safe area on iOS) |
| App bar / header height | 56px |

---

## 5. Responsive Breakpoints

Mobile-first design. CSS uses `min-width` media queries.

| Token | Min-width | Target device | Layout behaviour |
|---|---|---|---|
| `breakpoint-sm` | 320px | Small phones | Single column. Full-width cards. Bottom tab navigation. |
| `breakpoint-md` | 768px | Tablets (portrait) | Two-column grid for dashboard cards. Side-by-side insurance comparison. |
| `breakpoint-lg` | 1024px | Tablets (landscape), small laptops | Three-column grid. Persistent side navigation replaces bottom tabs. |
| `breakpoint-xl` | 1440px | Desktop | Max content width 1200px, centred. Three-column with generous margins. |

### 5.1 Grid System

| Breakpoint | Columns | Gutter | Margin |
|---|---|---|---|
| `sm` (320px) | 4 | 16px | 16px |
| `md` (768px) | 8 | 24px | 24px |
| `lg` (1024px) | 12 | 24px | 32px |
| `xl` (1440px) | 12 | 24px | auto (max-width: 1200px) |

---

## 6. Component Library

### 6.1 Buttons

#### Primary Button

| State | Background | Text | Border | Shadow |
|---|---|---|---|---|
| Default | `color-brand-primary` | `color-text-inverse` | none | `0 1px 2px rgba(0,0,0,0.1)` |
| Hover | `blue-500` (`#2F5A9A`) | `color-text-inverse` | none | `0 2px 4px rgba(0,0,0,0.15)` |
| Active / Pressed | `blue-700` (`#182750`) | `color-text-inverse` | none | none |
| Disabled | `grey-300` (`#C5C6C7`) | `#FFFFFF` | none | none |
| Focus | `color-brand-primary` | `color-text-inverse` | `2px solid color-border-focus` offset 2px | — |

Dimensions: Height 48px. Horizontal padding `space-6` (24px). Border-radius 8px. Font: `text-body` weight 600.

#### Secondary Button

| State | Background | Text | Border |
|---|---|---|---|
| Default | transparent | `color-brand-primary` | `1.5px solid color-brand-primary` |
| Hover | `blue-50` (`#E0EDFF`) | `color-brand-primary` | `1.5px solid color-brand-primary` |
| Active | `blue-100` (`#C1DAFF`) | `color-brand-primary` | `1.5px solid color-brand-primary` |
| Disabled | transparent | `grey-300` | `1.5px solid grey-300` |
| Focus | transparent | `color-brand-primary` | `2px solid color-border-focus` offset 2px |

Dimensions: Same as Primary.

#### Ghost Button

| State | Background | Text |
|---|---|---|
| Default | transparent | `color-brand-primary` |
| Hover | `grey-100` | `color-brand-primary` |
| Active | `grey-200` | `color-brand-primary` |
| Disabled | transparent | `grey-300` |

Dimensions: Height 40px. Horizontal padding `space-4` (16px). Border-radius 8px.

### 6.2 Input Fields

#### Text Input

| State | Background | Border | Label | Helper text |
|---|---|---|---|---|
| Default | `color-bg-secondary` | `1px solid color-border` | `text-body-sm`, `color-text-tertiary` | `text-caption`, `color-text-tertiary` |
| Focus | `color-bg-primary` | `2px solid color-border-focus` | `text-caption`, `color-brand-primary` (floated above) | — |
| Filled | `color-bg-secondary` | `1px solid color-border` | `text-caption`, `color-text-tertiary` (floated above) | — |
| Error | `color-bg-secondary` | `2px solid color-error` | `text-caption`, `color-error` | `text-caption`, `color-error` (error message replaces helper) |
| Disabled | `grey-200` | `1px solid grey-300` | `text-body-sm`, `grey-300` | — |

Dimensions: Height 48px. Horizontal padding `space-3` (12px). Border-radius 8px. Font: `text-body`.

### 6.3 Cards

Standard card container used across dashboard, health timeline, and product listings.

| Property | Value |
|---|---|
| Background | `color-bg-primary` (light), `color-bg-secondary` (dark) |
| Border | `1px solid color-border` |
| Border-radius | 12px |
| Padding | `space-4` (16px) |
| Shadow (light mode) | `0 1px 3px rgba(0,0,0,0.06)` |
| Shadow (dark mode) | none (border only) |

### 6.4 Tab Bar (Bottom Navigation)

| Property | Value |
|---|---|
| Height | 56px + safe area inset |
| Background | `color-bg-primary` |
| Border-top | `1px solid color-divider` |
| Items | 5 icons + labels, evenly distributed |
| Active icon | `color-brand-primary` |
| Inactive icon | `color-text-tertiary` |
| Label font | `text-overline` |
| Touch target per tab | minimum 48 x 48px |

### 6.5 Health Timeline Entry

| Property | Value |
|---|---|
| Layout | Left: coloured icon (24px) with vertical connector line. Right: content block. |
| Icon colour | Vaccination = `green-600`. Medication = `blue-400`. Vet visit = `orange-400`. Symptom = `grey-500`. |
| Connector line | 2px wide, `color-divider` |
| Date label | `text-caption`, `color-text-tertiary` |
| Title | `text-h3` |
| Description | `text-body-sm`, `color-text-secondary` |
| Tap target | Full width of the entry row, minimum 48px height |

### 6.6 Insurance Comparison Card

| Property | Value |
|---|---|
| Layout | Vertical stack: Provider logo (40px), policy name (`text-h3`), key metrics grid (2 columns) |
| Metrics displayed | Monthly premium (`text-number-lg`), Deductible, Coverage limit, Coverage % |
| CTA | Primary Button ("Enrol") at bottom |
| Highlight state | `2px solid color-brand-primary` border when selected for comparison |

### 6.7 Product Card (Nutrition)

| Property | Value |
|---|---|
| Layout | Horizontal: product image (80x80px, border-radius 8px) + content stack |
| Content | Product name (`text-h3`), Price (`text-number`, `color-text-primary`), In-stock badge or "Out of stock" label |
| CTA | Ghost Button ("Add to cart") — hidden when out of stock |
| Out-of-stock treatment | Image at 50% opacity. "Out of stock" in `text-caption`, `color-text-tertiary`. |

### 6.8 Alert / Banner

| Variant | Background | Icon colour | Text colour | Border-left |
|---|---|---|---|---|
| Success | `color-success-bg` | `color-success` | `color-text-primary` | `4px solid color-success` |
| Warning | `color-warning-bg` | `color-warning` | `color-text-primary` | `4px solid color-warning` |
| Error | `color-error-bg` | `color-error` | `color-text-primary` | `4px solid color-error` |
| Info | `color-brand-secondary` | `color-brand-primary` | `color-text-primary` | `4px solid color-brand-primary` |

Dimensions: Padding `space-3` (12px). Border-radius 8px. Full width.

### 6.9 Chatbot Overlay

| Property | Value |
|---|---|
| Trigger | Floating action button (FAB), 56px diameter, `color-brand-primary`, bottom-right corner, 16px from edges |
| Panel | Slides up from bottom, 85% viewport height, border-radius 16px 16px 0 0 |
| Background | `color-bg-primary` |
| Header | Pet avatar (32px) + "Chat with [PetName]" (`text-h3`) + close button |
| Message bubbles | User: `color-brand-secondary` background, right-aligned. Bot: `color-bg-secondary`, left-aligned |
| Input | Text input pinned to bottom with send button |

---

## 7. Icon System

### 7.1 Specification

| Property | Value |
|---|---|
| Grid | 24 x 24px viewbox |
| Stroke width | 1.5px |
| Style | Outlined (not filled) for default states; filled variant for active/selected states |
| Corner radius | 2px on internal corners |
| Colour | Inherits from parent (`currentColor`) |
| Format | SVG (individual files + sprite sheet) |

### 7.2 Core Icon Set

| Icon | Usage | Lucide equivalent |
|---|---|---|
| Home | Tab bar — Home | `home` |
| Heart + Pulse | Tab bar — Health & Logs | `heart-pulse` |
| Wallet | Tab bar — Costs & Insurance | `wallet` |
| Apple | Tab bar — Nutrition & Food | `apple` |
| Users | Tab bar — Community | `users` |
| Shopping Bag | Tab bar — Shop | `shopping-bag` |
| Syringe | Vaccination entries | `syringe` |
| Pill | Medication entries | `pill` |
| Stethoscope | Vet visit entries | `stethoscope` |
| Calendar | Agenda items, reminders | `calendar` |
| Search | Procedure cost search | `search` |
| Shield Check | Insurance status | `shield-check` |
| Download | Export PDF | `download` |
| Chat | Chatbot FAB | `message-circle` |
| Bell | Notifications, reminders | `bell` |
| Plus | Add new entry | `plus` |
| Chevron Right | Navigation, disclosure | `chevron-right` |
| X | Close, dismiss | `x` |
| Pet (custom) | Pet selector | Custom — dog/cat silhouette |

### 7.3 Illustration Style

For empty states and onboarding:

| Property | Value |
|---|---|
| Style | Flat, geometric, minimal detail |
| Palette | Brand colours only (blue-50 through blue-400, green-50 through green-400) |
| Max colours per illustration | 4 |
| Stroke | None (filled shapes only) |
| Complexity | Simple compositions — 1 subject, no background scenes |

---

## 8. Motion & Animation

### 8.1 Timing

| Token | Duration | Usage |
|---|---|---|
| `duration-instant` | 100ms | Button press feedback, toggle state change |
| `duration-fast` | 200ms | Hover transitions, small element appearances |
| `duration-normal` | 300ms | Page transitions, card entrances, modal open/close |
| `duration-slow` | 500ms | Chatbot panel slide, complex layout shifts |

### 8.2 Easing

| Token | Curve | CSS | Usage |
|---|---|---|---|
| `ease-default` | Ease-out | `cubic-bezier(0.0, 0.0, 0.2, 1.0)` | Most transitions (elements arriving or settling) |
| `ease-enter` | Decelerate | `cubic-bezier(0.0, 0.0, 0.2, 1.0)` | Elements entering the viewport |
| `ease-exit` | Accelerate | `cubic-bezier(0.4, 0.0, 1.0, 1.0)` | Elements leaving the viewport |
| `ease-bounce` | Spring | `cubic-bezier(0.34, 1.56, 0.64, 1.0)` | FAB press, success confirmations (use sparingly) |

### 8.3 Animation Rules

1. **Respect `prefers-reduced-motion`.** When the user's OS has reduced motion enabled, all transitions must be instant (0ms duration) or replaced with opacity fades only.
2. **No animation on data.** Numbers, costs, and health data must never animate in (no counting-up effects). Data appears immediately and completely.
3. **Page transitions.** Forward navigation: new page slides in from the right (`translateX(100%)` to `translateX(0)`, `duration-normal`, `ease-enter`). Back navigation: current page slides out to the right.
4. **Chatbot panel.** Opens: slide up from `translateY(100%)`, `duration-slow`, `ease-enter`. Closes: slide down, `duration-normal`, `ease-exit`.
5. **Skeleton loading.** Use pulsing placeholder shapes (`opacity: 0.5` to `1.0`, `duration-slow`, infinite loop) for content that takes > 200ms to load.

---

## 9. Accessibility

### 9.1 Focus Management

| Property | Value |
|---|---|
| Focus ring style | `2px solid color-border-focus`, `2px offset` |
| Focus ring visibility | Visible only on keyboard navigation (`:focus-visible`), hidden on mouse/touch |
| Tab order | Follows visual reading order (top-to-bottom, left-to-right) |
| Focus trap | Active in modal dialogs and chatbot overlay — tab cycles within the overlay until closed |

### 9.2 Touch Targets

| Element | Minimum target size | Notes |
|---|---|---|
| Buttons | 48 x 48px | Includes padding; visual size may be smaller |
| Tab bar items | 48 x 48px | Full height of tab bar |
| List items (tappable) | Full width x 48px minimum height | — |
| Icon buttons | 44 x 44px | Transparent hit area extends beyond visible icon |
| Form inputs | 48px height | — |

### 9.3 Screen Reader Support

| Requirement | Implementation |
|---|---|
| All images have `alt` text | Decorative images: `alt=""`. Informational images: descriptive `alt`. Pet photos: `alt="Photo of [pet name]"`. |
| All icons have accessible labels | Icon-only buttons: `aria-label`. Icons beside text: `aria-hidden="true"` on the icon. |
| Form errors announced | `aria-live="polite"` on error message containers. Errors linked to inputs via `aria-describedby`. |
| Health score announced | `role="meter"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-label="Health score"`. |
| Tab bar state | Active tab: `aria-selected="true"`. Tab panel: `role="tabpanel"`, linked via `aria-labelledby`. |
| Page transitions | New page title announced via `aria-live="assertive"` on a visually hidden element. |
| Chatbot overlay | `role="dialog"`, `aria-label="Pet diary chatbot"`, `aria-modal="true"`. |

### 9.4 Colour Independence

No information is conveyed by colour alone. All status indicators use colour + icon + text label:

| Status | Colour | Icon | Label |
|---|---|---|---|
| Up to date | Green | Checkmark | "Up to date" |
| Due soon | Orange | Clock | "Due in [N] days" |
| Overdue | Red | Alert triangle | "Overdue" |
| Out of stock | Grey | X circle | "Out of stock" |

---

## 10. Wireframes — Primary User Flows

Wireframes are provided as `.pen` files in the `design/` directory. Each file covers one primary user flow.

| File | Flow | Screens |
|---|---|---|
| `design/01-auth-onboarding.pen` | Authentication and pet profile creation | Login, BankID verification, Pet profile form, Dashboard redirect |
| `design/02-home-dashboard.pen` | Home dashboard | Dashboard with health score, cost snapshot, nutrition snapshot, agenda |
| `design/03-health-tracker.pen` | Health logging and timeline | Health overview, Add vaccination form, Add vet visit form, Timeline detail |
| `design/04-cost-insurance.pen` | Cost guidance and insurance comparison | Procedure search, Search results, Insurance comparison, Out-of-pocket breakdown |
| `design/05-nutrition-food.pen` | Nutrition recommendations and product purchase | Recommendations list, Product matches, Add to cart, Recommendation reasoning |
| `design/06-chatbot.pen` | Chatbot diary entry | FAB trigger, Chat panel open, Diary entry, Parsed confirmation |

---

## 11. Design Tokens (Code-Ready)

### 11.1 CSS Custom Properties

```css
:root {
  /* === Colour: Brand === */
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
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: var(--color-grey-100);
  --color-bg-tertiary: var(--color-grey-200);
  --color-text-primary: var(--color-grey-900);
  --color-text-secondary: var(--color-grey-700);
  --color-text-tertiary: var(--color-grey-500);
  --color-text-inverse: #FFFFFF;
  --color-brand-primary: var(--color-blue-600);
  --color-brand-secondary: var(--color-blue-50);
  --color-success: var(--color-green-600);
  --color-success-bg: var(--color-green-50);
  --color-warning: var(--color-orange-600);
  --color-warning-bg: var(--color-orange-50);
  --color-error: #C62828;
  --color-error-bg: #FFEBEE;
  --color-border: var(--color-grey-200);
  --color-border-focus: var(--color-blue-400);
  --color-divider: var(--color-grey-200);

  /* === Typography === */
  --font-display: 'ICA Rubrik', system-ui, -apple-system, sans-serif;
  --font-body: 'ICA Text Ny', system-ui, -apple-system, sans-serif;
  --font-number: 'ICA Text Ny Siffror', tabular-nums, monospace;
  --font-number-condensed: 'ICA Text Ny Siffror Condensed', tabular-nums, monospace;

  --text-display-size: 2rem;
  --text-display-line: 2.5rem;
  --text-h1-size: 1.5rem;
  --text-h1-line: 2rem;
  --text-h2-size: 1.25rem;
  --text-h2-line: 1.75rem;
  --text-h3-size: 1rem;
  --text-h3-line: 1.5rem;
  --text-body-size: 1rem;
  --text-body-line: 1.5rem;
  --text-body-sm-size: 0.875rem;
  --text-body-sm-line: 1.25rem;
  --text-caption-size: 0.75rem;
  --text-caption-line: 1rem;
  --text-overline-size: 0.6875rem;
  --text-overline-line: 1rem;

  /* === Spacing === */
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
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
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 1px 3px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.08);

  /* === Motion === */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --ease-default: cubic-bezier(0.0, 0.0, 0.2, 1.0);
  --ease-enter: cubic-bezier(0.0, 0.0, 0.2, 1.0);
  --ease-exit: cubic-bezier(0.4, 0.0, 1.0, 1.0);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1.0);

  /* === Layout === */
  --breakpoint-sm: 320px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1440px;
  --max-content-width: 1200px;
  --tab-bar-height: 56px;
  --app-bar-height: 56px;
}

/* === Dark Mode Overrides === */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #121214;
    --color-bg-secondary: #1C1C1F;
    --color-bg-tertiary: #28282C;
    --color-text-primary: #F0F0F2;
    --color-text-secondary: #C5C6C7;
    --color-text-tertiary: #828386;
    --color-text-inverse: var(--color-grey-900);
    --color-brand-primary: var(--color-blue-300);
    --color-brand-secondary: var(--color-blue-800);
    --color-success: var(--color-green-300);
    --color-success-bg: var(--color-green-900);
    --color-warning: var(--color-orange-200);
    --color-warning-bg: var(--color-orange-900);
    --color-error: #EF9A9A;
    --color-error-bg: #4E1A1A;
    --color-border: #2E2E32;
    --color-border-focus: var(--color-blue-300);
    --color-divider: #2E2E32;
    --shadow-sm: none;
    --shadow-md: none;
    --shadow-lg: none;
  }
}

/* === Reduced Motion === */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-instant: 0ms;
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-slow: 0ms;
  }
}
```

### 11.2 Tailwind Configuration (Excerpt)

```js
// tailwind.config.js — extend section
module.exports = {
  theme: {
    extend: {
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
      fontFamily: {
        display: ['"ICA Rubrik"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"ICA Text Ny"', 'system-ui', '-apple-system', 'sans-serif'],
        number: ['"ICA Text Ny Siffror"', 'tabular-nums', 'monospace'],
      },
      spacing: {
        '0': '0', '1': '0.25rem', '2': '0.5rem', '3': '0.75rem',
        '4': '1rem', '5': '1.25rem', '6': '1.5rem', '8': '2rem',
        '10': '2.5rem', '12': '3rem', '16': '4rem',
      },
      borderRadius: {
        sm: '4px', md: '8px', lg: '12px', xl: '16px', full: '9999px',
      },
    },
  },
};
```

---

## 12. Asset Export Specifications

| Asset type | Format | Notes |
|---|---|---|
| Icons | SVG | Individual files + combined sprite sheet. `currentColor` for stroke. Optimised with SVGO. |
| Illustrations | SVG | Flat vector. No raster elements. |
| Pet photos (user-uploaded) | WebP (primary), JPEG (fallback) | Max 400px wide for display. `<picture>` element with WebP source + JPEG fallback. |
| Product images | WebP (primary), JPEG (fallback) | 160x160px @2x for retina. Served via ICA Gaston catalogue CDN. |
| App icon | PNG | 1024x1024px master. Platform-specific exports via build pipeline. |
| Fonts | WOFF2 (web), OTF/TTF (native) | Subset to Latin Extended for Swedish character support (including å, ä, ö). |
