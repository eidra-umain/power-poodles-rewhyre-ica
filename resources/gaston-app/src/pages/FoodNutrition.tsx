import { ShoppingCart, Info } from 'lucide-react'

const profile = [
  { label: 'Breed', value: 'Golden Retriever' },
  { label: 'Age', value: '3 years' },
  { label: 'Weight', value: '32 kg' },
  { label: 'Daily kcal', value: '1 680 kcal' },
]

const meals = [
  {
    time: 'Morning',
    timeColor: 'text-orange-500',
    bg: 'bg-orange-50',
    dot: 'bg-orange-400',
    amount: '160g',
    product: 'Royal Canin Golden Retriever Adult',
    note: '7:00 AM · dry food',
  },
  {
    time: 'Evening',
    timeColor: 'text-orange-400',
    bg: 'bg-orange-50',
    dot: 'bg-orange-300',
    amount: '160g',
    product: 'Royal Canin Golden Retriever Adult',
    note: '6:00 PM · dry food',
  },
  {
    time: 'Water',
    timeColor: 'text-grey-500',
    bg: 'bg-grey-100',
    dot: 'bg-grey-300',
    amount: '1.5L',
    product: 'Fresh water',
    note: 'All day · refill bowl',
  },
]

const products = [
  {
    img: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-retail/breed-health-nutrition/golden-retriever-adult/royal-canin-breed-health-nutrition-golden-retriever-adult-dry-dog-food-harold.jpg',
    name: 'Royal Canin Golden Retriever Adult 12kg',
    desc: 'Supports joints, coat & digestion · Tailored for Golden Retrievers',
    price: '1 009 kr',
    badge: 'Gaston Pick',
    badgeColor: 'bg-orange-50 text-orange-500',
  },
  {
    img: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&q=80',
    name: 'ICA Gaston Snacks Natural Treats 200g',
    desc: 'Low-calorie training treats · Single ingredient, grain-free',
    price: '69 kr',
    badge: 'ICA Eget Märke',
    badgeColor: 'bg-orange-50 text-orange-500',
  },
  {
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
    name: 'Nordic Omega-3 Fish Oil Supplement',
    desc: 'Supports joint mobility & shiny coat · 250ml liquid',
    price: '149 kr',
    badge: 'Vet Recommended',
    badgeColor: 'bg-green-50 text-green-700',
  },
]

export default function FoodNutrition() {
  return (
    <div className="flex flex-col h-full">
      {/* Topbar */}
      <header className="flex items-center justify-between px-7 border-b border-grey-200 bg-white h-16 shrink-0">
        <div>
          <h1 className="font-rubrik font-bold text-lg text-grey-900">Food & Nutrition</h1>
          <p className="font-text text-[13px] text-grey-500">Bjørn — Golden Retriever · 32 kg</p>
        </div>
        <button className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-orange-400 hover:bg-orange-500 transition-colors text-white font-rubrik font-bold text-[13px]">
          <ShoppingCart size={16} /> View Basket
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-hidden flex gap-5 p-6">
        {/* Left column */}
        <div className="flex flex-col gap-4 flex-1 overflow-hidden">
          {/* Pet profile stats */}
          <div className="bg-white rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-rubrik font-bold text-base text-grey-900">Nutrition Profile</h2>
              <Info size={14} className="text-grey-500" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {profile.map(({ label, value }) => (
                <div key={label} className="bg-grey-100 rounded-xl px-4 py-3 text-center">
                  <p className="font-rubrik font-bold text-[16px] text-grey-900">{value}</p>
                  <p className="font-text text-[12px] text-grey-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Meal schedule */}
          <div className="bg-white rounded-2xl p-5 flex-1 overflow-hidden flex flex-col">
            <h2 className="font-rubrik font-bold text-base text-grey-900 mb-4 shrink-0">Daily Meal Schedule</h2>
            <div className="space-y-3 overflow-y-auto flex-1">
              {meals.map(m => (
                <div key={m.time} className={`flex items-center gap-4 ${m.bg} rounded-xl px-4 py-3`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${m.dot} shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-rubrik font-bold text-[13px] ${m.timeColor}`}>{m.time}</span>
                      <span className="font-text text-[12px] text-grey-500">{m.note}</span>
                    </div>
                    <p className="font-rubrik font-bold text-[14px] text-grey-900 mt-0.5">{m.product}</p>
                  </div>
                  <span className="font-rubrik font-bold text-[16px] text-grey-900 shrink-0">{m.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — products */}
        <div className="w-80 flex flex-col gap-4 shrink-0 overflow-y-auto">
          <h2 className="font-rubrik font-bold text-base text-grey-900 shrink-0">Recommended Products</h2>
          {products.map(p => (
            <div key={p.name} className="bg-white rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded-full font-rubrik font-bold text-[11px] ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>
              <div className="h-24 bg-grey-100 rounded-xl overflow-hidden flex items-center justify-center">
                <img src={p.img} alt={p.name} className="w-full h-full object-contain p-2" onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
              </div>
              <div>
                <p className="font-rubrik font-bold text-[14px] text-grey-900">{p.name}</p>
                <p className="font-text text-[12px] text-grey-500 mt-1 leading-relaxed">{p.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-1">
                <p className="font-rubrik font-bold text-xl text-grey-900">{p.price}</p>
                <button className="px-3.5 py-2 rounded-lg bg-orange-400 hover:bg-orange-500 transition-colors text-white font-rubrik font-bold text-[13px]">
                  Add to basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
