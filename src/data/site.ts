export interface NavLink {
  label: string;
  path: string;
}

export const mainNav: NavLink[] = [
  { label: "Mon approche", path: "/mon-approche" },
  { label: "Accompagnements", path: "/accompagnements" },
  { label: "Recettes", path: "/recettes" },
  { label: "Conseils", path: "/conseils" },
  { label: "Sommeil", path: "/sommeil" },
];

export const footerNav: NavLink[] = [
  { label: "Accueil", path: "/" },
  ...mainNav,
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
  { label: "Espace client", path: "/espace-client" },
  { label: "Mentions légales", path: "/mentions-legales" },
];

export const situations = [
  [
    "Horaires de nuit",
    "Construire des repères quand la journée commence au moment où les autres vont dormir.",
  ],
  [
    "Planning variable",
    "Adapter les repas et le repos sans dépendre d’un emploi du temps fixe.",
  ],
  [
    "Énergie irrégulière",
    "Repérer les moments difficiles et réduire les décisions prises sous fatigue.",
  ],
  [
    "Repas difficiles à organiser",
    "Prévoir des solutions simples quand les horaires compliquent la préparation.",
  ],
  [
    "Sommeil décalé",
    "Créer une routine réaliste autour du repos en journée ou entre deux rotations.",
  ],
  [
    "Charge mentale",
    "Avancer avec quelques repères souples plutôt qu’un cadre impossible à tenir.",
  ],
] as const;

export const approach = {
  intro:
    "Je construis avec toi des repères alimentaires et de récupération compatibles avec les horaires atypiques, sans chercher à imposer un rythme standard.",
  body: [
    "Les horaires décalés changent les moments de faim, les possibilités de préparation et les fenêtres de récupération. L’accompagnement commence donc par le quotidien réel : planning, trajets, pauses, contraintes familiales et énergie disponible.",
    "Plutôt que multiplier les règles, nous identifions quelques repères stables puis nous les testons sur plusieurs séquences de travail. Ce qui ne résiste pas à une semaine chargée est simplifié plutôt que culpabilisé.",
    "L’objectif est de rendre les décisions plus faciles et de gagner progressivement en autonomie, y compris lorsque les rotations changent ou qu’une semaine ne ressemble pas à la précédente.",
  ],
  principles: [
    [
      "Approche concrète",
      "Des ajustements reliés au planning et aux contraintes observées.",
    ],
    ["Horaires atypiques", "Nuit, rotations, horaires matinaux ou variables."],
    [
      "Sans rigidité",
      "Des repères suffisamment souples pour rester utilisables.",
    ],
    [
      "Autonomie",
      "Comprendre ses leviers pour pouvoir ajuster ensuite sans dépendre d’un plan figé.",
    ],
  ] as const,
  photoBadge: "Écoute · Observation · Ajustement",
} as const;

export const signature = {
  title:
    "Quand ton rythme change, tes repères doivent pouvoir bouger avec lui.",
  body: "Oria part de l’emploi du temps réel plutôt que d’un rythme idéal. L’objectif n’est pas de tout contrôler, mais de construire une structure assez claire pour rester utile lorsque les horaires tournent.",
} as const;

export const legalDisclaimer =
  "Les contenus du site proposent des repères de bien-être général. Ils ne constituent pas un diagnostic, un traitement ou un avis médical et ne remplacent pas un suivi avec un professionnel de santé.";
