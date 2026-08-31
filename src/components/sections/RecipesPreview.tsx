import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { LinkButton } from "../ui/Button";
import { RecipeCard } from "../cards/RecipeCard";
import { recipes } from "../../data/recipes";

export function RecipesPreview() {
  return (
    <section className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Recettes"
          title="Des idées simples à préparer autour de tes horaires."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:mt-10 lg:gap-6">
          {recipes.slice(0, 2).map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
        <div className="mt-7 sm:mt-8">
          <LinkButton
            to="/recettes"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Toutes les recettes
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
