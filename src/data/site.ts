export interface NavLink { label: string; path: string }
export const mainNav: NavLink[] = [
  { label: 'Mon approche', path: '/mon-approche' },
  { label: 'Accompagnements', path: '/accompagnements' },
  { label: 'Recettes', path: '/recettes' },
  { label: 'Conseils', path: '/conseils' },
  { label: 'Sommeil', path: '/sommeil' },
]
export const footerNav: NavLink[] = [{label:'Accueil',path:'/'}, ...mainNav, {label:'FAQ',path:'/faq'}, {label:'Contact',path:'/contact'}, {label:'Espace client',path:'/espace-client'}, {label:'Mentions légales',path:'/mentions-legales'}]
export const situations = [
  ['Horaires de nuit','Construire des repères quand la journée commence au moment où les autres vont dormir.'],
  ['Planning variable','Adapter les repas et le repos sans dépendre d’un emploi du temps fixe.'],
  ['Énergie en berne','Mieux répartir alimentation, pauses et récupération dans la journée.'],
  ['Repas difficiles à organiser','Prévoir des solutions simples quand les horaires compliquent la préparation.'],
  ['Sommeil perturbé','Créer une routine réaliste autour du sommeil en journée ou décalé.'],
  ['Charge mentale','Avancer avec des repères souples plutôt qu’un cadre impossible à tenir.'],
] as const
export const approach = {
  intro:'Je construis avec toi des repères alimentaires et de récupération compatibles avec les horaires atypiques, sans chercher à imposer un rythme standard.',
  body:['Les horaires décalés changent les moments de faim, les possibilités de préparation et les fenêtres de récupération. L’accompagnement commence donc par le quotidien réel.','Plutôt que multiplier les règles, nous identifions quelques repères stables puis nous les adaptons aux rotations de planning et aux semaines plus chargées.','L’objectif est de rendre les décisions plus simples et de gagner progressivement en autonomie.'],
  principles:[['Approche concrète','Des ajustements reliés aux contraintes du planning.'],['Horaires atypiques','Nuit, rotations et horaires variables.'],['Sans rigidité','Des repères souples plutôt qu’un cadre parfait.'],['Autonomie','Comprendre ses propres leviers pour ajuster ensuite.']] as const,
}
