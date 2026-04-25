'use client'

import { useLang } from '@/context/LangContext'
import { TranslationKey } from '@/lib/translations'

export default function T({ k }: { k: TranslationKey }) {
  const { t } = useLang()
  return <>{t(k)}</>
}
