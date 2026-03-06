import { HeartPulse, Syringe, Stethoscope, PawPrint } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Account() {
  const { t } = useLanguage()

  const petStats = [
    { icon: Syringe,     bg: 'bg-green-50',  ic: 'text-green-600', value: t('account.days'),  label: t('account.nextVaccination') },
    { icon: Stethoscope, bg: 'bg-blue-50',   ic: 'text-blue-500',  value: '12 Jan',   label: t('account.lastVetVisit')   },
    { icon: HeartPulse,  bg: 'bg-orange-50', ic: 'text-orange-500',value: t('account.good'),  label: t('account.overallHealth')   },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      <div className="bg-white rounded-2xl p-6 flex items-center gap-6">
        <div className="w-20 h-20 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
          <PawPrint size={36} className="text-orange-400" />
        </div>
        <div>
          <h1 className="font-rubrik font-bold text-[24px] text-grey-900">Bjørn</h1>
          <p className="font-text text-[14px] text-grey-500">Golden Retriever · 3 years · 32 kg</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {petStats.map(({ icon: Icon, bg, ic, value, label }) => (
          <div key={label} className={`${bg} rounded-2xl p-5 flex items-center gap-4`}>
            <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center shrink-0">
              <Icon size={20} className={ic} />
            </div>
            <div>
              <p className="font-rubrik font-bold text-[18px] text-grey-900">{value}</p>
              <p className="font-text text-[12px] text-grey-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 text-center space-y-2">
        <p className="font-rubrik font-bold text-[16px] text-grey-900">{t('account.placeholder')}</p>
        <p className="font-text text-[14px] text-grey-500">{t('account.placeholderDesc')}</p>
      </div>
    </div>
  )
}
