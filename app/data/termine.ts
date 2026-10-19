/**
 * Semesterprogramm, übernommen aus dem alten Repository (src/data/semesterprogramm.ts).
 * Öffentlich gezeigt werden nur Termine mit Gästen (`guests`); Convente bleiben intern.
 */
export interface Termin {
  date: string; // JJJJ-MM-TT
  time: string; // HH:MM oder leer für ganztägig
  title: string;
  location: string;
  details: string;
  guests: boolean;
}

export const termine: Termin[] = [
  {
    "date": "2025-10-15",
    "time": "19:00",
    "title": "MCV-Antrittsgottesdienst",
    "location": "Universitätskirche St. Ludwig, Ludwigstr. 22, 80539 München",
    "details": "",
    "guests": true
  },
  {
    "date": "2025-10-19",
    "time": "13:15",
    "title": "Kirchweihfeier",
    "location": "Trifelshaus",
    "details": "Familienfreundlicher Semesterauftakt mit Kaffee und Kuchen und einer kleinen Schaukel „Kirahutschn“ als Schmankerl für unsere Kleinen.",
    "guests": true
  },
  {
    "date": "2025-10-21",
    "time": "19:15",
    "title": "I. Ordentlicher Convent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2025-10-25",
    "time": "20:15",
    "title": "Semesterantrittskneipe",
    "location": "Trifelshaus",
    "details": "Feier nach studentischem Brauch mit einem inoffiziellen Teil von Bbr. Jan-Jakub „Honza“ Kopecký.",
    "guests": true
  },
  {
    "date": "2025-10-28",
    "time": "18:30",
    "title": "Trifelsstammtisch",
    "location": "Pfälzer Weinstube, Residenzstraße 1",
    "details": "Aktive und Alte Herren in lockerer Runde auf einen gemütlichen Schoppen.",
    "guests": true
  },
  {
    "date": "2025-11-03",
    "time": "19:00",
    "title": "Hl. Messe – Sel. Cbr. Pater Rupert Mayer SJ",
    "location": "Bürgersaalkirche, Kapellenstr. 1, 80333 München",
    "details": "Celebrans S. E. Cbr. Dr. Rudolf Voderholzer (Rup).",
    "guests": true
  },
  {
    "date": "2025-11-07",
    "time": "",
    "title": "Chargierfahrt Gründungsfest K.D.St.V. Teutonia Fribourg",
    "location": "Fribourg",
    "details": "Bis 09.11. – Anmeldung beim Consenior bis 26.10.",
    "guests": false
  },
  {
    "date": "2025-11-07",
    "time": "19:15",
    "title": "MCV-Fuxenbummel",
    "location": "München",
    "details": "",
    "guests": false
  },
  {
    "date": "2025-11-14",
    "time": "20:15",
    "title": "Askalonabend",
    "location": "Trifelshaus",
    "details": "Eleganter Cocktailabend, Abendgarderobe erwünscht.",
    "guests": true
  },
  {
    "date": "2025-11-16",
    "time": "10:00",
    "title": "Volkstrauertag",
    "location": "Allerheiligen Hofkirche, Residenzstr. 1, 80333 München",
    "details": "Festakt, anschließend Kranzniederlegung im Hofgarten.",
    "guests": true
  },
  {
    "date": "2025-11-18",
    "time": "19:15",
    "title": "II. Ordentlicher Convent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2025-11-22",
    "time": "10:15",
    "title": "Hausarbeitstag",
    "location": "Trifelshaus",
    "details": "Das Trifelshaus ist das Wohnzimmer unserer Trifelsfamilie und will gepflegt werden.",
    "guests": false
  },
  {
    "date": "2025-11-25",
    "time": "18:30",
    "title": "Trifelsstammtisch",
    "location": "Pfälzer Weinstube, Residenzstraße 1",
    "details": "Aktive und Alte Herren in lockerer Runde auf einen gemütlichen Schoppen.",
    "guests": true
  },
  {
    "date": "2025-12-04",
    "time": "19:15",
    "title": "Krambambuliabend",
    "location": "Trifelshaus",
    "details": "Geselliger ungezwungener Abend mit Feuerzangenbowle.",
    "guests": true
  },
  {
    "date": "2025-12-13",
    "time": "15:00",
    "title": "Adventsmesse",
    "location": "Trifelshaus",
    "details": "Weitere Informationen folgen.",
    "guests": true
  },
  {
    "date": "2025-12-13",
    "time": "18:15",
    "title": "Adventsfeier",
    "location": "Trifelshaus",
    "details": "Anmeldung beim Consenior bis 01.12., weitere Informationen folgen.",
    "guests": true
  },
  {
    "date": "2025-12-16",
    "time": "19:15",
    "title": "III. Ordentlicher Convent – Wahlconvent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2025-12-30",
    "time": "18:30",
    "title": "Trifelsstammtisch",
    "location": "Pfälzer Weinstube, Residenzstraße 1",
    "details": "Aktive und Alte Herren in lockerer Runde auf einen gemütlichen Schoppen.",
    "guests": true
  },
  {
    "date": "2026-01-17",
    "time": "19:00",
    "title": "Requiem für verstorbene Bundesbrüder",
    "location": "Trifelshaus",
    "details": "Celebrans Bbr. Dekan Björn Wagner, anschl. Trauerkneipe. Wir gedenken der im vergangenen Jahr verstorbenen Bundesbrüder.",
    "guests": true
  },
  {
    "date": "2026-01-21",
    "time": "19:15",
    "title": "Die unterschätzte Macht der Städte und Gemeinden",
    "location": "Trifelshaus",
    "details": "Mit Hinblick auf die Kommunalwahlen erklärt Bbr. Bürgermeister Dr. Ingo Mehner die Bedeutung der Wahl und die Gestaltungsmöglichkeiten der Kommunen.",
    "guests": true
  },
  {
    "date": "2026-01-24",
    "time": "15:00",
    "title": "Alterherrenconvent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-01-24",
    "time": "17:00",
    "title": "Cumulativconvent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-01-24",
    "time": "20:15",
    "title": "Weinkneipe",
    "location": "Trifelshaus",
    "details": "Cbr. Christian Reintjes (St), ehemals Campari s.r.l., unterhält als Festredner mit „Wein für die Welt – Einblicke und Anekdoten zwischen Wein und Likör“.",
    "guests": true
  },
  {
    "date": "2026-01-27",
    "time": "18:30",
    "title": "Trifelsstammtisch",
    "location": "Pfälzer Weinstube, Residenzstraße 1",
    "details": "Aktive und Alte Herren in lockerer Runde auf einen gemütlichen Schoppen.",
    "guests": true
  },
  {
    "date": "2026-02-06",
    "time": "20:15",
    "title": "Gaudeamusball",
    "location": "Deutsches Theater, Schwanthalerstraße 13, 80336 München",
    "details": "Für einen gemeinsamen Ticketkauf folgen weitere Informationen.",
    "guests": true
  },
  {
    "date": "2026-02-10",
    "time": "19:15",
    "title": "IV. Ordentlicher Convent – Dechargierungsconvent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-02-14",
    "time": "17:00",
    "title": "Semesterabschlussgottesdienst",
    "location": "Christi Himmelfahrt, Waldschulstraße 4B, 81827 München",
    "details": "Celebrans Bbr. Dekan Björn Wagner.",
    "guests": true
  },
  {
    "date": "2026-02-14",
    "time": "20:15",
    "title": "Semesterabschlusskneipe",
    "location": "Trifelshaus",
    "details": "„Gaudeamus igitur, iuvenes dum sumus…“",
    "guests": true
  },
  {
    "date": "2026-02-16",
    "time": "",
    "title": "Rudolfina Redoute",
    "location": "Wiener Hofburg, Wien",
    "details": "www.rudolfina-redoute.at",
    "guests": false
  },
  {
    "date": "2026-02-24",
    "time": "18:30",
    "title": "Trifelsstammtisch",
    "location": "Pfälzer Weinstube, Residenzstraße 1",
    "details": "Aktive und Alte Herren in lockerer Runde auf einen gemütlichen Schoppen.",
    "guests": true
  },
  {
    "date": "2026-04-15",
    "time": "19:15",
    "title": "MCV-Antrittsgottesdienst",
    "location": "Universitätskirche St. Ludwig, Ludwigstr. 22, 80539 München",
    "details": "",
    "guests": true
  },
  {
    "date": "2026-04-18",
    "time": "20:15",
    "title": "Semesterantrittskneipe",
    "location": "Trifelshaus",
    "details": "",
    "guests": true
  },
  {
    "date": "2026-04-21",
    "time": "19:15",
    "title": "I. Ordentlicher Convent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-04-26",
    "time": "11:00",
    "title": "Bayerischer Sonntag in Gräfelfing",
    "location": "Pfarrkirche St. Stefan, Bahnhofstraße 20, 82166 Gräfelfing",
    "details": "Pfarrgottesdienst, anschl. gemeinsames Mittagessen im Wilden Hirsch, Pasinger Str. 1B, 82166 Gräfelfing.",
    "guests": true
  },
  {
    "date": "2026-04-28",
    "time": "18:15",
    "title": "Trifelsstammtisch",
    "location": "Pfälzer Weinstube, Residenzstraße 1",
    "details": "Lockere Runde auf einen gemütlichen Schoppen.",
    "guests": true
  },
  {
    "date": "2026-05-07",
    "time": "17:30",
    "title": "Hl. Messe – Sel. Bbr. Papst Pius XII",
    "location": "Theatinerkirche St. Kajetan, Theatinerstraße 22, 80333 München",
    "details": "Anschl. Trauerkneipe. Gemeinsam mit K.D.St.V. Teutonia Fribourg gedenken wir Bbr. Gerhard A. Meinl (Tfs, Tt).",
    "guests": true
  },
  {
    "date": "2026-05-17",
    "time": "11:00",
    "title": "Familientag",
    "location": "Trifelshaus",
    "details": "",
    "guests": true
  },
  {
    "date": "2026-05-19",
    "time": "19:15",
    "title": "II. Ordentlicher Convent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-05-23",
    "time": "10:15",
    "title": "Hausarbeitstag",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-05-26",
    "time": "18:15",
    "title": "Trifelsstammtisch",
    "location": "Pfälzer Weinstube, Residenzstraße 1",
    "details": "Lockere Runde auf einen gemütlichen Schoppen.",
    "guests": true
  },
  {
    "date": "2026-06-04",
    "time": "09:00",
    "title": "Hochfest Fronleichnam",
    "location": "Marienplatz, München",
    "details": "Hl. Messe auf dem Marienplatz mit anschl. Prozession. Gemeinsames Mittagessen im Museumsstüberl, Sterneckerstraße 2, 80331 München.",
    "guests": true
  },
  {
    "date": "2026-06-12",
    "time": "19:00",
    "title": "Sommerlicher Trachtenabend",
    "location": "Trifelshaus",
    "details": "Begrüßungsabend zum 104. Stiftungsfest – Bayerische Tracht erwünscht.",
    "guests": true
  },
  {
    "date": "2026-06-13",
    "time": "15:15",
    "title": "Altherrenconvent",
    "location": "Augustiner Stammhaus, Neuhauser Str. 27, 80331 München",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-06-13",
    "time": "17:15",
    "title": "Cumulativconvent",
    "location": "Augustiner Stammhaus, Neuhauser Str. 27, 80331 München",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-06-13",
    "time": "20:15",
    "title": "104. Stiftungsfestkommers",
    "location": "Augustiner Stammhaus, Neuhauser Str. 27, 80331 München",
    "details": "",
    "guests": true
  },
  {
    "date": "2026-06-14",
    "time": "10:30",
    "title": "Festgottesdienst",
    "location": "Theatinerkirche St. Kajetan, Theatinerstraße 22, 80333 München",
    "details": "Anschl. Ex-Bummel im Weissen Bräuhaus, Tal 7, 80331 München.",
    "guests": true
  },
  {
    "date": "2026-06-16",
    "time": "19:15",
    "title": "III. Ordentlicher Convent – Wahlconvent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-06-30",
    "time": "18:15",
    "title": "Trifelsstammtisch",
    "location": "Pfälzer Weinstube, Residenzstraße 1",
    "details": "Lockere Runde auf einen gemütlichen Schoppen.",
    "guests": true
  },
  {
    "date": "2026-07-04",
    "time": "20:15",
    "title": "Sommernachtstraum in Macondo",
    "location": "Ort wird bekanntgegeben",
    "details": "Abendgarderobe erwünscht. Anmeldung über den Consenior bis 30.06.",
    "guests": true
  },
  {
    "date": "2026-07-07",
    "time": "19:15",
    "title": "IV. Ordentlicher Convent – Dechargierungsconvent",
    "location": "Trifelshaus",
    "details": "",
    "guests": false
  },
  {
    "date": "2026-07-18",
    "time": "18:30",
    "title": "Semesterabschlussgottesdienst",
    "location": "St. Sylvester, Biedersteiner Str. 1A, 80802 München",
    "details": "",
    "guests": true
  },
  {
    "date": "2026-07-18",
    "time": "20:15",
    "title": "Semesterabschlusskneipe",
    "location": "Trifelshaus",
    "details": "",
    "guests": true
  }
];

export const oeffentlicheTermine = termine.filter((t) => t.guests);

export const semesterLabel = "Wintersemester 2025/26 und Sommersemester 2026";
