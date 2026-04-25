'use client'

import { useLang } from '@/context/LangContext'

export default function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <button
      className="lang-toggle"
      onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
    >
      <span className={lang === 'pt' ? 'active' : ''}>PT</span>
      {' / '}
      <span className={lang === 'en' ? 'active' : ''}>EN</span>
    </button>
  )
}
