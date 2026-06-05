import { SandpiperMark } from "@/components/SandpiperMark";
import { useT } from "@/i18n/LanguageProvider";
import { localizedPath } from "@/i18n/paths";

export function Footer() {
  const { t, lang } = useT();
  const homePath = localizedPath(lang, "/");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1100px] px-7 py-12">
        <div className="flex flex-col items-center gap-6 text-[12px] text-muted-foreground sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-accent">
              <SandpiperMark size={20} />
            </span>
            <span className="font-serif text-[20px] leading-none">Sandpiper</span>
            <span className="ml-3 hidden text-muted-foreground sm:inline">
              {t("footer.tagline")}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`${homePath}#top`} className="hover:text-foreground transition">
              {t("footer.top")}
            </a>
            <a href={`${homePath}#download`} className="hover:text-foreground transition">
              {t("footer.download")}
            </a>
            <a href={localizedPath(lang, "/support")} className="hover:text-foreground transition">
              {t("footer.support")}
            </a>
            <a href="/privacy" className="hover:text-foreground transition">
              {t("footer.privacy")}
            </a>
            <a href="/terms" className="hover:text-foreground transition">
              {t("footer.terms")}
            </a>
            <a href="/delete-account" className="hover:text-foreground transition">
              Delete Account
            </a>
          </div>
        </div>
        <div className="mt-8 hairline" />
        <div className="mt-6 text-center text-[11px] text-muted-foreground">
          {t("footer.copy")}
        </div>
      </div>
    </footer>
  );
}
