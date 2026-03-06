import { useState } from 'react'
import { Search, Star, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from 'lucide-react'

const procedures = [
  {
    name: 'Annual Vaccination',
    category: 'Preventive',
    categoryColor: 'bg-green-50 text-green-700',
    priceRange: '400–800 kr',
    avgPrice: '600 kr',
    covered: true,
  },
  {
    name: 'Blood Panel & Analysis',
    category: 'Diagnostics',
    categoryColor: 'bg-blue-50 text-blue-600',
    priceRange: '900–1 800 kr',
    avgPrice: '1 300 kr',
    covered: true,
  },
  {
    name: 'Dental Cleaning',
    category: 'Dental',
    categoryColor: 'bg-orange-50 text-orange-600',
    priceRange: '2 500–5 000 kr',
    avgPrice: '3 500 kr',
    covered: false,
  },
]

const plans = [
  {
    name: 'Lassie Basic',
    badge: 'Best Value',
    badgeColor: 'bg-green-600 text-white',
    price: '249 kr/mo',
    rating: 4.7,
    highlights: [
      'Up to 50 000 kr/year',
      'Accident & illness covered',
      'Digital vet included',
    ],
    excluded: ['Dental', 'Preventive care'],
    cta: 'Get Quote',
    ctaStyle: 'bg-orange-400 hover:bg-orange-500 text-white',
    cardStyle: 'border-2 border-orange-400',
  },
  {
    name: 'Agria Stor',
    badge: null,
    price: '399 kr/mo',
    rating: 4.5,
    highlights: [
      'Up to 100 000 kr/year',
      'Dental partially covered',
      'Rehab & physio included',
    ],
    excluded: ['Preventive care'],
    cta: 'Get Quote',
    ctaStyle: 'bg-grey-100 hover:bg-grey-200 text-grey-900',
    cardStyle: 'border border-grey-200',
  },
]

export default function VetInsurance() {
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = procedures.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full">
      {/* Topbar */}
      <header className="flex items-center justify-between px-7 border-b border-grey-200 bg-white h-16 shrink-0">
        <div>
          <h1 className="font-rubrik font-bold text-lg text-grey-900">Vet & Insurance</h1>
          <p className="font-text text-[13px] text-grey-500">Cost transparency & coverage for Bjørn</p>
        </div>
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-orange-50 border border-orange-200">
          <ShieldCheck size={16} className="text-orange-500" />
          <span className="font-rubrik font-bold text-[13px] text-orange-600">Insured · Lassie Basic</span>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        {/* Procedure cost lookup */}
        <div className="bg-white rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-rubrik font-bold text-base text-grey-900">Procedure Cost Lookup</h2>
            <span className="font-text text-[12px] text-grey-500">Based on Swedish clinic averages</span>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-500" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search procedure…"
              className="w-full pl-9 pr-4 py-2.5 border border-grey-200 rounded-lg font-text text-[14px] text-grey-900 placeholder:text-grey-500 focus:outline-none focus:border-orange-400"
            />
          </div>

          {/* Procedure list */}
          <div className="space-y-2">
            {filtered.map(p => (
              <div key={p.name} className="border border-grey-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-grey-100 transition-colors"
                  onClick={() => setExpanded(expanded === p.name ? null : p.name)}
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded-full font-rubrik font-bold text-[11px] ${p.categoryColor}`}>
                      {p.category}
                    </span>
                    <span className="font-rubrik font-bold text-[14px] text-grey-900">{p.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-rubrik font-bold text-[14px] text-grey-900">{p.priceRange}</span>
                    {expanded === p.name ? <ChevronUp size={16} className="text-grey-500" /> : <ChevronDown size={16} className="text-grey-500" />}
                  </div>
                </button>
                {expanded === p.name && (
                  <div className="px-4 pb-4 pt-1 bg-grey-100 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-text text-[13px] text-grey-500">Average cost: <span className="font-rubrik font-bold text-grey-900">{p.avgPrice}</span></p>
                      <p className="font-text text-[13px] text-grey-500">
                        Insurance coverage:{' '}
                        <span className={`font-rubrik font-bold ${p.covered ? 'text-green-600' : 'text-orange-500'}`}>
                          {p.covered ? 'Covered by your plan' : 'Not covered'}
                        </span>
                      </p>
                    </div>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-grey-200 bg-white font-rubrik font-bold text-[12px] text-grey-700 hover:bg-grey-200 transition-colors">
                      Find clinic <ExternalLink size={12} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Insurance comparison */}
        <div className="bg-white rounded-2xl p-6 space-y-4">
          <h2 className="font-rubrik font-bold text-base text-grey-900">Insurance Plans</h2>
          <div className="grid grid-cols-2 gap-4">
            {plans.map(plan => (
              <div key={plan.name} className={`rounded-xl p-5 space-y-4 ${plan.cardStyle}`}>
                <div className="flex items-center justify-between">
                  <p className="font-rubrik font-bold text-[16px] text-grey-900">{plan.name}</p>
                  {plan.badge && (
                    <span className={`px-2.5 py-1 rounded-full font-rubrik font-bold text-[11px] ${plan.badgeColor}`}>
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-end gap-1">
                  <span className="font-rubrik font-bold text-2xl text-grey-900">{plan.price}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-orange-400 fill-orange-400" />
                  <span className="font-rubrik font-bold text-[13px] text-grey-900">{plan.rating}</span>
                </div>
                <ul className="space-y-1.5">
                  {plan.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 font-text text-[13px] text-grey-700">
                      <span className="text-green-600 mt-0.5">✓</span> {h}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="font-rubrik font-bold text-[11px] text-grey-500 uppercase tracking-wide mb-1">Excluded</p>
                  <div className="flex flex-wrap gap-1">
                    {plan.excluded.map(e => (
                      <span key={e} className="px-2 py-0.5 rounded-full bg-grey-100 font-text text-[11px] text-grey-500">{e}</span>
                    ))}
                  </div>
                </div>
                <button className={`w-full py-2 rounded-lg font-rubrik font-bold text-[13px] transition-colors ${plan.ctaStyle}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
