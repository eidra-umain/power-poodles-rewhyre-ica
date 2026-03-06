# ICA Pet App — Product Requirements Document

**Version:** 1.0
**Date:** March 6, 2026
**Status:** Draft
**Owner:** ICA Digital
**Confidentiality:** Internal

---

## 1. Executive Summary

The ICA Pet App is a mobile application for Swedish dog and cat owners that consolidates veterinary cost guidance, pet health record management, and evidence-based nutrition recommendations into a single platform. It targets three validated pain points — vet cost opacity, fragmented health data, and pet food confusion — that currently force owners to piece together information from disconnected sources.

The app leverages ICA's position as Sweden's largest grocery retailer. ICA already sells pet food through the ICA Gaston product line and has an established trust relationship with the target demographic. The app extends that relationship into pet care, creating a retention and revenue channel that no existing Swedish competitor occupies.

MVP scope covers three core features: a vet cost guidance and insurance comparison hub, a persistent pet health tracker, and a personalised food and nutrition advisor with integrated ICA Gaston product purchase. Community features, direct vet booking, and premium subscription tiers are deferred to post-MVP.

### Business Objectives

1. **Reduce vet cost anxiety.** Provide transparent procedure pricing and insurance comparison so that owners make timely care decisions rather than deferring out of uncertainty.
2. **Create a persistent health record.** Give owners a single, reliable place to store and retrieve their pet's medical history — replacing paper files, memory, and scattered vet portal logins.
3. **Convert nutrition confusion into product sales.** Deliver evidence-based feeding recommendations that map directly to purchasable ICA Gaston products, creating a measurable revenue channel.
4. **Establish ICA as the default pet care platform in Sweden.** Capture the integrated pet care platform position before a competitor assembles the same combination of features.

---

## 2. User Stories with Acceptance Criteria

### 2.1 Authentication & Onboarding

**US-01: Sign up with BankID**
As a Swedish pet owner, I want to authenticate with BankID so that I can create an account without managing another password.

Acceptance criteria:

- User can initiate BankID authentication from the login screen at `/login`.
- On successful BankID verification, the app creates a user account and redirects to `/onboarding/import`.
- If BankID verification fails or times out after 60 seconds, the app displays an error message with a retry option.
- User can alternatively choose manual email signup from the same login screen.

**US-02: Create a pet profile**
As a new user, I want to create a profile for my pet so that the app can tailor recommendations to my pet's specific needs.

Acceptance criteria:

- User can enter species (dog or cat), breed, name, date of birth, weight, known allergies, and existing health conditions.
- All fields except allergies and health conditions are required; the form cannot be submitted without them.
- On submission, the app creates the pet profile and redirects to the home dashboard at `/`.
- User can add additional pet profiles after initial onboarding (no upper limit enforced at MVP).

### 2.2 Vet Cost Guidance & Insurance

**US-03: Look up procedure costs**
As a pet owner preparing for a vet visit, I want to see estimated cost ranges for common procedures so that I can anticipate expenses before the appointment.

Acceptance criteria:

- User can search for a procedure by name at `/costs/procedures`.
- Search returns results within 2 seconds.
- Each result displays: procedure name, estimated cost range (low–high in SEK), data source, and date of last update.
- If the pricing data for a procedure is older than 90 days, the UI displays a "Data last updated [date]" label.

**US-04: Compare insurance policies**
As a pet owner evaluating insurance, I want to compare policies side by side so that I can understand what is covered before I enrol.

Acceptance criteria:

- User can view at least two insurance partner policies at `/costs/insurance`.
- Comparison displays: monthly premium, deductible, coverage limits, covered procedures, and exclusions.
- Insurance data is fetched from partner APIs and cached for no longer than 24 hours.
- User can initiate enrolment directly within the app, which redirects to the partner's enrolment flow.

**US-05: View out-of-pocket breakdown**
As a pet owner with insurance, I want to see what I actually pay after coverage so that I can budget accurately.

