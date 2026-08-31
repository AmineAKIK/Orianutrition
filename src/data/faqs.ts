interface FAQItem {
  question: string;
  answer: string;
}
export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    category: "Accompagnement",
    items: [
      {
        question: "Les consultations sont-elles possibles en visio ?",
        answer:
          "Oui. Tous les formats peuvent être suivis à distance, ce qui permet de garder les rendez-vous compatibles avec un planning variable ou des déplacements.",
      },
      {
        question: "Faut-il avoir un planning fixe pour commencer ?",
        answer:
          "Non. L’accompagnement est justement construit pour des horaires qui changent. Nous cherchons des repères utilisables dans plusieurs configurations plutôt qu’un emploi du temps parfait.",
      },
      {
        question: "Comment choisir entre les trois formats ?",
        answer:
          "L’appel découverte sert à clarifier le besoin. Un bilan unique peut suffire pour cadrer une situation précise ; les formats de suivi sont plus adaptés quand plusieurs cycles de travail doivent être observés et ajustés.",
      },
    ],
  },
  {
    category: "Rythmes atypiques",
    items: [
      {
        question:
          "Est-ce uniquement pour les personnes qui travaillent de nuit ?",
        answer:
          "Non. Les accompagnements s’adressent aussi aux horaires alternants, très matinaux, fractionnés ou simplement variables lorsque l’organisation des repas et de la récupération devient difficile.",
      },
      {
        question: "Dois-je manger à heures fixes ?",
        answer:
          "Pas nécessairement. Selon les rotations, il est souvent plus utile de travailler avec des repères relatifs au poste, au réveil et aux temps de repos qu’avec des heures identiques tous les jours.",
      },
      {
        question: "Que se passe-t-il si mon planning change pendant le suivi ?",
        answer:
          "C’est prévu. Les rendez-vous servent aussi à tester si les repères restent utilisables lorsque le planning évolue, puis à les simplifier ou les déplacer si nécessaire.",
      },
    ],
  },
  {
    category: "Nutrition & organisation",
    items: [
      {
        question: "Est-ce que je recevrai un menu imposé ?",
        answer:
          "Non. Des exemples de repas et des ressources peuvent être proposés, mais l’objectif est de construire des solutions adaptables plutôt qu’un menu rigide à suivre au jour près.",
      },
      {
        question: "Faut-il cuisiner tous ses repas à l’avance ?",
        answer:
          "Non. La préparation anticipée est un levier parmi d’autres. Elle peut se limiter à quelques bases ou à des options de secours pour les moments où cuisiner n’est pas réaliste.",
      },
      {
        question:
          "Les recettes du site sont-elles des prescriptions personnalisées ?",
        answer:
          "Non. Elles servent d’inspiration générale. Un accompagnement personnalisé tient compte du contexte individuel et ne se résume pas à reproduire les recettes du site.",
      },
    ],
  },
  {
    category: "Cadre & santé",
    items: [
      {
        question: "Est-ce un suivi médical ?",
        answer:
          "Non. Oria propose un accompagnement de bien-être et d’organisation du quotidien. Il ne remplace ni diagnostic, ni traitement, ni suivi par un professionnel de santé.",
      },
      {
        question:
          "Puis-je venir avec une pathologie ou un traitement en cours ?",
        answer:
          "Le contexte peut être évoqué pour comprendre le quotidien, mais toute question médicale, adaptation thérapeutique ou prise en charge nutritionnelle liée à une pathologie relève des professionnels de santé compétents.",
      },
      {
        question:
          "Que faire si ma fatigue ou mes troubles du sommeil deviennent importants ?",
        answer:
          "Une fatigue persistante, une somnolence dangereuse ou des troubles du sommeil marqués doivent être discutés avec un médecin. L’accompagnement Oria ne doit pas retarder cette démarche.",
      },
    ],
  },
];
