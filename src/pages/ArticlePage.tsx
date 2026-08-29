import { useParams } from 'react-router-dom'
import { StandardPage } from './StandardPage'
import { articles } from '../data/articles'
import { articleImages, articleImagePositions } from '../data/articleImages'
import { NotFoundPage } from './NotFoundPage'

export function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)
  if (!article) return <NotFoundPage />
  return <StandardPage eyebrow={article.category} title={article.title} intro={article.excerpt}>
    <article className="max-w-3xl">
      <div className="mb-8 aspect-[4/3] overflow-hidden border border-sage bg-cream sm:mb-10 sm:aspect-[3/2]"><img src={articleImages[article.slug]} alt="" className="h-full w-full object-cover" style={{objectPosition:articleImagePositions[article.slug]}} decoding="async" /></div>
      {article.body.map((paragraph) => <p key={paragraph} className="mb-5 text-pretty leading-relaxed text-muted sm:mb-6">{paragraph}</p>)}
      {article.disclaimer && <p className="mt-8 border-t border-sage pt-5 text-sm leading-relaxed text-muted sm:mt-10 sm:pt-6">{article.disclaimer}</p>}
    </article>
  </StandardPage>
}
