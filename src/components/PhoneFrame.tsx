import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Premium iPhone-style frame with a status bar and a viewport that
 * auto-scrolls its child content when in view, simulating a user
 * thumb-scrolling through the app.
 */
export function PhoneFrame({
  children,
  caption,
  bottomBar,
}: {
  children: ReactNode;
  caption?: string;
  bottomBar?: ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [now, setNow] = useState("--:--");
  const [active, setActive] = useState(false);

  // live clock
  useEffect(() => {
    const update = () =>
      setNow(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  // start auto-scroll once visible
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(true)),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = 0;
    let paused = false;
    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    const tick = (t: number) => {
      if (!started) started = t;
      const max = el.scrollHeight - el.clientHeight;
      if (max > 0 && !paused) {
        const cycle = 12_000; // 12s down, 3s pause, 2s back
        const elapsed = (t - started) % (cycle + 5_000);
        if (elapsed < cycle) {
          const p = elapsed / cycle;
          const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          el.scrollTop = eased * max;
        } else if (elapsed < cycle + 3_000) {
          el.scrollTop = max;
        } else {
          const p = (elapsed - cycle - 3_000) / 2_000;
          el.scrollTop = max * (1 - p);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [active]);

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      {/* Glow */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[80px] opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 24%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden
      />

      {/* Phone bezel */}
      <div
        className="relative rounded-[44px] p-[10px] shadow-2xl"
        style={{
          background:
            "linear-gradient(160deg, color-mix(in oklab, var(--foreground) 22%, var(--card)), color-mix(in oklab, var(--foreground) 8%, var(--card)))",
          boxShadow:
            "0 30px 80px -20px color-mix(in oklab, var(--accent) 25%, transparent), 0 0 0 1px color-mix(in oklab, var(--foreground) 18%, transparent) inset",
        }}
      >
        {/* Side buttons */}
        <span
          aria-hidden
          className="absolute left-[-2px] top-[110px] h-12 w-[3px] rounded-l"
          style={{ background: "color-mix(in oklab, var(--foreground) 30%, var(--card))" }}
        />
        <span
          aria-hidden
          className="absolute right-[-2px] top-[140px] h-20 w-[3px] rounded-r"
          style={{ background: "color-mix(in oklab, var(--foreground) 30%, var(--card))" }}
        />

        {/* Screen */}
        <div
          className="relative overflow-hidden rounded-[36px]"
          style={{
            background: "var(--background)",
            height: 620,
          }}
        >
          {/* Status bar */}
          <div className="relative z-20 flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-semibold text-foreground">
            <span className="tabular">{now}</span>
            <div
              aria-hidden
              className="absolute left-1/2 top-2 h-[26px] w-[96px] -translate-x-1/2 rounded-full"
              style={{ background: "color-mix(in oklab, var(--foreground) 88%, var(--card))" }}
            />
            <span className="flex items-center gap-1">
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </span>
          </div>

          {/* Top fade */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[34px] z-10 h-5"
            style={{
              background:
                "linear-gradient(to bottom, var(--background), transparent)",
            }}
            aria-hidden
          />

          {/* Scroll viewport */}
          <div
            ref={scrollRef}
            className="phone-scroll relative overflow-y-auto px-3 pb-6 pt-2"
            style={{ height: `calc(100% - 34px - ${bottomBar ? 78 : 22}px)` }}
          >
            {children}
          </div>

          {/* Bottom destination clock (sticky-style) or home-indicator only */}
          {bottomBar ? (
            <div className="absolute bottom-0 left-0 right-0 z-20">
              {bottomBar}
              <div
                aria-hidden
                className="mx-auto my-1.5 h-[4px] w-[100px] rounded-full"
                style={{
                  background: "color-mix(in oklab, var(--foreground) 40%, transparent)",
                }}
              />
            </div>
          ) : (
            <div
              aria-hidden
              className="absolute bottom-2 left-1/2 z-20 h-[5px] w-[110px] -translate-x-1/2 rounded-full"
              style={{
                background: "color-mix(in oklab, var(--foreground) 40%, transparent)",
              }}
            />
          )}

          {/* Thumb cue */}
          {active && <ThumbCue />}
        </div>
      </div>

      {caption && (
        <div className="mt-5 text-center text-[12px] text-muted-foreground">
          {caption}
        </div>
      )}
    </div>
  );
}

function ThumbCue() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-10 right-6 z-20"
      style={{ animation: "thumb-cue 4.5s ease-in-out infinite" }}
    >
      <div
        className="h-10 w-10 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 55%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="14" height="9" viewBox="0 0 14 9" fill="currentColor">
      <rect x="0" y="6" width="2" height="3" rx="0.5" />
      <rect x="4" y="4" width="2" height="5" rx="0.5" />
      <rect x="8" y="2" width="2" height="7" rx="0.5" />
      <rect x="12" y="0" width="2" height="9" rx="0.5" />
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M1 3a9 9 0 0111 0" />
      <path d="M3 5a6 6 0 017 0" />
      <circle cx="6.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function BatteryIcon() {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
      <rect x="0.5" y="0.5" width="18" height="9" rx="2.5" stroke="currentColor" opacity="0.5" />
      <rect x="2" y="2" width="14" height="6" rx="1.2" fill="currentColor" />
      <rect x="20" y="3" width="1.5" height="4" rx="0.6" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
