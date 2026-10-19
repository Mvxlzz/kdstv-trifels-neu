import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { mainNav, site } from "~/data/site";
import { Zirkel } from "./Zirkel";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `whitespace-nowrap px-1 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.08em] 2xl:text-[0.8rem] 2xl:tracking-[0.14em] transition-colors hover:text-blau ${
    isActive ? "text-blau" : "text-silber"
  }`;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="on-dark bg-navy text-white">
      {/* Desktop: Menü links, Zirkel mittig, Mitglied werden und Login rechts */}
      <div className="hidden grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 px-8 py-2 xl:grid 2xl:px-12">
        <nav aria-label="Hauptmenü" className="flex items-center gap-4 2xl:gap-8">
          {mainNav.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/" className="block" aria-label="KDStV Trifels, zur Startseite">
          <Zirkel className="h-12 w-12 text-silber transition-colors hover:text-white" />
        </Link>
        <div className="flex items-center justify-end gap-6">
          <Link to="/mitglied-werden" className="btn-blau min-h-9 px-4 text-[0.8rem] tracking-[0.12em] uppercase">
            Mitglied werden
          </Link>
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
        </div>
      </div>

      {/* Mobil: kompakte Leiste mit Menüknopf */}
      <div className="flex items-center justify-between px-5 py-3 xl:hidden">
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
      <nav id="mobil-menue" aria-label="Hauptmenü" hidden={!open} className="border-t border-white/10 px-5 pb-6 xl:hidden">
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
