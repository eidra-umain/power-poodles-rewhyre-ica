# Frontend Technical Design Specification

> **Stack:** Next.js 14+ (App Router) · React 18+ · TypeScript · Tailwind CSS
> **Target:** ICA Pet App — a multi-tab super app for pet ownership in Sweden

---

## 1. Component Architecture

- Component hierarchy diagram (page → layout → feature → UI primitives)
- Routing structure using Next.js App Router (`app/` directory, route groups, parallel routes, intercepting routes)
- Shared layout strategy — which layouts persist across navigations (e.g. tab bar, chatbot overlay) vs. which re-mount
- Server Components vs. Client Components — decision criteria and boundaries (where `"use client"` gets placed and why)
- Component colocation conventions — where styles, tests, types, and utilities live relative to each component
- Reusable UI component library (design system primitives: buttons, cards, inputs, modals) — built in-house with Tailwind or based on a headless library (e.g. Radix UI, Headless UI)

```
app/
├── layout.tsx              ← Root layout (tab bar, chatbot shell, providers)
├── (tabs)/
│   ├── layout.tsx          ← Persistent tab bar layout
│   ├── page.tsx            ← Home / Dashboard
│   ├── health/
│   ├── costs/
│   ├── nutrition/
│   ├── community/
│   └── shop/
├── auth/
│   ├── bankid/
│   └── signup/
└── api/                    ← Route Handlers (BFF layer)
```

**Code example — Server vs. Client boundary:**

```tsx
// app/(tabs)/health/page.tsx — Server Component (default)
import { VaccinationList } from "./vaccination-list";

export default async function HealthPage() {
  const vaccinations = await getVaccinations(); // server-side fetch
  return <VaccinationList initialData={vaccinations} />;
}

// app/(tabs)/health/vaccination-list.tsx — Client Component
"use client";
import { useState } from "react";

export function VaccinationList({ initialData }: Props) {
  const [filter, setFilter] = useState("all");
  // interactive UI logic here
}
```

---

## 2. Tech Stack Justification

For each dependency, cover: why this choice, what alternatives were considered, and the tradeoff.

| Layer | Choice | Alternatives Considered | Rationale |
|---|---|---|---|
| Framework | Next.js (App Router) | Remix, Vite + React Router | SSR/SSG flexibility, React Server Components, built-in API routes as BFF |
| Language | TypeScript (strict mode) | JavaScript | Type safety across components, API contracts, and shared types |
| Styling | Tailwind CSS | CSS Modules, styled-components, Panda CSS | Utility-first fits component-driven design; no runtime cost; design token config |
| Forms | React Hook Form + Zod | Formik, native | Performance (uncontrolled inputs), schema-based validation shared with API |
| Data Fetching | React Server Components + SWR or TanStack Query | fetch + useEffect, Apollo (if GraphQL) | RSC for initial loads; SWR/TanStack for client-side mutations and optimistic UI |
| Animation | Framer Motion | CSS transitions, React Spring | Tab transitions, chatbot slide-in, micro-interactions |
| Icons | Lucide React | Heroicons, custom SVG sprites | Tree-shakeable, consistent with Tailwind ecosystem |
| Headless UI | Radix UI | Headless UI (Tailwind Labs), Ark UI | Accessible primitives; unstyled so Tailwind applies cleanly |

---

## 3. State Management Strategy

Define what state lives where and why. Avoid a single global store when most state is server-derived.

**State categories:**

| Category | Tool | Examples |
|---|---|---|
| Server state | TanStack Query / SWR (or RSC) | Pet profiles, vaccination records, cost data, community posts |
| URL state | Next.js `searchParams`, `usePathname` | Active tab, filters, pagination, modal open state |
| Form state | React Hook Form | Signup flow, chatbot diary input, insurance comparison filters |
| UI-local state | `useState` / `useReducer` | Dropdown open, accordion expanded, animation triggers |
| Cross-cutting client state | React Context (or Zustand if complex) | Current pet selection, auth session, locale/theme, chatbot open/closed |
| Persistent client state | `localStorage` via a hook | Onboarding completed flag, dismissed tooltips, draft diary entries |

