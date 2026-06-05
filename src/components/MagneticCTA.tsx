import { useRef, type ReactNode } from "react";

/**
 * Subtle pointer-tracked glow + gentle magnetic pull. Wrap any button.
 */
export function MagneticCTA({
  href,
  children,
  className = "",
  variant = "amber",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "amber" | "outline";
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    const dx = (x / r.width - 0.5) * 6;
    const dy = (y / r.height - 0.5) * 6;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`magnetic ${variant === "amber" ? "btn-amber" : "btn-outline"} ${className}`}
    >
      {children}
    </a>
  );
}
