import { LANGUAGES, type LanguageCode } from "./translations";

export function slugForLang(code: LanguageCode): string {
  return LANGUAGES.find((l) => l.code === code)?.slug ?? "";
}

export function langFromSlug(slug: string): LanguageCode | null {
  const match = LANGUAGES.find((l) => l.slug === slug.toLowerCase());
  return match ? match.code : null;
}

export function localizedPath(code: LanguageCode, path: string): string {
  const slug = slugForLang(code);
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (slug) return `/${slug}${normalized}`;
  return normalized;
}

export function isHomePath(pathname: string, code: LanguageCode): boolean {
  const home = localizedPath(code, "/").replace(/\/$/, "") || "/";
  const current = pathname.replace(/\/$/, "") || "/";
  return current === home;
}

export function stripLangPrefix(pathname: string): string {
  const segment = pathname.replace(/^\//, "").split("/")[0].toLowerCase();
  const match = LANGUAGES.find((l) => l.slug === segment);
  if (!match) return pathname;
  const rest = pathname.slice(1 + segment.length) || "/";
  return rest.startsWith("/") ? rest : `/${rest}`;
}
