import { Link } from "react-router-dom";
import { brand } from "../../config/site";

export function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2.5 sm:gap-3"
      aria-label={`${brand.name} — accueil`}
    >
      <span className="grid size-8 place-items-center border border-forest font-serif text-lg text-forest sm:size-9 sm:text-xl">
        O
      </span>
      <span>
        <span className="block font-serif text-lg leading-none text-forest-dark sm:text-xl">
          Oria
        </span>
        <span className="mt-1 block text-[8px] uppercase tracking-[.19em] text-muted sm:text-[9px] sm:tracking-[.2em]">
          Nutrition
        </span>
      </span>
    </Link>
  );
}
