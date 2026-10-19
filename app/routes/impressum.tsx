import type { Route } from "./+types/impressum";
import { Container } from "~/components/Section";
import { pageTitle, site } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [{ title: pageTitle("Impressum") }, { name: "robots", content: "noindex" }];
}

export default function Impressum() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="text-5xl">Impressum</h1>
      <div className="mt-10 grid gap-8 text-lg">
        <section>
          <h2 className="text-2xl">Diensteanbieter</h2>
          <p className="mt-2">
            K.D.St.V. Trifels
            <br />
            {site.street}
            <br />
            {site.zip} {site.city}
          </p>
        </section>
        <section>
          <h2 className="text-2xl">Kontakt</h2>
          <p className="mt-2">
            E-Mail:{" "}
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-2xl">Register</h2>
          <p className="mt-2">{site.register}</p>
        </section>
        <section className="grid gap-3 text-base text-grau">
          <h2 className="text-2xl">Haftung und Urheberrecht</h2>
          <p>
            Die Inhalte dieses Onlineangebotes wurden sorgfältig und nach unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur der Information und
            entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich verpflichtende Informationen handelt.
          </p>
          <p>
            Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen, liegen außerhalb unseres Verantwortungsbereiches und machen wir uns nicht zu
            Eigen.
          </p>
          <p>
            Alle auf dieser Website dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte
            geschützt.
          </p>
          <p>Sollten Sie Rechtsverstöße bemerken, bitten wir um einen Hinweis. Wir entfernen rechtswidrige Inhalte nach Kenntnisnahme unverzüglich.</p>
        </section>
        <p className="border-l-4 border-tief bg-white p-4 text-base">
          Hinweis für die Vorschau: Hier fehlen noch die nach § 5 DDG vertretungsberechtigten Personen. Bitte vom Vorstand ergänzen lassen.
        </p>
      </div>
    </Container>
  );
}
