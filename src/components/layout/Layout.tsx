import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SkipLink } from "./SkipLink";
import { RouteFocus } from "../navigation/RouteFocus";
import { RouteMetadata } from "../navigation/RouteMetadata";

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SkipLink />
      <RouteFocus />
      <RouteMetadata />
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