Acceptance criteria:

- User can view a breakdown at `/costs/out-of-pocket` showing: total estimated cost, insurance coverage amount, and remaining out-of-pocket cost.
- Breakdown updates when the user changes their insurance policy or logs a new vet visit.

### 2.3 Pet Health Tracker

**US-06: Log a vaccination**
As a pet owner, I want to record a vaccination so that I have a complete immunisation history and get reminded when the next one is due.

Acceptance criteria:

- User can log a vaccination at `/health/vaccinations` with: vaccine name, date administered, veterinary clinic, and next due date.
- On save, the vaccination appears in the pet's health timeline at `/health`.
- If a next due date is provided, the app generates a reminder notification 7 days before the due date.

**US-07: Log a vet visit**
As a pet owner, I want to record a vet visit so that I can track my pet's medical history over time.

Acceptance criteria:

- User can log a vet visit at `/health/visits` with: date, clinic name, reason for visit, outcome notes, and cost.
- Cost field is optional; all other fields are required.
- On save, the visit appears in the health timeline and the cost (if entered) is reflected in `/costs/out-of-pocket`.

**US-08: Receive care reminders**
As a pet owner with upcoming scheduled care, I want to receive reminders so that I do not miss vaccinations or medication refills.

Acceptance criteria:

- The app sends a push notification 7 days before any scheduled vaccination, medication refill, or vet appointment.
- User can view all upcoming reminders in the Agenda section on the home dashboard.
- User can dismiss or snooze a reminder for 24 hours.

**US-09: Export health records**
As a pet owner switching vets, I want to export my pet's health records as a PDF so that I can share them with a new clinic.

Acceptance criteria:

- User can export a complete health record from `/health` as a PDF file.
- The PDF contains: pet profile summary, vaccination history, medication history, and vet visit history in chronological order.
- Export completes within 10 seconds for a pet with up to 100 health entries.

### 2.4 Nutrition & Food

**US-10: View personalised feeding recommendations**
As a pet owner, I want to see feeding recommendations based on my pet's profile so that I can make informed food choices.

Acceptance criteria:

- After pet profile creation, the app displays feeding recommendations at `/nutrition/recommendations`.
- Recommendations are based on: species, breed, age, weight, and logged health conditions.
- Each recommendation includes a brief explanation of why it was suggested (e.g., "Recommended for large breeds over 5 years to support joint health").
- Recommendations update automatically within 24 hours when the pet profile is modified.

**US-11: Browse and purchase ICA Gaston products**
As an ICA shopper, I want to see matched ICA Gaston products for each recommendation so that I can buy the right food in one step.

Acceptance criteria:

- Each recommendation at `/nutrition/products` displays matched ICA Gaston products with: product name, price, in-stock status, and a product image.
- Product data (price and stock) is fetched from the ICA Gaston catalogue API in real time.
- User can add a product to their ICA shopping cart directly from the app.
- If a product is out of stock, the UI displays "Out of stock" and does not offer an add-to-cart action.

### 2.5 Chatbot

**US-12: Log a diary entry via chatbot**
As a pet owner, I want to describe my pet's day in natural language so that the app can automatically create structured health log entries without manual form-filling.

Acceptance criteria:

- User can open the chatbot overlay from any screen.
- User can type a free-text entry (e.g., "Max limped after his walk today").
- The chatbot parses the entry and creates a corresponding health log entry with: date (defaults to today), category (symptom, activity, etc.), and extracted detail.
- User can review and confirm the parsed entry before it is saved.

### 2.6 Multi-Pet Management

**US-13: Switch between pet profiles**
As a multi-pet owner, I want to switch between my pets' profiles so that I can manage each pet's health, nutrition, and costs independently.

Acceptance criteria:

