import type { ServicePack } from "../../data/services";

export function ServiceCard({ service }: { service: ServicePack }) {
  return (
    <article
      className={`border p-5 sm:p-6 lg:p-7 ${service.featured ? "border-forest bg-sage-light" : "border-sage bg-paper"}`}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <h3 className="text-[1.65rem] leading-[1.08] sm:text-2xl">
          {service.name}
        </h3>
        <span className="shrink-0 whitespace-nowrap pt-0.5 text-right text-sm font-medium tabular-nums text-forest">
          {service.price}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {service.duration}
      </p>
      <p className="mt-4 text-pretty leading-relaxed text-muted">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted">
        {service.markers.map((marker) => (
          <li key={marker} className="grid grid-cols-[1rem_1fr] gap-1">
            <span aria-hidden="true">—</span>
            <span>{marker}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
