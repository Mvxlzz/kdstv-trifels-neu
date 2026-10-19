import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { mainNav, site } from "~/data/site";
import { Zirkel } from "./Zirkel";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-1 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-blau ${
    isActive ? "text-blau" : "text-silber"
  }`;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="on-dark bg-navy text-white">
      <div className="border-b border-white/10 bg-navy-2 text-center text-xs text-silber">
        <p className="px-4 py-1.5">Vorschau der neuen Website. Texte teils Entwurf, Termine aus dem letzten Semester.</p>
      </div>

      {/* Desktop: Wortmarke mittig, Menü darunter (Clubhaus-Stil) */}
      <div className="mx-auto hidden max-w-[112rem] px-12 lg:block xl:px-16">
        <Link to="/" className="mx-auto flex w-fit items-center gap-4 pt-7 pb-5" aria-label="KDStV Trifels, zur Startseite">
          <Zirkel className="h-14 w-14 text-silber" />
          <span className="grid text-left">
            <span className="font-serif text-3xl font-semibold leading-none">{site.name}</span>
            <span className="mt-1.5 text-xs uppercase tracking-[0.3em] text-blau">
              {site.city} · seit {site.founded}
            </span>
          </span>
        </Link>
        <nav aria-label="Hauptmenü" className="flex items-center justify-center gap-7 border-t border-white/10 py-3">
          {mainNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/mitglied-werden" className="btn-blau ml-3 min-h-9 px-4 text-[0.8rem] uppercase tracking-[0.12em]">
            Mitglied werden
          </Link>
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
        </nav>
      </div>

      {/* Mobil: kompakte Leiste mit Menüknopf */}
      <div className="flex items-center justify-between px-5 py-3 lg:hidden">
        <Link to="/" className="flex items-center gap-3" aria-label="KDStV Trifels, zur Startseite">
          <Zirkel className="h-10 w-10 text-silber" />
          <span className="font-serif text-2xl font-semibold">{site.name}</span>
        </Link>
        <button
          type="button"
          className="btn-outline-light min-h-11 px-4"
          aria-expanded={open}
          aria-controls="mobil-menue"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Schließen" : "Menü"}
        </button>
      </div>
      <nav id="mobil-menue" aria-label="Hauptmenü" hidden={!open} className="border-t border-white/10 px-5 pb-6 lg:hidden">
        <ul className="grid">
          {mainNav.map((item) => (
            <li key={item.to} className="border-b border-white/10">
              <NavLink to={item.to} className={({ isActive }) => `block py-4 font-serif text-2xl ${isActive ? "text-blau" : "text-white"}`}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="border-b border-white/10">
            <NavLink to="/kontakt" className="block py-4 font-serif text-2xl text-white">
              Kontakt
            </NavLink>
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/mitglied-werden" className="btn-blau">
            Mitglied werden
          </Link>
          <Link to="/login" className="btn-outline-light">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
