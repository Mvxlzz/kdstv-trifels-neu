/**
 * Alle Fotos an einer Stelle. `personen: true` heißt: Personen sind erkennbar.
 * Die Abgebildeten haben der Veröffentlichung zugestimmt. Fehlt eine Datei beim Build, nimmt <Photo> das `ersatz`-Bild.
 */
type Foto = { src: string; alt: string; w: number; h: number; personen?: boolean; ersatz?: string };

export const media = {
  fuchs: { src: "/media/fuchs-bar-kerzen.webp", alt: "Der Trifels-Fuchs mit Couleurmütze auf der Bar, davor Kerzenleuchter und Sektgläser", w: 1200, h: 1600 },
  hausFlagge: { src: "/media/haus-flagge.webp", alt: "Das Trifelshaus mit der Fahne in Schwarz, Silber und Blau", w: 1080, h: 1350 },
  hausGarten: { src: "/media/haus-garten-sommer.webp", alt: "Das Trifelshaus von der Gartenseite im Sommer, mit Terrasse und Wintergarten", w: 1080, h: 1350 },
  garten: { src: "/media/garten-terrasse-fruehling.webp", alt: "Garten und Terrasse des Trifelshauses im Frühling", w: 1200, h: 1600 },
  herrenzimmer: { src: "/media/herrenzimmer-chesterfield.webp", alt: "Herrenzimmer mit Chesterfield-Sofas und Bücherregal", w: 1200, h: 1600 },
  bar: { src: "/media/bar-tagsueber.webp", alt: "Die Bar im Saal des Trifelshauses", w: 1200, h: 1600 },
  zimmer: { src: "/media/zimmer-dachgeschoss.webp", alt: "Möbliertes Zimmer im Dachgeschoss mit Bett, Schrank und Regal", w: 1200, h: 1600 },
  advent: { src: "/media/saal-advent.webp", alt: "Der Saal zur Adventsfeier mit Christbaum und Lichterketten", w: 1170, h: 853 },
  festsaal: { src: "/media/festsaal-rede.webp", alt: "Festabend im Saal: lange Tafel mit Kerzen, vorne eine Rede", w: 1600, h: 1200, personen: true },
  empfang: { src: "/media/empfang-terrasse-abend.webp", alt: "Empfang auf der Terrasse in der Abenddämmerung", w: 1200, h: 1600, personen: true },
  spanferkel: { src: "/media/spanferkel-sommerfest.webp", alt: "Drei Bundesbrüder in Tracht und Couleur am Spanferkel beim Sommerfest", w: 1200, h: 1600, personen: true, ersatz: "zimmer" },
  couleur: { src: "/media/gruppe-couleur-tor.webp", alt: "Fünf Bundesbrüder in Couleur und Anzug vor einem Tor", w: 1600, h: 1200, personen: true, ersatz: "hausFlagge" },
  schloss: { src: "/media/gruppe-schloss-smoking.webp", alt: "Vier Bundesbrüder im Smoking vor einem Barockschloss", w: 1200, h: 1600, personen: true, ersatz: "hausGarten" },
  wappen: { src: "/brand/wappen.webp", alt: "Wappen der KDStV Trifels", w: 800, h: 800 },
} as const satisfies Record<string, Foto>;

export type MediaKey = keyof typeof media;

const vorhanden = new Set(__MEDIA_FILES__);

/** Liefert das Foto oder, falls die Datei im Build fehlt, sein freigegebenes Ersatzbild. */
export function foto(name: MediaKey): Foto {
  const m: Foto = media[name];
  if (vorhanden.has(m.src) || !m.ersatz) return m;
  return media[m.ersatz as MediaKey];
}

export const heroVideo = {
  src: "/media/hero-loop-4x5.mp4",
  poster: "/media/hero-loop-4x5-poster.jpg",
  label: "Sommerfest am Trifelshaus: das Haus am Abend, das Buffet und der Garten bei Nacht",
};