- A pet selector is visible on the home dashboard and in the header of all tab views.
- Switching pets updates all displayed data (health timeline, nutrition recommendations, cost breakdown) to reflect the selected pet within 1 second.
- Each pet's data is fully independent; logging a vaccination for one pet does not affect another.

---

## 3. Functional Requirements by Priority

### P0 — Must have for MVP launch

| ID | Requirement | Rationale |
|---|---|---|
| FR-01 | BankID authentication with email signup fallback | Core access gate; BankID is the expected standard for Swedish digital services |
| FR-02 | Pet profile creation (species, breed, age, weight, allergies, conditions) | All downstream features depend on profile data |
| FR-03 | Multiple pet profiles per account with independent data | 35% of Swedish pet owners have more than one pet |
| FR-04 | Vaccination logging with date, product name, clinic, and next due date | Foundation of the health tracker value proposition |
| FR-05 | Medication logging with dose, frequency, and duration | Second most requested health tracking feature in user research |
| FR-06 | Vet visit logging with date, clinic, reason, outcome, and optional cost | Completes the health record and feeds into cost tracking |
| FR-07 | Push notification reminders for upcoming vaccinations, medications, and appointments | Primary retention mechanism; reduces missed care |
| FR-08 | Health timeline view showing all events in chronological order per pet | Core navigation pattern for the health tracker |
| FR-09 | Procedure cost lookup with estimated SEK ranges | Directly addresses the #1 validated pain point (cost anxiety) |
| FR-10 | Insurance policy comparison from at least two Swedish partners | Core to the cost anxiety hypothesis; requires two partner APIs |
| FR-11 | Insurance enrolment initiation via partner redirect | Closes the loop from comparison to action |
| FR-12 | Evidence-based feeding recommendations based on pet profile | Core to the nutrition confusion hypothesis |
| FR-13 | ICA Gaston product matching with price, stock, and add-to-cart | Core revenue channel; connects recommendation to purchase |
| FR-14 | Home dashboard with health score, cost snapshot, nutrition snapshot, and agenda | Single-screen summary that drives daily engagement |

### P1 — Should have for MVP launch, can defer to fast-follow if needed

| ID | Requirement | Rationale |
|---|---|---|
| FR-15 | Health record export as PDF | Important for vet handover; acceptable to ship in a fast-follow |
| FR-16 | Out-of-pocket cost breakdown (total cost minus insurance coverage) | Enhances cost guidance but depends on insurance data completeness |
| FR-17 | Chatbot overlay with natural-language diary entry parsing | Reduces logging friction; technically complex, acceptable to delay |
| FR-18 | Nutrition recommendation filtering by budget, food type, and dietary requirements | Enhances recommendations but not required for base functionality |
| FR-19 | Auto-updating recommendations when pet profile data changes | Quality-of-life improvement; manual refresh acceptable at launch |
| FR-20 | Contextual cost surfacing (e.g., cost estimate shown when logging a symptom) | Enhances the connection between health and cost features |

### P2 — Deferred to post-MVP

| ID | Requirement | Rationale |
|---|---|---|
| FR-21 | Community feed, breed groups, and Q&A threads | Valuable for engagement but not core to any validated hypothesis |
| FR-22 | Shop section for hardware (collars, trackers, leashes) | Revenue opportunity but not part of the core value proposition |
| FR-23 | Direct vet booking and appointment management | Requires vet partner integrations not yet in progress |
| FR-24 | ICA Bonus loyalty programme integration | Requires cross-team coordination with ICA Bonus systems |
| FR-25 | Premium subscription tiers | Requires validated retention before introducing paid tiers |
| FR-26 | Advanced health analytics and trend detection | Requires sufficient data accumulation; premature at launch |

---

## 4. Non-Functional Requirements

### 4.1 Performance

