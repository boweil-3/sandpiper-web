import { LANGUAGES, type LanguageCode } from "./translations";

const STORAGE_KEY = "sandpiper.lang";

function isLang(v: string | null): v is LanguageCode {
  return !!v && LANGUAGES.some((l) => l.code === v);
}

function matchNavigatorLanguage(nav: string): LanguageCode | null {
  const match = LANGUAGES.find(
    (l) => nav === l.code || nav.startsWith(l.code + "-") || nav.startsWith(l.code),
  );
  return match ? match.code : null;
}

export function detectPreferredLang(): LanguageCode {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) return saved;
      const matched = matchNavigatorLanguage(navigator.language);
      if (matched) return matched;
    } catch {
      // ignore
    }
  }
  return "en";
}

export function detectLangFromAcceptLanguage(header: string | null): LanguageCode {
  if (!header) return "en";

  const preferences = header
    .split(",")
    .map((part) => {
      const [lang, ...params] = part.trim().split(";");
      let q = 1;
      for (const p of params) {
        const m = p.trim().match(/^q=(\d+(?:\.\d+)?)$/);
        if (m) q = parseFloat(m[1]);
      }
      return { lang: lang.trim().toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of preferences) {
    const bySlug = LANGUAGES.find((l) => l.slug === lang);
    if (bySlug) return bySlug.code;
    const byCode = LANGUAGES.find((l) => l.code.toLowerCase() === lang);
    if (byCode) return byCode.code;
    const prefix = lang.split("-")[0];
    const byPrefix = LANGUAGES.find(
      (l) => l.code.toLowerCase() === prefix || l.slug === prefix,
    );
    if (byPrefix) return byPrefix.code;
  }
  return "en";
}
