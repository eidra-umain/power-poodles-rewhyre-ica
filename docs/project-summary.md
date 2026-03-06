# ICA Pet App — Project Summary

**Prepared:** March 2026
**Status:** MVP in development
**Owner:** ICA Digital

---

## Problem Statement

Pet ownership in Sweden is booming, but the digital experience around it is fragmented and anxiety-inducing. Three core problems define the opportunity.

**Vet cost opacity.** Nine in ten Swedish pet owners worry about veterinary costs. One in three delays or avoids care because of it. Sweden's vet market is a near-duopoly (Evidensia and AniCura) with no price regulation and no mandatory transparency. Costs are invisible until the bill arrives. A 2025/26 parliamentary motion has been filed to address this gap — signalling political urgency and a window for a private-sector solution.

**Fragmented health management.** There is no single, persistent place for a pet's health history. Vaccination records, medications, vet visit notes, and preventative care schedules are scattered across paper files, vet portals, and memory. Multi-pet households face compounded coordination overhead. The result: reactive care, missed reminders, and lost documentation when switching vets or moving.

**Pet food confusion.** The premium pet food market is growing fast but is deeply confusing. Owners cite quality (81%), price (66%), and ingredients (53%) as top purchase drivers — often in conflict. Raw vs. dry vs. wet debates, allergy concerns, and breed-specific needs dominate Swedish pet forums with no trusted, personalised guidance available.

---

## Target Audience

**Primary demographic:** Dog and cat owners aged 25–50, urban/suburban Sweden, with strong smartphone habits and a regular ICA shopping routine. Middle to upper-middle income — price-sensitive but willing to spend when value is clear.

### Personas

**The Anxious Owner.** Worried about costs and doing the "right thing." Delays vet visits because they cannot predict what it will cost. Wants reassurance and transparency above all. This persona is the primary driver behind the cost guidance and insurance comparison features.

**The Optimizer.** Wants data, tracking, and the best nutrition for their pet. Likely manages spreadsheets or notes apps to track health events. Values structured information and evidence-based recommendations. Drawn to the health tracker and nutrition advisor.

**The ICA Shopper.** Already buys human food at ICA and would welcome pet convenience in the same ecosystem. Lower friction to adopt because the brand relationship already exists. The bridge between ICA's retail strength and the pet care vertical.

**The Multi-Pet Household.** A subset across all personas — often a family or single owner with two or more cats. Faces elevated coordination overhead across vaccination schedules, dietary needs, and insurance policies. For this user, a unified platform delivers immediate, obvious value.

---

## Core Value Proposition

The ICA Pet App is a single destination that replaces the patchwork of tools, spreadsheets, and guesswork that Swedish pet owners currently rely on. It combines vet cost transparency, persistent health records, and evidence-based nutrition advice — backed by ICA's existing trust as Sweden's leading grocery retailer.

### Competitive Differentiation

The Swedish market has point solutions but no integrated platform:

| Competitor | Category | What they do well | Gap the ICA Pet App fills |
|---|---|---|---|
| Lassie | Insurance | Fast, digital-first pet insurance | No health tracking, no nutrition, no cost guidance beyond their own product |
| FirstVet | Telehealth | Video vet consultations | No persistent health records, no cost transparency for in-person care |
| Chewy | Retail / Profile | Pet profiles linked to product purchases | US-focused, no health tracking, no insurance integration |
| 11pets | Tracking | Health and care logging | No cost data, no nutrition advice, no retail integration, limited Swedish adoption |

The ICA Pet App is the only product that combines cost guidance, health tracking, and nutrition recommendations in one place — with direct purchase integration into ICA's existing retail infrastructure. ICA's brand trust, physical store network, and existing customer base (ICA Gaston pet food line) provide distribution and credibility that pure digital competitors cannot match.

### Key Hypotheses

**H1 — Cost Anxiety.** Making vet costs transparent and insurance easy to understand will reduce the anxiety that causes owners to delay care. Measured via in-app survey targeting a 20% reduction in reported anxiety within 12 months.

