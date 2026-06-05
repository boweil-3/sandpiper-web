import { useEffect, useState } from "react";

const cities: { code: string; name: string; tz: string }[] = [
  { code: "LHR", name: "London", tz: "Europe/London" },
  { code: "JFK", name: "New York", tz: "America/New_York" },
  { code: "NRT", name: "Tokyo", tz: "Asia/Tokyo" },
  { code: "SIN", name: "Singapore", tz: "Asia/Singapore" },
  { code: "DXB", name: "Dubai", tz: "Asia/Dubai" },
  { code: "SYD", name: "Sydney", tz: "Australia/Sydney" },
  { code: "CDG", name: "Paris", tz: "Europe/Paris" },
  { code: "HKG", name: "Hong Kong", tz: "Asia/Hong_Kong" },
  { code: "SFO", name: "San Francisco", tz: "America/Los_Angeles" },
  { code: "GRU", name: "São Paulo", tz: "America/Sao_Paulo" },
  { code: "ORD", name: "Chicago", tz: "America/Chicago" },
  { code: "FRA", name: "Frankfurt", tz: "Europe/Berlin" },
  { code: "ICN", name: "Seoul", tz: "Asia/Seoul" },
  { code: "BKK", name: "Bangkok", tz: "Asia/Bangkok" },
  { code: "MEX", name: "Mexico City", tz: "America/Mexico_City" },
  { code: "AMS", name: "Amsterdam", tz: "Europe/Amsterdam" },
  { code: "BOM", name: "Mumbai", tz: "Asia/Kolkata" },
];

function fmt(tz: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: tz,
    }).format(new Date());
  } catch {
    return "--:--";
  }
}

export function CityTicker() {
  const [mounted, setMounted] = useState(false);
  const [, setTick] = useState(0);
  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const items = [...cities, ...cities];

  return (
    <div
      className="relative overflow-hidden border-y"
      style={{
        borderColor: "color-mix(in oklab, var(--foreground) 8%, transparent)",
        background: "color-mix(in oklab, var(--foreground) 2%, transparent)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to right, var(--background), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to left, var(--background), transparent)",
        }}
      />
      <div className="flex gap-12 whitespace-nowrap py-4 will-change-transform" style={{ animation: "ticker 60s linear infinite" }}>
        {items.map((c, i) => (
          <div key={i} className="flex items-center gap-3 text-[12px]">
            <span
              className="label-caps"
              style={{ color: "color-mix(in oklab, var(--accent) 90%, var(--foreground))" }}
            >
              {c.code}
            </span>
            <span className="text-muted-foreground">{c.name}</span>
            <span className="tabular text-foreground/80">{mounted ? fmt(c.tz) : "--:--"}</span>
            <span aria-hidden className="text-muted-foreground/40">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
