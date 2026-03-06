export type Locale = 'sv' | 'en'

const translations = {
  // ─── Header & Nav ──────────────────────────────────────────────
  'nav.products': { sv: 'Produkter', en: 'Products' },
  'nav.insurance': { sv: 'Försäkring', en: 'Insurance' },
  'nav.nutrition': { sv: 'Nutrition', en: 'Nutrition' },
  'nav.community': { sv: 'Community', en: 'Community' },
  'header.myAccount': { sv: 'Mitt konto', en: 'My Account' },
  'header.cart': { sv: 'Varukorg', en: 'Cart' },
  'header.searchPlaceholder': { sv: 'Sök produkter, varumärken...', en: 'Search products, brands...' },
  'header.switchLanguage': { sv: 'Byt till engelska', en: 'Switch to Swedish' },

  // ─── Sidebar ───────────────────────────────────────────────────
  'sidebar.menu': { sv: 'Meny', en: 'Menu' },
  'sidebar.dashboard': { sv: 'Översikt', en: 'Dashboard' },
  'sidebar.healthTracker': { sv: 'Hälsospårare', en: 'Health Tracker' },
  'sidebar.vetInsurance': { sv: 'Veterinär & Försäkring', en: 'Vet & Insurance' },
  'sidebar.foodNutrition': { sv: 'Mat & Nutrition', en: 'Food & Nutrition' },
  'sidebar.community': { sv: 'Community', en: 'Community' },

  // ─── Dashboard ─────────────────────────────────────────────────
  'dash.newFormula': { sv: 'Ny formula', en: 'New Formula' },
  'dash.heroTitle': { sv: 'Premium näring\nför din bästa vän', en: 'Premium nutrition\nfor your best friend' },
  'dash.heroDesc': { sv: 'Royal Canin Golden Retriever Adult — nu med förbättrad formel för ledstöd och pälshälsa.', en: 'Royal Canin Golden Retriever Adult — now with improved formula for joint support and coat health.' },
  'dash.shopNow': { sv: 'Handla nu', en: 'Shop Now' },
  'dash.popularProducts': { sv: 'Populära produkter', en: 'Popular Products' },
  'dash.viewAll': { sv: 'Visa alla', en: 'View All' },
  'dash.addToCart': { sv: 'Lägg till', en: 'Add' },
  'dash.addToCartAria': { sv: 'Lägg till {name} i varukorgen', en: 'Add {name} to cart' },
  'dash.petInsurance': { sv: 'Djurförsäkring', en: 'Pet Insurance' },
  'dash.insuranceDesc': { sv: 'Skydda ditt husdjur mot oväntade veterinärkostnader. Välj ett plan som passar din budget.', en: 'Protect your pet against unexpected vet costs. Choose a plan that fits your budget.' },
  'dash.exploreInsurance': { sv: 'Utforska försäkringsalternativ', en: 'Explore Insurance Options' },
  'dash.getQuote': { sv: 'Få offert', en: 'Get Quote' },
  'dash.foodNutrition': { sv: 'Mat & Nutrition', en: 'Food & Nutrition' },
  'dash.viewNutritionAdvice': { sv: 'Visa nutritionsråd', en: 'View Nutrition Advice' },
  'dash.readMore': { sv: 'Läs mer', en: 'Read More' },
  'dash.community': { sv: 'Community', en: 'Community' },
  'dash.communityDesc': { sv: 'Träffa andra djurägare, få expertråd och dela med dig av din resa som husdjursägare.', en: 'Meet other pet owners, get expert advice and share your pet ownership journey.' },
  'dash.joinCommunity': { sv: 'Gå med i communityn', en: 'Join the Community' },
  'dash.likes': { sv: 'gillar', en: 'likes' },

  // Dashboard categories
  'cat.dryFood': { sv: 'Torrfoder', en: 'Dry Food' },
  'cat.toys': { sv: 'Leksaker', en: 'Toys' },
  'cat.snacks': { sv: 'Snacks', en: 'Snacks' },
  'cat.health': { sv: 'Hälsa', en: 'Health' },

  // Dashboard product descriptions
  'prod.desc1': { sv: '12 kg — för hundar från 15 månader', en: '12 kg — for dogs from 15 months' },
  'prod.desc2': { sv: '12 kg — för valpar upp till 15 månader', en: '12 kg — for puppies up to 15 months' },
  'prod.desc3': { sv: '4 kg — för medelstora hundar 12–84 månader', en: '4 kg — for medium dogs 12–84 months' },
  'prod.desc4': { sv: '15 kg — för stora hundar 15 månader–5 år', en: '15 kg — for large dogs 15 months–5 years' },

  // Dashboard badges
  'badge.bestseller': { sv: 'Bästsäljare', en: 'Bestseller' },
  'badge.puppy': { sv: 'Valp', en: 'Puppy' },
  'badge.offer': { sv: 'Erbjudande', en: 'Offer' },
  'badge.largeBreed': { sv: 'Stor ras', en: 'Large Breed' },
  'badge.mostPopular': { sv: 'Populärast', en: 'Most Popular' },
  'badge.comprehensive': { sv: 'Heltäckande', en: 'Comprehensive' },

  // Dashboard insurance plans
  'ins.lassieHighlight': { sv: 'Upp till 50 000 kr/år', en: 'Up to 50 000 kr/year' },
  'ins.lassiePerk1': { sv: 'Olycksfall & sjukdom', en: 'Accident & illness' },
  'ins.lassiePerk2': { sv: 'Digital veterinär inkl.', en: 'Digital vet included' },
  'ins.lassiePerk3': { sv: 'Medicin täckt', en: 'Medicine covered' },
  'ins.agriaHighlight': { sv: 'Upp till 100 000 kr/år', en: 'Up to 100 000 kr/year' },
  'ins.agriaPerk1': { sv: 'Fullständig sjukdom & olycka', en: 'Full illness & accident' },
  'ins.agriaPerk2': { sv: 'Tandvård delvis täckt', en: 'Dental partially covered' },
  'ins.agriaPerk3': { sv: 'Rehab & fysioterapi', en: 'Rehab & physiotherapy' },

  // Dashboard nutrition articles
  'art.title1': { sv: 'Hur mycket ska en Golden Retriever äta?', en: 'How much should a Golden Retriever eat?' },
  'art.desc1': { sv: 'Daglig utfodringsguide baserat på ålder, vikt och aktivitetsnivå.', en: 'Daily feeding guide based on age, weight and activity level.' },
  'art.tag1': { sv: 'Utfodringsguide', en: 'Feeding Guide' },
  'art.title2': { sv: 'Spannmålsfritt vs. spannmål — vad säger forskningen?', en: 'Grain-free vs. grain — what does the research say?' },
  'art.desc2': { sv: 'Vad den senaste veterinärforskningen faktiskt säger om spannmålsfria dieter.', en: 'What the latest veterinary research actually says about grain-free diets.' },
  'art.tag2': { sv: 'Forskning', en: 'Research' },
  'art.title3': { sv: 'Håll din hund hydrerad på sommaren', en: 'Keep your dog hydrated in summer' },
  'art.desc3': { sv: 'Tecken på uttorkning och hur mycket vatten din hund behöver dagligen.', en: 'Signs of dehydration and how much water your dog needs daily.' },
  'art.tag3': { sv: 'Hälsa', en: 'Health' },

  // Dashboard community posts
  'post.content1': { sv: 'Bjorn klarade sitt första off-leash recall på 50m efter 8 månaders träning!', en: 'Bjorn completed his first off-leash recall at 50m after 8 months of training!' },
  'post.time1': { sv: '2h sedan', en: '2h ago' },
  'post.content2': { sv: 'Är det bara min Golden som plötsligt är rädd för dammsugaren?', en: 'Is it just my Golden who is suddenly scared of the vacuum cleaner?' },
  'post.time2': { sv: '5h sedan', en: '5h ago' },

  // ─── Health Tracker ────────────────────────────────────────────
  'health.title': { sv: 'Hälsospårare', en: 'Health Tracker' },
  'health.addRecord': { sv: 'Lägg till post', en: 'Add Record' },
  'health.timeline': { sv: 'Hälsotidslinje', en: 'Health Timeline' },
  'health.all': { sv: 'Alla', en: 'All' },
  'health.vaccinations': { sv: 'Vaccinationer', en: 'Vaccinations' },
  'health.vetVisits': { sv: 'Veterinärbesök', en: 'Vet Visits' },
  'health.medication': { sv: 'Mediciner', en: 'Medication' },
  'health.upcomingCare': { sv: 'Kommande vård', en: 'Upcoming Care' },
  'health.uploadDoc': { sv: 'Ladda upp veterinärdokument', en: 'Upload Vet Document' },
  'health.uploadDesc': { sv: 'Lägg till intyg, recept eller labbresultat', en: 'Add certificates, prescriptions or lab results' },
  'health.chooseFile': { sv: 'Välj fil', en: 'Choose File' },
  'health.addHealthRecord': { sv: 'Lägg till hälsopost', en: 'Add Health Record' },
  'health.type': { sv: 'Typ', en: 'Type' },
  'health.titleField': { sv: 'Titel', en: 'Title' },
  'health.date': { sv: 'Datum', en: 'Date' },
  'health.notes': { sv: 'Anteckningar', en: 'Notes' },
  'health.titlePlaceholder': { sv: 't.ex. Årlig vaccination', en: 'e.g. Annual vaccination' },
  'health.notesPlaceholder': { sv: 'Klinik, läkare, observationer...', en: 'Clinic, doctor, observations...' },
  'health.cancel': { sv: 'Avbryt', en: 'Cancel' },
  'health.saveRecord': { sv: 'Spara post', en: 'Save Record' },

  // ─── Vet & Insurance ──────────────────────────────────────────
  'vet.title': { sv: 'Veterinär & Försäkring', en: 'Vet & Insurance' },
  'vet.subtitle': { sv: 'Kostnadstransparens & täckning för Bjørn', en: 'Cost transparency & coverage for Bjørn' },
  'vet.insured': { sv: 'Försäkrad · Lassie Basic', en: 'Insured · Lassie Basic' },
  'vet.procedureLookup': { sv: 'Sök procedurskostnad', en: 'Procedure Cost Lookup' },
  'vet.basedOn': { sv: 'Baserat på svenska klinikgenomsnitt', en: 'Based on Swedish clinic averages' },
  'vet.searchProcedure': { sv: 'Sök procedur...', en: 'Search procedure...' },
  'vet.avgCost': { sv: 'Genomsnittskostnad:', en: 'Average cost:' },
  'vet.insuranceCoverage': { sv: 'Försäkringstäckning:', en: 'Insurance coverage:' },
  'vet.covered': { sv: 'Täckt av ditt plan', en: 'Covered by your plan' },
  'vet.notCovered': { sv: 'Ej täckt', en: 'Not covered' },
  'vet.findClinic': { sv: 'Hitta klinik', en: 'Find clinic' },
  'vet.insurancePlans': { sv: 'Försäkringsplaner', en: 'Insurance Plans' },
  'vet.excluded': { sv: 'Ej inkluderat', en: 'Excluded' },
  'vet.getQuote': { sv: 'Få offert', en: 'Get Quote' },

  // ─── Food & Nutrition ──────────────────────────────────────────
  'food.title': { sv: 'Mat & Nutrition', en: 'Food & Nutrition' },
  'food.viewBasket': { sv: 'Visa varukorg', en: 'View Basket' },
  'food.nutritionProfile': { sv: 'Näringsprofil', en: 'Nutrition Profile' },
  'food.breed': { sv: 'Ras', en: 'Breed' },
  'food.age': { sv: 'Ålder', en: 'Age' },
  'food.weight': { sv: 'Vikt', en: 'Weight' },
  'food.dailyKcal': { sv: 'Dagligt kcal', en: 'Daily kcal' },
  'food.years': { sv: '3 år', en: '3 years' },
  'food.mealSchedule': { sv: 'Dagligt matschema', en: 'Daily Meal Schedule' },
  'food.morning': { sv: 'Morgon', en: 'Morning' },
  'food.evening': { sv: 'Kväll', en: 'Evening' },
  'food.water': { sv: 'Vatten', en: 'Water' },
  'food.morningNote': { sv: '7:00 · torrfoder', en: '7:00 AM · dry food' },
  'food.eveningNote': { sv: '18:00 · torrfoder', en: '6:00 PM · dry food' },
  'food.waterNote': { sv: 'Hela dagen · fyll på skålen', en: 'All day · refill bowl' },
  'food.freshWater': { sv: 'Färskt vatten', en: 'Fresh water' },
  'food.recommendedProducts': { sv: 'Rekommenderade produkter', en: 'Recommended Products' },
  'food.addToBasket': { sv: 'Lägg i varukorg', en: 'Add to basket' },

  // ─── Community ─────────────────────────────────────────────────
  'comm.title': { sv: 'Rådgivning & Community', en: 'Guidance & Community' },
  'comm.subtitle': { sv: 'Expertråd och djurägarberättelser', en: 'Expert advice and pet owner stories' },
  'comm.expertArticles': { sv: 'Expertartiklar', en: 'Expert Articles' },
  'comm.all': { sv: 'Alla', en: 'All' },
  'comm.behaviour': { sv: 'Beteende', en: 'Behaviour' },
  'comm.training': { sv: 'Träning', en: 'Training' },
  'comm.nutrition': { sv: 'Nutrition', en: 'Nutrition' },
  'comm.readMore': { sv: 'Läs mer', en: 'Read more' },
  'comm.communityPosts': { sv: 'Community-inlägg', en: 'Community Posts' },

  // ─── Account ───────────────────────────────────────────────────
  'account.nextVaccination': { sv: 'Nästa vaccination', en: 'Next vaccination' },
  'account.lastVetVisit': { sv: 'Senaste veterinärbesök', en: 'Last vet visit' },
  'account.overallHealth': { sv: 'Allmän hälsa', en: 'Overall health' },
  'account.good': { sv: 'Bra', en: 'Good' },
  'account.days': { sv: '14 dagar', en: '14 days' },
  'account.placeholder': { sv: 'Hälsospårare, vaccinationsregister & påminnelser', en: 'Health Tracker, Vaccination Records & Reminders' },
  'account.placeholderDesc': { sv: 'Fullständig hälsohistorik och hantering för ditt husdjur finns här i Mitt konto.', en: 'Full pet health history and management lives here in My Account.' },
} as const

export type TranslationKey = keyof typeof translations

export default translations
