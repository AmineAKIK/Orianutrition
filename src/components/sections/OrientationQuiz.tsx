import { useState } from 'react'
import { X } from 'lucide-react'
import { Button, LinkButton } from '../ui/Button'

const questions=[{title:'Ton planning change-t-il souvent ?',options:['Rarement','D’une semaine à l’autre','Presque chaque jour']},{title:'Quel est ton sujet prioritaire ?',options:['Organisation des repas','Énergie et récupération','Un point très ciblé']},{title:'Quel niveau de suivi recherches-tu ?',options:['Faire le point','Être accompagné plusieurs semaines','Résoudre une question précise']}] as const

export function OrientationQuiz({isOpen,onClose}:{isOpen:boolean;onClose:()=>void}){
  const[step,setStep]=useState(0)
  if(!isOpen)return null
  const done=step>=questions.length
  return <div className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-forest-dark/60 p-3 sm:p-4" role="dialog" aria-modal="true" aria-labelledby="orientation-title"><div className="my-auto max-h-[calc(100dvh-24px)] w-full max-w-xl overflow-y-auto bg-paper p-5 sm:max-h-[calc(100dvh-32px)] sm:p-8"><div className="flex items-start justify-between gap-4"><div><p className="eyebrow">Orientation</p><h2 id="orientation-title" className="mt-2 text-balance text-[1.8rem] leading-[1.1] sm:mt-3 sm:text-3xl">Trouver le bon point de départ</h2></div><button type="button" onClick={onClose} aria-label="Fermer" className="grid size-11 shrink-0 place-items-center text-forest-dark"><X size={22} aria-hidden="true"/></button></div>{done?<div className="mt-6 sm:mt-8"><p className="text-pretty leading-relaxed text-muted">Un premier échange permet de choisir le format adapté à ton niveau de besoin et à ton planning.</p><div className="mt-6"><LinkButton to="/contact" className="w-full sm:w-auto">Prendre contact</LinkButton></div></div>:<div className="mt-6 sm:mt-8"><p className="font-serif text-xl leading-snug">{questions[step].title}</p><div className="mt-4 grid gap-3 sm:mt-5">{questions[step].options.map(option=><Button key={option} type="button" variant="secondary" onClick={()=>setStep(value=>value+1)} className="w-full justify-start text-left">{option}</Button>)}</div></div>}</div></div>}
