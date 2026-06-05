import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/LanguageProvider";

function useCountUp(target: number, duration = 1400, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

export function Stats() {
  const { t } = useT();
  const stats = [
    { value: 92, suffix: "%", label: t("stats.s1") },
    { value: 37, suffix: "", label: t("stats.s2") },
    { value: 48, suffix: "h", label: t("stats.s3") },
  ];
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStart(true)),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="border-y border-border"
      style={{ background: "color-mix(in oklab, var(--foreground) 2%, transparent)" }}
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-3 px-7 py-16">
        {stats.map((s, i) => (
          <Stat key={i} {...s} start={start} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  start,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  delay: number;
}) {
  const [go, setGo] = useState(false);
  useEffect(() => {
    if (!start) return;
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [start, delay]);
  const v = useCountUp(value, 1400, go);
  const display = value === 0 ? "0" : Math.round(v).toString();
  return (
    <div className="text-center">
      <div className="font-serif text-[44px] leading-none tabular sm:text-[56px]">
        {display}
        <span style={{ color: "var(--accent)" }}>{suffix}</span>
      </div>
      <div className="mt-3 text-[12px] leading-snug text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
