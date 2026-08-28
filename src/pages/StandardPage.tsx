import type { ReactNode } from 'react'
import { Container } from '../components/ui/Container'
import { usePageMeta } from '../hooks/usePageMeta'
export function StandardPage({eyebrow,title,intro,children}:{eyebrow:string;title:string;intro:string;children:ReactNode}){usePageMeta(title,intro);return <><section className="bg-cream border-b border-sage"><Container className="py-14 lg:py-20"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl max-w-4xl">{title}</h1><p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">{intro}</p></Container></section><section className="section-pad"><Container>{children}</Container></section></>}
