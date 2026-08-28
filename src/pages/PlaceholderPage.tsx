import { Container } from '../components/ui/Container'

export function PlaceholderPage({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Cette surface est volontairement minimale dans la PR de bootstrap. Elle sera reconstruite avec des données entièrement fictives et des interactions testées dans les PR dédiées.
          </p>
        </div>
      </Container>
    </section>
  )
}
