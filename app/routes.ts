import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("unser-bund", "routes/unser-bund.tsx"),
  route("trifelshaus", "routes/trifelshaus.tsx"),
  route("semesterprogramm", "routes/semesterprogramm.tsx"),
  route("geschichte", "routes/geschichte.tsx"),
  route("mitglied-werden", "routes/mitglied-werden.tsx"),
  route("kontakt", "routes/kontakt.tsx"),
  route("impressum", "routes/impressum.tsx"),
  route("datenschutz", "routes/datenschutz.tsx"),
  route("login", "routes/login.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
