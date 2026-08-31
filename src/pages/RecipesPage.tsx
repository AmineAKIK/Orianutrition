import { useMemo, useState } from "react";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { RecipeCard } from "../components/cards/RecipeCard";
import { recipes } from "../data/recipes";
import { recipeImages, recipeImagePositions } from "../data/recipeImages";

export function RecipesPage() {
  const [active, setActive] = useState("Toutes");
  const categories = useMemo(
    () => [
      "Toutes",
      ...Array.from(new Set(recipes.flatMap((r) => r.categories))),
    ],
    [],
  );
  const featured = recipes[0];
  const rest = recipes.slice(1);
  const filtered =
    active === "Toutes"
      ? rest
      : rest.filter((r) => r.categories.includes(active));
  const showFeatured =
    active === "Toutes" || featured.categories.includes(active);

  return (
    <section className="section-pad bg-paper">
      <Container>
        <SectionHeading
          level={1}
          eyebrow="Recettes"
          title="Des repas simples, pensés pour ton emploi du temps"
          body="Des idées faciles à préparer avant un poste, pendant une pause ou au retour — à adapter à ton rythme."
        />
        <div
          className="my-8 grid grid-cols-2 gap-2 sm:my-10 sm:flex sm:flex-wrap"
          role="group"
          aria-label="Filtrer les recettes par catégorie"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`min-h-11 w-full border px-3 py-2 text-sm font-medium sm:w-auto sm:px-4 ${active === category ? "border-forest bg-forest text-paper" : "border-sage text-forest-soft"}`}
            >
              {category}
            </button>
          ))}
        </div>
        {showFeatured && (
          <Link
            to={`/recettes/${featured.slug}`}
            className="group mb-12 grid items-center gap-6 bg-sage-light/50 p-3 sm:mb-14 sm:p-6 lg:mb-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:p-8"
          >
            <div className="aspect-[4/3] overflow-hidden border border-sage bg-cream sm:aspect-[3/2]">
              <img
                src={recipeImages[featured.slug]}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ objectPosition: recipeImagePositions[featured.slug] }}
                decoding="async"
              />
            </div>
            <div>
              <p className="eyebrow mb-3 sm:mb-4">Recette du moment</p>
              <h2 className="text-balance text-[1.75rem] leading-[1.1] sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted sm:mt-4">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted sm:mt-6">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} aria-hidden="true" />
                  {featured.totalTime}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users size={14} aria-hidden="true" />
                  {featured.servings}
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest sm:mt-7">
                Voir la recette <ArrowRight size={15} aria-hidden="true" />
              </span>
            </div>
          </Link>
        )}
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
        {filtered.length === 0 && !showFeatured && (
          <p className="py-16 text-center text-muted">
            Aucune recette dans cette catégorie.
          </p>
        )}
      </Container>
    </section>
  );
}
