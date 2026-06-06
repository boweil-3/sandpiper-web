import { useRouter, useRouterState } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { detectPreferredLang } from "./detect-lang";
import { localizedPath, stripLangPrefix } from "./paths";
import { LANGUAGES, TRANSLATIONS, type LanguageCode, type TranslationKey } from "./translations";

type Ctx = {
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "sandpiper.lang";

function langFromPathname(pathname: string): LanguageCode | null {
  const segment = pathname.replace(/^\//, "").split("/")[0].toLowerCase();
  if (!segment) return null;
  const match = LANGUAGES.find((l) => l.slug === segment);
  return match ? match.code : null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const urlLang = langFromPathname(pathname);
  const [storedLang, setStoredLang] = useState<LanguageCode>(() => detectPreferredLang());

  useEffect(() => {
    if (urlLang) {
      setStoredLang(urlLang);
      try {
        localStorage.setItem(STORAGE_KEY, urlLang);
      } catch {
        // ignore
      }
    }
  }, [urlLang]);

  const lang = urlLang ?? storedLang;

  const setLang = useCallback(
    (l: LanguageCode) => {
      setStoredLang(l);
      try {
        localStorage.setItem(STORAGE_KEY, l);
        const suffix = stripLangPrefix(window.location.pathname);
        const newPath = localizedPath(l, suffix === "/" ? "/" : suffix);
        router.navigate({ href: newPath, replace: true });
      } catch {
        // ignore
      }
    },
    [router],
  );

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
