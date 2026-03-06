import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Salad,
  MessageCircle,
  ChevronRight,
  CalendarDays,
  Syringe,
  Pill,
  Stethoscope,
  Heart,
  Dog,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

// ─── Health Score Ring ────────────────────────────────────────────────────────

function HealthScoreRing({ score }: { score: number }) {
  const radius = 40
  const stroke = 6
  const circumference = 2 * Math.PI * radius
  const progress = (score / 100) * circumference
  const color = score >= 80 ? 'text-green-500' : score >= 60 ? 'text-orange-400' : 'text-red-500'
  const strokeColor = score >= 80 ? '#22c55e' : score >= 60 ? '#fb923c' : '#ef4444'

  return (
    <div className="relative flex items-center justify-center w-[100px] h-[100px]">
      <svg width="100" height="100" className="-rotate-90">
        <circle
          cx="50" cy="50" r={radius}
          fill="none" stroke="#f3f4f6" strokeWidth={stroke}
        />
        <circle
          cx="50" cy="50" r={radius}
          fill="none" stroke={strokeColor} strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className={`font-rubrik font-bold text-[24px] ${color}`}>{score}</span>
        <span className="font-text text-[10px] text-grey-500">/100</span>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const { t } = useLanguage()

  const pet = {
    name: 'Bjorn',
    breed: 'Golden Retriever',
    age: '3 years',
    weight: '32 kg',
    healthScore: 87,
    photo: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&q=80',
  }

  const insurance = {
    provider: 'Lassie',
    plan: 'Bas',
    status: t('dash.insured'),
    monthlyPremium: '249 kr/mån',
    nextCost: t('dash.annualVaccination'),
    nextCostAmount: '~600 kr',
  }

  const nutrition = {
    food: 'Royal Canin Golden Retriever Adult',
    dailyAmount: '320g/dag',
    schedule: t('dash.feedingSchedule'),
    alerts: null as string | null,
  }

  const agenda = [
    {
      Icon: Syringe,
      label: t('dash.agendaVaccination'),
      date: '20 mar 2026',
      color: 'bg-orange-50 text-orange-500',
      iconColor: 'text-orange-400',
    },
    {
      Icon: Pill,
      label: t('dash.agendaMedication'),
      date: '1 apr 2026',
      color: 'bg-blue-50 text-blue-600',
      iconColor: 'text-blue-400',
    },
    {
      Icon: Stethoscope,
      label: t('dash.agendaVetVisit'),
      date: '15 apr 2026',
      color: 'bg-green-50 text-green-700',
      iconColor: 'text-green-500',
    },
  ]

  const communityPosts = [
    { avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80', user: 'Maja S.', time: t('post.time1'), content: t('post.content1'), likes: 24 },
    { avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80', user: 'Lars P.', time: t('post.time2'), content: t('post.content2'), likes: 11 },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">

      {/* ── 1. Pet Summary + Health Score ──────────────────────────────── */}
      <section className="bg-white rounded-2xl border border-grey-200 p-6">
        <div className="flex items-center gap-6">
          {/* Photo */}
          <div className="w-24 h-24 rounded-2xl bg-orange-50 overflow-hidden shrink-0">
            <img
              src={pet.photo}
              alt={pet.name}
              className="w-full h-full object-cover"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <Dog size={18} className="text-orange-400" />
              <h1 className="font-rubrik font-bold text-[28px] text-grey-900">{pet.name}</h1>
            </div>
            <div className="flex items-center gap-4 font-text text-[14px] text-grey-500">
              <span>{pet.breed}</span>
              <span className="text-grey-300">|</span>
              <span>{pet.age}</span>
              <span className="text-grey-300">|</span>
              <span>{pet.weight}</span>
            </div>
          </div>

          {/* Health Score */}
          <div className="flex flex-col items-center gap-1 shrink-0">
            <HealthScoreRing score={pet.healthScore} />
            <span className="font-rubrik font-bold text-[12px] text-grey-500">{t('dash.healthScore')}</span>
          </div>
        </div>
      </section>

      {/* ── 2 + 3. Insurance & Nutrition side-by-side ─────────────────── */}
      <div className="grid grid-cols-2 gap-6">

        {/* Insurance & Vet Cost Snapshot */}
        <section className="bg-white rounded-2xl border border-grey-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-orange-400" />
              <h2 className="font-rubrik font-bold text-[18px] text-grey-900">{t('dash.insuranceCosts')}</h2>
            </div>
            <Link
              to="/costs"
              className="flex items-center gap-1 min-h-[44px] font-rubrik font-bold text-[12px] text-orange-500 hover:text-orange-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {t('dash.viewAll')} <ChevronRight size={14} />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-green-50 font-rubrik font-bold text-[11px] text-green-700">
              {insurance.status}
            </span>
            <span className="font-text text-[13px] text-grey-700">
              {insurance.provider} {insurance.plan}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-grey-100 rounded-xl p-3 space-y-1">
              <p className="font-text text-[11px] text-grey-500">{t('dash.monthlyPremium')}</p>
              <p className="font-rubrik font-bold text-[18px] text-grey-900">{insurance.monthlyPremium}</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-3 space-y-1">
              <p className="font-text text-[11px] text-grey-500">{t('dash.nextEstimatedCost')}</p>
              <p className="font-rubrik font-bold text-[14px] text-grey-900">{insurance.nextCost}</p>
              <p className="font-rubrik font-bold text-[16px] text-orange-500">{insurance.nextCostAmount}</p>
            </div>
          </div>
        </section>

        {/* Nutrition Snapshot */}
        <section className="bg-white rounded-2xl border border-grey-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Salad size={18} className="text-green-600" />
              <h2 className="font-rubrik font-bold text-[18px] text-grey-900">{t('dash.nutritionSnapshot')}</h2>
            </div>
            <Link
              to="/nutrition"
              className="flex items-center gap-1 min-h-[44px] font-rubrik font-bold text-[12px] text-orange-500 hover:text-orange-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              {t('dash.viewAll')} <ChevronRight size={14} />
            </Link>
          </div>

          <div className="space-y-2">
            <p className="font-rubrik font-bold text-[14px] text-grey-900">{nutrition.food}</p>
            <div className="flex items-center gap-3 font-text text-[13px] text-grey-600">
              <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-rubrik font-bold text-[11px]">
                {nutrition.dailyAmount}
              </span>
              <span>{nutrition.schedule}</span>
            </div>
          </div>

          {nutrition.alerts ? (
            <div className="bg-red-50 rounded-xl p-3">
              <p className="font-text text-[13px] text-red-700">{nutrition.alerts}</p>
            </div>
          ) : (
            <div className="bg-green-50 rounded-xl p-3 flex items-center gap-2">
              <span className="text-green-600">&#10003;</span>
              <p className="font-text text-[13px] text-green-700">{t('dash.noAlerts')}</p>
            </div>
          )}
        </section>
      </div>

      {/* ── 4. Agenda ─────────────────────────────────────────────────── */}
      <section className="bg-white rounded-2xl border border-grey-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarDays size={18} className="text-orange-400" />
            <h2 className="font-rubrik font-bold text-[18px] text-grey-900">{t('dash.agenda')}</h2>
          </div>
          <Link
            to="/health"
            className="flex items-center gap-1 min-h-[44px] font-rubrik font-bold text-[12px] text-orange-500 hover:text-orange-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {t('dash.viewAll')} <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {agenda.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-grey-200 p-4 hover:shadow-sm transition-shadow"
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${item.color}`}>
                <item.Icon size={18} className={item.iconColor} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-rubrik font-bold text-[13px] text-grey-900 truncate">{item.label}</p>
                <p className="font-text text-[12px] text-grey-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Mini Community Feed ────────────────────────────────────── */}
      <section className="bg-orange-400 rounded-2xl p-8 flex gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <MessageCircle size={20} className="text-orange-100" />
            <h2 className="font-rubrik font-bold text-[22px] text-white">{t('dash.community')}</h2>
          </div>
          <p className="font-text text-[15px] text-orange-50 max-w-xs">
            {t('dash.communityDesc')}
          </p>
          <Link
            to="/community"
            className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-white hover:bg-orange-50 transition-colors font-rubrik font-bold text-[14px] text-orange-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            {t('dash.joinCommunity')} <Heart size={16} />
          </Link>
        </div>
        <div className="flex-1 space-y-3">
          {communityPosts.map((post, i) => (
            <div key={i} className="bg-white/15 rounded-xl px-4 py-3 space-y-1.5">
              <div className="flex items-center gap-2">
                <img src={post.avatar} alt={post.user} className="w-7 h-7 rounded-full object-cover shrink-0" />
                <p className="font-rubrik font-bold text-[13px] text-white">{post.user}</p>
                <p className="font-text text-[11px] text-orange-100 ml-auto">{post.time}</p>
              </div>
              <p className="font-text text-[13px] text-orange-50 leading-relaxed">{post.content}</p>
              <p className="font-text text-[11px] text-orange-100">&#10084; {post.likes} {t('dash.likes')}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-4" />
    </div>
  )
}
