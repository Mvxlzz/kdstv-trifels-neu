import { Link } from "react-router";
import type { Route } from "./+types/login";
import { Zirkel } from "~/components/Zirkel";
import { pageTitle } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [{ title: pageTitle("Login") }, { name: "robots", content: "noindex" }];
}

export default function Login() {
  return (
    <section className="mx-auto grid max-w-md gap-6 px-5 py-24 text-center">
      <Zirkel className="mx-auto h-16 w-16 text-navy" />
      <h1 className="text-5xl">Interner Bereich</h1>
      <p className="text-lg text-grau">
        Der Bereich für Bundesbrüder mit Kalender, Forum und Dokumenten wird gerade neu gebaut. Bis dahin bleibt der bisherige Zugang bestehen.
      </p>
      <Link to="/" className="btn-outline mx-auto">
        Zur Startseite
      </Link>
    </section>
  );
}
