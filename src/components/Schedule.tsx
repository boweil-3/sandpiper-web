import { Plane, Moon, Sun, Bed, Tablets } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

type Event = {
  time: string;
  category: string;
  color: string;
  icon: LucideIcon;
  title: string;
  body: string;
  inflight?: boolean;
};

const events: Event[] = [
  {
    time: "21:30",
    category: "Avoid Light",
    color: "var(--color-cat-avoid-light)",
    icon: Moon,
    title: "Dim your environment",
    body: "Dim your screens and avoid bright overhead lights. Your body needs to start shifting.",
  },
  {
    time: "10:55",
    category: "Flight",
    color: "var(--color-cat-flight)",
    icon: Plane,
    title: "Board SFO → HND",
    body: "United Airlines · 10:55 departure. Set your watch to UTC+9 now.",
    inflight: true,
  },
  {
    time: "14:20",
    category: "Melatonin",
    color: "var(--color-cat-melatonin)",
    icon: Tablets,
    title: "Take a small dose of melatonin",
    body: "This isn't a sleep pill — it's a clock signal. Small dose, exact timing.",
  },
  {
    time: "07:00",
    category: "Seek Light",
    color: "var(--color-cat-seek-light)",
    icon: Sun,
    title: "Get bright light, fast",
    body: "Get outside or sit near a bright window. Morning light is your strongest reset tool.",
  },
  {
    time: "22:30",
    category: "Sleep",
    color: "var(--color-cat-sleep)",
    icon: Bed,
    title: "Sleep on destination time",
    body: "Sleep now even if you're not tired. Anchor your body to destination time.",
  },
];

export function Schedule() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("in")),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="relative mx-auto max-w-[640px]">
      <div ref={lineRef} className="timeline-line" aria-hidden />
      <ul className="space-y-3">
        {events.map((e, i) => (
          <Reveal key={i} as="li" delay={i * 90}>
            <article
              className="card-lift relative flex gap-4 rounded-2xl border p-4"
              style={{
                background: e.inflight ? "var(--color-inflight)" : "var(--color-card)",
                borderColor: e.inflight
                  ? "color-mix(in oklab, var(--color-cat-flight) 35%, var(--color-border))"
                  : "var(--color-border)",
              }}
            >
              <div
                className="relative z-10 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full"
                style={{
                  background: `color-mix(in oklab, ${e.color} 18%, transparent)`,
                  color: e.color,
                  boxShadow: `0 0 0 4px var(--color-background)`,
                }}
              >
                <e.icon size={15} strokeWidth={2.2} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span
                    className="tabular text-[11px] text-muted-foreground"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    {e.time}
                  </span>
                  <span
                    className="label-caps"
                    style={{ color: e.color }}
                  >
                    {e.category}
                  </span>
                </div>
                <h4 className="mt-1 text-[14px] font-semibold text-foreground">
                  {e.title}
                </h4>
                <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                  {e.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
