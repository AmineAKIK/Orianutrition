import nightMeals from '../assets/articles/repas-nuit.png'
import transition from '../assets/articles/transition.png'
import sleep from '../assets/articles/retour-poste.png'
import snack from '../assets/articles/collations.png'
import prep from '../assets/articles/cuisine-modulaire.png'
import energy from '../assets/articles/energie.png'

export const articleImages: Record<string, string> = {
  'organiser-repas-semaine-de-nuit': nightMeals,
  'transition-jour-nuit-reperes': transition,
  'routine-retour-de-poste': sleep,
  'preparer-collations-poste-long': snack,
  'planifier-cuisine-horaires-variables': prep,
  'observer-energie-sans-tout-mesurer': energy,
}

export const articleImagePositions: Record<string, string> = {
  'organiser-repas-semaine-de-nuit': '50% 50%',
  'transition-jour-nuit-reperes': '50% 42%',
  'routine-retour-de-poste': '50% 34%',
  'preparer-collations-poste-long': '50% 45%',
  'planifier-cuisine-horaires-variables': '50% 50%',
  'observer-energie-sans-tout-mesurer': '50% 36%',
}