**Code example — current pet context:**

```tsx
"use client";
import { createContext, useContext, useState } from "react";

const PetContext = createContext<PetContextValue | null>(null);

export function PetProvider({ children, pets }: { children: React.ReactNode; pets: Pet[] }) {
  const [activePetId, setActivePetId] = useState(pets[0]?.id);
  const activePet = pets.find((p) => p.id === activePetId);

  return (
    <PetContext.Provider value={{ activePet, activePetId, setActivePetId, pets }}>
      {children}
    </PetContext.Provider>
  );
}

export const usePet = () => {
  const ctx = useContext(PetContext);
  if (!ctx) throw new Error("usePet must be used within PetProvider");
  return ctx;
};
```

---

## 4. API Integration Layer (BFF + Client Fetching)

- Backend-for-Frontend (BFF) pattern using Next.js Route Handlers (`app/api/`) to proxy, aggregate, and transform backend responses
- Type-safe API contracts — shared TypeScript types (or generated from OpenAPI/Swagger spec) between frontend and API layer
- Request/response schemas validated with Zod at the BFF boundary
- Client-side fetching strategy: when to use RSC `fetch` vs. client-side SWR/TanStack Query
- Optimistic updates for mutation-heavy flows (chatbot diary, community posts)
- Error response shape — standardized error envelope with codes the UI can map to user-facing messages

**Code example — typed BFF route handler:**

```tsx
// app/api/pets/[petId]/vaccinations/route.ts
import { NextRequest, NextResponse } from "next/server";
import { vaccinationResponseSchema } from "@/lib/schemas/vaccination";

export async function GET(req: NextRequest, { params }: { params: { petId: string } }) {
  const res = await fetch(`${process.env.API_URL}/pets/${params.petId}/vaccinations`, {
    headers: { Authorization: req.headers.get("authorization") ?? "" },
    next: { revalidate: 300 }, // ISR: revalidate every 5 min
  });

  if (!res.ok) return NextResponse.json({ error: "Failed to fetch" }, { status: res.status });

  const data = vaccinationResponseSchema.parse(await res.json());
  return NextResponse.json(data);
}
```

---

## 5. Authentication & Authorization (Frontend Flows)

- BankID integration flow — redirect-based or embedded SDK, polling for completion, token storage
- Email/password signup as fallback — form validation, email verification UX
- Token management — where JWTs or session cookies are stored (`httpOnly` cookies preferred over `localStorage`)
- Auth-gated routes — Next.js Middleware (`middleware.ts`) to redirect unauthenticated users before rendering
- Role-based UI rendering — conditional display based on user roles/pet ownership
- Session refresh — silent token renewal strategy, handling expired sessions gracefully

**Code example — middleware auth guard:**

```tsx
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = ["/auth/bankid", "/auth/signup", "/auth/callback"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("session")?.value;
  const isPublic = PUBLIC_ROUTES.some((r) => request.nextUrl.pathname.startsWith(r));

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/auth/bankid", request.url));
  }

  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
```

---

## 6. Error Handling & User Feedback

- Error boundary hierarchy — global boundary in root layout, per-route `error.tsx` files, per-feature boundaries for isolated failures
- `not-found.tsx` pages at route group and global levels
- Toast/notification system for transient feedback (mutations, network errors)
- Inline form validation errors (Zod + React Hook Form integration)
- Retry logic for transient network failures (built into SWR/TanStack Query with exponential backoff config)
- Graceful degradation — skeleton loaders via `loading.tsx`, fallback UI when optional features fail
- Error logging — client-side errors forwarded to an observability service (Sentry, LogRocket, or similar)

**Code example — route-level error boundary:**

```tsx
// app/(tabs)/health/error.tsx
"use client";

export default function HealthError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <p className="text-sm text-gray-600">Kunde inte ladda hälsodata.</p>
      <button onClick={reset} className="rounded-lg bg-ica-red px-4 py-2 text-white">
        Försök igen
      </button>
    </div>
  );
}
```

---

## 7. Performance Optimization

