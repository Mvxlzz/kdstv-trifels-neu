import { useEffect, useRef, useState } from "react";
import { foto, type MediaKey } from "~/data/media";

type Props = {
  name: MediaKey;
  className?: string;
  /** CSS object-position, z. B. "center 30%" */
  position?: string;
  eager?: boolean;
};

/** Foto mit festem Seitenverhältnis-Container vom Aufrufer. Fehlt die Datei, bleibt eine ruhige Fläche stehen. */
export function Photo({ name, className = "", position = "center", eager = false }: Props) {
  const m = foto(name);
  const ref = useRef<HTMLImageElement>(null);
  const [missing, setMissing] = useState(false);
  // Vorgerendertes Bild kann vor dem Hydrieren scheitern, dann feuert onError nicht mehr.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) setMissing(true);
  }, []);
  if (missing) {
    return (
      <div
        role="img"
        aria-label={m.alt}
        className={`flex items-end bg-[repeating-linear-gradient(135deg,#d9d8d6_0_10px,#e3e2e0_10px_20px)] p-3 ${className}`}
      >
        <span className="bg-white/90 px-2 py-1 text-xs font-semibold">Foto folgt</span>
      </div>
    );
  }
  return (
    <img
      ref={ref}
      src={m.src}
      alt={m.alt}
      width={m.w}
      height={m.h}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setMissing(true)}
      className={`object-cover ${className}`}
      style={{ objectPosition: position }}
    />
  );
}
