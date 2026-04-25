'use client'

import { useLang } from '@/context/LangContext'
import { TranslationKey, translations } from '@/lib/translations'

export default function TH({ k, className }: { k: TranslationKey; className?: string }) {
  const { lang } = useLang()
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: translations[lang][k] }}
    />
  )
}
