import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ArticleCard } from '../components/cards/ArticleCard'
import { articles } from '../data/articles'
import { articleImages } from '../data/articleImages'
import { usePageMeta } from '../hooks/usePageMeta'

export function BlogPage() {
  usePageMeta('Conseils')
  const [active, setActive] = useState('Toutes')
  const sorted = useMemo(() => [...articles].sort((a, b) => b.isoDate.localeCompare(a.isoDate)), [])
  const [featured, ...rest] = sorted
  const categories = useMemo(() => ['Toutes', ...Array.from(new Set(articles.map((a) => a.category)))], [])
  const filtered = active === 'Toutes' ? rest : rest.filter((a) => a.category === active)
  const showFeatured = active === 'Toutes' || featured.category === active

  return (
    <section className="section-pad bg-paper">
      <Container>
        <SectionHeading eyebrow="Conseils" title="Des repères pour ton bien-être au quotidien" body="Horaires atypiques, sommeil, repas et organisation : des articles pour comprendre et avancer sans raccourci." />
        <div className="flex flex-wrap gap-2 my-10" role="group" aria-label="Filtrer les articles par catégorie">
          {categories.map((category) => <button key={category} type="button" onClick={() => setActive(category)} aria-pressed={active === category} className={`px-4 py-2 text-sm font-medium border min-h-11 ${active === category ? 'bg-forest text-paper border-forest' : 'text-forest-soft border-sage'}`}>{category}</button>)}
        </div>
        {showFeatured && <Link to={`/conseils/${featured.slug}`} className="group grid lg:grid-cols-[1.15fr_.85fr] gap-8 lg:gap-12 items-center mb-16 bg-sage-light/50 p-4 sm:p-6 lg:p-8">
          <div className="aspect-[3/2] overflow-hidden bg-cream border border-sage"><img src={articleImages[featured.slug]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div>
          <div><p className="eyebrow mb-4">{featured.category}</p><h2 className="text-2xl md:text-3xl mb-4">{featured.title}</h2><p className="text-muted mb-6 leading-relaxed">{featured.excerpt}</p><span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest">Lire l'article <ArrowUpRight size={15} aria-hidden="true" /></span></div>
        </Link>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">{filtered.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
        {filtered.length === 0 && !showFeatured && <p className="py-16 text-center text-muted">Aucun article dans cette catégorie.</p>}
      </Container>
    </section>
  )
}
