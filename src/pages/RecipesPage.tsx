import { useMemo, useState } from 'react'
import { ArrowRight, Clock, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { RecipeCard } from '../components/cards/RecipeCard'
import { recipes } from '../data/recipes'
import { recipeImages } from '../data/recipeImages'
import { usePageMeta } from '../hooks/usePageMeta'

export function RecipesPage() {
  usePageMeta('Recettes')
  const [active, setActive] = useState('Toutes')
  const categories = useMemo(() => ['Toutes', ...Array.from(new Set(recipes.flatMap((r) => r.categories)))], [])
  const featured = recipes[0]
  const rest = recipes.slice(1)
  const filtered = active === 'Toutes' ? rest : rest.filter((r) => r.categories.includes(active))
  const showFeatured = active === 'Toutes' || featured.categories.includes(active)

  return (
    <section className="section-pad bg-paper">
      <Container>
        <SectionHeading eyebrow="Recettes" title="Des repas simples, pensés pour ton emploi du temps" body="Des idées faciles à préparer avant un poste, pendant une pause ou au retour — à adapter à ton rythme." />
        <div className="flex flex-wrap gap-2 my-10" role="group" aria-label="Filtrer les recettes par catégorie">
          {categories.map((category) => <button key={category} type="button" onClick={() => setActive(category)} aria-pressed={active === category} className={`px-4 py-2 text-sm font-medium border min-h-11 ${active === category ? 'bg-forest text-paper border-forest' : 'text-forest-soft border-sage'}`}>{category}</button>)}
        </div>
        {showFeatured && <Link to={`/recettes/${featured.slug}`} className="group grid lg:grid-cols-[1.15fr_.85fr] gap-8 lg:gap-12 items-center mb-16 bg-sage-light/50 p-4 sm:p-6 lg:p-8">
          <div className="aspect-[3/2] overflow-hidden bg-cream border border-sage"><img src={recipeImages[featured.slug]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div>
          <div><p className="eyebrow mb-4">Recette du moment</p><h2 className="text-2xl md:text-3xl mb-4">{featured.title}</h2><p className="text-muted mb-6 leading-relaxed">{featured.excerpt}</p><div className="flex gap-5 text-sm text-muted mb-7"><span className="inline-flex items-center gap-1.5"><Clock size={14} aria-hidden="true" />{featured.totalTime}</span><span className="inline-flex items-center gap-1.5"><Users size={14} aria-hidden="true" />{featured.servings}</span></div><span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest">Voir la recette <ArrowRight size={15} aria-hidden="true" /></span></div>
        </Link>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">{filtered.map((recipe) => <RecipeCard key={recipe.slug} recipe={recipe} />)}</div>
        {filtered.length === 0 && !showFeatured && <p className="py-16 text-center text-muted">Aucune recette dans cette catégorie.</p>}
      </Container>
    </section>
  )
}
