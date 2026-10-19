import { Link } from "react-router";
import { faq } from "~/data/faq";
import type { MediaKey } from "~/data/media";
import type { Termin } from "~/data/termine";
import { Photo } from "./Photo";
import { Container } from "./Section";

export const werte = [
  { name: "Religio", text: "Der katholische Glaube als Fundament, der uns Orientierung gibt." },
  { name: "Scientia", text: "Bildung und Austausch über alle Fakultäten und Hochschulen hinweg." },
  { name: "Amicitia", text: "Freundschaft über Generationen, zwischen Aktiven und Alten Herren." },
];

export function WerteBand() {
  return (
    <section aria-label="Unsere Prinzipien" className="border-y border-linie bg-white">
      <ul className="mx-auto grid max-w-[112rem] divide-y divide-linie sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {werte.map((w, i) => (
          <li key={w.name} className="grid gap-2 px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
            <span className="marke">{["I", "II", "III"][i]}</span>
            <span className="font-serif text-4xl font-medium italic text-navy">{w.name}</span>
            <span className="max-w-xs text-[0.95rem] text-grau">{w.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const datumKurz = new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", timeZone: "UTC" });
const datumLang = new Intl.DateTimeFormat("de-DE", { weekday: "short", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const wochentag = new Intl.DateTimeFormat("de-DE", { weekday: "short", timeZone: "UTC" });

export const terminDatum = (t: Termin) => new Date(`${t.date}T00:00:00Z`);

/** Kurzer Ort: nur der Name vor der ersten Adresszeile */
export const kurzOrt = (ort: string) => ort.split(",")[0];

export function TerminListe({ termine, details = false }: { termine: Termin[]; details?: boolean }) {
  return (
    <ul className="border-t border-linie">
      {termine.map((t) => {
        const d = terminDatum(t);
        return (
          <li key={t.date + t.title} className="grid gap-x-8 gap-y-1 border-b border-linie py-5 sm:grid-cols-[7rem_minmax(0,1fr)_minmax(0,16rem)]">
            <p className="marke text-schwarz">
              <time dateTime={t.date}>
                {wochentag.format(d).replace(".", "")} {datumKurz.format(d)}
              </time>
              {t.time && <span className="block text-grau">{t.time} Uhr</span>}
            </p>
            <div className="min-w-0">
              <h3 className="font-sans text-lg leading-snug font-semibold text-schwarz">{t.title}</h3>
              {details && t.details && <p className="mt-1 max-w-2xl text-[0.95rem] text-grau">{t.details}</p>}
            </div>
            <p className="marke sm:text-right">{kurzOrt(t.location)}</p>
          </li>
        );
      })}
    </ul>
  );
}

/** Nächster Termin groß mit Foto, darunter die folgenden als Zeilen. */
export function TermineVorschau({ termine, kommend }: { termine: Termin[]; kommend: boolean }) {
  const [erster, ...rest] = termine;
  if (!erster) return null;
  return (
    <div className="grid gap-6">
      <article className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
        <div className="on-dark grid content-between gap-10 bg-navy p-7 text-white sm:p-10">
          <p className="max-w-md text-lg text-silber">{erster.details || "Gäste sind willkommen. Schreib uns kurz, wenn du kommen möchtest."}</p>
          <div className="grid gap-2">
            <p className="marke">
              {kommend ? "Nächster Termin" : "Zuletzt"} · <time dateTime={erster.date}>{datumLang.format(terminDatum(erster))}</time>
              {erster.time && `, ${erster.time} Uhr`}
            </p>
            <h3 className="text-4xl text-white sm:text-5xl">{erster.title}</h3>
            <p className="marke">{kurzOrt(erster.location)}</p>
          </div>
        </div>
        <div className="relative min-h-72 md:min-h-[26rem]">
          <Photo name="festsaal" className="absolute inset-0 h-full w-full" />
        </div>
      </article>
      {rest.length > 0 && <TerminListe termine={rest} />}
    </div>
  );
}

export function FaqListe() {
  return (
    <div className="divide-y divide-linie border-y border-linie">
      {faq.map((f, i) => (
        <details key={f.q} className="group" open={i === 0}>
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden className="text-2xl font-normal text-tief transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-2xl pb-5 text-grau">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function AufrufBand({ title = "Neugierig geworden?", text = "Komm unverbindlich zu einem offenen Abend auf das Haus. Wir freuen uns auf dich." }: { title?: string; text?: string }) {
  return (
    <section className="border-t border-linie bg-white">
      <Container className="grid gap-8 py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end">
        <h2 className="text-5xl sm:text-7xl">{title}</h2>
        <div className="grid gap-6">
          <p className="max-w-md text-lg text-grau">{text}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to="/mitglied-werden" className="btn-primary">
              Mitglied werden
            </Link>
            <Link to="/kontakt" className="pfeil">
              Schreib uns <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Galerie({ bilder }: { bilder: MediaKey[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {bilder.map((b) => (
        <li key={b} className="aspect-[4/5] overflow-hidden bg-linie">
          <Photo name={b} className="h-full w-full transition-transform duration-500 hover:scale-[1.03]" />
        </li>
      ))}
    </ul>
  );
}

export function BildText({
  bild,
  position,
  reverse = false,
  children,
}: {
  bild: MediaKey;
  position?: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid bg-papier md:grid-cols-2">
      <div className={`relative min-h-80 md:min-h-[32rem] xl:min-h-[40rem] ${reverse ? "md:order-2" : ""}`}>
        <Photo name={bild} position={position} className="absolute inset-0 h-full w-full" />
      </div>
      <div className="grid content-center gap-4 px-6 py-12 sm:px-12 lg:px-16 xl:px-24 [&>*]:max-w-2xl">{children}</div>
    </div>
  );
}
