import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  CAT,
  CAT_ICON,
  DAYS,
  FLIGHT,
  type Category,
  type Event,
} from "@/data/appPlan";

/**
 * Faithful web reproduction of the Sandpiper app's Schedule screen.
 * Mirrors lib/src/screens/schedule_screen.dart — header banner with TIME SHIFT,
 * day dividers, three-phase events (pre / inflight / post), the "YOU ARE HERE"
 * line, the welcome banner, and the sticky destination clock at the bottom.
 */
export function AppSchedule({ themeMode = "dark" }: { themeMode?: "dark" | "light" }) {
  return (
    <div className="text-foreground">
      {/* ── Header ───────────────────────────────────────────────── */}
      <div className="px-1 pt-1">
        <h2 className="font-serif text-[24px] leading-[1.05] tracking-[-0.01em]">
          Your Plan
        </h2>
        <p className="mt-0.5 text-[11px] text-muted-foreground">
          Prepare to change schedule two days before and after the flights
        </p>
      </div>

      {/* Trip banner */}
      <div
        className="mt-3 rounded-2xl border px-4 py-3"
        style={{
          background:
            "linear-gradient(135deg, var(--color-trip-banner), var(--color-inflight))",
          borderColor:
            "color-mix(in oklab, var(--color-cat-flight) 30%, var(--color-border))",
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div
              className="font-semibold tracking-wide text-foreground"
              style={{ fontSize: 17 }}
            >
              {FLIGHT.depIata} → {FLIGHT.arrIata}
            </div>
            <div className="mt-0.5 text-[10.5px] text-muted-foreground">
              {FLIGHT.number} · {FLIGHT.depDate}
            </div>
          </div>
          <div className="text-right">
            <div
              className="label-caps text-section-label"
              style={{ fontSize: 9 }}
            >
              TIME SHIFT
            </div>
            <div
              className="font-semibold tabular"
              style={{ color: "var(--accent)", fontSize: 16 }}
            >
              {FLIGHT.shiftLabel}
            </div>
          </div>
        </div>
      </div>

      {/* ── Days ─────────────────────────────────────────────────── */}
      {DAYS.map((day, di) => (
        <div key={di} className="mt-5">
          <DayDivider date={day.dateLabel} label={day.phaseLabel} />
          <div className="mt-2">
            {day.events.map((ev, i) => (
              <div key={i}>
                <EventRow event={ev} />
                {day.nowAfterIndex === i && <YouAreHere />}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Welcome banner */}
      <div className="mt-6 px-1">
        <div
          className="font-serif text-[20px] leading-[1.15]"
          style={{ fontStyle: "italic" }}
        >
          Welcome to {FLIGHT.arrAirport}.
        </div>
        <div className="mt-1 text-[12px] text-muted-foreground">
          Enjoy your travels with no jet lag.
        </div>
      </div>

      {/* Footer logo */}
      <div className="mt-7 flex justify-center pb-4">
        <img src={logo} alt="Sandpiper" className="h-12 w-12 rounded-xl" />
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// Day divider
// ════════════════════════════════════════════════════════════════════
function DayDivider({ date, label }: { date: string; label: string }) {
  return (
    <div className="flex items-end gap-3 px-1">
      <div className="shrink-0">
        <div className="text-[12px] font-semibold leading-tight">{date}</div>
        <div className="text-[10px] text-muted-foreground">{label}</div>
      </div>
      <div
        className="mb-[5px] h-px flex-1"
        style={{ background: "var(--color-border)" }}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// "YOU ARE HERE"
// ════════════════════════════════════════════════════════════════════
function YouAreHere() {
  return (
    <div className="my-2 flex items-center gap-2 px-1">
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--accent) 60%, var(--accent))",
        }}
      />
      <span
        className="label-caps"
        style={{ color: "var(--accent)", fontSize: 9, letterSpacing: "0.14em" }}
      >
        You are here
      </span>
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to left, transparent, var(--accent) 60%, var(--accent))",
        }}
      />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// Event row — renders pre / inflight / post variants
// ════════════════════════════════════════════════════════════════════
function EventRow({ event }: { event: Event }) {
  if (event.phase === "inflight") return <InflightRow event={event} />;
  if (event.phase === "post") return <PostRow event={event} />;
  return <PreRow event={event} />;
}

function PreRow({ event }: { event: Event }) {
  const color = CAT[event.category];
  return (
    <div className="flex items-stretch gap-2 px-1">
      <TimeCol time={event.homeTime} code={FLIGHT.depIata} align="end" />
      <Dot color={color} category={event.category} />
      <div className="min-w-0 flex-1">
        <EventCard event={event} />
      </div>
    </div>
  );
}

function PostRow({ event }: { event: Event }) {
  const color = CAT[event.category];
  return (
    <div className="flex items-stretch gap-2 px-1">
      <TimeCol time={event.destTime ?? ""} code={FLIGHT.arrIata} align="end" isDest />
      <Dot color={color} category={event.category} />
      <div className="min-w-0 flex-1">
        <EventCard event={event} />
      </div>
    </div>
  );
}

function InflightRow({ event }: { event: Event }) {
  const color = CAT[event.category];
  return (
    <div className="flex items-stretch gap-2 px-1">
      <TimeCol time={event.homeTime} code={FLIGHT.depIata} align="end" />
      <Dot color={color} category={event.category} />
      <div className="min-w-0 flex-1">
        <EventCard event={event} />
      </div>
    </div>
  );
}

function TimeCol({
  time,
  code,
  align,
  isDest = false,
}: {
  time: string;
  code: string;
  align: "start" | "end";
  isDest?: boolean;
}) {
  return (
    <div
      className="flex w-[46px] shrink-0 flex-col pt-3"
      style={{ alignItems: align === "end" ? "flex-end" : "flex-start" }}
    >
      <div
        className="tabular whitespace-nowrap text-[10px] font-semibold leading-tight"
        style={{
          color: "var(--foreground)",
          textAlign: align === "end" ? "right" : "left",
        }}
      >
        {time}
      </div>
      <div
        className="mt-0.5 tabular text-[9px] font-bold tracking-wider"
        style={{ color: isDest ? "var(--color-cat-flight)" : "var(--muted-foreground)", opacity: 0.7 }}
      >
        {code}
      </div>
    </div>
  );
}

function Dot({ color, category }: { color: string; category: Category }) {
  const Icon = CAT_ICON[category];
  return (
    <div className="relative flex w-[18px] shrink-0 flex-col items-center pt-3">
      <div
        className="flex h-[16px] w-[16px] items-center justify-center rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 0 4px var(--background), 0 0 10px 1px ${color}55`,
        }}
      >
        <Icon size={9} color="rgba(255,255,255,0.9)" strokeWidth={2.4} />
      </div>
      <div
        className="mt-1 w-[2px] flex-1"
        style={{ background: "var(--color-border)" }}
      />
    </div>
  );
}

// ── Duration chip (mirrors mobile's _DurationChip) ────────────────
function DurationChip({ duration, isActive }: { duration: number; isActive?: boolean }) {
  const hrs = duration < 1 ? `${Math.round(duration * 60)} min` : `${duration % 1 === 0 ? duration : duration}h`;
  const color = isActive ? "var(--accent)" : "var(--muted-foreground)";
  return (
    <span
      className="inline-block rounded-[5px] px-1.5 py-[1px]"
      style={{
        fontSize: 8.5,
        fontWeight: 700,
        letterSpacing: "0.08em",
        background: isActive
          ? "color-mix(in oklab, var(--accent) 14%, transparent)"
          : "color-mix(in oklab, var(--muted-foreground) 10%, transparent)",
        color,
      }}
    >
      {hrs}
    </span>
  );
}

function EventCard({ event }: { event: Event }) {
  const color = CAT[event.category];
  const isActive = event.isActive ?? false;
  return (
    <div
      className="mb-2 rounded-[14px] border px-3.5 py-2.5"
      style={{
        background: "var(--color-card)",
        borderColor: isActive
          ? "color-mix(in oklab, var(--accent) 55%, var(--color-border))"
          : "var(--color-border)",
        borderWidth: isActive ? 2 : 1,
        boxShadow: isActive
          ? "0 0 10px 0px color-mix(in oklab, var(--accent) 18%, transparent)"
          : undefined,
      }}
    >
      <div className="flex items-center gap-1.5">
        <span
          className="rounded-[5px] px-1.5 py-[1px] tracking-wider"
          style={{
            fontSize: 8.5,
            fontWeight: 700,
            letterSpacing: "0.08em",
            background: `color-mix(in oklab, ${color} 14%, transparent)`,
            color,
          }}
        >
          {event.category}
        </span>

        <ChevronRight
          size={12}
          className="ml-auto"
          style={{ color: "var(--muted-foreground)" }}
        />
      </div>
      {event.duration != null && event.duration > 0 && (
        <div className="mt-1.5">
          <DurationChip duration={event.duration} isActive={isActive} />
        </div>
      )}
      <div className="mt-1 text-[12.5px] font-semibold leading-snug">
        {event.title}
      </div>
      <div className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
        {event.body}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════
// Sticky destination clock — rendered separately by PhoneFrame
// ════════════════════════════════════════════════════════════════════
export function DestinationClockBar() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  let timeStr = "—";
  let dateStr = "";
  if (now) {
    try {
      timeStr = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: FLIGHT.arrTimezone,
      }).format(now);
      dateStr = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "numeric",
        day: "numeric",
        timeZone: FLIGHT.arrTimezone,
      }).format(now);
    } catch {
      /* noop */
    }
  }

  return (
    <div
      className="border-t px-4 py-2.5"
      style={{
        background: "var(--color-card)",
        borderColor: "var(--color-border-strong)",
        boxShadow: "0 -8px 18px -10px rgba(0,0,0,0.25)",
      }}
    >
      <div className="flex items-baseline justify-between gap-3">
        <div
          className="truncate text-[13px] font-bold tracking-wide text-foreground"
          title={`${FLIGHT.arrIata}(${FLIGHT.arrTimezone})`}
        >
          {FLIGHT.arrIata}
          <span className="text-muted-foreground/80">({FLIGHT.arrTimezone})</span>
        </div>
        <div
          suppressHydrationWarning
          className="tabular text-[18px] font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          {timeStr}
        </div>
      </div>
      <div className="mt-0.5 flex items-baseline justify-between gap-3 text-[10.5px] text-muted-foreground">
        <span>Local time at destination</span>
        <span className="tabular">{dateStr}</span>
      </div>
    </div>
  );
}
