import { Link } from "react-router";
import type { Route } from "./+types/home";
import { AufrufBand, BildText, FaqListe, Galerie, TermineVorschau, WerteBand } from "~/components/Blocks";
import { Container, SectionHead } from "~/components/Section";
import { StartBild } from "~/components/StartBild";
import { chronik } from "~/data/geschichte";
import { heroVideo } from "~/data/media";
import { pageTitle } from "~/data/site";
import { oeffentlicheTermine } from "~/data/termine";

export function meta({}: Route.MetaArgs) {
  return [
    { title: pageTitle() },
    {
      name: "description",
      content: "Die KDStV Trifels ist eine katholische, farbentragende und nichtschlagende Studentenverbindung in München mit eigenem Haus in Schwabing. Seit 1922.",
    },
  ];
}

const wege = [
  { nr: "01", title: "Vorbeikommen", text: "Such dir einen offenen Abend aus dem Semesterprogramm aus. Gäste sind bei vielen Terminen willkommen.", to: "/semesterprogramm", cta: "Zum Programm" },
  { nr: "02", title: "Einziehen", text: "Sieben möblierte Zimmer im Trifelshaus, zehn Minuten zur LMU. Frag einfach an.", to: "/trifelshaus", cta: "Zimmer ansehen" },
  { nr: "03", title: "Mitglied werden", text: "Wie der Weg in den Bund aussieht, was er kostet und was er dir gibt.", to: "/mitglied-werden", cta: "So läuft es ab" },
];

// Solange das neue Programm fehlt: Höhepunkte des letzten Semesters, der Trachtenabend vorne
const highlights = ["Sommerlicher Trachtenabend", "104. Stiftungsfestkommers", "Semesterantrittskneipe"];

export default function Home() {
  const heute = new Date().toISOString().slice(0, 10);
  const kommende = oeffentlicheTermine.filter((t) => t.date >= heute).slice(0, 4);
  const termine =
    kommende.length > 0
      ? kommende
      : oeffentlicheTermine.filter((t) => t.date >= "2026-04-01" && highlights.includes(t.title)).sort((x, y) => highlights.indexOf(x.title) - highlights.indexOf(y.title));

  return (
    <>
      <StartBild />

      <section id="wer-wir-sind" className="on-dark bg-navy text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/5] max-h-[78vh] w-full overflow-hidden bg-navy-2 lg:aspect-auto lg:h-[82vh] lg:max-h-[56rem] lg:min-h-[36rem]">
            <video
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              poster={heroVideo.poster}
              aria-label={heroVideo.label}
            >
              <source src={heroVideo.src} type="video/mp4" />
            </video>
            <img src={heroVideo.poster} alt={heroVideo.label} className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block" />
          </div>
          <div className="grid content-center gap-7 px-6 py-14 sm:px-12 lg:px-16 xl:px-24 [&>*]:max-w-2xl">
            <h2 className="eyebrow">Wer wir sind</h2>
            <figure className="grid gap-3">
              <blockquote className="font-serif text-4xl leading-[1.15] font-medium text-white italic sm:text-5xl 2xl:text-6xl">
                <p>„Wir unterstützen uns gegenseitig im Studium, im Beruf und im Leben und stehen füreinander ein.“</p>
              </blockquote>
              <figcaption className="text-sm text-silber">Aus unserem Selbstverständnis</figcaption>
            </figure>
            <p className="max-w-lg text-lg text-silber">
              Katholisch, farbentragend, nichtschlagend. Studenten aller Fächer von allen Münchner Hochschulen, mit eigenem Haus in Schwabing.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link to="/mitglied-werden" className="btn-blau">
                Lerne uns kennen
              </Link>
              <Link to="/unser-bund" className="pfeil">
                Unser Bund <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WerteBand />

      <section className="py-20" aria-labelledby="wege">
        <Container className="grid gap-10">
          <SectionHead id="wege" eyebrow="Drei Wege zu uns" title="Wie du uns kennenlernst" />
          <ol className="grid gap-4 md:grid-cols-3">
            {wege.map((w) => (
              <li key={w.nr} className="grid content-start border border-rand/50 p-6 sm:p-8">
                <span className="marke text-schwarz">Weg {w.nr}</span>
                <hr className="my-5 border-rand/50" />
                <h3 className="text-4xl font-medium">{w.title}</h3>
                <p className="mt-3 text-grau">{w.text}</p>
                <Link to={w.to} className="pfeil mt-6">
                  {w.cta} <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <BildText bild="hausFlagge" position="center 30%">
        <p className="eyebrow">Das Trifelshaus</p>
        <h2 className="text-4xl sm:text-5xl">Sieben Zimmer nah am Englischen Garten</h2>
        <p className="text-lg text-grau">
          Möblierte Zimmer zwischen 12 und 25 m², zehn Minuten zur LMU und fünfzehn zur TUM. Dazu ein Saal für Feste, das Herrenzimmer zum Lernen und Reden und
          eine große Küche.
        </p>
        <Link to="/trifelshaus" className="pfeil">
          Haus und Zimmer ansehen <span aria-hidden>→</span>
        </Link>
      </BildText>

      <section className="py-20" aria-labelledby="termine">
        <Container className="grid gap-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <SectionHead
              id="termine"
              eyebrow="Das Semester"
              title="Kneipen, Vorträge, Messen und Bälle"
              intro={kommende.length > 0 ? undefined : <p>Das Programm für das Wintersemester 2026/27 folgt in Kürze. So sah das letzte Semester aus.</p>}
            />
            <Link to="/semesterprogramm" className="pfeil">
              Ganzes Programm <span aria-hidden>→</span>
            </Link>
          </div>
          <TermineVorschau termine={termine} kommend={kommende.length > 0} />
        </Container>
      </section>

      <section className="bg-white py-20" aria-labelledby="impressionen">
        <Container className="grid gap-10">
          <SectionHead id="impressionen" eyebrow="Impressionen" title="Ein Jahr auf dem Haus" />
          <Galerie bilder={["herrenzimmer", "bar", "garten", "empfang", "spanferkel", "advent", "schloss", "fuchs"]} />
        </Container>
      </section>

      <section className="py-20" aria-labelledby="geschichte">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHead
            id="geschichte"
            eyebrow="Seit 1922"
            title="Über hundert Jahre Trifels"
            intro={<p>Gegründet als Tochter der Aenania, verboten im Nationalsozialismus, neu aufgebaut nach dem Krieg und seit 1982 im eigenen Haus.</p>}
          />
          <div className="grid gap-6">
            <ol className="border-t border-rand/50">
              {chronik
                .filter((c) => ["Gründung", "Verbot durch das NS-Regime", "Erwerb des Trifelshauses", "100. Stiftungsfest"].includes(c.title))
                .map((c) => (
                  <li key={c.title} className="grid grid-cols-[6rem_minmax(0,1fr)] items-baseline gap-6 border-b border-rand/50 py-5 sm:grid-cols-[9rem_minmax(0,1fr)]">
                    <span className="font-serif text-4xl font-medium text-navy sm:text-5xl">{c.year}</span>
                    <span className="text-lg">{c.title}</span>
                  </li>
                ))}
            </ol>
            <Link to="/geschichte" className="pfeil">
              Die ganze Chronik <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20" aria-labelledby="fragen">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <SectionHead id="fragen" eyebrow="Ehrliche Antworten" title="Was du dich vielleicht fragst" />
          <FaqListe />
        </Container>
      </section>

      <AufrufBand />
    </>
  );
}
