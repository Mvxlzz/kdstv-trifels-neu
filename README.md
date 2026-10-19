# KDStV Trifels – neue Website

Öffentliche Seite der KDStV Trifels München. Neuaufbau nach Vorschlag B („Clubhaus“) mit Aufruf und FAQ aus Vorschlag C.

## Lokal ansehen

Voraussetzung: Node.js 20.19 oder neuer.

```bash
npm install
npm run dev
```

Dann <http://localhost:5173> öffnen.

Statischer Build wie auf dem Server:

```bash
npm run build
npm run preview
```

## Aufbau

- React 19, React Router 7 (Framework-Modus, alle Seiten beim Build vorgerendert), Tailwind CSS 4, TypeScript strict
- Schriften Cormorant Garamond und Source Sans 3 liegen lokal (`@fontsource`), es wird nichts von Google geladen
- Keine Cookies, kein Tracking, Karten nur als Link
- Inhalte in `app/data/` (Termine, Chronik, FAQ, Fotos), Seiten in `app/routes/`

## Farben (WCAG 2.2 AA)

| Token | Hex | Einsatz |
|---|---|---|
| navy | `#1A2540` | Kopf, Fuß, dunkle Flächen |
| blau | `#00B0F0` | Couleurblau, nur auf Navy (6,1:1); Knöpfe mit Navy-Schrift |
| tief | `#0071A0` | Links und Knöpfe auf hellem Grund (5,0:1) |
| silber | `#D0CECE` | Text auf Navy (9,7:1) |
| schwarz | `#121212` | Text |
| papier | `#F6F6F5` | Seitenhintergrund |
| grau | `#55595F` | Nebentext |

## Fotos mit Personen

Drei neue Fotos (Spanferkel, Couleur vor dem Tor, Smoking vor dem Schloss) zeigen erkennbare Bundesbrüder und waren noch nicht auf der alten Seite. Sie stehen in `.gitignore`, bis die Abgebildeten zugestimmt haben. Ohne die Dateien zeigt die Seite an diesen Stellen eine graue Fläche „Foto folgt“.
