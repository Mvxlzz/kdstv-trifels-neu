import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { Route } from "./+types/kontakt";
import { Container, PageHero } from "~/components/Section";
import { pageTitle, site } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [{ title: pageTitle("Kontakt") }, { name: "description", content: "Schreib der KDStV Trifels: zum Kennenlernen, für ein Zimmer im Trifelshaus oder mit jeder anderen Frage." }];
}

const betreffe = {
  kennenlernen: "Kennenlernen",
  zimmer: "Zimmer im Trifelshaus",
  sonstiges: "Etwas anderes",
} as const;
type Betreff = keyof typeof betreffe;

const feld = "mt-2 block w-full border border-rand bg-white px-4 py-3 text-base text-schwarz";

export default function Kontakt() {
  const [params] = useSearchParams();
  const [betreff, setBetreff] = useState<Betreff>("kennenlernen");
  useEffect(() => {
    const b = params.get("betreff");
    if (b && b in betreffe) setBetreff(b as Betreff);
  }, [params]);

  // Vorschau ohne Backend: Formular öffnet das Mailprogramm mit vorausgefüllter Nachricht.
  function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `${data.get("nachricht")}\n\n${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(betreffe[betreff])}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageHero eyebrow="Kontakt" title="Schreib uns" intro={<p>Ob Kennenlernen, Zimmer oder eine ganz andere Frage: Wir melden uns persönlich bei dir.</p>} />
      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={absenden} className="grid gap-6" aria-describedby="formular-hinweis">
            <div>
              <label htmlFor="betreff" className="font-semibold">
                Worum geht es?
              </label>
              <select id="betreff" name="betreff" className={feld} value={betreff} onChange={(e) => setBetreff(e.target.value as Betreff)}>
                {Object.entries(betreffe).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={feld} />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold">
                  E-Mail
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" className={feld} />
              </div>
            </div>
            <div>
              <label htmlFor="nachricht" className="font-semibold">
                Nachricht
              </label>
              <textarea id="nachricht" name="nachricht" required rows={6} maxLength={1000} className={feld} />
            </div>
            <p id="formular-hinweis" className="text-sm text-grau">
              In dieser Vorschau öffnet das Formular dein E-Mail-Programm. Später geht die Nachricht direkt an uns.
            </p>
            <button type="submit" className="btn-primary w-fit">
              Nachricht senden
            </button>
          </form>
          <aside className="grid content-start gap-8">
            <div className="grid gap-2">
              <h2 className="text-3xl">Trifelshaus</h2>
              <address className="text-lg not-italic text-grau">
                {site.street}
                <br />
                {site.zip} {site.city}
              </address>
              <a
                className="link w-fit"
                href="https://www.openstreetmap.org/search?query=Dunantstra%C3%9Fe%206%2C%2080805%20M%C3%BCnchen"
                rel="noopener"
              >
                Auf der Karte öffnen
              </a>
            </div>
            <div className="grid gap-2">
              <h2 className="text-3xl">E-Mail</h2>
              <a className="link w-fit text-lg" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
