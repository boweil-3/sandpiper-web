import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import { SandpiperMark } from "./SandpiperMark";
import { LanguageToggle } from "./LanguageToggle";
import { useT } from "@/i18n/LanguageProvider";
import { isHomePath, slugForLang } from "@/i18n/paths";

export function Nav() {
  const { t, lang } = useT();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "nav-blur border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-7">
        <Link
          to="/$lang"
          params={{ lang: slugForLang(lang) }}
          className="flex items-center gap-2 text-foreground"
          onClick={(e) => {
            if (isHomePath(window.location.pathname, lang)) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="text-accent">
            <SandpiperMark />
          </span>
          <span className="font-serif text-[22px] leading-none">Sandpiper</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a href="#download" className="btn-amber !py-2 !px-4 !text-[12px]">
            {t("nav.download")}
          </a>
        </div>
      </div>
    </header>
  );
}
