import { Link } from "react-router";
import type { Route } from "./+types/unser-bund";
import { AufrufBand, werte } from "~/components/Blocks";
import { Photo } from "~/components/Photo";
import { Container, PageHero } from "~/components/Section";
import { pageTitle } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: pageTitle("Unser Bund") },
    { name: "description", content: "Wer wir sind: eine katholische, farbentragende und nichtschlagende Studentenverbindung im Cartellverband, seit 1922 in München." },
  ];
}

export default function UnserBund() {
  return (
    <>
      <PageHero
        eyebrow="Unser Bund"
        title="Freundschaft über Fakultäten und Generationen"
        intro={<p>Religio, Scientia, Amicitia. Drei Worte, die seit 1922 zusammenhalten, was Studium und Beruf sonst trennen.</p>}
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="prose-trifels grid max-w-2xl gap-0 text-lg">
            <p>
              Wir, die Katholische Deutsche Studentenverbindung Trifels zu München, sind eine farbentragende, nichtschlagende Studentenverbindung mit Sitz in
              München. Als Mitglied des Cartellverbandes der katholischen deutschen Studentenverbindungen (CV) stehen wir auf dem Fundament des katholischen
              Glaubens und pflegen ein lebenslanges Freundschafts- und Werteprinzip.
            </p>
            <p>
              Unsere Verbindung ist parteipolitisch unabhängig und verbindet Studenten und Akademiker verschiedener Fachrichtungen, von Jura und Wirtschaft über
              Ingenieurwesen bis hin zu Medizin und Geisteswissenschaften, von allen Münchner Hochschulen. Gerade die unterschiedlichen Persönlichkeiten und
              Hintergründe unserer Mitglieder machen unsere Gemeinschaft stark.
            </p>
            <p className="font-serif text-3xl leading-snug italic text-navy">
              Wir unterstützen uns gegenseitig im Studium, im Beruf und im Leben und stehen füreinander ein.
            </p>
          </div>
          <figure className="grid gap-3 border border-linie bg-white p-8">
            <Photo name="wappen" className="mx-auto h-auto w-full max-w-xs object-contain" eager />
            <figcaption className="text-center text-sm text-grau">Das Wappen der KDStV Trifels</figcaption>
          </figure>
        </Container>
      </section>

      <section className="bg-white py-20" aria-labelledby="werte">
        <Container className="grid gap-10">
          <div className="grid max-w-2xl gap-3">
            <p className="eyebrow">Unsere Werte</p>
            <h2 id="werte" className="text-4xl sm:text-5xl">
              Drei Prinzipien
            </h2>
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {werte.map((w) => (
              <li key={w.name} className="grid content-start gap-3 border-t-2 border-tief pt-6">
                <h3 className="text-4xl italic">{w.name}</h3>
                <p className="text-grau">{w.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="leben">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid aspect-[4/3] grid-cols-2 gap-2">
            <Photo name="couleur" className="h-full w-full" position="center 35%" />
            <Photo name="schloss" className="h-full w-full" position="center 60%" />
          </div>
          <div className="grid gap-4">
            <p className="eyebrow">Farbentragend</p>
            <h2 id="leben" className="text-4xl sm:text-5xl">
              Schwarz, Silber, Blau
            </h2>
            <p className="text-lg text-grau">
              Zu Kneipen, Festen und Gottesdiensten tragen wir Band und Mütze in unseren Farben. Aktive Studenten und Alte Herren im Beruf feiern, diskutieren und
              helfen einander, ein Leben lang.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/geschichte" className="link">
                Unsere Geschichte
              </Link>
              <a href="https://www.cartellverband.de" className="link" rel="noopener">
                Der Cartellverband
              </a>
            </div>
          </div>
        </Container>
      </section>

      <AufrufBand />
    </>
  );
}
