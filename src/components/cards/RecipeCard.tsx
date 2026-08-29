import { Link } from 'react-router-dom'
import type { Recipe } from '../../data/recipes'
import { recipeImages, recipeImagePositions } from '../../data/recipeImages'

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link to={`/recettes/${recipe.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden border border-sage bg-cream">
        <img src={recipeImages[recipe.slug]} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" style={{objectPosition:recipeImagePositions[recipe.slug]}} loading="lazy" decoding="async" />
      </div>
      <div className="mt-3.5 flex items-center gap-3 text-xs text-muted sm:mt-4"><span>{recipe.totalTime}</span><span>·</span><span>{recipe.difficulty}</span></div>
      <h3 className="mt-2 text-[1.65rem] leading-[1.1] sm:text-2xl">{recipe.title}</h3>
      <p className="mt-2 max-w-prose text-pretty text-sm leading-relaxed text-muted">{recipe.excerpt}</p>
    </Link>
  )
}
