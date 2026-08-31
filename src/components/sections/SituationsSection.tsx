import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { situations } from "../../data/site";
export function SituationsSection() {
  return (
    <section className="section-pad bg-cream">
      <Container>
        <SectionHeading
          eyebrow="Ton quotidien"
          title="Quand les horaires changent, les repères classiques montrent vite leurs limites."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sage border border-sage">
          {situations.map(([t, d]) => (
            <article key={t} className="bg-paper p-6">
              <h3 className="text-xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{d}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
