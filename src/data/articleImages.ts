import nightMeals from "../assets/articles/repas-nuit.webp";
import transition from "../assets/articles/transition.webp";
import sleep from "../assets/articles/retour-poste.webp";
import snack from "../assets/articles/collations.webp";
import prep from "../assets/articles/cuisine-modulaire.webp";
import energy from "../assets/articles/energie.webp";

export const articleImages: Record<string, string> = {
  "organiser-repas-semaine-de-nuit": nightMeals,
  "transition-jour-nuit-reperes": transition,
  "routine-retour-de-poste": sleep,
  "preparer-collations-poste-long": snack,
  "planifier-cuisine-horaires-variables": prep,
  "observer-energie-sans-tout-mesurer": energy,
};

export const articleImagePositions: Record<string, string> = {
  "organiser-repas-semaine-de-nuit": "50% 50%",
  "transition-jour-nuit-reperes": "50% 42%",
  "routine-retour-de-poste": "50% 34%",
  "preparer-collations-poste-long": "50% 45%",
  "planifier-cuisine-horaires-variables": "50% 50%",
  "observer-energie-sans-tout-mesurer": "50% 36%",
};
