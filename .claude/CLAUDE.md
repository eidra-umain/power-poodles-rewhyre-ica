# Project Context: ICA Pet App

You are assisting with the development of the **ICA Pet App**. This is a "super app" by ICA (the leading Swedish grocery retailer) that solves the fragmented experience of pet ownership.

**Full app architecture:** See `.claude/app-architecture.md` for the complete screen map and route structure.

## Tech Stack
- **Frontend:** Vite + React 19 + React Router v7 + Tailwind CSS + TypeScript
- **Backend:** Node.js + Express + TypeScript
- **Auth:** BankID (Sweden) + manual email signup

## App Structure (Summary)
The app has 5 main tabs + a global chatbot overlay:

| Tab | Route | Purpose |
|---|---|---|
| Home | `/` | Dashboard — health score, cost snapshot, nutrition snapshot, agenda, community feed |
| Health & Logs | `/health` | Vaccinations, medications, vet visits |
| Costs & Insurance | `/costs` | Procedure pricing, insurance comparison, out-of-pocket tracking |
| Nutrition & Food | `/nutrition` | Evidence-based feeding recs linked to ICA Gaston products |
| Community | `/community` | Breed groups, Q&A, shared experiences |
| Shop | `/shop` | Hardware (collars, trackers, etc.) |

**Chatbot (global):** Conversational daily diary that auto-creates health log entries and agenda events.

## Key Hypotheses
- **H1 (Cost Anxiety):** Making vet costs transparent and insurance easy to understand will reduce the anxiety that causes owners to delay care.
- **H2 (Retail Trust):** Users will trust feeding recommendations from a retailer if they are backed by evidence and tailored to the pet's health profile.

## Market Context
- **Region:** Sweden
- **Brand:** ICA (Retail/Grocery)
- **Competitors:** Lassie (Insurance), FirstVet (Telehealth), Chewy (Retail/Profile), 11pets (Tracking)

## User Personas
- **The Anxious Owner:** Worried about costs and doing the "right thing."
- **The Optimizer:** Wants data, tracking, and the best nutrition.
- **The ICA Shopper:** Already buys human food at ICA, looking for pet convenience.

## Style & Tone
- **Voice:** Professional but conversational. Smart colleague, not a press release.
- **Formatting:** Clear headings and bullet points.
- **Math:** KaTeX for formulas. Inline: `$x$`, Block: `$$x = y$$`
- **Don't:** Use buzzwords ("streamlined," "synergy," "holistic"). No marketing fluff.