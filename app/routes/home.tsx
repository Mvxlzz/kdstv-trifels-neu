import { Link } from "react-router";
import type { Route } from "./+types/home";
import { AufrufBand, FaqListe, TermineVorschau, werte } from "~/components/Blocks";
import { Band, Siegel } from "~/components/Couleur";
import { Impressionen } from "~/components/Impressionen";
import { Photo } from "~/components/Photo";
import { Container } from "~/components/Section";
import { Zirkel } from "~/components/Zirkel";
import { heroVideo, media } from "~/data/media";
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

const zahlen = [
  { zahl: "1922", text: "in München gegründet" },
  { zahl: "7", text: "Zimmer im Trifelshaus" },
  { zahl: "CV", text: "Mitglied im Cartellverband" },
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
      {/* Start: Wappen, Name, und das Band quer über die Seite */}
      <section aria-labelledby="start" className="relative isolate overflow-hidden bg-white">
        <Band className="absolute top-[-20%] right-[12%] -z-10 hidden h-[150%] w-36 rotate-[32deg] lg:flex xl:w-44" />
        <Container className="grid min-h-[calc(100svh-4.3rem)] content-center gap-10 py-14 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-16">
          <img src={media.wappen.src} alt={media.wappen.alt} width={474} height={715} className="h-48 w-auto sm:h-64 lg:h-[min(62vh,36rem)]" />
          <div className="grid gap-8">
            <h1 id="start" className="text-[clamp(4rem,10.5vw,10.5rem)] leading-[0.88] text-schwarz">
              KDStV
              <br />
              Trifels
              <br />
              München
            </h1>
            <p className="max-w-md text-xl text-schwarz">Katholische, farbentragende Studentenverbindung mit eigenem Haus in Schwabing.</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link to="/mitglied-werden" className="btn bg-schwarz text-white hover:bg-tief">
                Lerne uns kennen
              </Link>
              <a href="#wer-wir-sind" className="pfeil text-schwarz">
                Mehr erfahren <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </Container>
        <div className="absolute right-[6%] bottom-[12%] hidden lg:block">
          <Siegel to="/trifelshaus" oben="Wohnen" unten="Zimmer im Trifelshaus anfragen" />
        </div>
        <div aria-hidden className="grid lg:hidden">
          <span className="h-3 bg-schwarz" />
          <span className="h-3 bg-silber" />
          <span className="h-3 bg-blau" />
        </div>
      </section>

      <section aria-label="Trifels in Zahlen" className="border-y border-linie bg-white">
        <ul className="mx-auto grid max-w-[112rem] divide-y divide-linie sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {zahlen.map((z) => (
            <li key={z.zahl} className="grid gap-1 px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
              <span className="font-serif text-7xl leading-none text-tief sm:text-8xl">{z.zahl}</span>
              <span className="text-lg text-schwarz">{z.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="bund" className="overflow-x-clip bg-white py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
          <div className="grid gap-10">
            <h2 id="bund" className="max-w-4xl text-5xl sm:text-7xl">
              Ein Bund für das Studium und die Zeit danach
            </h2>
            <p className="max-w-4xl font-serif text-3xl leading-[1.3] text-schwarz sm:text-4xl">
              Seit <span className="band-unterstrich">über hundert Jahren</span> treffen sich bei Trifels Studenten aller Fächer und Münchner Hochschulen. Wir
              leben nach <span className="band-unterstrich">Religio, Scientia und Amicitia</span>, tragen zu Festen{" "}
              <span className="band-unterstrich">Band und Mütze</span> in Schwarz, Silber und Blau und fechten nicht. Was bleibt, sind Freunde fürs Leben,
              vom ersten Semester bis zum <span className="band-unterstrich">Alten Herrn</span>.
            </p>
          </div>
          <figure className="relative">
            <Band className="absolute -top-10 -right-24 -z-0 h-40 w-[140%] rotate-[-8deg]" />
            <div className="relative aspect-[4/3] overflow-hidden border-8 border-white bg-linie">
              <Photo name="couleur" position="center 35%" className="absolute inset-0 h-full w-full" />
            </div>
            <figcaption className="mt-3 text-grau">Bundesbrüder in Couleur</figcaption>
          </figure>
        </Container>
      </section>

      {/* Farbblock mit versetztem Rahmen, Video überlappt */}
      <section id="wer-wir-sind" aria-labelledby="wer" className="overflow-x-clip bg-white pt-6 pb-24 sm:pb-32">
        <div className="relative grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative z-10 order-2 mx-5 -mt-16 aspect-[4/5] max-h-[40rem] overflow-hidden bg-navy-2 sm:mx-8 lg:order-1 lg:mx-0 lg:mt-40 lg:-mr-24 lg:aspect-auto lg:h-[36rem]">
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
          <div className="relative order-1 self-start lg:order-2">
            <div aria-hidden className="absolute -top-5 left-5 h-full w-full border-[1rem] border-schwarz sm:-top-7 sm:left-7 sm:border-[1.25rem]" />
            <div className="on-dark relative isolate overflow-hidden bg-tief px-6 py-16 text-white sm:px-12 lg:py-24 lg:pr-16 lg:pl-40 xl:pl-48">
              <Zirkel className="absolute -right-20 -bottom-24 -z-10 h-[34rem] w-auto text-tief-dunkel" />
              <div className="grid max-w-xl gap-6">
                <Zirkel className="h-16 w-auto text-white" />
                <h2 id="wer" className="text-5xl text-white sm:text-6xl">
                  Wir stehen füreinander ein
                </h2>
                <p className="text-lg text-white">
                  Wir unterstützen uns gegenseitig im Studium, im Beruf und im Leben. Aktive und Alte Herren verbindet eine Freundschaft über Generationen.
                </p>
                <Link to="/unser-bund" className="btn w-fit bg-white text-tief hover:bg-schwarz hover:text-white">
                  Wer wir sind
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wohnen: Text links, Bildcollage rechts */}
      <section aria-labelledby="wohnen" className="overflow-hidden bg-white pb-24 sm:pb-32">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="grid max-w-xl gap-6">
            <h2 id="wohnen" className="text-5xl sm:text-7xl">
              Neu in München?
            </h2>
            <p className="text-lg text-grau">
              Eine neue Stadt, ein neues Studium und erst einmal kein Zimmer. Im Trifelshaus in Schwabing gibt es sieben möblierte Zimmer, zehn Minuten
              von der LMU und ein paar Schritte vom Englischen Garten. Wer einzieht, ist vom ersten Tag an nicht allein.
            </p>
            <Link to="/trifelshaus" className="btn w-fit bg-schwarz text-white hover:bg-tief">
              Haus und Zimmer ansehen
            </Link>
          </div>
          <div className="relative h-[34rem] sm:h-[40rem]">
            <div className="absolute top-0 right-0 h-[62%] w-[72%]">
              <Photo name="hausFlagge" position="center 30%" className="h-full w-full" />
            </div>
            <div aria-hidden className="absolute top-[48%] left-[6%] grid h-[30%] w-[38%] grid-cols-4 place-items-center gap-2 bg-blau p-4 text-schwarz/40">
              {Array.from({ length: 8 }, (_, i) => (
                <Zirkel key={i} className="h-8 w-auto sm:h-10" />
              ))}
            </div>
            <div className="absolute right-[10%] bottom-0 h-[46%] w-[40%] border-8 border-white">
              <Photo name="spanferkel" position="center 30%" className="h-full w-full" />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="termine" className="border-t border-linie bg-white py-24">
        <Container className="grid gap-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="grid max-w-2xl gap-4">
              <h2 id="termine" className="text-5xl sm:text-7xl">
                Kneipen, Vorträge, Messen und Bälle
              </h2>
              {kommende.length === 0 && <p className="text-lg text-grau">Das Programm für das Wintersemester 2026/27 folgt in Kürze. So sah das letzte Semester aus.</p>}
            </div>
            <Link to="/semesterprogramm" className="pfeil">
              Ganzes Programm <span aria-hidden>→</span>
            </Link>
          </div>
          <TermineVorschau termine={termine} kommend={kommende.length > 0} />
        </Container>
      </section>

      <Impressionen bilder={["schloss", "herrenzimmer", "empfang", "bar", "advent", "garten", "festsaal", "fuchs"]} />

      <section aria-label="Unsere Prinzipien" className="on-dark bg-navy text-white">
        <ul className="mx-auto grid max-w-[112rem] divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {werte.map((w) => (
            <li key={w.name} className="grid gap-3 px-5 py-14 sm:px-8 lg:px-12 xl:px-16">
              <span className="font-serif text-5xl text-white italic sm:text-6xl">{w.name}</span>
              <span className="max-w-xs text-silber">{w.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-24" aria-labelledby="fragen">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <h2 id="fragen" className="text-5xl sm:text-6xl">
            Was du dich vielleicht fragst
          </h2>
          <FaqListe />
        </Container>
      </section>

      <AufrufBand />
    </>
  );
}
