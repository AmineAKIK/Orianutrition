import type { ReactNode } from 'react'

export function SectionHeading({ eyebrow, title, body, align = 'left', className = '' }: { eyebrow?: string; title: ReactNode; body?: ReactNode; align?: 'left' | 'center'; className?: string }) {
  return <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
    {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
    <h2 className="text-balance text-3xl font-medium leading-[1.1] md:text-4xl lg:text-[2.75rem]">{title}</h2>
    {body && <p className="mt-5 text-lg leading-relaxed text-muted">{body}</p>}
  </div>
}
