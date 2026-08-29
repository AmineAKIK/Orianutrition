import type { ReactNode } from 'react'

export function SectionHeading({ eyebrow, title, body, align = 'left', className = '' }: { eyebrow?: string; title: ReactNode; body?: ReactNode; align?: 'left' | 'center'; className?: string }) {
  return <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
    {eyebrow && <p className="eyebrow mb-3 sm:mb-4">{eyebrow}</p>}
    <h2 className="text-balance text-[2rem] font-medium leading-[1.08] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
    {body && <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">{body}</p>}
  </div>
}
