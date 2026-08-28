import { useState, type FormEvent } from 'react'
import { StandardPage } from './StandardPage'
import { calculateSleepGap, formatDuration, type SleepGapResult } from '../lib/sleep'

function NumberField({ id, label, defaultValue, min, max }: { id: string; label: string; defaultValue: number; min: number; max: number }) {
  return <label className="block"><span className="text-sm font-medium">{label}</span><input id={id} name={id} type="number" inputMode="numeric" required min={min} max={max} defaultValue={defaultValue} className="mt-2 w-full border border-sage bg-paper p-3"/></label>
}

export function SleepPage() {
  const [result, setResult] = useState<SleepGapResult | null>(null)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity()
      return
    }
    const data = new FormData(event.currentTarget)
    setResult(calculateSleepGap(
      { hours: Number(data.get('targetHours')), minutes: Number(data.get('targetMinutes')) },
      { hours: Number(data.get('observedHours')), minutes: Number(data.get('observedMinutes')) },
    ))
  }

  return <StandardPage eyebrow="Sommeil" title="Observer sa récupération sur plusieurs jours." intro="Le sommeil en horaires atypiques demande souvent une lecture plus souple qu'un simple nombre d'heures par nuit.">
    <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8">
      <form onSubmit={submit} className="border border-sage bg-paper p-7">
        <h2 className="text-3xl">Comparer deux durées</h2>
        <p className="mt-4 text-muted leading-relaxed">Indique une durée visée et une durée réellement observée. Le résultat montre uniquement l'écart entre les deux, sans estimer un « temps de récupération » artificiel.</p>
        <fieldset className="mt-7"><legend className="font-serif text-xl">Sommeil visé</legend><div className="mt-4 grid grid-cols-2 gap-4"><NumberField id="targetHours" label="Heures" defaultValue={7} min={0} max={16}/><NumberField id="targetMinutes" label="Minutes" defaultValue={30} min={0} max={59}/></div></fieldset>
        <fieldset className="mt-7"><legend className="font-serif text-xl">Sommeil observé</legend><div className="mt-4 grid grid-cols-2 gap-4"><NumberField id="observedHours" label="Heures" defaultValue={6} min={0} max={16}/><NumberField id="observedMinutes" label="Minutes" defaultValue={15} min={0} max={59}/></div></fieldset>
        <button type="submit" className="mt-7 min-h-12 bg-forest px-6 text-paper">Calculer l'écart</button>
        {result && <div className="mt-7 border-t border-sage pt-6" role="status" aria-live="polite"><p className="text-xs uppercase tracking-wider text-forest-soft">Résultat</p><p className="mt-2 font-serif text-3xl">{result.status === 'aligned' ? 'Durées alignées' : result.status === 'below' ? `${formatDuration(result.differenceMinutes)} de moins` : `${formatDuration(result.differenceMinutes)} de plus`}</p><p className="mt-3 text-sm text-muted">Cet écart est un repère d'observation. Il ne mesure ni la qualité du sommeil ni un besoin médical individuel.</p></div>}
      </form>
      <div className="bg-sage-light p-7"><h2 className="text-3xl">À observer aussi</h2><ul className="mt-5 space-y-3 text-muted"><li>La régularité des horaires de coucher.</li><li>La qualité perçue au réveil.</li><li>La lumière avant et après le sommeil.</li><li>Les stimulants et leur horaire de consommation.</li></ul><p className="mt-7 border-t border-sage pt-5 text-sm text-muted">En cas de fatigue persistante, de somnolence importante ou de trouble du sommeil, un professionnel de santé reste l'interlocuteur adapté.</p></div>
    </div>
  </StandardPage>
}
