export interface ServicePack {
  slug: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  markers: string[];
  featured?: boolean;
}

export const discoveryCall = {
  name: "Appel découverte",
  price: "Gratuit",
  duration: "15 min",
  description:
    "Un premier échange sans engagement pour comprendre ton rythme, tes contraintes et vérifier quel format peut réellement t’être utile.",
} as const;

export const servicePacks: ServicePack[] = [
  {
    slug: "bilan-rythme",
    name: "Bilan rythme",
    price: "90 €",
    duration: "75 min",
    description:
      "Un rendez-vous approfondi pour cartographier les horaires, les repas, les temps de repos et les points de friction du quotidien.",
    markers: [
      "Analyse d’une semaine type",
      "Repères prioritaires personnalisés",
      "Synthèse écrite après le rendez-vous",
    ],
  },
  {
    slug: "suivi-rythme-energie",
    name: "Suivi rythme & énergie",
    price: "195 €",
    duration: "3 rendez-vous · 8 semaines",
    description:
      "Un accompagnement progressif pour tester, observer puis ajuster des repères compatibles avec les rotations et les semaines irrégulières.",
    markers: [
      "Bilan initial",
      "2 rendez-vous de suivi",
      "Ajustements entre les séances",
      "Ressources pratiques ciblées",
    ],
    featured: true,
  },
  {
    slug: "parcours-autonomie",
    name: "Parcours autonomie",
    price: "320 €",
    duration: "5 rendez-vous · 4 mois",
    description:
      "Un format plus long pour travailler l’organisation des repas, la récupération et l’autonomie quand le planning change souvent.",
    markers: [
      "Bilan initial",
      "4 rendez-vous de suivi",
      "Planification par séquences de travail",
      "Bilan d’autonomie final",
    ],
  },
];

export const serviceSteps = [
  [
    "Appel découverte",
    "Clarifier le contexte et choisir un format adapté sans surdimensionner le suivi.",
  ],
  [
    "Bilan initial",
    "Observer le planning réel, les habitudes et les contraintes avant de proposer des ajustements.",
  ],
  [
    "Expérimentation",
    "Tester quelques repères simples sur plusieurs cycles de travail et noter ce qui fonctionne.",
  ],
  [
    "Autonomie progressive",
    "Conserver une méthode pour ajuster les repères lorsque les horaires évoluent.",
  ],
] as const;
