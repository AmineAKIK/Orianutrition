import { Link } from 'react-router-dom'
import type { Article } from '../../data/articles'
import { articleImages } from '../../data/articleImages'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link to={`/conseils/${article.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden bg-cream border border-sage">
        <img src={articleImages[article.slug]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
      </div>
      <p className="eyebrow mt-5">{article.category}</p>
      <h3 className="mt-3 text-2xl">{article.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
    </Link>
  )
}
