import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";

export function FinalCta() {
  return (
    <section className="section-pad bg-cream">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow">Commencer</p>
          <h2 className="mt-3 text-balance text-[2rem] leading-[1.08] sm:mt-4 sm:text-4xl lg:text-5xl">
            Construire des repères qui fonctionnent avec ton rythme.
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted sm:mt-5">
            Un premier échange permet de clarifier les priorités et de choisir
            le format le plus adapté.
          </p>
          <div className="mt-7 sm:mt-8">
            <LinkButton to="/contact" className="w-full sm:w-auto">
              Prendre contact
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
