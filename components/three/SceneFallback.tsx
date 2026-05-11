export function SceneFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050608]">
      <div className="thin-grid absolute inset-0 opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-72 w-32 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-cyan/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 grid h-64 w-36 -translate-x-1/2 -translate-y-1/2 content-center gap-2">
        {Array.from({ length: 11 }).map((_, index) => (
          <div
            key={index}
            className="mx-auto h-2 rounded-sm border border-cyan/25 bg-white/[0.045]"
            style={{ width: `${58 + (index % 4) * 10}%` }}
          />
        ))}
      </div>
      <div className="absolute left-[18%] top-[30%] h-px w-28 bg-cyan/25" />
      <div className="absolute right-[18%] top-[42%] h-px w-24 bg-white/20" />
      <div className="absolute bottom-[28%] left-[24%] h-px w-20 bg-signal/25" />
      <div className="scanline-overlay" />
      <div className="noise-overlay" />
    </div>
  );
}
