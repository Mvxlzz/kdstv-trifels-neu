import type { Route } from "./+types/semesterprogramm";
import { AufrufBand, TerminListe } from "~/components/Blocks";
import { Container, PageHero } from "~/components/Section";
import { pageTitle } from "~/data/site";
import { oeffentlicheTermine, type Termin } from "~/data/termine";

export function meta({}: Route.MetaArgs) {
  return [
    { title: pageTitle("Semesterprogramm") },
    { name: "description", content: "Kneipen, Vorträge, Gottesdienste und Bälle: das Semesterprogramm der KDStV Trifels. Viele Abende sind offen für Gäste." },
  ];
}

const monatJahr = new Intl.DateTimeFormat("de-DE", { month: "long", year: "numeric", timeZone: "UTC" });

function nachMonat(termine: Termin[]) {
  const gruppen = new Map<string, Termin[]>();
  for (const t of termine) {
    const key = t.date.slice(0, 7);
    gruppen.set(key, [...(gruppen.get(key) ?? []), t]);
  }
  return [...gruppen.entries()];
}

export default function Semesterprogramm() {
  const sommer = oeffentlicheTermine.filter((t) => t.date >= "2026-04-01");
  const winter = oeffentlicheTermine.filter((t) => t.date < "2026-04-01");
  return (
    <>
      <PageHero
        eyebrow="Semesterprogramm"
        title="Was bei uns los ist"
        intro={
          <p>
            Hier stehen die Termine, zu denen Gäste willkommen sind. Das Programm für das Wintersemester 2026/27 folgt in Kürze. Bis dahin siehst du, wie ein
            Semester bei uns aussieht.
          </p>
        }
      />
      {[
        { titel: "Sommersemester 2026", termine: sommer },
        { titel: "Wintersemester 2025/26", termine: winter },
      ].map((s) => (
        <section key={s.titel} className="py-16 odd:bg-white" aria-label={s.titel}>
          <Container className="grid gap-10">
            <h2 className="text-4xl sm:text-5xl">{s.titel}</h2>
            {nachMonat(s.termine).map(([key, termine]) => (
              <div key={key} className="grid gap-4 lg:grid-cols-[12rem_1fr]">
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-tief lg:pt-6">{monatJahr.format(new Date(`${key}-01T00:00:00Z`))}</h3>
                <TerminListe termine={termine} details />
              </div>
            ))}
          </Container>
        </section>
      ))}
      <AufrufBand title="Einen Abend ausprobieren?" text="Schreib uns kurz, zu welchem Termin du kommen möchtest. Wir sagen dir, was dich erwartet." />
    </>
  );
}
