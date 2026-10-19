import { Link } from "react-router";
import type { Route } from "./+types/mitglied-werden";
import { FaqListe } from "~/components/Blocks";
import { Photo } from "~/components/Photo";
import { Container } from "~/components/Section";
import { pageTitle } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: pageTitle("Mitglied werden") },
    { name: "description", content: "So wirst du Mitglied der KDStV Trifels: kennenlernen, ausprobieren, dazugehören. Mit Antworten auf die häufigsten Fragen." },
  ];
}

const schritte = [
  { titel: "Kennenlernen", text: "Komm zu einem offenen Abend oder schreib uns. Wir zeigen dir das Haus und erzählen, wie Trifels funktioniert." },
  { titel: "Ausprobieren", text: "Besuch ein paar Abende aus dem Semesterprogramm. Du merkst schnell, ob die Leute zu dir passen." },
  { titel: "Fux werden", text: "Wenn es passt, wirst du aufgenommen. Als Fux lernst du Bund, Bräuche und Geschichte kennen, begleitet vom Fuxmajor." },
  { titel: "Dazugehören", text: "Nach der Fuxenzeit bist du Bursch und gestaltest den Bund mit. Nach dem Studium bleibst du als Alter Herr dabei." },
];

export default function MitgliedWerden() {
  return (
    <>
      <section className="grid bg-white lg:grid-cols-2">
        <div className="grid content-center gap-6 px-6 py-16 sm:px-12 lg:px-16">
          <p className="eyebrow">Mitglied werden</p>
          <h1 className="text-5xl sm:text-7xl">
            Wir sind <span className="text-tief">Trifels.</span>
          </h1>
          <p className="max-w-lg text-lg text-grau">
            Studenten aller Fächer, die zusammen feiern, lernen und füreinander einstehen. Ob du dazugehören willst, findest du am besten bei einem Abend auf
            dem Haus heraus.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/kontakt?betreff=kennenlernen" className="btn-primary">
              Kennenlernen vereinbaren
            </Link>
            <Link to="/semesterprogramm" className="btn-outline">
              Offene Abende
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[34rem]">
          <Photo name="couleur" className="absolute inset-0 h-full w-full" position="center 35%" eager />
        </div>
      </section>

      <section className="on-dark bg-navy text-white" aria-label="Zahlen">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {[
            ["1922", "gegründet in München"],
            ["7", "Zimmer im eigenen Haus"],
            ["3", "Prinzipien: Religio, Scientia, Amicitia"],
            ["CV", "Teil des Cartellverbands"],
          ].map(([zahl, text]) => (
            <li key={zahl} className="grid gap-1 border-white/10 px-6 py-8 odd:border-r lg:border-r">
              <span className="font-serif text-5xl font-semibold text-blau">{zahl}</span>
              <span className="text-sm text-silber">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-20" aria-labelledby="ablauf">
        <Container className="grid gap-10">
          <div className="grid max-w-2xl gap-3">
            <p className="eyebrow">So läuft es ab</p>
            <h2 id="ablauf" className="text-4xl sm:text-5xl">
              Vier Schritte, kein Druck
            </h2>
          </div>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {schritte.map((s, i) => (
              <li key={s.titel} className="grid content-start gap-3 border border-linie bg-white p-7">
                <span className="font-serif text-5xl font-semibold text-tief">{i + 1}</span>
                <h3 className="text-2xl">{s.titel}</h3>
                <p className="text-grau">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-20" aria-labelledby="fragen">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div className="grid content-start gap-3">
            <p className="eyebrow">Ehrliche Antworten</p>
            <h2 id="fragen" className="text-4xl sm:text-5xl">
              Was du dich vielleicht fragst
            </h2>
            <p className="text-grau">Deine Frage fehlt?</p>
            <Link to="/kontakt?betreff=kennenlernen" className="link w-fit">
              Schreib uns
            </Link>
          </div>
          <FaqListe />
        </Container>
      </section>
    </>
  );
}
