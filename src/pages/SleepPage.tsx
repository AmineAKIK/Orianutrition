import { useState, type FormEvent } from "react";
import { StandardPage } from "./StandardPage";
import {
  calculateSleepGap,
  formatDuration,
  type SleepGapResult,
} from "../lib/sleep";

function NumberField({
  id,
  label,
  defaultValue,
  min,
  max,
}: {
  id: string;
  label: string;
  defaultValue: number;
  min: number;
  max: number;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        id={id}
        name={id}
        type="number"
        inputMode="numeric"
        required
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="mt-2 w-full border border-sage bg-paper px-3.5 py-3 text-ink transition-colors focus:border-forest"
      />
    </label>
  );
}

export function SleepPage() {
  const [result, setResult] = useState<SleepGapResult | null>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    const data = new FormData(event.currentTarget);
    setResult(
      calculateSleepGap(
        {
          hours: Number(data.get("targetHours")),
          minutes: Number(data.get("targetMinutes")),
        },
        {
          hours: Number(data.get("observedHours")),
          minutes: Number(data.get("observedMinutes")),
        },
      ),
    );
  }

  return (
    <StandardPage
      eyebrow="Sommeil"
      title="Observer sa récupération sur plusieurs jours."
      intro="Le sommeil en horaires atypiques demande souvent une lecture plus souple qu'un simple nombre d'heures par nuit."
    >
      <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-8">
        <form
          onSubmit={submit}
          className="border border-sage bg-paper p-5 sm:p-7"
          data-testid="sleep-calculator"
        >
          <h2 className="text-[1.8rem] leading-[1.1] sm:text-3xl">
            Comparer deux durées
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted sm:mt-4">
            Indique une durée visée et une durée réellement observée. Le
            résultat montre uniquement l'écart entre les deux, sans estimer un «
            temps de récupération » artificiel.
          </p>
          <fieldset className="mt-6 sm:mt-7">
            <legend className="font-serif text-xl">Sommeil visé</legend>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
              <NumberField
                id="targetHours"
                label="Heures"
                defaultValue={7}
                min={0}
                max={16}
              />
              <NumberField
                id="targetMinutes"
                label="Minutes"
                defaultValue={30}
                min={0}
                max={59}
              />
            </div>
          </fieldset>
          <fieldset className="mt-6 sm:mt-7">
            <legend className="font-serif text-xl">Sommeil observé</legend>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
              <NumberField
                id="observedHours"
                label="Heures"
                defaultValue={6}
                min={0}
                max={16}
              />
              <NumberField
                id="observedMinutes"
                label="Minutes"
                defaultValue={15}
                min={0}
                max={59}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="mt-6 min-h-12 w-full bg-forest px-6 py-3 font-medium text-paper transition-colors hover:bg-forest-dark sm:mt-7 sm:w-auto"
          >
            Calculer l'écart
          </button>
          <div
            className={`grid transition-[grid-template-rows,opacity,margin-top] duration-300 ease-out motion-reduce:transition-none ${
              result
                ? "mt-6 grid-rows-[1fr] opacity-100 sm:mt-7"
                : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
            role="status"
            aria-live="polite"
            data-testid="sleep-result"
          >
            <div className="overflow-hidden">
              {result && (
                <div className="border-t border-sage pt-5 sm:pt-6">
                  <p className="text-xs uppercase tracking-wider text-forest-soft">
                    Résultat
                  </p>
                  <p className="mt-2 font-serif text-[1.8rem] leading-[1.1] sm:text-3xl">
                    {result.status === "aligned"
                      ? "Durées alignées"
                      : result.status === "below"
                        ? `${formatDuration(result.differenceMinutes)} de moins`
                        : `${formatDuration(result.differenceMinutes)} de plus`}
                  </p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
                    Cet écart est un repère d'observation. Il ne mesure ni la
                    qualité du sommeil ni un besoin médical individuel.
                  </p>
                </div>
              )}
            </div>
          </div>
        </form>
        <div
          className="bg-sage-light p-5 sm:p-7"
          data-testid="sleep-observation-panel"
        >
          <h2 className="text-[1.8rem] leading-[1.1] sm:text-3xl">
            À observer aussi
          </h2>
          <ul className="mt-5 space-y-3 text-muted">
            <li>La régularité des horaires de coucher.</li>
            <li>La qualité perçue au réveil.</li>
            <li>La lumière avant et après le sommeil.</li>
            <li>Les stimulants et leur horaire de consommation.</li>
          </ul>
          <p className="mt-6 border-t border-sage pt-5 text-pretty text-sm leading-relaxed text-muted sm:mt-7">
            En cas de fatigue persistante, de somnolence importante ou de
            trouble du sommeil, un professionnel de santé reste l'interlocuteur
            adapté.
          </p>
        </div>
      </div>
    </StandardPage>
  );
}
