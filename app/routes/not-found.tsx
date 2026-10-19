import { Link } from "react-router";
import type { Route } from "./+types/not-found";
import { pageTitle } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [{ title: pageTitle("Seite nicht gefunden") }, { name: "robots", content: "noindex" }];
}

export default function NotFound() {
  return (
    <section className="mx-auto grid max-w-2xl gap-6 px-5 py-24">
      <p className="eyebrow">404</p>
      <h1 className="text-5xl">Diese Seite gibt es nicht</h1>
      <p className="text-lg text-grau">Vielleicht hat sich die Adresse geändert. Von der Startseite aus findest du alles.</p>
      <Link to="/" className="btn-primary w-fit">
        Zur Startseite
      </Link>
    </section>
  );
}
