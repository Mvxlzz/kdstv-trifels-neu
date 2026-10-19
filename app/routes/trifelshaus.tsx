import { Link } from "react-router";
import type { Route } from "./+types/trifelshaus";
import { Galerie } from "~/components/Blocks";
import { Photo } from "~/components/Photo";
import { Container } from "~/components/Section";
import { pageTitle, site } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: pageTitle("Trifelshaus & Zimmer") },
    { name: "description", content: "Sieben möblierte Zimmer im Trifelshaus in Schwabing, zehn Minuten zur LMU. Mit Saal, Herrenzimmer, Küche und Garten." },
  ];
}

const fakten = [
  { titel: "Lage", text: "Direkt am Englischen Garten. Schwabing vor der Tür, Ruhe im Haus. 10 Minuten zur LMU, 15 zur TUM." },
  { titel: "Zimmer", text: "Sieben möblierte Zimmer zwischen etwa 12 und 25 m²." },
  { titel: "Küche", text: "Moderne, voll ausgestattete Gemeinschaftsküche." },
  { titel: "Herrenzimmer", text: "Für Gespräche, Lernen und Austausch." },
  { titel: "Saal und Bar", text: "Eigener Saal für Abende, Feste und das Verbindungsleben." },
  { titel: "Garten", text: "Terrasse, Grill und Feuerstelle unter alten Bäumen." },
];

export default function Trifelshaus() {
  return (
    <>
      <section className="on-dark bg-navy text-white">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.1fr_1fr]">
          <div className="grid content-center gap-6 px-6 py-16 sm:px-12 lg:px-16">
            <p className="eyebrow">Trifelshaus & Zimmer</p>
            <h1 className="text-4xl text-white sm:text-6xl">Mehr als eine Wohngemeinschaft</h1>
            <p className="max-w-lg text-lg text-silber">
              Unser Haus in Schwabing hat sieben Zimmer und bietet alles, was man als Student braucht. Vielleicht auch ein bisschen mehr.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/kontakt?betreff=zimmer" className="btn-blau">
                Zimmer anfragen
              </Link>
              <a href="#impressionen" className="btn-outline-light">
                Bilder ansehen
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[36rem]">
            <Photo name="hausFlagge" className="absolute inset-0 h-full w-full" eager />
          </div>
        </div>
      </section>

      <section className="py-20" aria-labelledby="ausstattung">
        <Container className="grid gap-10">
          <div className="grid max-w-2xl gap-3">
            <p className="eyebrow">Wohnen mit Gemeinschaft</p>
            <h2 id="ausstattung" className="text-4xl sm:text-5xl">
              Was das Haus bietet
            </h2>
          </div>
          <dl className="grid gap-px border border-linie bg-linie sm:grid-cols-2 lg:grid-cols-3">
            {fakten.map((f) => (
              <div key={f.titel} className="grid content-start gap-2 bg-white p-7">
                <dt className="font-serif text-2xl font-semibold text-navy">{f.titel}</dt>
                <dd className="text-grau">{f.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-20" aria-labelledby="zimmer">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Photo name="zimmer" className="absolute inset-0 h-full w-full" />
          </div>
          <div className="grid gap-4">
            <p className="eyebrow">Die Zimmer</p>
            <h2 id="zimmer" className="text-4xl sm:text-5xl">
              Möbliert und bezugsfertig
            </h2>
            <p className="text-lg text-grau">
              Die Zimmer sind möbliert, etwa mit Bett, Schrank und Regal. Wer einzieht, wohnt mit Bundesbrüdern zusammen und ist mittendrin, wenn
              im Saal gefeiert wird.
            </p>
            <p className="text-grau">Miete und freie Zimmer erfährst du auf Anfrage.</p>
            <Link to="/kontakt?betreff=zimmer" className="btn-primary w-fit">
              Zimmer anfragen
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20" id="impressionen" aria-labelledby="impressionen-titel">
        <Container className="grid gap-10">
          <div className="grid max-w-2xl gap-3">
            <p className="eyebrow">Impressionen</p>
            <h2 id="impressionen-titel" className="text-4xl sm:text-5xl">
              Ein Rundgang
            </h2>
          </div>
          <Galerie bilder={["hausGarten", "herrenzimmer", "bar", "garten", "fuchs", "advent", "empfang", "festsaal"]} />
        </Container>
      </section>

      <section className="bg-white py-20" aria-labelledby="lage">
        <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="grid gap-3">
            <p className="eyebrow">Lage</p>
            <h2 id="lage" className="text-4xl">
              {site.street}, {site.zip} {site.city}
            </h2>
            <p className="text-grau">In Schwabing, wenige Schritte vom Englischen Garten.</p>
          </div>
          <a
            className="btn-outline w-fit"
            href="https://www.openstreetmap.org/search?query=Dunantstra%C3%9Fe%206%2C%2080805%20M%C3%BCnchen"
            rel="noopener"
          >
            Auf der Karte öffnen
          </a>
        </Container>
      </section>
    </>
  );
}
