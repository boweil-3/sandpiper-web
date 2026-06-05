import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { useT } from "@/i18n/LanguageProvider";
import { TRANSLATIONS } from "@/i18n/translations";

const FONT_LINKS = [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
  },
] as const;

export function supportHead(lang: keyof typeof TRANSLATIONS = "en") {
  const copy = TRANSLATIONS[lang];
  return {
    meta: [
      { title: copy["support.meta.title"] },
      { name: "description", content: copy["support.meta.description"] },
      { property: "og:title", content: copy["support.meta.title"] },
    ],
    links: [...FONT_LINKS],
  };
}

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => supportHead(),
});

export function SupportPage() {
  const { t } = useT();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="mx-auto max-w-[720px] px-6 pb-24 pt-32">
        <div className="mb-12">
          <p className="label-caps text-muted-foreground mb-3">{t("support.eyebrow")}</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            {t("support.title")}
          </h1>
          <div className="hairline mt-8" />
        </div>

        <div className="prose-legal">
          <p>{t("support.intro")}</p>
          <p>
            {t("support.email.prefix")}{" "}
            <a
              href="mailto:support@sandpiper-app.com"
              className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
            >
              support@sandpiper-app.com
            </a>{" "}
            {t("support.email.suffix")}
          </p>
        </div>
      </main>

      <Footer />

      <style>{`
        .prose-legal p {
          color: var(--color-foreground);
          opacity: 0.85;
          line-height: 1.75;
          margin-bottom: 1rem;
          font-size: 15px;
        }
        .prose-legal a {
          color: var(--color-accent);
        }
      `}</style>
    </div>
  );
}
