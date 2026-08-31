import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  FileText,
  MessageCircle,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import { Modal } from "../components/ui/Modal";
import { RecipeCard } from "../components/cards/RecipeCard";
import { recipes } from "../data/recipes";
import { clientDashboard } from "../data/client";

function ClientLanding({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="section-pad bg-paper">
      <Container>
        <div className="grid lg:grid-cols-[1fr_.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="eyebrow mb-5">Espace client</p>
            <h1 className="text-4xl md:text-5xl leading-[1.08] mb-6">
              Ton suivi réuni au même endroit.
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-9 max-w-lg">
              Rendez-vous, documents, objectifs et repères de la semaine restent
              accessibles dans un espace simple à parcourir.
            </p>
            <div className="space-y-5 mb-9">
              {[
                [
                  CalendarCheck,
                  "Rendez-vous",
                  "Voir le prochain échange en un coup d’œil.",
                ],
                [
                  FileText,
                  "Documents",
                  "Retrouver les ressources utiles au suivi.",
                ],
                [
                  Sparkles,
                  "Progression",
                  "Garder une vue simple sur les priorités en cours.",
                ],
              ].map(([Icon, title, description]) => (
                <div key={String(title)} className="flex items-start gap-4">
                  <div className="size-10 grid place-items-center bg-sage-light">
                    <Icon size={18} className="text-forest-soft" />
                  </div>
                  <div>
                    <p className="font-serif text-lg">{String(title)}</p>
                    <p className="text-sm text-muted">{String(description)}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={onEnter}
              className="inline-flex min-h-12 items-center gap-2 bg-forest px-7 text-paper"
            >
              Accéder à mon espace <ArrowRight size={17} />
            </button>
          </div>
          <div className="bg-sage-light/60 border border-sage p-6">
            <div className="bg-paper border border-sage p-6">
              <p className="font-serif text-lg">
                Bonjour {clientDashboard.firstName}
              </p>
              <div className="mt-6 border-t border-sage-light pt-4">
                <p className="text-xs uppercase tracking-wider text-forest-soft">
                  Prochain rendez-vous
                </p>
                <p className="mt-2 text-sm font-medium">
                  {clientDashboard.nextAppointment.label} —{" "}
                  {clientDashboard.nextAppointment.date}
                </p>
              </div>
              <div className="mt-4 border-t border-sage-light pt-4">
                <p className="text-xs uppercase tracking-wider text-forest-soft">
                  Cette semaine
                </p>
                <div className="mt-3 h-1.5 bg-sage-light">
                  <div className="h-full w-2/3 bg-forest-soft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Dashboard() {
  const c = clientDashboard;
  const [selectedDocument, setSelectedDocument] = useState<
    (typeof c.documents)[number] | null
  >(null);
  const closeDocument = () => setSelectedDocument(null);

  return (
    <section className="bg-sage-light/40">
      <Container className="py-12 lg:py-16">
        <h1 className="text-3xl md:text-4xl">Bonjour {c.firstName} 👋</h1>
        <p className="mt-2 text-muted">Voici tes repères cette semaine.</p>
        <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-6">
          <div className="bg-forest-dark text-paper p-7 lg:p-9">
            <div className="flex items-center gap-2 mb-4">
              <CalendarCheck size={18} className="text-gold-muted" />
              <p className="text-xs uppercase tracking-wider text-sage">
                Prochain rendez-vous
              </p>
            </div>
            <h2 className="text-paper text-3xl">{c.nextAppointment.label}</h2>
            <p className="mt-2 text-sage">
              {c.nextAppointment.date} à {c.nextAppointment.time} ·{" "}
              {c.nextAppointment.mode}
            </p>
          </div>
          <div className="border border-sage bg-paper p-7">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-gold-muted" />
              <p className="text-xs uppercase tracking-wider text-forest-soft">
                Mon programme
              </p>
            </div>
            <h2 className="text-2xl">{c.program}</h2>
            <p className="mt-2 text-sm text-muted">Accompagnement en cours</p>
          </div>
        </div>
        <div className="mt-6 bg-paper p-7">
          <h2 className="text-xs uppercase tracking-wider text-forest-soft">
            Cette semaine
          </h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {c.weeklyFocus.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="mt-1 text-xs text-muted">{item.value}</p>
                <div
                  className="mt-3 h-1.5 bg-sage-light"
                  role="progressbar"
                  aria-label={item.label}
                  aria-valuenow={item.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full bg-forest-soft"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <div className="border border-sage bg-paper p-7">
            <div className="flex gap-2 items-center">
              <FileText size={18} className="text-gold-muted" />
              <h2 className="text-xs uppercase tracking-wider text-forest-soft">
                Documents
              </h2>
            </div>
            <ul className="mt-5 divide-y divide-sage-light">
              {c.documents.map((doc) => (
                <li key={doc.label} className="py-1">
                  <button
                    type="button"
                    onClick={() => setSelectedDocument(doc)}
                    className="flex min-h-12 w-full items-center justify-between gap-4 py-2 text-left text-sm hover:text-forest-soft"
                  >
                    <span>{doc.label}</span>
                    <span className="shrink-0 text-xs uppercase tracking-wider text-muted">
                      Voir · {doc.type}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-forest-dark text-paper p-7">
            <div className="flex gap-2 items-center">
              <MessageCircle size={17} className="text-gold-muted" />
              <h2 className="text-paper text-xs uppercase tracking-wider">
                Note de suivi
              </h2>
            </div>
            <p className="mt-5 font-serif text-xl italic text-paper">
              « {c.note} »
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-5">
            <UtensilsCrossed size={17} className="text-gold-muted" />
            <h2 className="text-xs uppercase tracking-wider text-forest-soft">
              Recettes recommandées
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </div>
      </Container>
      <Modal
        open={selectedDocument !== null}
        title={selectedDocument?.label ?? "Document"}
        onClose={closeDocument}
      >
        <p className="text-sm uppercase tracking-wider text-forest-soft">
          {selectedDocument?.type}
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          {selectedDocument?.summary}
        </p>
        <button
          type="button"
          onClick={closeDocument}
          className="mt-7 min-h-11 bg-forest px-5 text-paper"
        >
          Fermer
        </button>
      </Modal>
    </section>
  );
}

export function ClientSpacePage() {
  const [entered, setEntered] = useState(false);
  return entered ? (
    <Dashboard />
  ) : (
    <ClientLanding onEnter={() => setEntered(true)} />
  );
}
