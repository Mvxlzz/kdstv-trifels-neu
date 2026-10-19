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
      <ul className="mx-auto grid max-w-6xl divide-linie sm:grid-cols-3 sm:divide-x">
        {werte.map((w) => (
          <li key={w.name} className="grid gap-1 px-6 py-7 text-center">
            <span className="font-serif text-3xl font-semibold italic text-tief">{w.name}</span>
            <span className="text-sm text-grau">{w.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const tag = new Intl.DateTimeFormat("de-DE", { day: "2-digit", timeZone: "UTC" });
const monat = new Intl.DateTimeFormat("de-DE", { month: "short", timeZone: "UTC" });
const wochentag = new Intl.DateTimeFormat("de-DE", { weekday: "long", timeZone: "UTC" });

export function TerminListe({ termine, details = false }: { termine: Termin[]; details?: boolean }) {
  return (
    <ul className="divide-y divide-linie border-y border-linie">
      {termine.map((t) => {
        const d = new Date(`${t.date}T00:00:00Z`);
        return (
          <li key={t.date + t.title} className="grid grid-cols-[4rem_1fr] gap-4 py-5 sm:grid-cols-[4.5rem_1fr]">
            <div className="text-center leading-none">
              <span className="block font-serif text-4xl font-semibold text-navy">{tag.format(d)}</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-tief">{monat.format(d).replace(".", "")}</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-sans text-lg font-semibold text-schwarz">{t.title}</h3>
              <p className="text-sm text-grau">
                {wochentag.format(d)}
                {t.time && `, ${t.time} Uhr`} · {t.location}
              </p>
              {details && t.details && <p className="mt-2 max-w-2xl text-[0.95rem]">{t.details}</p>}
            </div>
          </li>
        );
      })}
    </ul>
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
    <section className="on-dark bg-navy text-white">
      <Container className="flex flex-wrap items-center justify-between gap-8 py-14">
        <div className="grid max-w-xl gap-2">
          <h2 className="text-4xl text-white">{title}</h2>
          <p className="text-silber">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/mitglied-werden" className="btn-blau">
            Mitglied werden
          </Link>
          <Link to="/kontakt" className="btn-outline-light">
            Schreib uns
          </Link>
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
      <div className={`relative min-h-80 md:min-h-[28rem] ${reverse ? "md:order-2" : ""}`}>
        <Photo name={bild} position={position} className="absolute inset-0 h-full w-full" />
      </div>
      <div className="grid content-center gap-4 px-6 py-12 sm:px-12 lg:px-16">{children}</div>
    </div>
  );
}
