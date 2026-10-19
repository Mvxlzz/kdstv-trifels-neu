import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { readdirSync } from "node:fs";
import { defineConfig } from "vite";

// Welche Fotos liegen wirklich in public/? Fotos mit Personen fehlen im öffentlichen Repo
// (siehe .gitignore); die Seite setzt dann beim Build ein freigegebenes Ersatzbild ein.
const mediaFiles = [
  ...readdirSync("public/media").map((f) => `/media/${f}`),
  ...readdirSync("public/brand").map((f) => `/brand/${f}`),
];

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: { tsconfigPaths: true },
  define: { __MEDIA_FILES__: JSON.stringify(mediaFiles) },
});
