import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { articles } from '../../data/articles'
import { recipes } from '../../data/recipes'
import { publicIndexingEnabled } from '../../config/release'
import { resolveRouteMetadata, type DetailMetadata } from '../../lib/seo'

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

function resolveDetailMetadata(pathname: string): DetailMetadata | undefined {
  if (pathname.startsWith('/recettes/')) {
    const recipe = recipes.find((item) => item.slug === pathname.slice('/recettes/'.length))
    if (recipe) return { title: `${recipe.title} — Oria Nutrition`, description: recipe.excerpt }
  }
  if (pathname.startsWith('/conseils/')) {
    const article = articles.find((item) => item.slug === pathname.slice('/conseils/'.length))
    if (article) return { title: `${article.title} — Oria Nutrition`, description: article.excerpt }
  }
  return undefined
}

export function RouteMetadata() {
  const location = useLocation()

  useEffect(() => {
    const metadata = resolveRouteMetadata(location.pathname, resolveDetailMetadata(location.pathname), publicIndexingEnabled)
    document.title = metadata.title
    upsertMeta('meta[name="description"]', 'name', 'description', metadata.description)
    upsertMeta('meta[name="robots"]', 'name', 'robots', metadata.robots)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', metadata.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', metadata.description)
  }, [location.pathname])

  return null
}
