import type { ReactNode } from "react";

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
    <section className="on-dark bg-navy text-white">
      <Container className="grid gap-5 py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl text-white sm:text-6xl">{title}</h1>
        {intro && <div className="max-w-2xl text-lg text-silber">{intro}</div>}
        {children}
      </Container>
    </section>
  );
}
