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
            <span aria-hidden="true">·</span>
            <span>{recipe.prepTime} de préparation</span>
            <span aria-hidden="true">·</span>
            <span>{recipe.totalTime} au total</span>
          </div>

          <section className="mt-6" aria-labelledby="recipe-ingredients-title">
            <h2
              id="recipe-ingredients-title"
              className="text-[1.8rem] sm:text-3xl"
            >
              Ingrédients
            </h2>
            <ul
              className="mt-4 divide-y divide-sage border-y border-sage sm:mt-5"
              data-testid="recipe-ingredients"
            >
              {recipe.ingredients.map((item) => (
                <li
                  key={item}
                  className="py-3.5 text-[0.95rem] leading-relaxed text-muted sm:py-4 sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            className="mt-8 sm:mt-10"
            aria-labelledby="recipe-preparation-title"
          >
            <h2
              id="recipe-preparation-title"
              className="text-[1.8rem] sm:text-3xl"
            >
              Préparation
            </h2>
            <ol
              className="mt-4 divide-y divide-sage border-y border-sage sm:mt-5"
              data-testid="recipe-steps"
            >
              {recipe.steps.map((step, index) => (
                <li
                  key={step}
                  className="grid gap-2 py-4 sm:grid-cols-[5.5rem_1fr] sm:gap-5 sm:py-5"
                >
                  <span className="pt-0.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold-muted">
                    Étape {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-muted sm:text-base">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </StandardPage>
  );
}
