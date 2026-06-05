import logo from "@/assets/logo.png";

export function SandpiperMark({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={logo}
      alt="Sandpiper"
      width={size}
      height={size}
      className={`rounded-[6px] ${className}`}
      style={{ display: "inline-block" }}
    />
  );
}
