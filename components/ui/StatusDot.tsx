type StatusDotProps = {
  tone?: "red" | "cyan" | "white";
};

const toneClass = {
  red: "bg-signal shadow-red-glow",
  cyan: "bg-cyan shadow-cyan-glow",
  white: "bg-white",
};

export function StatusDot({ tone = "red" }: StatusDotProps) {
  return <span aria-hidden="true" className={`h-2 w-2 rounded-full ${toneClass[tone]}`} />;
}