- **Code splitting:** Automatic per-route via App Router; dynamic imports (`next/dynamic`) for heavy client components (charts, rich text editors, chatbot)
- **Lazy loading:** Below-the-fold content loaded on intersection (`IntersectionObserver` or `next/dynamic` with `ssr: false`)
- **Image optimization:** `next/image` for all images — automatic WebP/AVIF, responsive `srcSet`, lazy loading, blur placeholders
- **Font optimization:** `next/font` for self-hosted fonts — no CLS from font swap
- **Bundle analysis:** `@next/bundle-analyzer` in CI to catch regressions; per-route size budgets
- **Caching strategy:**
  - RSC fetch cache with `revalidate` intervals per data type
  - SWR/TanStack Query `staleTime` and `cacheTime` tuned per query (health data = 5 min, community feed = 30 sec)
  - Static generation (`generateStaticParams`) for breed info pages, common procedure pricing
- **Rendering strategy per route:**

| Route | Strategy | Reason |
|---|---|---|
| `/` (Home) | SSR + streaming | Personalized dashboard, benefits from Suspense streaming |
| `/health` | SSR | Pet-specific, changes frequently |
| `/costs` | ISR (revalidate: 3600) | Procedure pricing updates infrequently |
| `/nutrition` | ISR + SSG for product pages | Product catalog is semi-static |
| `/community` | SSR + client-side infinite scroll | Real-time-ish content |
| `/shop` | ISR (revalidate: 600) | Product listings update periodically |

- **Core Web Vitals targets:** LCP < 2.5s, FID < 100ms, CLS < 0.1 — measured with `web-vitals` library and reported to analytics

---

## 8. Styling & Design System

- Tailwind CSS configuration — custom theme tokens (ICA brand colors, spacing scale, typography scale, border radii)
- Design token structure in `tailwind.config.ts` — maps to Figma variables if applicable
- Component variants — use `class-variance-authority` (CVA) or `tailwind-merge` + `clsx` for conditional class composition
- Responsive approach — mobile-first (min-width breakpoints); the app is primarily mobile but must work on tablet/desktop
- Dark mode — strategy decision: CSS `prefers-color-scheme` vs. manual toggle (stored in context + `localStorage`)
- Animation conventions — Framer Motion for layout animations, CSS transitions for micro-interactions (hover, focus)
- Accessibility baseline — semantic HTML, ARIA attributes on custom components (Radix handles most), focus management, color contrast ≥ 4.5:1

