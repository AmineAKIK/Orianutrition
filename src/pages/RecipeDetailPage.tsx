import { useParams } from 'react-router-dom'
import { StandardPage } from './StandardPage'
import { recipes } from '../data/recipes'
import { recipeImages } from '../data/recipeImages'
import { NotFoundPage } from './NotFoundPage'

export function RecipeDetailPage() {
  const { slug } = useParams()
  const recipe = recipes.find((item) => item.slug === slug)
  if (!recipe) return <NotFoundPage />
  return <StandardPage eyebrow="Recette" title={recipe.title} intro={recipe.description}>
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      <div className="aspect-[4/3] overflow-hidden bg-cream border border-sage"><img src={recipeImages[recipe.slug]} alt="" className="h-full w-full object-cover" /></div>
      <div>
        <div className="flex flex-wrap gap-3 text-sm text-muted"><span>{recipe.servings}</span><span>·</span><span>{recipe.prepTime} de préparation</span><span>·</span><span>{recipe.totalTime} au total</span></div>
        <h2 className="mt-6 text-3xl">Ingrédients</h2>
        <ul className="mt-5 space-y-2 text-muted">{recipe.ingredients.map((item) => <li key={item}>— {item}</li>)}</ul>
        <h2 className="mt-8 text-3xl">Préparation</h2>
        <ol className="mt-4 space-y-4 text-muted">{recipe.steps.map((step, index) => <li key={step}><span className="mr-2 font-serif text-forest">{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol>
      </div>
    </div>
  </StandardPage>
}
