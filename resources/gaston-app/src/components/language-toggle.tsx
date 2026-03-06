import { useLanguage } from '../i18n/LanguageContext'

const SwedenFlag = () => (
  <svg viewBox="0 0 32 32" width="20" height="20" className="rounded-full">
    <rect width="32" height="32" fill="#006AA7" />
    <rect x="0" y="12" width="32" height="8" fill="#FECC00" />
    <rect x="10" y="0" width="8" height="32" fill="#FECC00" />
  </svg>
)

const UKFlag = () => (
  <svg viewBox="0 0 32 32" width="20" height="20" className="rounded-full">
    <rect width="32" height="32" fill="#012169" />
    <path d="M0,0 L32,32 M32,0 L0,32" stroke="#fff" strokeWidth="4" />
    <path d="M0,0 L32,32 M32,0 L0,32" stroke="#C8102E" strokeWidth="2" />
    <rect x="0" y="13" width="32" height="6" fill="#fff" />
    <rect x="13" y="0" width="6" height="32" fill="#fff" />
    <rect x="0" y="14" width="32" height="4" fill="#C8102E" />
    <rect x="14" y="0" width="4" height="32" fill="#C8102E" />
  </svg>
)

export default function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t('header.switchLanguage')}
      className="w-8 h-8 rounded-full border border-grey-200 flex items-center justify-center hover:bg-grey-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300 overflow-hidden"
    >
      {locale === 'sv' ? <SwedenFlag /> : <UKFlag />}
    </button>
  )
}
