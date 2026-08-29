import bowl from '../assets/recipes/bowl-quinoa-courge.png'
import porridge from '../assets/recipes/porridge-pomme-amande.png'
import wrap from '../assets/recipes/wrap-poulet-crudites.png'
import lentils from '../assets/recipes/salade-lentilles.png'
import toast from '../assets/recipes/tartine-houmous-oeuf.png'
import yoghurt from '../assets/recipes/yaourt-poire-noix.png'

export const recipeImages: Record<string, string> = {
  'bowl-quinoa-courge-pois-chiches': bowl,
  'porridge-pomme-amande': porridge,
  'wrap-poulet-crudites-sauce-yaourt': wrap,
  'salade-lentilles-feta-herbes': lentils,
  'tartine-houmous-oeuf-legumes': toast,
  'yaourt-poire-noix-cacao': yoghurt,
}

export const recipeImagePositions: Record<string, string> = {
  'bowl-quinoa-courge-pois-chiches': '50% 47%',
  'porridge-pomme-amande': '50% 45%',
  'wrap-poulet-crudites-sauce-yaourt': '50% 50%',
  'salade-lentilles-feta-herbes': '50% 48%',
  'tartine-houmous-oeuf-legumes': '50% 46%',
  'yaourt-poire-noix-cacao': '50% 45%',
}