| ID | Requirement | Measurement |
|---|---|---|
| NFR-01 | Page load time (initial) | ≤ 3 seconds on a 4G connection (measured at 50th percentile) |
| NFR-02 | Page transitions (in-app navigation) | ≤ 500ms between tab views |
| NFR-03 | Search response time (procedure cost lookup) | ≤ 2 seconds from query submission to results displayed |
| NFR-04 | Insurance data fetch from partner APIs | ≤ 5 seconds; display cached data if API response exceeds timeout |
| NFR-05 | Health record PDF export | ≤ 10 seconds for a pet with up to 100 health entries |
| NFR-06 | Concurrent users | System must support 5,000 concurrent users without degradation |

### 4.2 Security

| ID | Requirement |
|---|---|
| NFR-07 | All data transmitted over HTTPS (TLS 1.2 minimum) |
| NFR-08 | BankID authentication must follow BankID's official security specification |
| NFR-09 | Pet health data encrypted at rest using AES-256 or equivalent |
| NFR-10 | API authentication via JWT tokens with a maximum 1-hour expiry |
| NFR-11 | Rate limiting on all public-facing API endpoints (maximum 100 requests per minute per user) |
| NFR-12 | Insurance partner API keys stored in a secrets manager, never in source code or environment files |

### 4.3 Privacy & Compliance

| ID | Requirement |
|---|---|
| NFR-13 | Full GDPR compliance for all personal and pet health data |
| NFR-14 | Privacy-by-design: health data must not be used for advertising targeting under any circumstance |
| NFR-15 | Users can request full data export (machine-readable format) within 30 days per GDPR Article 20 |
| NFR-16 | Users can request account and data deletion; deletion must complete within 30 days per GDPR Article 17 |
| NFR-17 | Insurance comparison and referral flows must comply with Swedish Finansinspektionen regulations |
| NFR-18 | Cookie consent and data collection consent must be collected before any non-essential data processing |

### 4.4 Accessibility

| ID | Requirement |
|---|---|
| NFR-19 | WCAG 2.1 Level AA compliance across all screens |
| NFR-20 | All interactive elements must be navigable via screen reader (VoiceOver on iOS, TalkBack on Android) |
| NFR-21 | Minimum colour contrast ratio of 4.5:1 for body text, 3:1 for large text |
| NFR-22 | All form inputs must have associated labels; error messages must be announced to assistive technology |
| NFR-23 | Touch targets must be at least 44×44 CSS pixels |

### 4.5 Reliability & Availability

| ID | Requirement |
|---|---|
| NFR-24 | 99.5% uptime measured monthly (excludes scheduled maintenance windows) |
| NFR-25 | Scheduled maintenance windows limited to 02:00–05:00 CET with 48-hour advance notice |
| NFR-26 | Automated health checks on all critical services with alerting on failure |
| NFR-27 | Database backups at minimum every 6 hours with 30-day retention |

---

## 5. Out of Scope

The following items are explicitly excluded from MVP to prevent scope creep. Each item has a designated phase for reconsideration.

| Item | Reason for exclusion | Reconsider in |
|---|---|---|
| Direct vet booking and appointment management | Requires vet clinic partner integrations not yet initiated | Phase 2 (H2 2027) |
| Pet sitter / dog walker marketplace | Two-sided marketplace is a separate product challenge | Phase 2+ |
| Community forum (breed groups, Q&A, stories) | Engagement feature, not core to validated hypotheses | Phase 2 (H2 2027) |
| ICA Bonus loyalty programme integration | Requires coordination with ICA Bonus engineering team | Phase 2 (H2 2027) |
| Premium subscription tiers | Premature before retention and engagement are validated | Phase 2 (H2 2027) |
| Advanced health analytics and trend detection | Requires accumulated data to be meaningful | Phase 2+ |
| Wearable device integrations (GPS trackers, activity monitors) | Hardware partnerships not established | Phase 2+ |
| Multi-language support beyond Swedish | Swedish-only at MVP; no localisation infrastructure yet | Post-launch evaluation |
| Telehealth / video vet consultations | Competes with established player (FirstVet); not a differentiation point | No current plan |

---

