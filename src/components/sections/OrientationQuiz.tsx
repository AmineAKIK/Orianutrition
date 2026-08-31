import { useEffect, useState } from "react";
import { LinkButton, Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import {
  resolveOrientationRecommendation,
  type OrientationAnswers,
} from "../../lib/orientation";

const questions = [
  {
    field: "planning",
    title: "Ton planning change-t-il souvent ?",
    options: [
      { label: "Rarement", value: "stable" },
      { label: "D’une semaine à l’autre", value: "variable" },
      { label: "Presque chaque jour", value: "volatile" },
    ],
  },
  {
    field: "priority",
    title: "Quel est ton sujet prioritaire ?",
    options: [
      { label: "Organisation des repas", value: "meals" },
      { label: "Énergie et récupération", value: "energy" },
      { label: "Un point très ciblé", value: "targeted" },
    ],
  },
  {
    field: "support",
    title: "Quel niveau de suivi recherches-tu ?",
    options: [
      { label: "Faire le point", value: "assessment" },
      { label: "Être accompagné plusieurs semaines", value: "ongoing" },
      { label: "Résoudre une question précise", value: "focused" },
    ],
  },
] as const;

type AnswerValue = OrientationAnswers[keyof OrientationAnswers];

export function OrientationQuiz({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<OrientationAnswers>>({});

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setAnswers({});
    }
  }, [isOpen]);

  function answer(field: keyof OrientationAnswers, value: AnswerValue) {
    setAnswers((current) => ({ ...current, [field]: value }));
    setStep((current) => current + 1);
  }

  const done = step >= questions.length;
  const recommendation =
    done && answers.planning && answers.priority && answers.support
      ? resolveOrientationRecommendation({
          planning: answers.planning,
          priority: answers.priority,
          support: answers.support,
        })
      : null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Trouver le bon point de départ"
    >
      {recommendation ? (
        <div>
          <p className="eyebrow">Notre recommandation</p>
          <h3 className="mt-3 text-balance text-2xl leading-tight text-forest-dark">
            {recommendation.title}
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            {recommendation.reason}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Ce résultat est un repère d’orientation, pas un diagnostic. Le
            format final se confirme ensemble selon ta situation.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              to="/contact"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              {recommendation.ctaLabel}
            </LinkButton>
            <Button
              variant="ghost"
              onClick={() => {
                setStep(0);
                setAnswers({});
              }}
              className="w-full sm:w-auto"
            >
              Recommencer
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p className="eyebrow">
            Question {step + 1} sur {questions.length}
          </p>
          <p className="mt-3 font-serif text-xl leading-snug">
            {questions[step].title}
          </p>
          <div className="mt-5 grid gap-3">
            {questions[step].options.map((option) => (
              <Button
                key={option.value}
                variant="secondary"
                onClick={() => answer(questions[step].field, option.value)}
                className="w-full justify-start text-left"
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}
