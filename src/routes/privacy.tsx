import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sandpiper" },
      { name: "description", content: "Privacy Policy for the Sandpiper app and website." },
      { property: "og:title", content: "Privacy Policy — Sandpiper" },
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

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main className="mx-auto max-w-[720px] px-6 pb-24 pt-32">
        {/* Header */}
        <div className="mb-12">
          <p className="label-caps text-muted-foreground mb-3">Legal</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: May 30, 2026 &nbsp;·&nbsp; Bayhart Ventures LLC
          </p>
          <div className="hairline mt-8" />
        </div>

        {/* Intro */}
        <div className="prose-legal mb-10">
          <p>
            Bayhart Ventures LLC ("Bayhart," "we," "us," or "our") respects your privacy
            and is committed to protecting your personal information. This Privacy Policy
            explains how we collect, use, share, and safeguard information in connection
            with the Sandpiper mobile application and website at sandpiper-app.com
            (collectively, the "Service").
          </p>
        </div>

        {/* Body */}
        <div className="prose-legal">
          <Section id="scope" title="1. Scope of This Policy">
            <p>This Privacy Policy applies to personal information collected through:</p>
            <ul>
              <li>The Sandpiper website (sandpiper-app.com)</li>
              <li>The Sandpiper mobile application (iOS and Android)</li>
              <li>Customer support and communications (email and other channels)</li>
            </ul>
            <p>
              This policy does not apply to third-party websites or services linked from
              the Service. Those services are governed by their own privacy policies.
            </p>
          </Section>

          <Section id="definitions" title="2. Definitions">
            <ul>
              <li>
                <strong>Personal Information</strong> — information that identifies,
                relates to, or is reasonably linkable to an individual
              </li>
              <li>
                <strong>Sensitive Personal Information</strong> — precise location,
                health-related data, or information receiving enhanced legal protection
              </li>
              <li>
                <strong>Processing</strong> — any operation on personal data, including
                collection, storage, use, disclosure, and deletion
              </li>
              <li>
                <strong>Service Providers</strong> — third parties that process personal
                information on our behalf
              </li>
            </ul>
          </Section>

          <Section id="collection" title="3. Information We Collect">
            <SubSection title="A. Information You Provide Directly">
              <ul>
                <li>Name and email address</li>
                <li>Account credentials</li>
                <li>Payment and billing information (processed via third-party providers)</li>
                <li>
                  Service-related information such as travel itineraries, departure times,
                  destinations, sleep preferences, and scheduling details
                </li>
                <li>Preferences and settings</li>
                <li>Customer support communications</li>
              </ul>
            </SubSection>
            <SubSection title="B. Information Collected Automatically">
              <ul>
                <li>Device identifiers</li>
                <li>Browser type and operating system</li>
                <li>App usage data and interaction logs</li>
                <li>Approximate location derived from IP address</li>
                <li>Cookies and similar tracking technologies</li>
                <li>
                  Language preference stored locally on your device (browser localStorage)
                </li>
              </ul>
            </SubSection>
            <SubSection title="C. Information from Third Parties">
              <ul>
                <li>Analytics providers</li>
                <li>Platform providers (Apple App Store, Google Play Store)</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="use" title="4. How We Use Your Information">
            <p>We use personal information to:</p>
            <ul>
              <li>Provide, operate, and improve the Service</li>
              <li>Create and manage user accounts</li>
              <li>Generate personalized circadian schedules and recommendations</li>
              <li>Process payments and manage subscriptions</li>
              <li>Provide customer support</li>
              <li>
                Communicate service-related updates, features, and notices
              </li>
              <li>Monitor usage and improve performance and security</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and abuse</li>
            </ul>
          </Section>

          <Section id="legal-bases" title="5. Legal Bases for Processing (GDPR)">
            <p>
              Where the General Data Protection Regulation (GDPR) applies, we process
              personal information based on the following legal bases:
            </p>
            <ul>
              <li>
                <strong>Contract performance</strong> — to deliver the Services you have
                requested
              </li>
              <li>
                <strong>Legitimate interests</strong> — to improve, secure, and operate
                the Service
              </li>
              <li>
                <strong>Consent</strong> — where required, such as for marketing
                communications
              </li>
              <li>
                <strong>Legal obligations</strong> — to comply with applicable law and
                regulation
              </li>
            </ul>
            <p>
              Where processing is based on consent, you may withdraw it at any time
              without affecting the lawfulness of processing prior to withdrawal.
            </p>
          </Section>

          <Section id="cookies" title="6. Cookies and Tracking Technologies">
            <p>
              We use cookies and similar technologies to ensure essential functionality,
              remember preferences, analyze usage, and improve the user experience. You
              can control cookies through your browser settings. Disabling certain cookies
              may affect the functionality of the Service.
            </p>
            <p>
              The Service uses Google Fonts, which may result in your browser making
              requests to Google's servers. See Google's privacy policy for details on how
              that data is handled.
            </p>
          </Section>

          <Section id="sharing" title="7. How We Share Information">
            <p>We may share personal information with:</p>
            <ul>
              <li>
                <strong>Service providers</strong> — vendors that support our operations,
                including hosting, analytics, customer support, and payment processing
              </li>
              <li>
                <strong>Professional advisors</strong> — legal, accounting, and compliance
                professionals bound by confidentiality obligations
              </li>
              <li>
                <strong>Authorities</strong> — when required by law, court order, or to
                protect the rights and safety of users or the public
              </li>
              <li>
                <strong>Business successors</strong> — in connection with a merger,
                acquisition, or sale of assets, subject to standard confidentiality
                protections
              </li>
            </ul>
            <p>
              <strong>We do not sell your personal information.</strong> We do not share
              personal information for cross-context behavioral advertising without
              appropriate consent where required by law.
            </p>
          </Section>

          <Section id="processors" title="8. Data Processors and Service Providers">
            <p>
              We work with third-party service providers for hosting, analytics, payment
              processing, customer support, and security. These providers process personal
              information solely on our behalf and under our instructions. They are
              contractually prohibited from using your information for their own purposes
              and must implement appropriate technical and organizational safeguards in
              compliance with applicable data protection laws.
            </p>
          </Section>

          <Section id="retention" title="9. Data Retention">
            <p>
              We retain personal information only as long as necessary to provide the
              Service, fulfill legal and contractual obligations, resolve disputes, and
              enforce our agreements. Retention periods vary based on the nature of the
              data and applicable legal requirements. We may retain certain information
              for longer periods where required by law, regulation, or contractual
              obligations.
            </p>
          </Section>

          <Section id="security" title="10. Data Security">
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information, including:
            </p>
            <ul>
              <li>Encryption in transit and at rest</li>
              <li>Access controls and authentication</li>
              <li>Monitoring, logging, and regular security reviews</li>
            </ul>
            <p>
              No system is completely secure. While we make diligent efforts to protect
              your information, we cannot guarantee absolute security. Our measures are
              calibrated to the nature and sensitivity of the information we hold.
            </p>
          </Section>

          <Section id="international" title="11. International Data Transfers">
            <p>
              Your information may be processed in countries outside your country of
              residence, including the United States. Where such transfers are required,
              we apply appropriate safeguards — such as standard contractual clauses or
              equivalent protections — to ensure your information receives an adequate
              level of protection.
            </p>
          </Section>

          <Section id="rights" title="12. Your Privacy Rights">
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Restrict or object to certain processing</li>
              <li>Receive a portable copy of your data</li>
              <li>Opt out of certain data uses</li>
              <li>Withdraw consent where processing is consent-based</li>
              <li>Not be discriminated against for exercising your rights</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:support@sandpiper-app.com"
                className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
                support@sandpiper-app.com
              </a>
              .
            </p>
            <SubSection title="California and U.S. State Privacy Rights">
              <p>
                Residents of California and other U.S. states with applicable privacy
                laws have additional rights under statutes including the California
                Privacy Rights Act (CPRA). We will honor verified requests as required
                by applicable law. For California residents, we act as a "business" as
                defined under the CPRA with respect to personal information we collect
                and process.
              </p>
            </SubSection>
            <SubSection title="EEA and UK Residents">
              <p>
                If you are located in the European Economic Area or the United Kingdom,
                you may lodge a complaint with your local data protection authority if
                you believe we have not handled your personal information in accordance
                with applicable law.
              </p>
            </SubSection>
          </Section>

          <Section id="children" title="13. Children's Privacy">
            <p>
              The Service is not intended for children under 13, or the applicable
              minimum age in your jurisdiction. We do not knowingly collect personal
              information from children without appropriate parental consent. If you
              believe we have collected information from a child, please contact us at{" "}
              <a
                href="mailto:support@sandpiper-app.com"
                className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
                support@sandpiper-app.com
              </a>{" "}
              and we will promptly delete it.
            </p>
          </Section>

          <Section id="changes" title="14. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will
              revise the "Last updated" date at the top of this page and notify you
              through the Service or by other reasonable means. Your continued use of
              the Service after any changes take effect constitutes your acceptance of
              the updated policy.
            </p>
          </Section>

          <Section id="contact" title="15. Contact Us">
            <p>
              For questions, concerns, or requests regarding this Privacy Policy or your
              personal information, please contact us at:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-muted/50 px-6 py-5 text-sm leading-relaxed">
              <p className="font-semibold text-foreground">Bayhart Ventures LLC</p>
              <p className="text-muted-foreground mt-1">
                <a
                  href="mailto:support@sandpiper-app.com"
                  className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                >
                  support@sandpiper-app.com
                </a>
              </p>
            </div>
            <p className="mt-6">
              Our{" "}
              <Link
                to="/terms"
                className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
              >
                Terms of Use
              </Link>{" "}
              are available at sandpiper-app.com/terms.
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
        .prose-legal ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .prose-legal ul li {
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground mb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}
