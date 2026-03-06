# ICA Pet App — Screen & Route Architecture

This document maps every screen in the app to a route and describes its purpose. Use this as the source of truth when building pages, components, or API endpoints.

---

## Auth Flow

| Screen | Route | Description |
|---|---|---|
| Splash / Login | `/login` | Entry point. BankID auth or manual email signup. |
| Auto Import | `/onboarding/import` | Post-BankID: auto-imports pet profile and insurance data from linked sources. |
| Create Pet Profile | `/onboarding/create` | Manual path: user enters breed, age, weight, conditions, insurance info. |

---

## Main App (Tab Navigation)

### Home — `/`
The dashboard. Gives a quick pulse on everything.

| Section | Description |
|---|---|
| Pet Summary + Health Score | Name, photo, breed, computed health score. |
| Insurance & Vet Cost Snapshot | Current coverage status, upcoming cost estimates. |
| Nutrition Snapshot | Current feeding plan, any alerts. |
| Agenda | Next vaccine, medication, vet visit — chronological. |
| Mini Feed | Top community highlights (1-2 posts). |

---

### Health & Logs — `/health`

| Sub-screen | Route | Description |
|---|---|---|
| Overview | `/health` | Timeline of all health events. |
| Vaccinations | `/health/vaccinations` | Vaccine records + upcoming schedule. |
| Medications | `/health/medications` | Active and past medications. |
| Vet Visits | `/health/visits` | Visit history with notes and costs. |

---

### Costs & Insurance — `/costs`

| Sub-screen | Route | Description |
|---|---|---|
| Overview | `/costs` | Total spend, insurance vs. out-of-pocket breakdown. |
| Procedure Pricing | `/costs/procedures` | Estimated costs for common procedures by region. |
| Insurance Overlay | `/costs/insurance` | Side-by-side comparison of what insurance covers vs. total cost. |
| Out-of-Pocket | `/costs/out-of-pocket` | What the user actually pays after coverage. |

---

### Nutrition & Food — `/nutrition`

| Sub-screen | Route | Description |
|---|---|---|
| Overview | `/nutrition` | Current feeding plan based on pet profile. |
| Pet-Profile Recommendations | `/nutrition/recommendations` | Evidence-based food suggestions tailored to breed, age, weight, conditions. |
| ICA Gaston Products | `/nutrition/products` | Matched products from ICA's assortment. |
| Add to Cart | `/nutrition/cart` | Direct link to ICA shopping cart. |

---

### Community — `/community`

| Sub-screen | Route | Description |
|---|---|---|
| Overview | `/community` | Feed of posts and discussions. |
| Breed Groups | `/community/breeds` | Breed-specific channels. |
| Q&A Threads | `/community/qa` | Question and answer format. |
| Shared Experiences | `/community/stories` | User stories and tips. |

---

### Shop — `/shop`

| Sub-screen | Route | Description |
|---|---|---|
| Overview | `/shop` | Product categories. |
| Hardware | `/shop/hardware` | Collars, trackers, leashes, etc. |

---

## Global Overlay

### Chatbot — accessible from any screen

| Feature | Description |
|---|---|
| Daily Diary | Conversational input ("Took Max to the park, he limped a bit"). |
| Auto-Log | Parses diary entries into structured health log entries. |
| Auto-Agenda | Detects scheduling intent and creates agenda events. |