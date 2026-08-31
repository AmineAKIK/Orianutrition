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
          "Le bon point de départ dépend surtout de la fréquence à laquelle ton planning change, du sujet prioritaire et du niveau de soutien dont tu as besoin. Le quiz d’orientation peut t’aider à cadrer ce choix avant un premier échange.",
      },
    ],
  },
  {
    category: "Nutrition & quotidien",
    items: [
      {
        question: "Est-ce qu’un suivi impose un plan alimentaire strict ?",
        answer:
          "Non. L’objectif est de construire des repères flexibles : composition des repas, options de dépannage, organisation des courses et préparation, selon tes contraintes réelles.",
      },
      {
        question: "Que se passe-t-il si mes horaires changent en cours de suivi ?",
        answer:
          "C’est prévu. Les repères sont réévalués lorsque le rythme évolue afin de rester applicables lors des postes de jour, de nuit ou des rotations.",
      },
      {
        question: "Le site remplace-t-il un avis médical ?",
        answer:
          "Non. Les contenus proposés sont informatifs et ne remplacent ni un diagnostic, ni un traitement, ni le suivi d’un professionnel de santé. En cas de symptôme, de pathologie ou de situation particulière, il faut consulter le professionnel compétent.",
      },
    ],
  },
  {
    category: "Sommeil & récupération",
    items: [
      {
        question: "L’outil sommeil donne-t-il une durée idéale ?",
        answer:
          "Non. Il additionne simplement les périodes de sommeil déclarées et affiche un repère de lecture. Il ne produit pas de diagnostic ni de recommandation médicale personnalisée.",
      },
      {
        question: "Peut-on compter plusieurs périodes de sommeil dans une journée ?",
        answer:
          "Oui. L’outil permet d’ajouter plusieurs périodes, y compris lorsqu’une période traverse minuit, afin de mieux refléter les rythmes fractionnés ou décalés.",
      },
    ],
  },
  {
    category: "Pratique",
    items: [
      {
        question: "Comment se déroule le premier contact ?",
        answer:
          "Le formulaire prépare un email dans ta propre application de messagerie. Tu gardes la main sur le contenu et l’envoi ; aucune donnée n’est transmise à un serveur par ce site de démonstration.",
      },
      {
        question: "L’espace client est-il connecté à de vraies données ?",
        answer:
          "Non. Il s’agit d’une démonstration d’interface avec des données fictives, conçue pour illustrer l’expérience d’un espace de suivi sans manipuler de données personnelles réelles.",
      },
    ],
  },
];
