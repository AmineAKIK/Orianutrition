import { useParams } from 'react-router-dom'
import { StandardPage } from './StandardPage'
import { articles } from '../data/articles'
import { articleImages } from '../data/articleImages'
import { NotFoundPage } from './NotFoundPage'

export function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)
  if (!article) return <NotFoundPage />
  return <StandardPage eyebrow={article.category} title={article.title} intro={article.excerpt}>
    <article className="max-w-3xl">
      <div className="aspect-[3/2] overflow-hidden bg-cream border border-sage mb-10"><img src={articleImages[article.slug]} alt="" className="h-full w-full object-cover" /></div>
      {article.body.map((paragraph) => <p key={paragraph} className="mb-6 text-muted leading-relaxed">{paragraph}</p>)}
      {article.disclaimer && <p className="mt-10 border-t border-sage pt-6 text-sm text-muted leading-relaxed">{article.disclaimer}</p>}
    </article>
  </StandardPage>
}
