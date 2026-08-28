export interface ServicePack { slug:string; name:string; price:string; duration:string; description:string; markers:string[]; featured?:boolean }
export const discoveryCall={name:'Appel découverte',price:'Gratuit',duration:'15 min',description:'Un premier échange pour comprendre ton rythme, tes contraintes et ce que tu souhaites améliorer.'} as const
export const servicePacks:ServicePack[]=[
  {slug:'bilan-initial',name:'Bilan initial',price:'90 €',duration:'75 min',description:'Faire le point sur le rythme, les repas, la récupération et les priorités.',markers:['Analyse du rythme actuel','Premiers repères personnalisés']},
  {slug:'suivi-rythme-energie',name:'Suivi rythme & énergie',price:'65 €',duration:'50 min',description:'Faire évoluer les repères en fonction du quotidien et des semaines de travail.',markers:['Ajustements progressifs','Suivi des repères en cours'],featured:true},
  {slug:'session-ciblee',name:'Session ciblée',price:'50 €',duration:'40 min',description:'Travailler une problématique précise sans engager un suivi long.',markers:['Un sujet prioritaire','Plan d’action synthétique']},
]
export const serviceSteps=[['Appel découverte','Clarifier le contexte et les priorités.'],['Bilan initial','Poser les bases de l’accompagnement.'],['Séances de suivi','Ajuster les repères au quotidien réel.'],['Autonomie progressive','Conserver des outils utilisables après le suivi.']] as const
