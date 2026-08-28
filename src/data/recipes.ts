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
  { slug:'bowl-quinoa-legumes', title:'Bowl quinoa & légumes rôtis', categories:['Repas'], tags:['Préparation à l’avance'], servings:'2 pers.', prepTime:'15 min', totalTime:'35 min', difficulty:'Facile', excerpt:'Une base complète, pratique à préparer à l’avance.', description:'Un assemblage simple à adapter avec les légumes et les protéines disponibles.', ingredients:['Quinoa','Légumes de saison','Pois chiches','Huile d’olive','Citron'], steps:['Cuire le quinoa.','Rôtir les légumes.','Assembler avec les pois chiches et assaisonner.'] },
  { slug:'porridge-fruits-rouges', title:'Porridge fruits rouges & graines', categories:['Petit-déjeuner'], tags:['Rapide'], servings:'1 pers.', prepTime:'5 min', totalTime:'10 min', difficulty:'Facile', excerpt:'Une option chaude et simple pour un début de journée ou de poste.', description:'Une base de flocons d’avoine facile à personnaliser selon les fruits disponibles.', ingredients:['Flocons d’avoine','Lait ou boisson végétale','Fruits rouges','Graines'], steps:['Chauffer les flocons avec le liquide.','Ajouter les fruits.','Terminer avec les graines.'] },
]
