export const site = {
  name: "KDStV Trifels",
  fullName: "Katholische Deutsche Studentenverbindung Trifels zu München",
  city: "München",
  founded: 1922,
  street: "Dunantstraße 6",
  zip: "80805",
  email: "info@kdstv-trifels.de",
  register: "Vereinsregister Amtsgericht München, VR 4356",
  cvUrl: "https://www.cartellverband.de",
};

export const mainNav = [
  { label: "Unser Bund", to: "/unser-bund" },
  { label: "Trifelshaus & Zimmer", to: "/trifelshaus" },
  { label: "Semesterprogramm", to: "/semesterprogramm" },
  { label: "Geschichte", to: "/geschichte" },
] as const;

export function pageTitle(title?: string) {
  return title ? `${title} · KDStV Trifels München` : "KDStV Trifels München · Studentenverbindung seit 1922";
}
