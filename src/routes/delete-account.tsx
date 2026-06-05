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

export function deleteAccountHead(lang: keyof typeof TRANSLATIONS = "en") {
  const copy = TRANSLATIONS[lang];
  return {
    meta: [
      { title: copy["deleteAccount.meta.title"] },
      { name: "description", content: copy["deleteAccount.meta.description"] },
      { property: "og:title", content: copy["deleteAccount.meta.title"] },
    ],
    links: [...FONT_LINKS],
  };
}

export const Route = createFileRoute("/delete-account")({
  component: DeleteAccountPage,
  head: () => deleteAccountHead(),
});

export function DeleteAccountPage() {
  const { t } = useT();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="mx-auto max-w-[720px] px-6 pb-24 pt-32">
        <div className="mb-12">
          <p className="label-caps text-muted-foreground mb-3">{t("deleteAccount.eyebrow")}</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            {t("deleteAccount.title")}
          </h1>
          <p className="text-sm text-muted-foreground">
            Sandpiper &nbsp;·&nbsp; sandpiper-app.com
          </p>
          <div className="hairline mt-8" />
        </div>

        <div className="prose-legal">
          <Section id="how-to" title={t("deleteAccount.howTo.title")}>
            <p>{t("deleteAccount.howTo.intro")}</p>
            <ol>
              <li>{t("deleteAccount.howTo.step1")}</li>
              <li>
                {t("deleteAccount.howTo.step2.before")}{" "}
                <strong>{t("deleteAccount.howTo.step2.settings")}</strong>
              </li>
              <li>
                {t("deleteAccount.howTo.step3.before")}{" "}
                <strong>{t("deleteAccount.howTo.step3.action")}</strong>{" "}
                {t("deleteAccount.howTo.step3.after")}
              </li>
            </ol>
            <p>{t("deleteAccount.howTo.outro")}</p>
          </Section>

          <Section id="deleted" title={t("deleteAccount.deleted.title")}>
            <p>{t("deleteAccount.deleted.intro")}</p>
            <ul>
              <li>{t("deleteAccount.deleted.item1")}</li>
              <li>{t("deleteAccount.deleted.item2")}</li>
            </ul>
          </Section>

          <Section id="retained" title={t("deleteAccount.retained.title")}>
            <p>{t("deleteAccount.retained.intro")}</p>
            <ul>
              <li>{t("deleteAccount.retained.item1")}</li>
              <li>{t("deleteAccount.retained.item2")}</li>
              <li>{t("deleteAccount.retained.item3")}</li>
            </ul>
            <p>{t("deleteAccount.retained.p1")}</p>
            <p>{t("deleteAccount.retained.p2")}</p>
          </Section>

          <Section id="contact" title={t("deleteAccount.contact.title")}>
            <p>
              {t("deleteAccount.contact.prefix")}{" "}
              <a
                href="mailto:support@sandpiper-app.com"
                className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
                support@sandpiper-app.com
              </a>
              .
            </p>
          </Section>
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
        .prose-legal ul,
        .prose-legal ol {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .prose-legal ul {
          list-style: disc;
        }
        .prose-legal ol {
          list-style: decimal;
        }
        .prose-legal ul li,
        .prose-legal ol li {
          color: var(--color-foreground);
          opacity: 0.8;
          font-size: 15px;
          line-height: 1.6;
        }
        .prose-legal strong {
          color: var(--color-foreground);
          opacity: 1;
          font-weight: 600;
        }
        .prose-legal a {
          color: var(--color-accent);
        }
      `}</style>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-lg font-semibold text-foreground mb-4 leading-snug">{title}</h2>
      {children}
    </section>
  );
}
