import { createFileRoute } from "@tanstack/react-router";
import {
  Plane,
  Calendar,
  Bell,
  WifiOff,
  ArrowRightLeft,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function AppleStoreIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 170 170" fill="currentColor" aria-hidden>
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.93.21-9.84-1.96-14.75-6.52-3.13-2.73-7.04-7.41-11.73-14.04-5.03-7.08-9.17-15.29-12.41-24.65-3.47-10.11-5.21-19.9-5.21-29.38 0-10.86 2.35-20.22 7.04-28.07 3.69-6.3 8.61-11.28 14.76-14.93 6.15-3.65 12.79-5.51 19.95-5.63 3.91 0 9.05 1.21 15.43 3.59 6.36 2.39 10.45 3.6 12.24 3.6 1.34 0 5.88-1.42 13.57-4.24 7.28-2.62 13.42-3.7 18.45-3.28 13.63 1.1 23.87 6.48 30.68 16.15-12.19 7.39-18.22 17.74-18.1 31.01.11 10.34 3.86 18.94 11.23 25.77 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.1-2.96 15.67-8.86 22.67-7.12 8.32-15.73 13.13-25.07 12.37-.12-.97-.19-1.99-.19-3.07 0-7.78 3.39-16.1 9.4-22.91 3-3.45 6.82-6.31 11.45-8.6 4.62-2.25 8.99-3.5 13.1-3.71.12 1.08.17 2.17.17 3.25z" />
    </svg>
  );
}

function GooglePlayIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
    </svg>
  );
}
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Globe } from "@/components/Globe";
import { CityTicker } from "@/components/CityTicker";
import { Stats } from "@/components/Stats";
import { MagneticCTA } from "@/components/MagneticCTA";
import { PhoneFrame } from "@/components/PhoneFrame";
import { AppSchedule, DestinationClockBar } from "@/components/AppSchedule";
import { useT } from "@/i18n/LanguageProvider";
import { CAT, CAT_EDUCATION, CAT_ICON, type Category } from "@/data/appPlan";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sandpiper — Beat jet lag. Arrive ready." },
      {
        name: "description",
        content:
          "A personalized hour-by-hour schedule for your body, starting 48 hours before departure. Built for international travelers.",
      },
      { property: "og:title", content: "Sandpiper — Beat jet lag. Arrive ready." },
      {
        property: "og:description",
        content:
          "A personalized hour-by-hour schedule for your body, starting 48 hours before departure.",
      },
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

function CTAButtons({ size = "md" }: { size?: "md" | "sm" }) {
  const { t } = useT();
  const cls = size === "sm" ? "!py-2.5 !px-4 !text-[12px]" : "";
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <MagneticCTA href="#download" variant="amber" className={cls}>
        <AppleStoreIcon size={16} /> {t("hero.cta.ios")}
      </MagneticCTA>
      <MagneticCTA href="#download" variant="outline" className={cls}>
        <GooglePlayIcon size={16} /> {t("hero.cta.android")}
      </MagneticCTA>
    </div>
  );
}

