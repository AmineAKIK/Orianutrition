import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { LinkButton } from "../ui/Button";
import { ServiceCard } from "../cards/ServiceCard";
import { servicePacks } from "../../data/services";

export function ServicesPreview() {
  return (
    <section className="section-pad bg-sage-light">
      <Container>
        <SectionHeading
          eyebrow="Accompagnements"
          title="Choisir un format adapté à ton besoin du moment."
        />
        <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {servicePacks.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-7 sm:mt-8">
          <LinkButton to="/accompagnements" className="w-full sm:w-auto">
            Voir les accompagnements
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
