export interface Recipe {
  slug: string
  title: string
  categories: string[]
  tags: string[]
  servings: string
  prepTime: string
  totalTime: string
  difficulty: 'Facile' | 'Intermédiaire'
  excerpt: string
  description: string
  ingredients: string[]
  steps: string[]
}

export const recipes: Recipe[] = [
  {
    slug: 'bowl-quinoa-courge-pois-chiches',
    title: 'Bowl quinoa, courge & pois chiches',
    categories: ['Repas'],
    tags: ['Préparation à l’avance', 'Végétal'],
    servings: '2 pers.',
    prepTime: '15 min',
    totalTime: '40 min',
    difficulty: 'Facile',
    excerpt: 'Une base complète qui se prépare en avance et s’assemble rapidement avant un poste.',
    description:
      'Ce bowl combine une céréale, des légumes rôtis et des pois chiches. Les éléments se conservent séparément et permettent de composer deux repas sans recuisiner.',
    ingredients: ['140 g de quinoa cru', '300 g de courge', '240 g de pois chiches cuits', '2 poignées de jeunes pousses', '1 c. à soupe d’huile d’olive', '1/2 citron', 'Paprika doux, poivre'],
    steps: ['Préchauffer le four à 200 °C et couper la courge en cubes.', 'Rôtir la courge avec l’huile et le paprika pendant environ 25 minutes.', 'Cuire le quinoa puis l’égoutter.', 'Rincer les pois chiches et préparer les jeunes pousses.', 'Répartir les éléments dans deux bols et ajouter le citron au moment de manger.'],
  },
  {
    slug: 'porridge-pomme-amande',
    title: 'Porridge pomme & amande',
    categories: ['Petit-déjeuner'],
    tags: ['Rapide', 'Chaud'],
    servings: '1 pers.',
    prepTime: '5 min',
    totalTime: '10 min',
    difficulty: 'Facile',
    excerpt: 'Une option chaude et douce pour démarrer une journée ou prendre un repas léger avant un poste.',
    description:
      'Une base de flocons d’avoine simple à adapter selon les fruits disponibles et le moment où elle est consommée.',
    ingredients: ['50 g de flocons d’avoine', '220 ml de lait ou boisson végétale', '1/2 pomme', '1 c. à soupe de purée d’amande', 'Cannelle', '1 c. à soupe de graines'],
    steps: ['Verser les flocons et le liquide dans une petite casserole.', 'Cuire à feu doux 5 à 7 minutes en remuant.', 'Ajouter la pomme en dés pendant les deux dernières minutes.', 'Servir avec la purée d’amande, les graines et une pincée de cannelle.'],
  },
  {
    slug: 'wrap-poulet-crudites-sauce-yaourt',
    title: 'Wrap poulet, crudités & sauce yaourt',
    categories: ['Repas'],
    tags: ['À emporter', 'Sans couverts'],
    servings: '2 wraps',
    prepTime: '15 min',
    totalTime: '20 min',
    difficulty: 'Facile',
    excerpt: 'Un repas compact qui s’emporte facilement quand la pause est courte ou imprévisible.',
    description:
      'Le format wrap permet de préparer un repas complet et facile à transporter. La garniture peut être préparée la veille et assemblée juste avant de partir.',
    ingredients: ['2 grandes tortillas', '180 g de poulet cuit', '1 carotte', '1/3 de concombre', '2 feuilles de salade', '3 c. à soupe de yaourt nature', '1 c. à café de moutarde douce', 'Herbes, poivre'],
    steps: ['Mélanger le yaourt, la moutarde, les herbes et le poivre.', 'Tailler les crudités en fines lamelles.', 'Répartir la sauce, la salade, le poulet et les crudités sur les tortillas.', 'Rabattre les côtés puis rouler fermement.', 'Conserver au frais jusqu’au repas.'],
  },
  {
    slug: 'salade-lentilles-feta-herbes',
    title: 'Salade de lentilles, feta & herbes',
    categories: ['Repas'],
    tags: ['Préparation à l’avance', 'Froid'],
    servings: '2 pers.',
    prepTime: '10 min',
    totalTime: '15 min',
    difficulty: 'Facile',
    excerpt: 'Une salade qui se conserve bien et évite de dépendre d’un micro-ondes pendant la pause.',
    description:
      'Les lentilles donnent une base rassasiante qui supporte bien la préparation anticipée. Les herbes et le citron apportent de la fraîcheur au moment de servir.',
    ingredients: ['300 g de lentilles cuites', '80 g de feta', '1 tomate', '1/2 concombre', '1 petite poignée de persil', '1 petite poignée de menthe', '1 c. à soupe d’huile d’olive', '1/2 citron'],
    steps: ['Rincer et égoutter les lentilles.', 'Couper la tomate, le concombre et la feta.', 'Ciseler les herbes.', 'Mélanger tous les ingrédients.', 'Ajouter l’huile et le citron juste avant de servir.'],
  },
  {
    slug: 'tartine-houmous-oeuf-legumes',
    title: 'Tartine houmous, œuf & légumes croquants',
    categories: ['Repas', 'Petit-déjeuner'],
    tags: ['Express'],
    servings: '1 pers.',
    prepTime: '8 min',
    totalTime: '12 min',
    difficulty: 'Facile',
    excerpt: 'Une assiette minute pour les jours où cuisiner longtemps n’est pas réaliste.',
    description:
      'Cette tartine réunit des éléments faciles à garder sous la main et peut servir de repas rapide au retour d’un poste ou avant une prise de service.',
    ingredients: ['2 tranches de pain au levain', '3 c. à soupe de houmous', '1 œuf', 'Quelques rondelles de radis', '1/4 de concombre', 'Graines de sésame', 'Poivre'],
    steps: ['Cuire l’œuf selon la texture souhaitée.', 'Faire griller le pain.', 'Étaler le houmous.', 'Ajouter les légumes puis l’œuf coupé.', 'Terminer avec le sésame et le poivre.'],
  },
  {
    slug: 'yaourt-poire-noix-cacao',
    title: 'Bol yaourt, poire, noix & cacao',
    categories: ['Collation'],
    tags: ['Sans cuisson', '5 minutes'],
    servings: '1 pers.',
    prepTime: '5 min',
    totalTime: '5 min',
    difficulty: 'Facile',
    excerpt: 'Une collation simple à assembler pour éviter de partir travailler sans option prévue.',
    description:
      'Une combinaison rapide à préparer, modulable avec le fruit et les oléagineux disponibles. Elle se transporte facilement dans un contenant hermétique.',
    ingredients: ['150 g de yaourt nature', '1 petite poire', '20 g de noix', '1 c. à café de cacao non sucré', '1 c. à soupe de flocons d’avoine'],
    steps: ['Verser le yaourt dans un bol ou un contenant.', 'Couper la poire en dés.', 'Ajouter les noix et les flocons.', 'Saupoudrer de cacao juste avant de manger.'],
  },
]
