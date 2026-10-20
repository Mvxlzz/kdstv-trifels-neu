import type { ReactNode } from "react";
import { Band } from "./Couleur";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}>{children}</div>;
}

export function SectionHead({ eyebrow, title, intro, id }: { eyebrow: string; title: string; intro?: ReactNode; id?: string }) {
  return (
    <div className="grid max-w-2xl gap-3">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="text-4xl sm:text-5xl">
        {title}
      </h2>
      {intro && <div className="text-lg text-grau">{intro}</div>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy text-white">
      <Band className="absolute top-[-40%] right-[8%] -z-10 hidden h-[200%] w-28 rotate-[32deg] opacity-90 md:flex" />
      <Container className="grid gap-5 py-20 sm:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-3xl text-5xl text-white sm:text-7xl">{title}</h1>
        {intro && <div className="max-w-2xl text-lg text-silber">{intro}</div>}
        {children}
      </Container>
    </section>
  );
}
