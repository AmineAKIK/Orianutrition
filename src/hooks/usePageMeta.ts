import { useEffect } from 'react'
import { siteMeta } from '../config/site'

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Oria Nutrition` : siteMeta.title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description ?? siteMeta.description
  }, [title, description])
}
