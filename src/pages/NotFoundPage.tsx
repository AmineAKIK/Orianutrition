import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
export function NotFoundPage() {
  return (
    <Container className="py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl">Cette page n'existe pas.</h1>
      <Link to="/" className="mt-8 inline-block text-forest underline">
        Revenir à l'accueil
      </Link>
    </Container>
  );
}
