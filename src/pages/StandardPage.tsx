import type { ReactNode } from 'react'
import { Container } from '../components/ui/Container'
import { usePageMeta } from '../hooks/usePageMeta'

export function StandardPage({eyebrow,title,intro,children}:{eyebrow:string;title:string;intro:string;children:ReactNode}){
  usePageMeta(title,intro)
  return <>
    <section className="border-b border-sage bg-cream"><Container className="py-10 sm:py-12 lg:py-20"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-balance text-[2.25rem] leading-[1.08] sm:mt-5 sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">{intro}</p></Container></section>
    <section className="section-pad"><Container>{children}</Container></section>
  </>
}
