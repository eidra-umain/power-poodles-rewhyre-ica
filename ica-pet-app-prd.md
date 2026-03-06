# ICA Pet App — Product Requirements Document
**Prepared by:** ICA Digital
**Date:** March 2026
**Status:** Draft
**Confidentiality:** Internal

---

## 1. Overview

The ICA Pet App is a digital pet care companion built for Swedish dog and cat owners aged 25–50. It addresses the most critical unmet needs in the Swedish pet ownership market: vet cost anxiety, fragmented health management, and pet food confusion. This PRD covers the three core problem areas prioritised for MVP, grounded in Swedish pet owner research conducted March 2026.

---

## 2. Problem Statements

### P1 — Vet Cost Anxiety & Lack of Transparency
Nine in ten Swedish pet owners worry about veterinary costs. One in three delays or avoids seeking care as a direct result. Sweden's veterinary market operates as a near-duopoly (Evidensia + AniCura) with no price regulation and no mandatory transparency. A parliamentary motion (2025/26) has been filed to address this, signalling the political urgency of the issue. The gap is not that vets are unaffordable per se — it is that costs are invisible until the bill arrives.

### P2 — Fragmented Pet Health Management
Pet owners have no single, persistent place to store and access their pet's health history — vaccinations, medications, vet visits, and preventative care schedules. This is especially acute for multi-pet households managing different schedules and insurance policies simultaneously. The result is reactive rather than preventative care, missed reminders, and lost documentation when switching vets or moving.

### P3 — Pet Food Confusion
The premium pet food market is growing rapidly but is deeply confusing to navigate. Owners cite quality (81%), price (66%), and ingredients (53%) as their top three purchase drivers — often in conflict with one another. Raw vs. dry vs. wet debates, allergy concerns, and breed-specific needs generate some of the highest-volume discussions in Swedish pet owner forums, with no trusted, personalised guidance available.

---

## 3. Goals & Success Metrics

| Goal | Metric | Target |
|---|---|---|
| Reduce vet cost anxiety | In-app survey: % reporting reduced anxiety | 20% reduction within 12 months |
| Drive insurance engagement | Insurance comparison interactions | 5,000+ in Year 1 |
| Establish habitual health tracking | Health data entries per MAU | ≥3 entries/month per active user |
| Drive food recommendation conversion | Product SKUs sold via in-app recommendation | 2,000+ in Year 1 |
| Achieve sustainable retention | Day-30 retention rate | ≥50% |
| Reach scale | Monthly active users | 20,000 within 12 months of launch |

---

## 4. User Personas

### Persona A — The Swedish Pet Owner
A dog or cat owner aged 25–50, urban or suburban, with strong smartphone habits and a regular ICA shopping routine. Middle to upper-middle income — price-sensitive, but willing to spend when value is clear. Worries about vet costs, feels uncertain about nutrition, and wants trusted advice from a source they already know. Currently cobbling together information from multiple sources with low confidence.

### Persona B — The Multi-Pet Household
A subset of Persona A — often a family or single owner with two or more cats. Faces elevated coordination overhead: multiple vaccination schedules, varying dietary needs, separate insurance policies. For this user, the value of a unified platform is immediately obvious.

---

## 5. Feature Requirements

### Feature 1 — Vet Cost Guidance & Insurance Hub

**Problem addressed:** P1

**Description:**
A tool that makes veterinary costs legible and manageable before a crisis occurs. Combines procedure pricing guidance, insurance comparison, and enrolment — all in one place.

**Functional Requirements:**
- Display typical cost ranges for common procedures and treatments, sourced from Swedish veterinary data
- Allow users to compare insurance policies from at least two Swedish insurer partners at MVP launch
- Support insurance enrolment directly within the app via partner integrations
- Surface cost guidance contextually — e.g. when a user logs a symptom or upcoming vet visit
- Include a simple "what does this typically cost?" search interface

**Non-Functional Requirements:**
- Pricing data must be reviewed and updated at minimum quarterly
- Insurance partner data must be fetched in real time or near-real time (max 24hr cache)
- Must comply with Swedish financial services regulations for comparison and referral

**Dependencies:**
- Minimum two insurance partner agreements secured before beta launch
- Legal and compliance review of cost guidance content and insurance referral flow

---

### Feature 2 — Pet Health Tracker

**Problem addressed:** P2

