import { Link } from "react-router";
import type { Route } from "./+types/home";
import { AufrufBand, BildText, FaqListe, Galerie, TerminListe, WerteBand } from "~/components/Blocks";
import { Container, SectionHead } from "~/components/Section";
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
  { nr: "1", title: "Vorbeikommen", text: "Such dir einen offenen Abend aus dem Semesterprogramm aus. Gäste sind bei vielen Terminen willkommen.", to: "/semesterprogramm", cta: "Zum Programm" },
  { nr: "2", title: "Einziehen", text: "Sieben möblierte Zimmer im Trifelshaus, zehn Minuten zur LMU. Frag einfach an.", to: "/trifelshaus", cta: "Zimmer ansehen" },
  { nr: "3", title: "Mitglied werden", text: "Wie der Weg in den Bund aussieht, was er kostet und was er dir gibt.", to: "/mitglied-werden", cta: "So läuft es ab" },
];

const highlights = ["Semesterantrittskneipe", "Sommerlicher Trachtenabend", "104. Stiftungsfestkommers"];

export default function Home() {
  const heute = new Date().toISOString().slice(0, 10);
  const kommende = oeffentlicheTermine.filter((t) => t.date >= heute).slice(0, 3);
  const termine = kommende.length > 0 ? kommende : oeffentlicheTermine.filter((t) => t.date >= "2026-04-01" && highlights.includes(t.title));

  return (
    <>
      <section className="on-dark bg-navy text-white">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="relative aspect-[4/5] max-h-[78vh] w-full overflow-hidden bg-navy-2 lg:max-h-none">
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
          <div className="grid content-center gap-7 px-6 py-14 sm:px-12 lg:px-16">
            <h1 className="font-sans text-xs font-bold tracking-[0.16em] text-blau uppercase">
              KDStV Trifels, katholische Studentenverbindung in München seit 1922
            </h1>
            <figure className="grid gap-3">
              <blockquote className="font-serif text-4xl leading-[1.15] font-medium text-white italic sm:text-5xl">
                <p>„Wir unterstützen uns gegenseitig im Studium, im Beruf und im Leben und stehen füreinander ein.“</p>
              </blockquote>
              <figcaption className="text-sm text-silber">Aus unserem Selbstverständnis</figcaption>
            </figure>
            <p className="max-w-lg text-lg text-silber">
              Katholisch, farbentragend, nichtschlagend. Studenten aller Fächer von allen Münchner Hochschulen, mit eigenem Haus in Schwabing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/mitglied-werden" className="btn-blau">
                Lerne uns kennen
              </Link>
              <Link to="/trifelshaus" className="btn-outline-light">
                Zimmer im Trifelshaus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WerteBand />

      <section className="py-20" aria-labelledby="wege">
        <Container className="grid gap-10">
          <SectionHead id="wege" eyebrow="Drei Wege zu uns" title="Wie du uns kennenlernst" />
          <ol className="grid gap-5 md:grid-cols-3">
            {wege.map((w) => (
              <li key={w.nr} className="grid content-start gap-3 border border-linie bg-white p-7">
                <span className="font-serif text-lg italic text-tief">Weg {w.nr}</span>
                <h3 className="text-3xl">{w.title}</h3>
                <p className="text-grau">{w.text}</p>
                <Link to={w.to} className="link mt-2 w-fit">
                  {w.cta}
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
        <Link to="/trifelshaus" className="btn-outline w-fit">
          Haus und Zimmer ansehen
        </Link>
      </BildText>

      <BildText bild="festsaal" reverse>
        <p className="eyebrow">Das Semester</p>
        <h2 className="text-4xl sm:text-5xl">Kneipen, Vorträge, Messen und Bälle</h2>
        <p className="text-lg text-grau">Von der Antrittskneipe bis zum Stiftungsfest. {kommende.length > 0 ? "Die nächsten offenen Termine:" : "Aus dem letzten Semester:"}</p>
        <TerminListe termine={termine} />
        <Link to="/semesterprogramm" className="btn-outline w-fit">
          Ganzes Programm
        </Link>
      </BildText>

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
            <ol className="grid gap-px border border-linie bg-linie sm:grid-cols-2">
              {chronik
                .filter((c) => ["Gründung", "Verbot durch das NS-Regime", "Erwerb des Trifelshauses", "100. Stiftungsfest"].includes(c.title))
                .map((c) => (
                  <li key={c.title} className="grid gap-1 bg-papier p-6">
                    <span className="font-serif text-4xl font-semibold text-tief">{c.year}</span>
                    <span className="font-semibold">{c.title}</span>
                  </li>
                ))}
            </ol>
            <Link to="/geschichte" className="link w-fit">
              Die ganze Chronik
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
