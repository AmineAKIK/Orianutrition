import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { LinkButton } from "../ui/Button";
import { ArticleCard } from "../cards/ArticleCard";
import { articles } from "../../data/articles";

export function BlogPreview() {
  return (
    <section className="section-pad bg-sage-light">
      <Container>
        <SectionHeading
          eyebrow="Conseils"
          title="Comprendre ce qui se joue quand le rythme se décale."
        />
        <div className="mt-8 grid gap-9 md:grid-cols-3 lg:mt-10 lg:gap-5">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-7 sm:mt-8">
          <LinkButton to="/conseils" className="w-full sm:w-auto">
            Lire les conseils
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