**Description:**
A persistent, per-pet health record that stores vaccinations, medications, vet visit history, and routine care reminders. Designed to become indispensable over time as data accumulates — reducing friction when switching vets, managing multiple pets, or handling insurance claims.

**Functional Requirements:**
- Support multiple pet profiles per user account, each with independent health records
- Allow manual logging of: vaccinations (with date, product name, next due date), medications (dose, frequency, duration), vet visits (date, clinic, reason, outcome notes)
- Generate automated reminders for upcoming vaccinations, medication refills, and scheduled check-ups
- Allow export of health records as PDF (for vet handover or insurance purposes)
- Surface a "health timeline" view per pet showing history in chronological order

**Non-Functional Requirements:**
- All health data must be stored and processed in compliance with GDPR
- Privacy-by-design architecture required — health data must not be used for advertising targeting
- Data must be exportable and deletable upon user request

**Dependencies:**
- Legal and compliance review of health data storage and processing
- GDPR-compliant data architecture signed off before beta

---

### Feature 3 — Food & Nutrition Advisor

**Problem addressed:** P3

**Description:**
A personalised feeding recommendation engine that accounts for the pet's breed, age, weight, and health status — and surfaces relevant products directly from ICA Gaston's assortment with integrated purchase. The retail context is a feature, not a conflict of interest: the right recommendation, available to buy in the same tap.

**Functional Requirements:**
- Collect pet profile data at onboarding: species, breed, age, weight, known allergies or health conditions
- Generate evidence-based feeding recommendations based on profile data
- Surface matched ICA Gaston products for each recommendation, with direct add-to-cart or purchase functionality
- Allow users to filter by preference: budget range, food type (dry/wet/raw), dietary requirements
- Update recommendations automatically when pet profile data changes (e.g. age milestone, weight update, new health condition logged)

**Non-Functional Requirements:**
- Nutritional recommendations must be reviewed by a qualified veterinary nutritionist before launch
- ICA Gaston product catalogue integration must support real-time stock and pricing data
- Recommendations engine must be auditable — users must be able to see why a product was recommended

**Dependencies:**
- ICA Gaston catalogue API integration
- Veterinary nutritionist content partnership for recommendation logic sign-off

---

## 6. Out of Scope (MVP)

The following features are identified as post-MVP and should not be included in the initial build:

- Direct vet booking and appointment management
- Pet sitter and dog walker marketplace
- Community forum and peer support features
- ICA Bonus points and loyalty programme integration
- Premium subscription tiers
- Advanced health analytics and trend detection

---

## 7. Assumptions & Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Insurance partnerships not secured before beta | Medium | High | Begin partner negotiations in Q2 2026; require minimum two signed before beta proceeds |
| Low retention signalling weak product-market fit | Medium | High | Closed beta with 500–1,000 users before public launch; fast iteration cycle built into process |
| Nutritional recommendations perceived as biased toward ICA products | Medium | Medium | All recommendations reviewed by independent veterinary nutritionist; transparency in recommendation logic |
| GDPR non-compliance on health data | Low | Critical | Legal and compliance involved from project kickoff; privacy architecture reviewed before any data collection begins |
| Veterinary pricing data becomes outdated or inaccurate | Medium | Medium | Quarterly data review process; clear UI labelling of data freshness |

---

## 8. Timeline

| Phase | Period | Key Milestones |
|---|---|---|
| Research & Partnerships | Q2 2026 | Insurance partner agreements signed; veterinary nutritionist partner confirmed; GDPR architecture reviewed |
| MVP Development | Q3 2026 | Feature build complete; closed beta launched with 500–1,000 users |
| Public Launch | Q4 2026 | iOS and Android release; ICA in-store promotion activated |
| Growth & Retention | Q1 2027 | Retention optimisation; Tier 2 features entering pipeline |
| Phase 2 | H2 2027 | Vet booking, premium subscription tiers, loyalty integration |

---

## 9. Open Questions

1. Which insurance partners are prioritised for MVP, and what is the current status of negotiations?
2. Who owns the veterinary nutritionist relationship — product, content, or ICA Gaston?
3. What is the agreed data retention policy for pet health records if a user deletes their account?
4. Will ICA Gaston product recommendations be editorially reviewed, or fully algorithm-driven at launch?
5. What is the fallback if real-time Gaston catalogue pricing is unavailable?
