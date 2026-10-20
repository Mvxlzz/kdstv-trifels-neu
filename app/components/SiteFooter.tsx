import { Link } from "react-router";
import { mainNav, site } from "~/data/site";
import { BandStreifen } from "./Couleur";
import { Zirkel } from "./Zirkel";

export function SiteFooter() {
  return (
    <footer className="bg-white text-grau">
      <BandStreifen />
      <div className="mx-auto grid max-w-[112rem] gap-10 px-5 py-14 sm:px-8 lg:px-12 xl:px-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="grid content-start gap-4">
          <div className="flex items-center gap-4 text-schwarz">
            <Zirkel className="h-20 w-auto text-schwarz" />
            <div>
              <p className="font-serif text-3xl leading-none">{site.name}</p>
              <p className="marke mt-1">{site.city} · seit {site.founded}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm">{site.fullName}. Mitglied im Cartellverband der katholischen deutschen Studentenverbindungen (CV).</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-schwarz">Seiten</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {mainNav.map((n) => (
              <li key={n.to}>
                <Link className="hover:text-tief" to={n.to}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-tief" to="/mitglied-werden">
                Mitglied werden
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-schwarz">Kontakt</h2>
          <address className="mt-4 grid gap-2 text-sm not-italic">
            <span>Trifelshaus</span>
            <span>
              {site.street}, {site.zip} {site.city}
            </span>
            <a className="hover:text-tief" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <Link className="hover:text-tief" to="/kontakt">
              Anfahrt und Kontaktformular
            </Link>
          </address>
        </div>
      </div>
      <div className="border-t border-linie">
        <div className="mx-auto flex max-w-[112rem] flex-wrap items-center justify-between gap-4 px-5 py-5 text-sm sm:px-8 lg:px-12 xl:px-16">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link className="hover:text-tief" to="/impressum">
                Impressum
              </Link>
            </li>
            <li>
              <Link className="hover:text-tief" to="/datenschutz">
                Datenschutz
              </Link>
            </li>
            <li>
              <a className="hover:text-tief" href={site.cvUrl} rel="noopener">
                Cartellverband
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
