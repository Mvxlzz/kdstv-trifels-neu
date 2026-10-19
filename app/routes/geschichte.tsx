import type { Route } from "./+types/geschichte";
import { AufrufBand } from "~/components/Blocks";
import { Container, PageHero } from "~/components/Section";
import { chronik } from "~/data/geschichte";
import { pageTitle } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  return [
    { title: pageTitle("Geschichte") },
    { name: "description", content: "Die Chronik der KDStV Trifels von der Gründung 1922 über Verbot und Neubeginn bis zum 100. Stiftungsfest." },
  ];
}

export default function Geschichte() {
  return (
    <>
      <PageHero
        eyebrow="Geschichte"
        title="Über hundert Jahre Trifels"
        intro={<p>Benannt nach der Reichsburg Trifels in der Pfalz, gegründet in München 1922. Eine Chronik in neun Stationen.</p>}
      />
      <section className="py-20">
        <Container>
          <ol className="relative mx-auto grid max-w-3xl gap-12 border-l-2 border-linie pl-8 sm:pl-12">
            {chronik.map((c) => (
              <li key={c.year + c.title} className="relative grid gap-2">
                <span aria-hidden className="absolute top-3 -left-[2.6rem] h-4 w-4 rounded-full border-2 border-tief bg-papier sm:-left-[3.6rem]" />
                <span className="font-serif text-5xl font-semibold text-tief">{c.year}</span>
                <h2 className="font-sans text-xl font-semibold text-schwarz">{c.title}</h2>
                <p className="text-lg text-grau">{c.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <AufrufBand title="Die Geschichte weiterschreiben" text="Jede Generation trägt den Bund weiter. Lerne die heutige kennen." />
    </>
  );
}
