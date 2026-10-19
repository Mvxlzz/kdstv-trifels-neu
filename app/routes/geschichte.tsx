import type { Route } from "./+types/geschichte";
import { AufrufBand } from "~/components/Blocks";
import { Photo } from "~/components/Photo";
import { Container, PageHero } from "~/components/Section";
import { chronik } from "~/data/geschichte";
import type { MediaKey } from "~/data/media";
import { pageTitle } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: pageTitle("Geschichte") },
    { name: "description", content: "Die Chronik der KDStV Trifels von der Gründung 1922 über Verbot und Neubeginn bis zum 100. Stiftungsfest." },
  ];
}

// Bilder zu einzelnen Stationen, nur wo sie wirklich dazugehören
const bilder: Record<string, MediaKey> = {
  Gründung: "wappen",
  "Erwerb des Trifelshauses": "hausGarten",
};

export default function Geschichte() {
  return (
    <>
      <PageHero
        eyebrow="Geschichte"
        title="Über hundert Jahre Trifels"
        intro={<p>Benannt nach der Reichsburg Trifels in der Pfalz, gegründet in München 1922. Eine Chronik in neun Stationen.</p>}
      />
      <section className="on-dark border-t border-white/10 bg-navy py-20 text-white sm:py-28" aria-label="Chronik">
        <Container>
          <ol className="relative mx-auto grid max-w-6xl gap-16 sm:gap-24">
            <span aria-hidden className="absolute top-0 bottom-0 left-[0.3rem] w-px bg-white/20 md:left-1/2" />
            {chronik.map((c, i) => {
              const bild = bilder[c.title];
              const links = i % 2 === 0;
              return (
                <li key={c.year + c.title} className="relative grid gap-6 pl-10 md:grid-cols-2 md:gap-24 md:pl-0">
                  <span aria-hidden className="absolute top-3 left-0 h-[0.65rem] w-[0.65rem] rounded-full bg-silber md:left-1/2 md:-translate-x-1/2" />
                  <div className={`grid content-start gap-3 ${links ? "md:order-2" : "md:text-right"}`}>
                    <span className="font-serif text-6xl leading-none font-medium text-white sm:text-7xl">{c.year}</span>
                    <h2 className="font-sans text-xl font-semibold text-white">{c.title}</h2>
                    <p className={`max-w-md text-lg text-silber ${links ? "" : "md:ml-auto"}`}>{c.text}</p>
                  </div>
                  <div className={links ? "md:order-1" : ""}>
                    {bild && (
                      <div className={`relative aspect-[4/3] w-full max-w-md overflow-hidden bg-navy-2 ${links ? "md:ml-auto" : ""}`}>
                        <Photo name={bild} className={`absolute inset-0 h-full w-full ${bild === "wappen" ? "object-contain! p-8" : ""}`} />
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>
      <AufrufBand title="Die Geschichte weiterschreiben" text="Jede Generation trägt den Bund weiter. Lerne die heutige kennen." />
    </>
  );
}