function Hero() {
  const { t } = useT();
  return (
    <section
      id="top"
      className="hero-bg relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <div className="aurora" aria-hidden />
      <div className="hero-noise absolute inset-0 opacity-40" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 px-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="text-center lg:text-left">
          <Reveal>
            <span
              className="label-caps inline-flex items-center gap-2"
              style={{ color: "var(--accent)" }}
            >
              <Sparkles size={12} /> {t("hero.eyebrow")}
            </span>
          </Reveal>
          <Reveal delay={100} className="reveal-blur">
            <h1 className="font-serif mt-5 text-[52px] leading-[1.02] sm:text-[68px] md:text-[88px]">
              <span className="shimmer">{t("hero.title1")}</span>
              <br />
              <span className="shimmer">{t("hero.title2")}</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-relaxed text-muted-foreground lg:mx-0">
              {t("hero.body")}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 lg:flex lg:justify-start">
              <CTAButtons />
            </div>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-6 text-[12px] text-muted-foreground">
              {t("hero.note")}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="reveal-blur">
          <div className="relative mx-auto aspect-square w-full max-w-[520px] float-y">
            <Globe />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t } = useT();
  const steps = [
    { icon: Plane, color: "var(--color-cat-flight)", title: t("how.s1.title"), body: t("how.s1.body") },
    { icon: Calendar, color: "var(--accent)", title: t("how.s2.title"), body: t("how.s2.body") },
    { icon: Bell, color: "var(--color-cat-stay-awake)", title: t("how.s3.title"), body: t("how.s3.body") },
  ];
  return (
    <section className="mx-auto max-w-[1100px] px-7 py-28">
      <Reveal>
        <span className="label-caps text-section-label">{t("how.eyebrow")}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-serif mt-3 text-[32px] sm:text-[44px]">
          {t("how.title")}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-7">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background: `color-mix(in oklab, ${s.color} 16%, transparent)`,
                  color: s.color,
                }}
              >
                <s.icon size={20} strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-[15px] font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <div className="mt-6 label-caps text-section-label">
                {t("how.step")} 0{i + 1}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SchedulePreview() {
  const { t } = useT();
  const bullets = [
    { title: t("sched.b1.title"), body: t("sched.b1.body") },
    { title: t("sched.b2.title"), body: t("sched.b2.body") },
    { title: t("sched.b3.title"), body: t("sched.b3.body") },
    { title: t("sched.b4.title"), body: t("sched.b4.body") },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border bg-muted/40 py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(700px 320px at 80% 30%, color-mix(in oklab, var(--accent) 8%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-14 px-7 lg:grid-cols-[1fr_1fr]">
        <div>
          <Reveal>
            <span className="label-caps text-section-label">{t("sched.eyebrow")}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif mt-3 text-[32px] sm:text-[44px]">
              {t("sched.title")}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-[480px] text-[14px] leading-relaxed text-muted-foreground">
              {t("sched.body")}
            </p>
          </Reveal>
          <ul className="mt-10 space-y-6">
            {bullets.map((b, i) => (
              <Reveal key={i} delay={200 + i * 100}>
                <li className="flex gap-4">
                  <span
                    className="mt-1 h-6 w-6 shrink-0 rounded-full"
                    style={{
                      background: "color-mix(in oklab, var(--accent) 18%, transparent)",
                      boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--accent) 40%, transparent)",
                    }}
                  >
                    <span
                      className="block h-1.5 w-1.5 translate-x-[9px] translate-y-[9px] rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{b.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="reveal-blur">
          <PhoneFrame
            caption={t("sched.caption")}
            bottomBar={<DestinationClockBar />}
          >
            <AppSchedule />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  );
}


// Ordered by when they typically appear across a 4-day plan
const EDUCATION_CATEGORIES: Category[] = [
  "SEEK LIGHT",
  "AVOID LIGHT",
  "WAKE",
  "SLEEP",
  "CAFFEINE",
  "NO CAFFEINE",
  "MELATONIN",
  "STAY AWAKE",
];

function EventEducation() {
  return (
    <section className="mx-auto max-w-[1100px] px-7 py-28">
      <Reveal>
        <span className="label-caps text-section-label">The science</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-serif mt-3 text-[32px] sm:text-[44px]">
          Eight signals. One body clock.
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-muted-foreground">
          Every event in your plan targets a specific mechanism of your circadian system.
          Here's what each one does — and why it works.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {EDUCATION_CATEGORIES.map((cat, i) => {
          const ed = CAT_EDUCATION[cat];
          const color = CAT[cat];
          const Icon = CAT_ICON[cat];
          return (
            <Reveal key={cat} delay={i * 70}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-7">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: `color-mix(in oklab, ${color} 16%, transparent)`,
                  }}
                >
                  <Icon size={20} style={{ color }} strokeWidth={2.2} />
                </div>
                <div className="mt-4">
                  <span
                    className="rounded-[5px] px-2 py-[3px] text-[9px] font-bold tracking-wider"
                    style={{
                      background: `color-mix(in oklab, ${color} 12%, transparent)`,
                      color,
                    }}
                  >
                    {cat}
                  </span>
                </div>
                <h3 className="mt-3 text-[15px] font-semibold text-foreground">
                  {ed.headline}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {ed.detail}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function FeatureGrid() {
  const { t } = useT();
  const features = [
    { icon: WifiOff, color: "var(--color-cat-flight)", title: t("feat.f1.title"), body: t("feat.f1.body") },
    { icon: ArrowRightLeft, color: "var(--accent)", title: t("feat.f2.title"), body: t("feat.f2.body") },
    { icon: Clock, color: "var(--color-cat-wake)", title: t("feat.f3.title"), body: t("feat.f3.body") },
    { icon: ShieldCheck, color: "var(--color-cat-stay-awake)", title: t("feat.f4.title"), body: t("feat.f4.body") },
  ];
  return (
    <section className="mx-auto max-w-[1100px] px-7 py-28">
      <Reveal>
        <span className="label-caps text-section-label">{t("feat.eyebrow")}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-serif mt-3 text-[32px] sm:text-[44px]">
          {t("feat.title")}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {features.map((f, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-7">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  background: `color-mix(in oklab, ${f.color} 16%, transparent)`,
                  color: f.color,
                }}
              >
                <f.icon size={20} strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-[15px] font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Quote() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden border-t border-border py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 240px at 50% 50%, color-mix(in oklab, var(--accent) 8%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[820px] px-7 text-center">
        <Reveal>
          <div
            className="mx-auto mb-8 h-px w-24"
            style={{ background: "var(--accent)" }}
          />
        </Reveal>
        <Reveal delay={80}>
          <p
            className="font-serif text-[26px] leading-[1.35] text-foreground sm:text-[34px]"
            style={{ fontStyle: "italic" }}
          >
            {t("quote.body")}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8 flex items-center justify-center gap-3 text-[12px]">
            <span className="label-caps" style={{ color: "var(--accent)" }}>
              SFO → NRT
            </span>
            <span className="text-muted-foreground/60">·</span>
            <span className="text-muted-foreground">
              {t("quote.author")}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTABanner() {
  const { t } = useT();
  return (
    <section id="download" className="mx-auto max-w-[1100px] px-7 pb-28">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-2xl border p-10 sm:p-16"
          style={{
            background: "var(--color-trip-banner)",
            borderColor:
              "color-mix(in oklab, var(--accent) 30%, var(--color-border))",
          }}
        >
          <div
            className="absolute inset-y-0 left-0 w-[3px]"
            style={{
              background: "var(--accent)",
              boxShadow:
                "0 0 24px 2px color-mix(in oklab, var(--accent) 60%, transparent)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 30%, transparent), transparent)",
            }}
            aria-hidden
          />
          <div className="relative text-center">
            <span className="label-caps" style={{ color: "var(--accent)" }}>
              {t("cta.eyebrow")}
            </span>
            <h2 className="font-serif mt-3 text-[32px] sm:text-[48px]">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[14px] text-muted-foreground">
              {t("cta.body")}
            </p>
            <div className="mt-9">
              <CTAButtons />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <CityTicker />
        <HowItWorks />
        <EventEducation />
        <SchedulePreview />
        <Stats />
        <FeatureGrid />
        <Quote />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
