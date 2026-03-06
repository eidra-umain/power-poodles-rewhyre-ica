import { useState } from 'react'
import { Plus, Syringe, Pill, UploadCloud } from 'lucide-react'

type Tab = 'All' | 'Vaccinations' | 'Vet Visits' | 'Medication'

const entries = [
  {
    type: 'Vaccination',
    tagColor: 'bg-green-50 text-green-700',
    dotColor: 'bg-green-500',
    title: 'Annual Vaccination — Rabies + DHPP',
    date: '15 Mar 2025',
    sub: 'Kungsholmen Djurklinik · Dr. Eriksson',
    tags: [
      { label: 'Vaccination', color: 'bg-green-50 text-green-700' },
      { label: 'Next: Mar 2026', color: 'bg-grey-100 text-grey-500' },
    ],
  },
  {
    type: 'Vet Visits',
    tagColor: 'bg-orange-50 text-orange-500',
    dotColor: 'bg-orange-400',
    title: 'Routine Check-up & Blood Panel',
    date: '12 Jan 2026',
    sub: 'AniCura Stockholm · Dr. Berg — Weight 32kg, all values normal',
    tags: [{ label: 'Vet Visit', color: 'bg-orange-50 text-orange-500' }],
  },
  {
    type: 'Medication',
    tagColor: 'bg-orange-50 text-orange-600',
    dotColor: 'bg-orange-300',
    title: 'Flea & Tick Treatment — Nexgard Spectra',
    date: '5 Nov 2025',
    sub: 'Monthly oral treatment · Next dose: 5 Dec 2025',
    tags: [{ label: 'Medication', color: 'bg-orange-50 text-orange-600' }],
  },
]

const upcoming = [
  { icon: Syringe, bg: 'bg-green-50', ic: 'text-green-600', title: 'Rabies Vaccination',  date: '20 March 2026' },
  { icon: Pill,    bg: 'bg-orange-50',ic: 'text-orange-400',title: 'Nexgard Spectra',     date: '1 April 2026' },
]

const TABS: Tab[] = ['All', 'Vaccinations', 'Vet Visits', 'Medication']

