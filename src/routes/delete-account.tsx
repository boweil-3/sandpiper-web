import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/delete-account")({
  component: DeleteAccount,
  head: () => ({
    meta: [
      { title: "Delete Your Account — Sandpiper" },
      { name: "description", content: "How to delete your Sandpiper account and what happens to your data." },
      { property: "og:title", content: "Delete Your Account — Sandpiper" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});

function DeleteAccount() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="mx-auto max-w-[720px] px-6 pb-24 pt-32">
        {/* Header */}
        <div className="mb-12">
          <p className="label-caps text-muted-foreground mb-3">Account</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Delete Your Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Sandpiper &nbsp;·&nbsp; sandpiper-app.com
          </p>
          <div className="hairline mt-8" />
        </div>

        <div className="prose-legal">
          <Section id="how-to" title="How to delete your account">
            <p>You can delete your Sandpiper account directly from the app:</p>
            <ol>
              <li>Open the Sandpiper app</li>
              <li>Go to <strong>Settings → Account</strong></li>
              <li>Tap <strong>"Delete Account"</strong> and confirm</li>
            </ol>
            <p>Your account is deleted immediately once confirmed. No waiting period.</p>
          </Section>

          <Section id="deleted" title="What gets deleted immediately">
            <p>The following is permanently removed the moment you confirm deletion:</p>
            <ul>
              <li>Your email address and all personal information</li>
              <li>Your active sessions — you are signed out on all devices immediately</li>
            </ul>
          </Section>

          <Section id="retained" title="What is retained">
            <p>
              A small anonymized record is kept after deletion. It contains only:
            </p>
            <ul>
              <li>Your user ID (a hash — not your email or any identifiable data)</li>
              <li>The date your account was deleted</li>
              <li>Subscription status and whether you have ever paid</li>
            </ul>
            <p>
              No personally identifiable information is stored in this record. It exists
              solely to prevent fraud on re-registration and is retained indefinitely for
              that purpose.
            </p>
            <p>
              Trip data (flight itineraries) may also be retained, but it is permanently
              unlinked from your personal information at the time of deletion.
            </p>
          </Section>

          <Section id="contact" title="Questions?">
            <p>
              If you have questions about your data or need help deleting your account,
              contact us at{" "}
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
