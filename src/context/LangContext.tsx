'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, Lang, TranslationKey } from '@/lib/translations'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: TranslationKey) => string
}

const LangContext = createContext<LangContextValue>({
  lang: 'pt',
  setLang: () => {},
  t: (key) => translations.pt[key],
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored && stored in translations) setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  const t = (key: TranslationKey) => translations[lang][key]

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
