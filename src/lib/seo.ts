export interface RouteMetadata {
  title: string
  description: string
  robots: 'index,follow' | 'noindex,follow' | 'noindex,nofollow'
}

export interface DetailMetadata {
  title: string
  description: string
}

const defaultDescription =
  "Des repères concrets autour de la nutrition, du sommeil et de l'organisation du quotidien pour les personnes aux horaires atypiques."

const pageMetadata: Record<string, DetailMetadata> = {
  '/': { title: 'Oria Nutrition — Nutrition & rythmes atypiques', description: defaultDescription },
  '/mon-approche': { title: 'Mon approche — Oria Nutrition', description: "Une approche progressive pour construire des repères alimentaires et de récupération compatibles avec des horaires qui changent." },
  '/accompagnements': { title: 'Accompagnements — Oria Nutrition', description: "Découvrir les accompagnements Oria autour de l'organisation des repas, de l'énergie et des rythmes atypiques." },
  '/recettes': { title: 'Recettes — Oria Nutrition', description: 'Des recettes simples, transportables et adaptables aux semaines aux horaires variables.' },
  '/conseils': { title: 'Conseils — Oria Nutrition', description: "Des repères pratiques sur les repas, le sommeil, l'énergie et l'organisation quand les horaires changent." },
  '/sommeil': { title: 'Sommeil — Oria Nutrition', description: 'Observer son temps de sommeil et construire des repères de récupération sans pseudo-précision.' },
  '/espace-client': { title: 'Espace client — Oria Nutrition', description: 'Espace de suivi Oria Nutrition.' },
  '/faq': { title: 'FAQ — Oria Nutrition', description: "Les réponses aux questions fréquentes sur l'accompagnement, les rythmes atypiques et le cadre de suivi." },
  '/contact': { title: 'Contact — Oria Nutrition', description: 'Contacter Oria Nutrition pour échanger sur un accompagnement adapté aux horaires atypiques.' },
  '/mentions-legales': { title: 'Mentions légales — Oria Nutrition', description: 'Informations légales et cadre de confidentialité du site Oria Nutrition.' },
}

export function resolveRouteMetadata(
  pathname: string,
  detail: DetailMetadata | undefined,
  indexingEnabled: boolean,
): RouteMetadata {
  const metadata = pageMetadata[pathname] ?? detail
  const isPrivate = pathname === '/espace-client'
  const isMissing = !metadata

  return {
    ...(metadata ?? { title: 'Page introuvable — Oria Nutrition', description: defaultDescription }),
    robots: isPrivate || isMissing ? 'noindex,nofollow' : indexingEnabled ? 'index,follow' : 'noindex,follow',
  }
}
