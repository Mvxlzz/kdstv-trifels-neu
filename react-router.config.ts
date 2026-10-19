import type { Config } from "@react-router/dev/config";

// Reine Besucherseite: alles wird beim Build als statisches HTML vorgerendert.
export default {
  ssr: false,
  prerender: [
    "/",
    "/unser-bund",
    "/trifelshaus",
    "/semesterprogramm",
    "/geschichte",
    "/mitglied-werden",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/login",
  ],
} satisfies Config;