**Code example — CVA button variant:**

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        primary: "bg-ica-red text-white hover:bg-ica-red-dark",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "text-gray-600 hover:bg-gray-50",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export function Button({ className, variant, size, ...props }: ButtonProps & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
```

---

## 9. Security (Frontend-Specific)

- **XSS prevention:** React's default escaping; `dangerouslySetInnerHTML` banned (lint rule); DOMPurify if user-generated HTML is ever rendered (community posts)
- **CSRF:** `httpOnly` + `SameSite=Strict` cookies for auth; Next.js Route Handlers verify origin header
- **Content Security Policy:** Strict CSP headers configured in `next.config.js` — no `unsafe-inline` for scripts
- **Input validation:** All user inputs validated client-side (Zod schemas) and again server-side; never trust client-only validation
- **Dependency security:** `npm audit` in CI; Dependabot/Renovate for automated vulnerability patching
- **Sensitive data:** No tokens, API keys, or PII in client bundles; all secrets via `NEXT_PUBLIC_` env vars are limited to non-sensitive config only
- **Rate limiting:** Implemented at BFF/API level, but the frontend handles `429` responses gracefully with retry UI

---

## 10. Testing Strategy

| Layer | Tool | What's Tested |
|---|---|---|
| Unit | Vitest + React Testing Library | Component rendering, hooks, utility functions, Zod schemas |
| Integration | Vitest + MSW (Mock Service Worker) | Page-level data fetching + rendering, form submissions, auth flows |
| E2E | Playwright | Critical user journeys: signup → add pet → view dashboard → log diary entry |
| Visual regression | Playwright screenshots or Chromatic | UI consistency across changes for design system components |
| Accessibility | axe-core (via Testing Library) + Playwright | Automated a11y checks on every page |
| Performance | Lighthouse CI | Core Web Vitals regression detection per PR |

**Coverage targets:** 80%+ unit/integration, 100% of critical paths in E2E.

**Code example — component test with MSW:**

```tsx
// __tests__/health/vaccination-list.test.tsx
import { render, screen } from "@testing-library/react";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";
import HealthPage from "@/app/(tabs)/health/page";

test("displays vaccination records", async () => {
  server.use(
    http.get("/api/pets/:petId/vaccinations", () =>
      HttpResponse.json([{ id: "1", name: "Rabies", date: "2025-06-15", status: "current" }])
    )
  );

  render(await HealthPage());
  expect(await screen.findByText("Rabies")).toBeInTheDocument();
  expect(screen.getByText("2025-06-15")).toBeInTheDocument();
});
```

---

## 11. CI/CD & Deployment (Frontend)

- **Build:** `next build` with TypeScript strict checks and ESLint (`next lint`) as hard gates
- **CI pipeline (per PR):**
  1. Type check (`tsc --noEmit`)
  2. Lint (`eslint . --max-warnings 0`)
  3. Unit + integration tests (`vitest run`)
  4. E2E tests (`playwright test`) against preview deployment
  5. Bundle size check (fail if delta > threshold)
  6. Lighthouse CI (fail if Core Web Vitals regress)
- **Preview deployments:** Every PR gets a preview URL (Vercel preview or equivalent) for manual QA and stakeholder review
- **Production deployment:** Merge to `main` → automatic deploy to staging → smoke tests → promote to production
- **Rollback:** Instant rollback via Vercel's immutable deployments (or equivalent); previous deployment re-promoted in < 60 seconds
- **Feature flags:** LaunchDarkly, Unleash, or Vercel Edge Config for gradual rollouts — new features ship behind flags

---

## 12. Monitoring & Observability (Frontend)

- **Error tracking:** Sentry with source maps uploaded during build — captures unhandled exceptions, rejected promises, React error boundaries
- **Performance monitoring:** Sentry Performance or Vercel Analytics — tracks Web Vitals (LCP, FID, CLS, TTFB) per route
- **Custom metrics:** Track key user flows (time to first pet added, diary entry completion rate) via analytics events
- **Logging:** Structured client-side logs sent to the observability platform for debugging (not `console.log` in production)
- **Alerting:** Alerts on error rate spikes (> 1% of sessions), LCP degradation (> 3s p75), and deployment-correlated regressions
- **Session replay:** LogRocket or Sentry Replay for debugging user-reported issues — with PII scrubbing enabled

---

## 13. Scalability & Maintainability

- **Code organization:** Feature-based folder structure within `app/` — each route group is self-contained with its components, hooks, types, and tests
- **Shared code:** `@/lib` for utilities, `@/components/ui` for design system primitives, `@/hooks` for shared hooks — path aliases via `tsconfig.json`
- **Type generation:** API types auto-generated from OpenAPI spec (`openapi-typescript`) so frontend and backend stay in sync
- **Monorepo readiness:** Structure supports extraction into a monorepo (Turborepo) if a separate admin panel or marketing site is added later
- **i18n:** `next-intl` or similar for Swedish (primary) + English — text extracted into message files, not hardcoded
- **Contribution standards:** Documented component patterns, PR template with checklist, Storybook for visual component development

---

## 14. Accessibility

- **Standard:** WCAG 2.1 AA as baseline
- **Keyboard navigation:** All interactive elements reachable and operable via keyboard; visible focus indicators (Tailwind `focus-visible:ring-*`)
- **Screen readers:** Semantic HTML (landmarks, headings hierarchy, lists); `aria-live` regions for dynamic content (chatbot responses, toast notifications)
- **Motion:** `prefers-reduced-motion` media query respected; Framer Motion animations disabled for users who prefer reduced motion
- **Forms:** Labels associated with inputs, error messages linked via `aria-describedby`, required fields marked with `aria-required`
- **Testing:** axe-core automated checks in CI; periodic manual testing with VoiceOver/NVDA
