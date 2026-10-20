import { useEffect, useState } from "react";
import { Link } from "react-router";
import { foto, type MediaKey } from "~/data/media";

const bilder: { key: MediaKey; titel: string }[] = [
  { key: "couleur", titel: "In Couleur" },
  { key: "empfang", titel: "Sommerabend" },
  { key: "spanferkel", titel: "Sommerfest" },
  { key: "festsaal", titel: "Festsaal" },
  { key: "schloss", titel: "Im Smoking" },
  { key: "hausGarten", titel: "Trifelshaus" },
];

/** Vollbild-Start mit Fotowechsel, Fortschrittsbalken und Pause (WCAG 2.2.2). */
export function StartBild() {
  const [aktiv, setAktiv] = useState(0);
  const [pausiert, setPausiert] = useState(false);
  const [ruhig, setRuhig] = useState(false);

  // Bei reduzierter Bewegung wechseln die Bilder nur auf Klick
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setRuhig(mq.matches);
    const onChange = () => setRuhig(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const laeuft = !pausiert && !ruhig;
  const weiter = () => setAktiv((i) => (i + 1) % bilder.length);

  return (
    <section aria-label="Startbild" className="on-dark relative isolate h-[calc(100svh-4.3rem)] min-h-[34rem] overflow-hidden bg-navy text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        {bilder.map((b, i) => (
          <img
            key={b.key}
            src={foto(b.key).src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${i === aktiv ? "opacity-100" : "opacity-0"}`}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/30" />
      </div>

      <div className="mx-auto flex h-full w-full max-w-[112rem] flex-col justify-end px-5 pb-8 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-8 pb-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <h1 className="text-[clamp(3.75rem,11vw,11rem)] leading-[0.9] font-medium text-white">
            KDStV Trifels
            <span className="mt-5 block font-sans text-lg leading-snug font-normal text-silber sm:text-xl">
              Katholische Studentenverbindung in München
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:pb-3">
            <Link to="/mitglied-werden" className="btn-blau">
              Lerne uns kennen
            </Link>
            <a href="#wer-wir-sind" className="pfeil">
              Mehr erfahren <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        <div className="flex items-end gap-3 sm:gap-5">
          <ol className="grid flex-1 gap-3 sm:gap-5" style={{ gridTemplateColumns: `repeat(${bilder.length}, minmax(0, 1fr))` }}>
            {bilder.map((b, i) => (
              <li key={b.key}>
                <button
                  type="button"
                  onClick={() => setAktiv(i)}
                  aria-current={i === aktiv ? "true" : undefined}
                  aria-label={`Bild ${i + 1} von ${bilder.length}: ${b.titel}`}
                  className="group grid w-full gap-2 py-2 text-left"
                >
                  <span className="marke flex gap-2 text-silber group-hover:text-white">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span className="hidden md:inline">{b.titel}</span>
                  </span>
                  <span className="relative block h-px bg-white/30">
                    {i < aktiv && <span className="absolute inset-0 bg-white/70" />}
                    {i === aktiv && (
                      <span
                        key={aktiv}
                        className={`absolute inset-0 bg-white ${ruhig ? "" : "hero-balken"}`}
                        style={{ animationPlayState: laeuft ? "running" : "paused" }}
                        onAnimationEnd={weiter}
                      />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ol>
          {!ruhig && (
            <button
              type="button"
              onClick={() => setPausiert((p) => !p)}
              aria-label={pausiert ? "Bildwechsel fortsetzen" : "Bildwechsel anhalten"}
              className="grid h-11 w-11 shrink-0 place-items-center border border-white/40 text-white hover:bg-white hover:text-navy"
            >
              {pausiert ? (
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M4 2.5v11l9-5.5z" />
                </svg>
              ) : (
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
