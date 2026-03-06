import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import translations, { type Locale, type TranslationKey } from './translations'

interface LanguageContextValue {
  locale: Locale
  toggleLocale: () => void
  t: (key: TranslationKey, vars?: Record<string, string>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('ica-gaston-locale') as Locale | null
    return saved === 'en' ? 'en' : 'sv'
  })

  const toggleLocale = useCallback(() => {
    setLocale(prev => {
      const next = prev === 'sv' ? 'en' : 'sv'
      localStorage.setItem('ica-gaston-locale', next)
      return next
    })
  }, [])

  const t = useCallback((key: TranslationKey, vars?: Record<string, string>) => {
    let text = translations[key]?.[locale] ?? key
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        text = text.replace(`{${k}}`, v)
      }
    }
    return text
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