## 6. Dependencies on External Systems

| Dependency | Owner | Status | Risk if unavailable |
|---|---|---|---|
| **BankID Authentication Service** | BankID (external) | Available; integration standard is documented | Users cannot authenticate via national e-ID; email fallback available but reduces trust signal |
| **Insurance Partner API #1** | TBD (insurer) | Negotiations not started | Cannot deliver insurance comparison feature — directly blocks P0 requirement FR-10 |
| **Insurance Partner API #2** | TBD (insurer) | Negotiations not started | Cannot deliver minimum two-partner comparison — blocks FR-10 |
| **ICA Gaston Product Catalogue API** | ICA Retail (internal) | API exists; integration scope not defined | Cannot display real-time pricing or stock for nutrition recommendations — degrades FR-13 |
| **Push Notification Service** | Internal (Firebase / APNs) | Standard infrastructure | Reminders cannot be delivered — degrades FR-07 and retention |
| **Veterinary Pricing Data Source** | TBD (data partner or manual curation) | Not established | Cannot deliver procedure cost lookup — blocks FR-09 |
| **Veterinary Nutritionist Review** | TBD (content partner) | Not established | Nutrition recommendations cannot launch without clinical sign-off — blocks FR-12 |

### Critical Path Dependencies

Two dependencies gate the entire MVP timeline:

1. **Insurance partner agreements** (minimum two) must be signed before beta launch in Q3 2026. If unsigned by end of Q2 2026, the beta must either proceed without insurance comparison (de-scoping FR-10 and FR-11) or delay.
2. **Veterinary nutritionist sign-off** on recommendation logic must be complete before any nutrition feature goes live. If unavailable by Q3 2026, the nutrition advisor must either launch with disclaimer labelling or defer.

---

## 7. Success Metrics & KPIs

### Primary KPIs

| KPI | Definition | Target | Measurement method | Review cadence |
|---|---|---|---|---|
| Monthly Active Users (MAU) | Unique users who open the app at least once in a calendar month | 20,000 within 12 months of public launch | Analytics platform (e.g., Mixpanel, Amplitude) | Monthly |
| Day-30 Retention | % of new users who return to the app 30 days after first use | ≥ 50% | Cohort analysis | Monthly |
| Health Entries per MAU | Average number of health log entries (vaccinations, medications, vet visits) per monthly active user | ≥ 3 per month | Backend event logging | Monthly |
| Cost Anxiety Reduction | % of surveyed users reporting reduced anxiety about vet costs compared to baseline | 20% reduction within 12 months | In-app survey (baseline at onboarding, follow-up at 6 and 12 months) | Quarterly |

### Secondary KPIs

| KPI | Definition | Target | Measurement method | Review cadence |
|---|---|---|---|---|
| Insurance Comparison Interactions | Number of times users view the insurance comparison screen | 5,000+ in Year 1 | Screen view analytics | Monthly |
| Nutrition Product Conversions | Number of ICA Gaston SKUs added to cart via in-app recommendation | 2,000+ in Year 1 | Add-to-cart event logging | Monthly |
| Chatbot Diary Entries | Number of natural-language diary entries submitted via chatbot (P1 feature) | 1,000+ in first 6 months post-launch | Chatbot event logging | Monthly |
| NPS Score | Net Promoter Score from in-app survey | ≥ 40 | In-app survey at Day 30 and Day 90 | Quarterly |
| Crash-Free Sessions | % of app sessions that complete without a crash | ≥ 99.5% | Crash reporting tool (e.g., Sentry, Crashlytics) | Weekly |

### Hypothesis Validation

| Hypothesis | Validated if | Invalidated if |
|---|---|---|
| H1 — Cost Anxiety | ≥ 15% of surveyed users report reduced anxiety at 6-month mark AND insurance comparison interactions exceed 2,500 in first 6 months | < 5% report reduced anxiety at 6-month mark OR < 500 insurance comparison interactions in first 6 months |
| H2 — Retail Trust | ≥ 30% of users who view nutrition recommendations also view matched ICA Gaston products AND ≥ 5% add a product to cart | < 10% of recommendation viewers also view products OR < 1% add to cart |

