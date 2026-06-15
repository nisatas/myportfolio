import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "tr" | "en";
type Theme = "light" | "dark";

type AppContextValue = {
  lang: Lang;
  theme: Theme;
  toggleLang: () => void;
  toggleTheme: () => void;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const AppContext = createContext<AppContextValue | null>(null);

const LS_LANG = "lang";
const LS_THEME = "theme";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem(LS_LANG) as Lang) || "tr");
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(LS_THEME) as Theme) || "dark");

  useEffect(() => localStorage.setItem(LS_LANG, lang), [lang]);
  useEffect(() => localStorage.setItem(LS_THEME, theme), [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      theme,
      toggleLang: () => setLang((p) => (p === "tr" ? "en" : "tr")),
      toggleTheme: () => setTheme((p) => (p === "dark" ? "light" : "dark")),
      setLang,
      setTheme,
    }),
    [lang, theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
