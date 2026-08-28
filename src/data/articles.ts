export interface Article {
  slug: string
  title: string
  category: string
  isoDate: string
  excerpt: string
  body: string[]
  disclaimer?: string
}

export const articles: Article[] = [
  { slug:'manger-poste-nuit', title:'Manger pendant un poste de nuit', category:'Rythmes atypiques', isoDate:'2026-08-12', excerpt:'Organiser les prises alimentaires sans chercher à reproduire une journée classique.', body:['Le contexte du poste, les pauses disponibles et le sommeil précédent changent la façon dont un repas est vécu.','L’objectif est d’identifier quelques options fiables et faciles à digérer, puis d’observer ce qui fonctionne réellement.'], disclaimer:'Ces informations relèvent du bien-être général et ne remplacent pas un avis médical.' },
  { slug:'transition-jour-nuit', title:'Préparer une transition jour / nuit', category:'Organisation', isoDate:'2026-08-05', excerpt:'Quelques repères pour limiter les changements brutaux quand le planning tourne.', body:['Une transition progressive peut aider à rendre les changements de rythme plus lisibles.','Lumière, repas, activité et temps de repos peuvent servir de repères simples.'] },
  { slug:'routine-recuperation', title:'Créer une routine de récupération', category:'Sommeil', isoDate:'2026-07-28', excerpt:'Construire une séquence courte et répétable autour du retour au calme.', body:['Une routine utile n’a pas besoin d’être longue : elle doit surtout être répétable.','Réduire le nombre de décisions au moment du coucher aide à protéger la fenêtre de récupération.'] },
]