---

## 8. Risk Assessment & Mitigation

| # | Risk | Likelihood | Impact | Mitigation | Owner | Trigger for escalation |
|---|---|---|---|---|---|---|
| R1 | Insurance partner agreements not signed by end of Q2 2026 | Medium | High | Begin negotiations immediately; engage at least four insurers to secure two. Prepare fallback: MVP launches without insurance comparison; feature added in fast-follow. | Partnerships lead | No signed agreement by June 1, 2026 |
| R2 | Day-30 retention below 50% in closed beta | Medium | High | Run closed beta with 500–1,000 users for 8 weeks minimum. Instrument all engagement events for analysis. Allocate 2 sprint cycles for retention-focused iteration before public launch. | Product lead | Day-30 retention below 35% in beta Week 4 |
| R3 | Nutrition recommendations perceived as biased toward ICA products | Medium | Medium | All recommendation logic reviewed and signed off by independent veterinary nutritionist. Recommendation UI shows reasoning ("Recommended because…") for every suggestion. Non-ICA products are not excluded from recommendations at MVP. | Product + Content | NPS verbatim feedback mentions bias in > 10% of responses |
| R4 | GDPR non-compliance discovered in health data handling | Low | Critical | Legal and compliance team involved from project kickoff. Privacy architecture formally reviewed and signed off before any data collection begins. Data Protection Impact Assessment (DPIA) completed before beta. | Legal lead | Any finding from DPIA or compliance review |
| R5 | Veterinary pricing data becomes stale or inaccurate | Medium | Medium | Quarterly data review process with defined owner. UI displays "Last updated [date]" on all pricing data. Automated alert if any pricing record exceeds 90 days without review. | Content lead | User-reported pricing inaccuracy rate exceeds 5% |
| R6 | ICA Gaston catalogue API unavailable or unreliable | Low | Medium | Implement 4-hour cache fallback for product data. Display "Prices may not reflect current availability" when serving cached data. Monitor API uptime; escalate if availability drops below 99%. | Engineering lead | API uptime below 99% in any 7-day window |
| R7 | BankID service outage blocks all authentication | Low | High | Email signup fallback is always available. BankID-authenticated users can access the app offline with cached session tokens (1-hour expiry). Monitor BankID status page. | Engineering lead | BankID outage exceeding 2 hours |
| R8 | Veterinary nutritionist partnership not secured | Medium | High | Begin outreach in Q2 2026 with at least three candidates. Prepare fallback: launch nutrition feature with generic (non-personalised) recommendations and "General guidance — not tailored to your pet" disclaimer. | Content lead | No signed agreement by July 15, 2026 |

---

## Appendix A: Glossary

| Term | Definition |
|---|---|
| BankID | Sweden's national electronic identification system, used for authentication in banking, government, and commercial applications |
| ICA Gaston | ICA's private-label pet food and pet care product line |
| MAU | Monthly Active Users — unique users who open the app at least once in a calendar month |
| DPIA | Data Protection Impact Assessment — a GDPR-mandated evaluation of data processing activities that may pose risks to individuals' rights |
| Finansinspektionen | Sweden's financial supervisory authority; regulates insurance comparison and referral activities |
| SKU | Stock Keeping Unit — a unique identifier for each distinct product in the ICA Gaston catalogue |

## Appendix B: Related Documents

| Document | Location | Purpose |
|---|---|---|
| Project Summary | `docs/project-summary.md` | High-level project overview, market context, and timeline |
| App Architecture | `.claude/app-architecture.md` | Complete screen map, route definitions, and component descriptions |
| Project Context | `.claude/CLAUDE.md` | Development conventions, tech stack, and style guidelines |
