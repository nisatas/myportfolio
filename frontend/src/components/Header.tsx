import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { content } from "../data/content";

const navItems = [
  { id: "about", labelKey: "about" as const },
  { id: "skill-map", labelKey: "skillMap" as const },
  { id: "education", labelKey: "edu" as const },
  { id: "experience", labelKey: "exp" as const },
  { id: "hackathons", labelKey: "hackathons" as const },
  { id: "projects", labelKey: "projects" as const },
  { id: "certificates", labelKey: "certificates" as const },
  { id: "contact", labelKey: "contact" as const },
];

export default function Header() {
  const { lang, toggleLang, toggleTheme, theme } = useApp();
  const t = content[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const btnClass = theme === "dark"
    ? "bg-[#3d3630] text-amber-200 btn-game-dark"
    : "bg-[#d8d0c8] text-gray-800 btn-game-light";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-2 sm:px-4 pt-2 sm:pt-4">
        <div className={`panel-game backdrop-blur-md ${theme === "dark" ? "bg-[#2a2520]/95 panel-game-dark" : "bg-[#e8e0d8]/95 panel-game-light"}`}>
          <div className={`flex items-center justify-between px-3 sm:px-6 py-2 sm:py-4 ${theme === "dark" ? "text-amber-100" : "text-gray-800"}`}>
            <h1 className={`font-bold text-base sm:text-xl md:text-2xl tracking-tight shrink-0 ${theme === "dark" ? "text-amber-200" : "text-gray-900"} ${theme === "dark" ? "drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" : ""}`} style={{ textShadow: theme === "dark" ? "1px 1px 0 #1a1a1a" : "1px 1px 0 rgba(255,255,255,0.8)" }}>
              Nisa Ataş
            </h1>

            {/* Masaüstü: nav + dil/tema */}
            <nav className="hidden md:flex gap-2 lg:gap-3 flex-wrap justify-center items-center">
              {navItems.map(({ id, labelKey }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`btn-game px-2 sm:px-3 py-1.5 text-[8px] lg:text-[10px] ${btnClass}`}
                >
                  {t.nav[labelKey]}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={toggleLang}
                className={`btn-game px-2 sm:px-3 py-1.5 text-[8px] ${btnClass}`}
                aria-label={lang === "tr" ? "English" : "Türkçe"}
              >
                {lang.toUpperCase()}
              </button>
              <button
                onClick={toggleTheme}
                className={`btn-game px-2 sm:px-3 py-1.5 text-[8px] ${btnClass}`}
                aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </button>

              {/* Mobil: hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                className={`md:hidden btn-game p-2 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1.5 ${btnClass}`}
                aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={menuOpen}
              >
                <span className={`block w-5 h-0.5 rounded-full transition-all ${theme === "dark" ? "bg-amber-200" : "bg-gray-800"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 rounded-full transition-all ${theme === "dark" ? "bg-amber-200" : "bg-gray-800"} ${menuOpen ? "opacity-0 scale-0" : ""}`} />
                <span className={`block w-5 h-0.5 rounded-full transition-all ${theme === "dark" ? "bg-amber-200" : "bg-gray-800"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>

          {/* Mobil açılır menü */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
            aria-hidden={!menuOpen}
          >
            <nav className={`px-3 pb-4 pt-1 border-t ${theme === "dark" ? "border-amber-900/30" : "border-amber-200/50"}`}>
              <ul className="flex flex-col gap-1">
                {navItems.map(({ id, labelKey }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className={`w-full text-left btn-game px-4 py-3 text-sm ${btnClass}`}
                    >
                      {t.nav[labelKey]}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