**H2 — Retail Trust.** Users will trust feeding recommendations from a retailer if they are backed by evidence and tailored to the pet's health profile. Measured via product conversion from in-app recommendations.

---

## Success Metrics

| Category | Metric | Year 1 Target |
|---|---|---|
| **Scale** | Monthly active users | 20,000 within 12 months of launch |
| **Retention** | Day-30 retention rate | ≥ 50% |
| **Engagement** | Health data entries per MAU | ≥ 3 entries/month per active user |
| **Cost Anxiety** | % reporting reduced anxiety (in-app survey) | 20% reduction within 12 months |
| **Insurance** | Insurance comparison interactions | 5,000+ in Year 1 |
| **Revenue** | Product SKUs sold via in-app recommendation | 2,000+ in Year 1 |

---

## Technical Constraints & Platform Requirements

### Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (App Router), React, Tailwind CSS, TypeScript |
| Backend | Node.js, Express, TypeScript |
| Authentication | BankID (Swedish national e-ID) + manual email signup fallback |

### Architecture

The app is structured around five main tabs (Home, Health & Logs, Costs & Insurance, Nutrition & Food, Community) plus a Shop section and a global chatbot overlay accessible from any screen. Full route map and screen definitions are maintained in `.claude/app-architecture.md`.

### Compliance & Data Requirements

- All health data stored and processed in GDPR compliance. Privacy-by-design architecture required — health data must not be used for advertising targeting.
- Data must be exportable and deletable on user request.
- Insurance comparison and referral flows must comply with Swedish financial services regulations.
- Nutritional recommendations must be reviewed by a qualified veterinary nutritionist before launch.
- Veterinary pricing data must be reviewed and updated at minimum quarterly, with clear UI labelling of data freshness.

### Integration Dependencies

- Minimum two Swedish insurance partner APIs (real-time or near-real-time, max 24-hour cache).
- ICA Gaston product catalogue API for real-time stock and pricing.
- BankID authentication service for Swedish national e-ID login.

---

## Timeline & Key Milestones

| Phase | Period | Milestones |
|---|---|---|
| **Research & Partnerships** | Q2 2026 | Insurance partner agreements signed. Veterinary nutritionist partner confirmed. GDPR data architecture reviewed and approved. |
| **MVP Development** | Q3 2026 | Core feature build complete (cost guidance, health tracker, nutrition advisor). Closed beta launched with 500–1,000 users. |
| **Public Launch** | Q4 2026 | iOS and Android release. ICA in-store promotion activated. |
| **Growth & Retention** | Q1 2027 | Retention optimisation based on beta and launch data. Tier 2 features entering pipeline. |
| **Phase 2** | H2 2027 | Direct vet booking. Premium subscription tiers. ICA Bonus loyalty integration. |

### Out of Scope for MVP

Direct vet booking, pet sitter/dog walker marketplace, community forum, ICA Bonus points integration, premium subscription tiers, and advanced health analytics are all deferred to post-MVP phases.

---

## Key Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Insurance partnerships not secured before beta | Medium | High | Begin negotiations Q2 2026; require two signed before beta proceeds |
| Low retention signalling weak product-market fit | Medium | High | Closed beta with 500–1,000 users; fast iteration cycle |
| Nutrition recommendations perceived as biased toward ICA products | Medium | Medium | Independent vet nutritionist review; transparent recommendation logic |
| GDPR non-compliance on health data | Low | Critical | Legal and compliance involved from kickoff; privacy architecture reviewed before data collection |
| Veterinary pricing data becomes outdated | Medium | Medium | Quarterly review process; clear freshness labelling in UI |

---

## Open Questions

1. Which insurance partners are prioritised for MVP, and what is the current status of negotiations?
2. Who owns the veterinary nutritionist relationship — product, content, or ICA Gaston?
3. What is the agreed data retention policy for pet health records on account deletion?
4. Will ICA Gaston product recommendations be editorially reviewed or fully algorithm-driven at launch?
5. What is the fallback if real-time Gaston catalogue pricing is unavailable?
