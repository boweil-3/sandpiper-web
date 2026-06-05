import { useRouterState } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { localizedPath, stripLangPrefix } from "./paths";
import { LANGUAGES, TRANSLATIONS, type LanguageCode, type TranslationKey } from "./translations";

type Ctx = {
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "sandpiper.lang";

function isLang(v: string | null): v is LanguageCode {
  return !!v && LANGUAGES.some((l) => l.code === v);
}

function langFromPathname(pathname: string): LanguageCode | null {
  const segment = pathname.replace(/^\//, "").split("/")[0].toLowerCase();
  if (!segment) return null;
  const match = LANGUAGES.find((l) => l.slug === segment);
  return match ? match.code : null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const routerPathname = useRouterState({ select: (s) => s.location.pathname });
  // Bare locale home URLs (/zh-cn) are rewritten to / for routing on the server,
  // but the browser URL keeps the slug — use it when available.
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : routerPathname;
  const urlLang = langFromPathname(pathname);
  const [storedLang, setStoredLang] = useState<LanguageCode>("en");

  useEffect(() => {
    if (urlLang) {
      try {
        localStorage.setItem(STORAGE_KEY, urlLang);
      } catch {
        // ignore
      }
      return;
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) {
        setStoredLang(saved);
        return;
      }
      const nav = navigator.language;
      const match = LANGUAGES.find(
        (l) => nav === l.code || nav.startsWith(l.code + "-") || nav.startsWith(l.code),
      );
      if (match) setStoredLang(match.code);
    } catch {
      // ignore
    }
  }, [urlLang]);

  const lang = urlLang ?? storedLang;

  const setLang = useCallback((l: LanguageCode) => {
    setStoredLang(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
      const suffix = stripLangPrefix(window.location.pathname);
      const newPath = localizedPath(l, suffix === "/" ? "/" : suffix);
      window.history.replaceState(null, "", newPath);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey) => TRANSLATIONS[lang][key] ?? TRANSLATIONS.en[key] ?? key,
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
