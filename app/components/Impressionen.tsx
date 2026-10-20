import { useRef, useState } from "react";
import type { MediaKey } from "~/data/media";
import { Photo } from "./Photo";
import { Container } from "./Section";

/** Waagerechte Bildleiste zum Wischen, darunter ein Balken, der zeigt, wie weit man ist. */
export function Impressionen({ bilder }: { bilder: MediaKey[] }) {
  const leiste = useRef<HTMLUListElement>(null);
  const [anteil, setAnteil] = useState(0);

  const onScroll = () => {
    const el = leiste.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAnteil(max > 0 ? el.scrollLeft / max : 0);
  };

  const blaettern = (richtung: 1 | -1) => {
    const el = leiste.current;
    el?.scrollBy({ left: richtung * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="impressionen" className="bg-white pb-24">
      <Container className="flex flex-wrap items-end justify-between gap-6 pb-10">
        <h2 id="impressionen" className="text-5xl sm:text-7xl">
          Ein Jahr auf dem Haus
        </h2>
        <div className="flex gap-2">
          <button type="button" onClick={() => blaettern(-1)} aria-label="Zurück blättern" className="grid h-12 w-12 place-items-center border border-schwarz hover:bg-schwarz hover:text-white">
            <span aria-hidden>←</span>
          </button>
          <button type="button" onClick={() => blaettern(1)} aria-label="Weiter blättern" className="grid h-12 w-12 place-items-center border border-schwarz hover:bg-schwarz hover:text-white">
            <span aria-hidden>→</span>
          </button>
        </div>
      </Container>
      <ul
        ref={leiste}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Fotos aus dem Verbindungsleben, waagerecht scrollbar"
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-5 [scrollbar-width:none] sm:px-8 lg:px-12 xl:px-16 [&::-webkit-scrollbar]:hidden"
      >
        {bilder.map((b) => (
          <li key={b} className="aspect-[4/5] w-[72vw] shrink-0 snap-start overflow-hidden bg-linie sm:w-[38vw] lg:w-[24vw]">
            <Photo name={b} className="h-full w-full" />
          </li>
        ))}
      </ul>
      <Container className="pt-8">
        <div aria-hidden className="relative h-0.5 bg-linie">
          <span className="absolute inset-y-0 left-0 w-1/4 bg-blau" style={{ transform: `translateX(${anteil * 300}%)` }} />
        </div>
      </Container>
    </section>
  );
}
