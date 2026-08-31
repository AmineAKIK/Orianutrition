export type OrientationAnswers = {
  planning: "stable" | "variable" | "volatile";
  priority: "meals" | "energy" | "targeted";
  support: "assessment" | "ongoing" | "focused";
};

export type OrientationRecommendation = {
  key: "discovery" | "assessment" | "follow-up";
  title: string;
  reason: string;
  ctaLabel: string;
};

export function resolveOrientationRecommendation(
  answers: OrientationAnswers,
): OrientationRecommendation {
  if (
    answers.support === "ongoing" ||
    answers.planning === "volatile" ||
    answers.priority === "energy"
  ) {
    return {
      key: "follow-up",
      title: "Un suivi sur plusieurs semaines",
      reason:
        "Ton rythme semble demander des ajustements réguliers pour construire des repères qui restent réalistes quand le planning ou l’énergie varient.",
      ctaLabel: "Échanger sur le suivi",
    };
  }

  if (answers.support === "focused" || answers.priority === "targeted") {
    return {
      key: "discovery",
      title: "Un appel découverte pour cadrer le besoin",
      reason:
        "Ton besoin paraît ciblé. Un premier échange court permet de vérifier le bon niveau d’accompagnement sans te faire entrer dans un suivi plus lourd que nécessaire.",
      ctaLabel: "Réserver mon appel",
    };
  }

  return {
    key: "assessment",
    title: "Commencer par un bilan structuré",
    reason:
      "Ton besoin semble surtout être de faire le point et de poser une base claire avant de décider si un suivi régulier est utile.",
    ctaLabel: "Demander un bilan",
  };
}
