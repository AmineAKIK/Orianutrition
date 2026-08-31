import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";

const AboutPage = lazy(() =>
  import("../pages/AboutPage").then((module) => ({ default: module.AboutPage })),
);
const ServicesPage = lazy(() =>
  import("../pages/ServicesPage").then((module) => ({
    default: module.ServicesPage,
  })),
);
const RecipesPage = lazy(() =>
  import("../pages/RecipesPage").then((module) => ({ default: module.RecipesPage })),
);
const RecipeDetailPage = lazy(() =>
  import("../pages/RecipeDetailPage").then((module) => ({
    default: module.RecipeDetailPage,
  })),
);
const BlogPage = lazy(() =>
  import("../pages/BlogPage").then((module) => ({ default: module.BlogPage })),
);
const ArticlePage = lazy(() =>
  import("../pages/ArticlePage").then((module) => ({ default: module.ArticlePage })),
);
const SleepPage = lazy(() =>
  import("../pages/SleepPage").then((module) => ({ default: module.SleepPage })),
);
const ClientSpacePage = lazy(() =>
  import("../pages/ClientSpacePage").then((module) => ({
    default: module.ClientSpacePage,
  })),
);
const FAQPage = lazy(() =>
  import("../pages/FAQPage").then((module) => ({ default: module.FAQPage })),
);
const ContactPage = lazy(() =>
  import("../pages/ContactPage").then((module) => ({ default: module.ContactPage })),
);
const LegalPage = lazy(() =>
  import("../pages/LegalPage").then((module) => ({ default: module.LegalPage })),
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

function RouteFallback() {
  return (
    <div className="mx-auto min-h-[40vh] max-w-[1320px] px-5 py-16 sm:px-8" role="status">
      <p className="text-sm text-muted">Chargement…</p>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/mon-approche" element={<AboutPage />} />
            <Route path="/accompagnements" element={<ServicesPage />} />
            <Route path="/recettes" element={<RecipesPage />} />
            <Route path="/recettes/:slug" element={<RecipeDetailPage />} />
            <Route path="/conseils" element={<BlogPage />} />
            <Route path="/conseils/:slug" element={<ArticlePage />} />
            <Route path="/sommeil" element={<SleepPage />} />
            <Route path="/espace-client" element={<ClientSpacePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
