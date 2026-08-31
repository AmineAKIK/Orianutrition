import { StandardPage } from "./StandardPage";
import { brand } from "../config/site";
import { legalDisclaimer } from "../data/site";

export function LegalPage() {
  return (
    <StandardPage
      eyebrow="Informations"
      title="Mentions légales"
      intro="Informations relatives à l’édition, aux contenus et à l’utilisation du site."
    >
      <div className="max-w-3xl space-y-10 text-muted leading-relaxed">
        <section>
          <h2 className="text-2xl text-forest-dark">Éditeur</h2>
          <p className="mt-3">
            Le site est publié sous la marque {brand.name}. Contact :{" "}
            {brand.email}.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-forest-dark">Nature des contenus</h2>
          <p className="mt-3">{legalDisclaimer}</p>
        </section>
        <section>
          <h2 className="text-2xl text-forest-dark">Formulaire de contact</h2>
          <p className="mt-3">
            Le formulaire présent sur cette version du site fonctionne dans
            l’interface du navigateur et ne doit pas être utilisé pour
            transmettre des informations de santé, des données confidentielles
            ou des demandes urgentes. Pour une prise de contact directe, les
            coordonnées indiquées sur la page Contact peuvent être utilisées.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-forest-dark">Propriété des contenus</h2>
          <p className="mt-3">
            Les textes, illustrations et éléments graphiques publiés sous
            l’identité Oria Nutrition sont destinés à ce site. Toute
            réutilisation intégrale doit faire l’objet d’une autorisation
            préalable.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-forest-dark">Urgence et santé</h2>
          <p className="mt-3">
            En cas de symptôme préoccupant, de fatigue sévère, de somnolence
            dangereuse ou de situation urgente, il convient de contacter les
            professionnels ou services de santé appropriés plutôt que d’attendre
            une réponse via ce site.
          </p>
        </section>
      </div>
    </StandardPage>
  );
}
