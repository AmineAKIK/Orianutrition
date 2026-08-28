import { Link } from 'react-router-dom'
import type { Recipe } from '../../data/recipes'
export function RecipeCard({recipe}:{recipe:Recipe}){return <Link to={`/recettes/${recipe.slug}`} className="group block"><div className="aspect-[4/3] bg-cream border border-sage transition-colors group-hover:bg-sage-light"/><div className="mt-4 flex items-center gap-3 text-xs text-muted"><span>{recipe.totalTime}</span><span>·</span><span>{recipe.difficulty}</span></div><h3 className="mt-2 text-2xl">{recipe.title}</h3><p className="mt-2 text-sm text-muted">{recipe.excerpt}</p></Link>}
