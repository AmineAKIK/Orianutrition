export interface FAQItem { question: string; answer: string }
export interface FAQCategory { category: string; items: FAQItem[] }
export const faqCategories: FAQCategory[] = [
  { category:'Accompagnement', items:[{question:'Les consultations sont-elles possibles en visio ?',answer:'Oui, les accompagnements sont conçus pour pouvoir être suivis à distance.'},{question:'Faut-il avoir un planning fixe ?',answer:'Non. Le travail porte justement sur des repères qui restent utilisables quand les horaires changent.'}] },
  { category:'Cadre', items:[{question:'Est-ce un suivi médical ?',answer:'Non. Oria propose un accompagnement de bien-être et d’organisation du quotidien, qui ne remplace ni diagnostic, ni traitement, ni suivi médical.'}] },
]
