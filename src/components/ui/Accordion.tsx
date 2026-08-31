import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  question: string
  answer: string
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const idPrefix = useId()

  return <div className="divide-y divide-sage border-y border-sage">{items.map((item, index) => {
    const triggerId = `${idPrefix}-trigger-${index}`
    const panelId = `${idPrefix}-panel-${index}`
    const expanded = open === index

    return <div key={item.question}>
      <button
        id={triggerId}
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setOpen(expanded ? null : index)}
      >
        {item.question}
        <ChevronDown size={18} aria-hidden="true" />
      </button>
      <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!expanded}>
        <p className="max-w-3xl pb-5 leading-relaxed text-muted">{item.answer}</p>
      </div>
    </div>
  })}</div>
}
