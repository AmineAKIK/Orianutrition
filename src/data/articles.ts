export interface Article {
  slug: string;
  title: string;
  category: string;
  isoDate: string;
  excerpt: string;
  body: string[];
  disclaimer?: string;
}

const wellbeingDisclaimer =
  "Ces informations relèvent du bien-être général. Elles ne constituent pas un diagnostic ni un avis médical et ne remplacent pas un suivi avec un professionnel de santé.";

export const articles: Article[] = [
  {
    slug: "organiser-repas-semaine-de-nuit",
    title: "Organiser ses repas pendant une semaine de nuit",
    category: "Rythmes atypiques",
    isoDate: "2026-08-24",
    excerpt:
      "Construire quelques repères stables sans essayer de reproduire artificiellement une journée classique.",
    body: [
      "Une semaine de nuit modifie à la fois les horaires disponibles pour manger, le niveau de fatigue au moment de cuisiner et la durée des pauses. Chercher à conserver exactement les mêmes repas qu’en journée peut donc ajouter de la contrainte plutôt que simplifier les choses.",
      "Un point de départ utile consiste à repérer trois moments : le repas pris avant le poste, ce qui est disponible pendant la nuit et le moment du retour. Le contenu de ces prises alimentaires peut ensuite être ajusté selon la faim, la digestion et la possibilité réelle de faire une pause.",
      "Préparer deux bases polyvalentes avant la séquence de travail peut réduire beaucoup de décisions : une céréale ou des légumes cuits, une source de protéines prête à l’emploi, quelques options froides et une collation choisie à l’avance.",
      "Le but n’est pas de réussir une semaine parfaite. Il s’agit plutôt de construire un système assez simple pour rester utilisable quand un poste se prolonge, qu’une pause saute ou que la fatigue est plus forte que prévu.",
    ],
    disclaimer: wellbeingDisclaimer,
  },
  {
    slug: "transition-jour-nuit-reperes",
    title:
      "Passer d’un rythme de jour à une série de nuits : quels repères garder ?",
    category: "Organisation",
    isoDate: "2026-08-17",
    excerpt:
      "Identifier les éléments du quotidien qui peuvent rester constants quand les heures de sommeil et de repas se déplacent.",
    body: [
      "Les rotations de planning donnent parfois l’impression qu’il faut tout recommencer à chaque changement. Pourtant, certains repères peuvent rester identiques même lorsque leur heure se décale.",
      "La composition d’un premier repas, une courte séquence de préparation avant le travail ou une routine de retour au calme peuvent fonctionner comme des points d’ancrage. Leur intérêt vient davantage de leur répétition que d’une heure précise sur l’horloge.",
      "Il peut aussi être utile de distinguer ce qui doit rester stable de ce qui doit rester flexible. Prévoir un repas avant le poste peut être stable ; décider exactement à quelle heure prendre une collation pendant la nuit peut rester dépendant de la faim et de la pause disponible.",
      "Cette distinction limite la charge mentale : on protège quelques décisions importantes et on accepte que le reste s’adapte au terrain.",
    ],
    disclaimer: wellbeingDisclaimer,
  },
  {
    slug: "routine-retour-de-poste",
    title: "Créer une routine de retour de poste qui reste réaliste",
    category: "Sommeil",
    isoDate: "2026-08-10",
    excerpt:
      "Une séquence courte et répétable peut être plus utile qu’une longue routine impossible à tenir après une nuit difficile.",
    body: [
      "Au retour d’un poste de nuit, l’énergie disponible pour prendre de bonnes décisions est souvent limitée. Une routine compliquée risque donc de disparaître précisément les jours où elle serait la plus utile.",
      "Une version réaliste peut tenir en trois étapes : réduire progressivement les sollicitations, préparer l’environnement de repos et garder une petite séquence identique avant de se coucher. L’objectif est de signaler que la période active se termine.",
      "La lumière, le bruit, la température de la pièce et les écrans peuvent influencer le confort au moment du coucher. Il n’est pas nécessaire de tout optimiser d’un coup : choisir le facteur le plus gênant est souvent plus simple.",
      "Si les difficultés de sommeil deviennent persistantes, importantes ou s’accompagnent d’une somnolence dangereuse, elles doivent être discutées avec un professionnel de santé.",
    ],
    disclaimer: wellbeingDisclaimer,
  },
  {
    slug: "preparer-collations-poste-long",
    title:
      "Préparer des collations pour un poste long sans multiplier les options",
    category: "Organisation",
    isoDate: "2026-08-03",
    excerpt:
      "Prévoir peu d’options mais les rendre réellement disponibles peut éviter beaucoup de décisions prises sous fatigue.",
    body: [
      "Une collation prévue n’a pas besoin d’être sophistiquée. Son premier avantage est souvent d’exister au bon moment, plutôt que de dépendre uniquement de ce qui est disponible sur le lieu de travail.",
      "Pour simplifier la préparation, on peut choisir deux familles d’options : une collation fraîche à conserver au froid et une solution de secours qui supporte mieux le transport. Cette redondance évite de préparer cinq alternatives différentes.",
      "Le choix dépend ensuite du contexte : durée du poste, heure du dernier repas, niveau de faim habituel et conditions de conservation. Il n’existe pas une collation universelle adaptée à toutes les nuits.",
      "Observer ce qui est réellement consommé pendant deux ou trois semaines permet d’ajuster les quantités et d’éviter de transporter systématiquement des aliments qui reviennent intacts.",
    ],
    disclaimer: wellbeingDisclaimer,
  },
  {
    slug: "planifier-cuisine-horaires-variables",
    title: "Cuisiner quand le planning change chaque semaine",
    category: "Repas",
    isoDate: "2026-07-27",
    excerpt:
      "Remplacer le menu rigide par quelques préparations modulaires qui peuvent servir à plusieurs moments de la semaine.",
    body: [
      "Les menus planifiés jour par jour fonctionnent mal lorsque les horaires changent ou qu’un remplacement de dernière minute décale toute la semaine. Une organisation modulaire est souvent plus robuste.",
      "L’idée consiste à préparer quelques composants plutôt que plusieurs plats fermés : un féculent, des légumes cuits, une sauce, une source de protéines et quelques éléments frais. Ils peuvent ensuite devenir un bowl, une salade, un wrap ou une assiette chaude.",
      "Cette méthode permet aussi de varier sans refaire toute la préparation. Changer l’assaisonnement, les herbes ou le format du repas suffit parfois à éviter l’impression de manger le même plat trois fois.",
      "Le bon niveau de préparation est celui qui réduit la charge de la semaine sans transformer le jour de repos en marathon de cuisine.",
    ],
    disclaimer: wellbeingDisclaimer,
  },
  {
    slug: "observer-energie-sans-tout-mesurer",
    title:
      "Observer son énergie sans transformer le quotidien en tableau de bord",
    category: "Repères",
    isoDate: "2026-07-20",
    excerpt:
      "Quelques observations simples peuvent suffire pour repérer les moments difficiles et tester des ajustements.",
    body: [
      "Quand on cherche à comprendre une fatigue récurrente, il est tentant de tout mesurer : heures exactes, calories, sommeil, café, humeur et activité. Cette quantité de données peut devenir difficile à tenir et encore plus difficile à interpréter.",
      "Une observation plus légère peut se concentrer sur trois éléments pendant une courte période : le type de poste, les principaux moments de repas et un ressenti d’énergie à deux ou trois moments fixes. Cela suffit souvent à faire apparaître des régularités.",
      "Une fois un schéma repéré, mieux vaut tester un seul changement à la fois. Modifier simultanément le sommeil, les repas, la caféine et l’activité rend presque impossible de savoir ce qui a réellement aidé.",
      "L’observation doit rester un outil, pas une obligation. Si elle augmente le stress ou prend trop de place, elle perd sa fonction première : rendre les décisions plus simples.",
    ],
    disclaimer: wellbeingDisclaimer,
  },
];