export default function HealthTracker() {
  const [tab, setTab] = useState<Tab>('All')
  const [showModal, setShowModal] = useState(false)

  const filtered = entries.filter(e =>
    tab === 'All' ? true :
    tab === 'Vaccinations' ? e.type === 'Vaccination' :
    tab === 'Vet Visits' ? e.type === 'Vet Visits' :
    e.type === 'Medication'
  )

  return (
    <div className="flex flex-col h-full">
      {/* Topbar */}
      <header className="flex items-center justify-between px-7 border-b border-grey-200 bg-white h-16 shrink-0">
        <div>
          <h1 className="font-rubrik font-bold text-lg text-grey-900">Health Tracker</h1>
          <p className="font-text text-[13px] text-grey-500">Bjørn — Golden Retriever</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-orange-400 hover:bg-orange-500 transition-colors text-white font-rubrik font-bold text-[13px]"
        >
          <Plus size={16} /> Add Record
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-hidden flex gap-5 p-6">
        {/* Timeline */}
        <div className="flex-1 bg-white rounded-2xl p-6 flex flex-col gap-5 overflow-hidden">
          {/* Header + tabs */}
          <div className="flex items-center justify-between shrink-0">
            <h2 className="font-rubrik font-bold text-base text-grey-900">Health Timeline</h2>
            <div className="flex gap-1 bg-grey-100 rounded-lg p-1">
              {TABS.map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-3 py-1.5 rounded-md font-rubrik text-[12px] transition-colors
                    ${tab === t ? 'bg-white text-grey-900 font-bold shadow-sm' : 'text-grey-500 hover:text-grey-700'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Entries */}
          <div className="overflow-y-auto flex-1 space-y-0">
            {filtered.map((e, i) => (
              <div key={e.title} className="flex gap-4 pb-5">
                {/* Dot + line */}
                <div className="flex flex-col items-center w-5 shrink-0 pt-1">
                  <div className={`w-3 h-3 rounded-full ${e.dotColor} shrink-0`} />
                  {i < filtered.length - 1 && <div className="flex-1 w-0.5 bg-grey-200 mt-1" />}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-rubrik font-bold text-[14px] text-grey-900">{e.title}</p>
                    <p className="font-text text-[12px] text-grey-500 shrink-0">{e.date}</p>
                  </div>
                  <p className="font-text text-[13px] text-grey-500 mt-0.5">{e.sub}</p>
                  <div className="flex gap-1.5 mt-2 flex-wrap">
                    {e.tags.map(tag => (
                      <span key={tag.label} className={`px-2 py-0.5 rounded-full font-rubrik font-bold text-[11px] ${tag.color}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="w-72 flex flex-col gap-4 shrink-0">
          {/* Upcoming care */}
          <div className="bg-white rounded-2xl p-5 space-y-4">
            <h3 className="font-rubrik font-bold text-[15px] text-grey-900">Upcoming Care</h3>
            {upcoming.map(({ icon: Icon, bg, ic, title, date }) => (
              <div key={title} className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                  <Icon size={18} className={ic} />
                </div>
                <div>
                  <p className="font-rubrik font-bold text-[13px] text-grey-900">{title}</p>
                  <p className="font-text text-[12px] text-grey-500">{date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Upload */}
          <div className="bg-orange-50 rounded-2xl p-5 space-y-3">
            <UploadCloud size={28} className="text-orange-400" />
            <p className="font-rubrik font-bold text-[14px] text-grey-900">Upload Vet Document</p>
            <p className="font-text text-[12px] text-grey-500 leading-relaxed">
              Add certificates, prescriptions or lab results
            </p>
            <button className="w-full py-2 rounded-lg bg-orange-400 hover:bg-orange-500 transition-colors text-white font-rubrik font-bold text-[13px]">
              Choose File
            </button>
          </div>
        </div>
      </div>

      {/* Add Record Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-6 w-96 shadow-xl space-y-4" onClick={e => e.stopPropagation()}>
            <h2 className="font-rubrik font-bold text-lg text-grey-900">Add Health Record</h2>
            <div className="space-y-3">
              <div>
                <label className="font-rubrik font-bold text-[13px] text-grey-700 block mb-1">Type</label>
                <select className="w-full border border-grey-200 rounded-lg px-3 py-2 font-text text-[14px] text-grey-900 bg-white">
                  <option>Vaccination</option>
                  <option>Vet Visit</option>
                  <option>Medication</option>
                </select>
              </div>
              <div>
                <label className="font-rubrik font-bold text-[13px] text-grey-700 block mb-1">Title</label>
                <input className="w-full border border-grey-200 rounded-lg px-3 py-2 font-text text-[14px] text-grey-900" placeholder="e.g. Annual vaccination" />
              </div>
              <div>
                <label className="font-rubrik font-bold text-[13px] text-grey-700 block mb-1">Date</label>
                <input type="date" className="w-full border border-grey-200 rounded-lg px-3 py-2 font-text text-[14px] text-grey-900" />
              </div>
              <div>
                <label className="font-rubrik font-bold text-[13px] text-grey-700 block mb-1">Notes</label>
                <textarea className="w-full border border-grey-200 rounded-lg px-3 py-2 font-text text-[14px] text-grey-900 resize-none" rows={3} placeholder="Clinic, doctor, observations..." />
              </div>
            </div>
            <div className="flex gap-3 justify-end pt-1">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg border border-grey-200 font-rubrik font-bold text-[13px] text-grey-700 hover:bg-grey-100 transition-colors">
                Cancel
              </button>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg bg-orange-400 hover:bg-orange-500 transition-colors text-white font-rubrik font-bold text-[13px]">
                Save Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
