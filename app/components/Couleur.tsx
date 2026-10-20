import { Link } from "react-router";

/** Das Band in den Farben Schwarz, Silber, Blau, wie es über der Brust getragen wird. Rein dekorativ. */
export function Band({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none flex ${className}`}>
      <span className="flex-1 bg-schwarz" />
      <span className="flex-1 bg-silber" />
      <span className="flex-1 bg-blau" />
    </div>
  );
}

/** Waagerechtes Band als Trenner, z. B. über dem Fuß */
export function BandStreifen({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`grid ${className}`}>
      <span className="h-2 bg-schwarz" />
      <span className="h-2 bg-silber" />
      <span className="h-2 bg-blau" />
    </div>
  );
}

/** Runder Stempel für einen aktuellen Hinweis */
export function Siegel({ to, oben, unten }: { to: string; oben: string; unten: string }) {
  return (
    <Link
      to={to}
      className="group grid h-44 w-44 place-items-center rounded-full border-2 border-schwarz bg-white p-5 text-center outline-offset-4 transition-transform hover:-rotate-6 sm:h-52 sm:w-52"
    >
      <span className="grid gap-1">
        <span className="font-serif text-3xl leading-none text-schwarz sm:text-4xl">{oben}</span>
        <span className="text-sm leading-snug font-semibold text-schwarz">{unten}</span>
      </span>
    </Link>
  );
}
