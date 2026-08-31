import { useState, type FormEvent } from "react";
import { brand } from "../../config/site";
import { buildContactMailto } from "../../lib/contact";
import { Toast } from "../ui/Toast";

const fieldClass =
  "mt-2 w-full border border-sage bg-paper px-3.5 py-3 text-ink transition-colors placeholder:text-muted/70 focus:border-forest";

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    const data = new FormData(event.currentTarget);
    const mailto = buildContactMailto(brand.email, {
      firstName: String(data.get("firstName") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setPrepared(true);
    window.location.assign(mailto);
  }

  return (
    <form className="space-y-4 sm:space-y-5" onSubmit={submit} noValidate>
      <label className="block">
        <span className="text-sm font-medium">Prénom</span>
        <input
          required
          name="firstName"
          autoComplete="given-name"
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Email</span>
        <input
          type="email"
          required
          name="email"
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className={`${fieldClass} min-h-36`}
        />
      </label>
      <button
        type="submit"
        className="min-h-12 w-full bg-forest px-6 py-3 font-medium text-paper transition-colors hover:bg-forest-dark sm:w-auto"
      >
        Préparer mon email
      </button>
      {prepared && (
        <Toast message="Ton application de messagerie va s'ouvrir avec le message prérempli. Vérifie-le puis envoie-le depuis ta messagerie." />
      )}
    </form>
  );
}
