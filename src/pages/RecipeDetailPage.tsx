import { useParams } from "react-router-dom";
import { StandardPage } from "./StandardPage";
import { recipes } from "../data/recipes";
import { recipeImages, recipeImagePositions } from "../data/recipeImages";
import { NotFoundPage } from "./NotFoundPage";

export function RecipeDetailPage() {
  const { slug } = useParams();
  const recipe = recipes.find((item) => item.slug === slug);
  if (!recipe) return <NotFoundPage />;
  return (
    <StandardPage
      eyebrow="Recette"
      title={recipe.title}
      intro={recipe.description}
    >
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-[4/3] overflow-hidden border border-sage bg-cream">
          <img
            src={recipeImages[recipe.slug]}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: recipeImagePositions[recipe.slug] }}
            decoding="async"
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm leading-relaxed text-muted">
            <span>{recipe.servings}</span>
            <span>·</span>
            <span>{recipe.prepTime} de préparation</span>
            <span>·</span>
            <span>{recipe.totalTime} au total</span>
          </div>
          <h2 className="mt-6 text-[1.8rem] sm:text-3xl">Ingrédients</h2>
          <ul className="mt-4 space-y-2 text-muted sm:mt-5">
            {recipe.ingredients.map((item) => (
              <li key={item} className="grid grid-cols-[1rem_1fr] gap-1">
                <span aria-hidden="true">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h2 className="mt-7 text-[1.8rem] sm:mt-8 sm:text-3xl">
            Préparation
          </h2>
          <ol className="mt-4 space-y-4 text-muted">
            {recipe.steps.map((step, index) => (
              <li key={step} className="grid grid-cols-[2rem_1fr] gap-1">
                <span className="font-serif text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </StandardPage>
  );
}
