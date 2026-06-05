import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Coffee, Tablets, BedSingle, type LucideIcon } from "lucide-react";

/**
 * Premium animated globe focused on Sandpiper's core benefit:
 * adjusting the body clock across time zones.
 *
 * - Slowly rotating globe (grid + halo)
 * - Day/night terminator with sun/moon cues
 * - Live ticking SFO + HND clocks at each endpoint
 * - Plane traces the great-circle route
 * - As the plane travels, recommended actions (Coffee, Avoid light,
 *   Melatonin, Sleep, Seek light) pop in and out — the actions
 *   Sandpiper coaches you through to arrive refreshed.
 * - Body-clock bar smoothly shifts SFO → HND time
 */
export function Globe() {
  const planeRef = useRef<SVGGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const dashRef = useRef<SVGPathElement | null>(null);

  const [now, setNow] = useState<Date>(() => new Date());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const dash = dashRef.current;
    const plane = planeRef.current;
    if (!path || !plane || !dash) return;

    const length = path.getTotalLength();
    dash.style.strokeDasharray = `${length}`;
    dash.style.strokeDashoffset = `${length}`;
    dash.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      { duration: 3200, easing: "cubic-bezier(.65,.05,.36,1)", fill: "forwards" },
    );

    let frame = 0;
    let raf = 0;
    const total = 60 * 12; // ~12s loop — gives cues time to read
    const tick = () => {
      frame = (frame + 1) % total;
      const t = frame / total;
      setProgress(t);
      const p = path.getPointAtLength(t * length);
      const p2 = path.getPointAtLength(Math.min(length, (t + 0.001) * length));
      const angle = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
      plane.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${angle})`);
      
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ── Time helpers ────────────────────────────────────────────────────
  const fmt = (tz: string) =>
    new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(now);

  const hourIn = (tz: string) => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(now);
    const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
    const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
    return h + m / 60;
  };

  const sfoTime = fmt("America/Los_Angeles");
  const hndTime = fmt("Asia/Tokyo");
  const sfoHour = hourIn("America/Los_Angeles");
  const hndHour = hourIn("Asia/Tokyo");

  const shortestLerp = (a: number, b: number, t: number) => {
    let diff = b - a;
    if (diff > 12) diff -= 24;
    if (diff < -12) diff += 24;
    let v = a + diff * t;
    v = ((v % 24) + 24) % 24;
    return v;
  };
  const bodyHour = shortestLerp(sfoHour, hndHour, progress);
  const bodyTimeLabel = (() => {
    const h24 = Math.floor(bodyHour);
    const m = Math.floor((bodyHour - h24) * 60);
    const ampm = h24 >= 12 ? "PM" : "AM";
    const h12 = ((h24 + 11) % 12) + 1;
    return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
  })();

  const isDay = (h: number) => h >= 6 && h < 18;

  // ── Action cues popping in along the journey ───────────────────────
  type Cue = { at: number; label: string; Icon: LucideIcon; color: string };
  const cues: Cue[] = [
    { at: 0.08, label: "Last coffee", Icon: Coffee, color: "var(--color-cat-caffeine)" },
    { at: 0.28, label: "Dim lights", Icon: Moon, color: "var(--color-cat-avoid-light)" },
    { at: 0.48, label: "Melatonin", Icon: Tablets, color: "var(--color-cat-melatonin)" },
    { at: 0.66, label: "Sleep", Icon: BedSingle, color: "var(--color-cat-sleep)" },
    { at: 0.88, label: "Seek light", Icon: Sun, color: "var(--color-cat-seek-light)" },
  ];

  // SVG → percentage so we can position absolute HTML badges over the SVG
  // viewBox is 400 × 440
  const VBW = 400;
  const VBH = 440;

  // Visibility window for each cue (smooth in/out)
  const visibility = (at: number) => {
    const window = 0.10;
    const d = Math.abs(progress - at);
    if (d > window) return 0;
    // ease (1 at center, 0 at edges)
    const v = 1 - d / window;
    return v * v * (3 - 2 * v);
  };

  return (
    <div className="relative h-full w-full">
      <svg viewBox={`0 0 ${VBW} ${VBH}`} className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="globeFill" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="color-mix(in oklab, var(--accent) 22%, transparent)" />
            <stop offset="55%" stopColor="color-mix(in oklab, var(--color-cat-flight) 14%, transparent)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-cat-flight)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
          <linearGradient id="dayNight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="color-mix(in oklab, var(--accent) 18%, transparent)" />
            <stop offset="50%" stopColor="color-mix(in oklab, var(--accent) 6%, transparent)" />
            <stop offset="50%" stopColor="color-mix(in oklab, var(--color-cat-sleep) 18%, transparent)" />
            <stop offset="100%" stopColor="color-mix(in oklab, var(--color-cat-avoid-light) 22%, transparent)" />
          </linearGradient>
          <clipPath id="globeClip">
            <circle cx="200" cy="200" r="150" />
          </clipPath>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Outer halo */}
        <circle cx="200" cy="200" r="170" fill="url(#globeFill)" />
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="color-mix(in oklab, var(--foreground) 10%, transparent)"
          strokeWidth="0.8"
        />

        {/* Day/night terminator (clipped to globe) */}
        <g clipPath="url(#globeClip)" opacity="0.85">
          <rect x="50" y="50" width="300" height="300" fill="url(#dayNight)" />
          <ellipse
            cx="210"
            cy="200"
            rx="6"
            ry="150"
            fill="color-mix(in oklab, var(--foreground) 12%, transparent)"
            filter="url(#soft)"
          />
        </g>

        {/* Sun + moon orbit the globe — Earth's true rotation
            Earth spins west→east, so from a fixed observer the Sun appears
            to travel east→west (right→left). Moon trails the Sun on the
            opposite side of the planet. */}
        <g style={{ transformOrigin: "200px 200px", animation: "spin-slow 40s linear infinite reverse" }}>
          {/* Sun — day side */}
          <g transform="translate(200 30)" opacity="0.95">
            <circle r="14" fill="var(--accent)" opacity="0.22" filter="url(#soft)" />
            <circle r="7" fill="var(--accent)" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => {
              const r = (d * Math.PI) / 180;
              return (
                <line
                  key={d}
                  x1={Math.cos(r) * 10}
                  y1={Math.sin(r) * 10}
                  x2={Math.cos(r) * 15}
                  y2={Math.sin(r) * 15}
                  stroke="var(--accent)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              );
            })}
          </g>
          {/* Moon — night side, opposite the sun */}
          <g transform="translate(200 370)" opacity="0.9">
            <circle r="10" fill="color-mix(in oklab, var(--color-cat-avoid-light) 30%, transparent)" filter="url(#soft)" />
            <circle r="6.5" fill="color-mix(in oklab, var(--color-cat-avoid-light) 80%, var(--foreground))" />
            <circle r="6.5" cx="2.6" cy="-1.8" fill="color-mix(in oklab, var(--background) 92%, transparent)" />
          </g>
        </g>

        {/* Rotating grid (lat + lng lines) — gives the globe motion */}
        <g
          clipPath="url(#globeClip)"
          style={{ transformOrigin: "200px 200px", animation: "spin-slow 80s linear infinite" }}
        >
          {[-60, -30, 0, 30, 60].map((lat) => {
            const r = 150;
            const ry = Math.cos((lat * Math.PI) / 180) * r;
            const cy = 200 + Math.sin((lat * Math.PI) / 180) * r;
            return (
              <ellipse
                key={`lat-${lat}`}
                cx="200"
                cy={cy}
                rx={Math.abs(ry)}
                ry={Math.abs(ry) * 0.18}
                fill="none"
                stroke="color-mix(in oklab, var(--foreground) 8%, transparent)"
                strokeWidth="0.6"
              />
            );
          })}
          {[-75, -45, -15, 15, 45, 75].map((lng) => (
            <ellipse
              key={`lng-${lng}`}
              cx="200"
              cy="200"
              rx={Math.abs(Math.sin((lng * Math.PI) / 180)) * 150 || 0.5}
              ry="150"
              fill="none"
              stroke="color-mix(in oklab, var(--foreground) 8%, transparent)"
              strokeWidth="0.6"
            />
          ))}
        </g>

        {/* Great-circle arc */}
        <path
          ref={pathRef}
          d="M 92 232 Q 200 60 322 178"
          fill="none"
          stroke="color-mix(in oklab, var(--foreground) 12%, transparent)"
          strokeWidth="1"
        />
        <path
          ref={dashRef}
          d="M 92 232 Q 200 60 322 178"
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* SFO endpoint + clock */}
        <g>
          <circle cx="92" cy="232" r="9" fill="var(--accent)" opacity="0.18" filter="url(#soft)" />
          <circle cx="92" cy="232" r="3.4" fill="var(--accent)" />
          <g transform="translate(8 248)">
            <rect
              width="132"
              height="42"
              rx="9"
              fill="color-mix(in oklab, var(--card) 92%, transparent)"
              stroke="color-mix(in oklab, var(--foreground) 12%, transparent)"
              strokeWidth="0.8"
            />
            <text x="10" y="16" fontSize="9" letterSpacing="1.2" fill="var(--muted-foreground)" className="font-sans">
              SFO · SAN FRANCISCO
            </text>
            <text
              x="10"
              y="33"
              fontSize="14"
              fontWeight="600"
              fill="var(--foreground)"
              className="tabular font-sans"
              suppressHydrationWarning
            >
              {sfoTime}
            </text>
            <circle cx="120" cy="28" r="4" fill={isDay(sfoHour) ? "var(--accent)" : "var(--color-cat-avoid-light)"} />
          </g>
        </g>

        {/* HND endpoint + clock */}
        <g>
          <circle cx="322" cy="178" r="9" fill="var(--color-cat-flight)" opacity="0.22" filter="url(#soft)" />
          <circle cx="322" cy="178" r="3.4" fill="var(--color-cat-flight)" />
          <g transform="translate(260 122)">
            <rect
              width="132"
              height="42"
              rx="9"
              fill="color-mix(in oklab, var(--card) 92%, transparent)"
              stroke="color-mix(in oklab, var(--foreground) 12%, transparent)"
              strokeWidth="0.8"
            />
            <text x="10" y="16" fontSize="9" letterSpacing="1.2" fill="var(--muted-foreground)" className="font-sans">
              HND · TOKYO
            </text>
            <text
              x="10"
              y="33"
              fontSize="14"
              fontWeight="600"
              fill="var(--foreground)"
              className="tabular font-sans"
              suppressHydrationWarning
            >
              {hndTime}
            </text>
            <circle cx="120" cy="28" r="4" fill={isDay(hndHour) ? "var(--accent)" : "var(--color-cat-avoid-light)"} />
          </g>
        </g>

        {/* Plane */}
        <g ref={planeRef}>
          <circle r="11" fill="var(--accent)" opacity="0.22" filter="url(#soft)" />
          <path d="M -7 0 L 7 -2.4 L 7 2.4 Z" fill="var(--accent)" />
        </g>

        {/* outer rotating ring */}
        <g style={{ transformOrigin: "200px 200px", animation: "spin-slow 60s linear infinite" }}>
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="color-mix(in oklab, var(--accent) 18%, transparent)"
            strokeWidth="0.6"
            strokeDasharray="2 6"
          />
        </g>

        {/* Body-clock adjustment bar */}
        <g transform="translate(40 380)">
          <text x="0" y="0" fontSize="10" letterSpacing="1.4" fill="var(--muted-foreground)" className="font-sans">
            YOUR BODY CLOCK
          </text>
          <text
            x="320"
            y="0"
            fontSize="10"
            letterSpacing="1.2"
            fill="var(--accent)"
            textAnchor="end"
            className="font-sans"
            suppressHydrationWarning
          >
            {bodyTimeLabel}
          </text>
          <rect x="0" y="10" width="320" height="6" rx="3" fill="color-mix(in oklab, var(--foreground) 8%, transparent)" />
          <rect x="40" y="10" width="200" height="6" rx="3" fill="color-mix(in oklab, var(--accent) 22%, transparent)" />
          <rect x="0" y="10" width={Math.max(2, progress * 320)} height="6" rx="3" fill="url(#arcGrad)" />
          <g transform={`translate(${Math.max(2, progress * 320)} 13)`}>
            <circle r="6" fill="var(--background)" stroke="var(--accent)" strokeWidth="2" />
          </g>
          <text x="0" y="34" fontSize="9" letterSpacing="1" fill="var(--muted-foreground)" className="font-sans">
            SFO
          </text>
          <text x="320" y="34" fontSize="9" letterSpacing="1" fill="var(--muted-foreground)" textAnchor="end" className="font-sans">
            HND  ·  +17h
          </text>
        </g>
      </svg>

      {/* ── Action cues — pop in/out as the plane reaches each phase ── */}
      {cues.map((cue, i) => {
        const v = visibility(cue.at);
        if (v <= 0.001) return null;
        // anchor near the plane's current arc point at time `cue.at`
        // we approximate by sampling the same Bezier formula as the SVG path
        // path: M 92 232 Q 200 60 322 178 — quadratic Bezier
        const t = cue.at;
        const x =
          (1 - t) * (1 - t) * 92 + 2 * (1 - t) * t * 200 + t * t * 322;
        const y =
          (1 - t) * (1 - t) * 232 + 2 * (1 - t) * t * 60 + t * t * 178;
        // offset above the arc so the badge doesn't sit on top of the plane
        const left = (x / VBW) * 100;
        const top = ((y - 36) / VBH) * 100;
        const Icon = cue.Icon;
        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              opacity: v,
              transform: `translate(-50%, -50%) scale(${0.85 + v * 0.2})`,
              transition: "opacity 120ms linear",
            }}
          >
            <div
              className="flex items-center gap-2 rounded-full border-2 bg-card px-3.5 py-2 shadow-lg backdrop-blur"
              style={{
                borderColor: `color-mix(in oklab, ${cue.color} 55%, transparent)`,
                boxShadow: `0 14px 40px -8px ${cue.color}80, 0 0 0 4px ${cue.color}15`,
              }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ background: `color-mix(in oklab, ${cue.color} 22%, transparent)`, color: cue.color }}
              >
                <Icon size={18} strokeWidth={2.4} />
              </span>
              <span className="text-[13px] font-bold tracking-tight text-foreground whitespace-nowrap">
                {cue.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
