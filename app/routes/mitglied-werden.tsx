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
        <div className="grid content-center gap-6 px-6 py-16 sm:px-12 lg:px-16 xl:px-24 [&>*]:max-w-2xl">
          <p className="eyebrow">Mitglied werden</p>
          <h1 className="text-5xl sm:text-7xl">
            Wir sind <span className="text-tief">Trifels.</span>
          </h1>
          <p className="max-w-lg text-lg text-grau">
            Studenten aller Fächer, die zusammen feiern, lernen und füreinander einstehen. Ob du dazugehören willst, findest du am besten bei einem Abend auf
            dem Haus heraus.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to="/kontakt?betreff=kennenlernen" className="btn-primary">
              Kennenlernen vereinbaren
            </Link>
            <Link to="/semesterprogramm" className="pfeil">
              Offene Abende <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[78vh] lg:max-h-[52rem] lg:min-h-[34rem]">
          <Photo name="couleur" className="absolute inset-0 h-full w-full" position="center 35%" />
        </div>
      </section>

      <section className="on-dark bg-navy text-white" aria-label="Zahlen">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {[
            ["1922", "gegründet in München"],
            ["7", "Zimmer im eigenen Haus"],
            ["3", "Prinzipien: Religio, Scientia, Amicitia"],
            ["CV", "Teil des Cartellverbands"],
          ].map(([zahl, text]) => (
            <li key={zahl} className="grid content-start gap-2 border-white/15 px-5 py-10 odd:border-r sm:px-8 lg:border-r lg:px-12 lg:last:border-r-0 xl:px-16">
              <span className="font-serif text-6xl leading-none font-medium text-white sm:text-7xl">{zahl}</span>
              <span className="marke">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="ablauf">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <div className="grid content-start gap-3 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">So läuft es ab</p>
            <h2 id="ablauf" className="text-5xl sm:text-7xl">
              Vier Schritte, kein Druck
            </h2>
          </div>
          <div className="grid gap-10">
            <ol className="border-t border-rand/50">
              {schritte.map((s, i) => (
                <li key={s.titel} className="grid gap-2 border-b border-rand/50 py-8 sm:grid-cols-[5rem_minmax(0,1fr)]">
                  <span className="marke pt-1 text-schwarz">{String(i + 1).padStart(2, "0")}</span>
                  <div className="grid gap-2">
                    <h3 className="text-3xl font-medium">{s.titel}</h3>
                    <p className="max-w-xl text-lg text-grau">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/kontakt?betreff=kennenlernen" className="btn-primary w-full sm:w-fit sm:min-w-72">
              Kennenlernen vereinbaren
            </Link>
          </div>
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
            <Link to="/kontakt?betreff=kennenlernen" className="pfeil">
              Schreib uns <span aria-hidden>→</span>
            </Link>
          </div>
          <FaqListe />
        </Container>
      </section>
    </>
  );
}
