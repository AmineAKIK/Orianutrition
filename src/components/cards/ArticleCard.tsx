import { Link } from 'react-router-dom'
import type { Article } from '../../data/articles'
import { articleImages, articleImagePositions } from '../../data/articleImages'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link to={`/conseils/${article.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden border border-sage bg-cream">
        <img src={articleImages[article.slug]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" style={{objectPosition:articleImagePositions[article.slug]}} loading="lazy" decoding="async" />
      </div>
      <p className="eyebrow mt-4 sm:mt-5">{article.category}</p>
      <h3 className="mt-2.5 text-[1.65rem] leading-[1.1] sm:mt-3 sm:text-2xl">{article.title}</h3>
      <p className="mt-2.5 max-w-prose text-pretty text-sm leading-relaxed text-muted sm:mt-3">{article.excerpt}</p>
    </Link>
  )
}
