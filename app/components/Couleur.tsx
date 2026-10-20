import { Link } from "react-router";

/**
 * Das Band, wie es über der Brust getragen wird: Silber-Blau auf schwarzem Grund,
 * also schmale schwarze Kanten außen, Silber und Blau breit in der Mitte (wie die Fahne).
 * Eine dünne silberne Kontur hält die schwarzen Kanten auch auf dunklem Grund sichtbar. Rein dekorativ.
 */
export function Band({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none flex outline-2 outline-silber ${className}`}>
      <span className="flex-[1] bg-schwarz" />
      <span className="flex-[3] bg-silber" />
      <span className="flex-[3] bg-blau" />
      <span className="flex-[1] bg-schwarz" />
    </div>
  );
}

/** Waagerechtes Band als Trenner, z. B. über dem Fuß */
export function BandStreifen({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`grid border-y-2 border-silber ${className}`}>
      <span className="h-1 bg-schwarz" />
      <span className="h-3 bg-silber" />
      <span className="h-3 bg-blau" />
      <span className="h-1 bg-schwarz" />
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
