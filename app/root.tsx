import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import "./app.css";

export const links: Route.LinksFunction = () => [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a2540" />
        <Meta />
        <Links />
      </head>
      <body>
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:font-semibold"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt">{children}</main>
        <SiteFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const title = isRouteErrorResponse(error) && error.status === 404 ? "Seite nicht gefunden" : "Etwas ist schiefgelaufen";
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="text-5xl">{title}</h1>
      <p className="mt-4 text-grau">Bitte versuche es über die Startseite erneut.</p>
      <a className="btn-primary mt-8" href="/">
        Zur Startseite
      </a>
    </section>
  );
}
