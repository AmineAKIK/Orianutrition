import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { articles } from "../../data/articles";
import { recipes } from "../../data/recipes";
import {
  publicIndexingEnabled,
  publicOgImageUrl,
  publicSiteUrl,
} from "../../config/release";
import { resolveRouteMetadata, type DetailMetadata } from "../../lib/seo";

function upsertMeta(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function resolveDetailMetadata(pathname: string): DetailMetadata | undefined {
  if (pathname.startsWith("/recettes/")) {
    const recipe = recipes.find(
      (item) => item.slug === pathname.slice("/recettes/".length),
    );
    if (recipe)
      return {
        title: `${recipe.title} — Oria Nutrition`,
        description: recipe.excerpt,
      };
  }
  if (pathname.startsWith("/conseils/")) {
    const article = articles.find(
      (item) => item.slug === pathname.slice("/conseils/".length),
    );
    if (article)
      return {
        title: `${article.title} — Oria Nutrition`,
        description: article.excerpt,
      };
  }
  return undefined;
}

export function RouteMetadata() {
  const location = useLocation();

  useEffect(() => {
    const metadata = resolveRouteMetadata(
      location.pathname,
      resolveDetailMetadata(location.pathname),
      publicIndexingEnabled,
    );
    const routeUrl =
      location.pathname === "/"
        ? publicSiteUrl
        : `${publicSiteUrl}#${location.pathname}`;

    document.title = metadata.title;
    upsertMeta(
      'meta[name="description"]',
      "name",
      "description",
      metadata.description,
    );
    upsertMeta('meta[name="robots"]', "name", "robots", metadata.robots);
    upsertMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      metadata.title,
    );
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      metadata.description,
    );
    upsertMeta('meta[property="og:url"]', "property", "og:url", routeUrl);
    upsertMeta(
      'meta[property="og:image"]',
      "property",
      "og:image",
      publicOgImageUrl,
    );
    upsertMeta(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      metadata.title,
    );
    upsertMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      metadata.description,
    );
    upsertMeta(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
      publicOgImageUrl,
    );
    upsertLink("canonical", publicSiteUrl);
  }, [location.pathname]);

  return null;
}
