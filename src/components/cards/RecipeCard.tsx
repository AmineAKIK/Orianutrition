import { Link } from 'react-router-dom'
import type { Recipe } from '../../data/recipes'
import { recipeImages } from '../../data/recipeImages'

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link to={`/recettes/${recipe.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden bg-cream border border-sage">
        <img src={recipeImages[recipe.slug]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
      </div>
      <div className="mt-4 flex items-center gap-3 text-xs text-muted"><span>{recipe.totalTime}</span><span>·</span><span>{recipe.difficulty}</span></div>
      <h3 className="mt-2 text-2xl">{recipe.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{recipe.excerpt}</p>
    </Link>
  )
}
