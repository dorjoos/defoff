"use client"

import { useParams } from 'next/navigation'
import { getTranslation } from '@/lib/translations'

export function useTranslations(namespace: string) {
  const params = useParams()
  const locale = params.locale as string

  const t = (key: string) => {
    return getTranslation(locale, namespace, key)
  }

  return t
}

export function useLocale() {
  const params = useParams()
  return params.locale as string
}
