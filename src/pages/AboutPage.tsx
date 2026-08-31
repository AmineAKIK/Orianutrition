import { ArrowRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/Button";
import { brand } from "../config/site";
import { approach, signature } from "../data/site";
import portrait from "../assets/practitioner/elise-marceau-approche.webp";

export function AboutPage() {
  return (
    <>
      <section className="section-pad bg-paper">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="eyebrow mb-3 sm:mb-5">Mon approche</p>
              <h1 className="text-balance text-[2.15rem] leading-[1.1] sm:text-4xl md:text-5xl">
                {approach.intro}
              </h1>
              <p className="mt-5 inline-block bg-forest-soft px-4 py-2 text-sm font-medium text-sage-light sm:mt-6">
                {brand.role}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mx-auto aspect-[4/3] max-w-md overflow-hidden border border-sage bg-sage-light sm:aspect-[4/5] sm:max-w-sm">
                <img
                  src={portrait}
                  alt={`Portrait de ${brand.practitioner}`}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 35%" }}
                  width={1229}
                  height={1536}
                  decoding="async"
                />
              </div>
              <p className="mt-3 text-center text-sm italic leading-relaxed text-muted">
                {approach.photoBadge}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="section-pad bg-sage-light/50">
        <Container className="max-w-3xl">
          <div className="space-y-5 sm:space-y-6">
            {approach.body.map((paragraph) => (
              <p
                key={paragraph}
                className="font-serif text-xl leading-snug text-forest-dark md:text-2xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-pad bg-paper">
        <Container>
          <p className="eyebrow mb-4 sm:mb-5">Ce qui guide l'accompagnement</p>
          <div className="grid gap-x-16 md:grid-cols-2">
            {approach.principles.map(([title, subtitle], index) => (
              <div
                key={title}
                className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-sage py-6 sm:grid-cols-[3rem_1fr] sm:gap-4 sm:py-7"
              >
                <span className="font-serif text-xl italic text-gold-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="mb-1 text-xl">{title}</h2>
                  <p className="text-pretty leading-relaxed text-muted">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-pad bg-forest-dark text-paper">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-balance text-[2rem] leading-[1.1] text-paper md:text-4xl">
              {signature.title}
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-sage sm:mt-6 sm:text-lg">
              {signature.body}
            </p>
            <div className="mt-7 sm:mt-9">
              <LinkButton to="/accompagnements" className="w-full sm:w-auto">
                Découvrir les accompagnements{" "}
                <ArrowRight size={16} aria-hidden="true" />
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
