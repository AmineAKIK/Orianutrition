import nightMeals from '../assets/articles/repas-nuit.svg'
import transition from '../assets/articles/transition.svg'
import sleep from '../assets/articles/retour-poste.svg'
import snack from '../assets/articles/collations.svg'
import prep from '../assets/articles/cuisine-modulaire.svg'
import energy from '../assets/articles/energie.svg'

export const articleImages: Record<string, string> = {
  'organiser-repas-semaine-de-nuit': nightMeals,
  'transition-jour-nuit-reperes': transition,
  'routine-retour-de-poste': sleep,
  'preparer-collations-poste-long': snack,
  'planifier-cuisine-horaires-variables': prep,
  'observer-energie-sans-tout-mesurer': energy,
}
