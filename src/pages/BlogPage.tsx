import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ArticleCard } from '../components/cards/ArticleCard'
import { articles } from '../data/articles'
import { articleImages, articleImagePositions } from '../data/articleImages'
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
        <div className="my-8 grid grid-cols-2 gap-2 sm:my-10 sm:flex sm:flex-wrap" role="group" aria-label="Filtrer les articles par catégorie">
          {categories.map((category) => <button key={category} type="button" onClick={() => setActive(category)} aria-pressed={active === category} className={`min-h-11 w-full border px-3 py-2 text-sm font-medium sm:w-auto sm:px-4 ${active === category ? 'border-forest bg-forest text-paper' : 'border-sage text-forest-soft'}`}>{category}</button>)}
        </div>
        {showFeatured && <Link to={`/conseils/${featured.slug}`} className="group mb-12 grid items-center gap-6 bg-sage-light/50 p-3 sm:mb-14 sm:p-6 lg:mb-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:p-8">
          <div className="aspect-[4/3] overflow-hidden border border-sage bg-cream sm:aspect-[3/2]"><img src={articleImages[featured.slug]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" style={{objectPosition:articleImagePositions[featured.slug]}} decoding="async" /></div>
          <div><p className="eyebrow mb-3 sm:mb-4">{featured.category}</p><h2 className="text-balance text-[1.75rem] leading-[1.1] sm:text-3xl">{featured.title}</h2><p className="mt-3 text-pretty leading-relaxed text-muted sm:mt-4">{featured.excerpt}</p><span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest">Lire l'article <ArrowUpRight size={15} aria-hidden="true" /></span></div>
        </Link>}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">{filtered.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
        {filtered.length === 0 && !showFeatured && <p className="py-16 text-center text-muted">Aucun article dans cette catégorie.</p>}
      </Container>
    </section>
  )
}
