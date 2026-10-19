import type { Route } from "./+types/datenschutz";
import { Container } from "~/components/Section";
import { pageTitle } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [{ title: pageTitle("Datenschutz") }, { name: "robots", content: "noindex" }];
}

export default function Datenschutz() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="text-5xl">Datenschutz</h1>
      <p className="mt-8 border-l-4 border-tief bg-white p-4">
        Die Datenschutzerklärung wird gerade neu geschrieben. Die alte Seite verwendete eine WordPress-Vorlage, die zu dieser Website nicht passt.
      </p>
      <div className="mt-10 grid gap-4 text-lg">
        <h2 className="text-3xl">Was diese Seite technisch tut</h2>
        <ul className="grid list-disc gap-2 pl-6">
          <li>Keine Cookies, kein Tracking, keine Analyse-Werkzeuge.</li>
          <li>Schriften liegen auf unserem eigenen Server, es werden keine Google Fonts nachgeladen.</li>
          <li>Karten werden nicht eingebettet, sondern nur verlinkt. Erst ein Klick öffnet OpenStreetMap.</li>
          <li>Das Kontaktformular öffnet in der Vorschau dein E-Mail-Programm und speichert nichts.</li>
        </ul>
      </div>
    </Container>
  );
}
