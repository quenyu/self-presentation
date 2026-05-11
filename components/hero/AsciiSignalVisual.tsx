type SignalBar = {
  key: string;
  top: number;
  left: number;
  width: number;
  opacity: number;
  tone: "bright" | "soft" | "ghost";
};

const ROW_COUNT = 66;

function silhouetteWidth(t: number) {
  if (t < 0.1) {
    return 9 + t * 138;
  }

  if (t < 0.24) {
    return 23 + Math.sin((t - 0.1) * 16) * 4;
  }

  if (t < 0.46) {
    return 34 + Math.sin((t - 0.24) * 10) * 11;
  }

  if (t < 0.68) {
    return 43 - (t - 0.46) * 42 + Math.sin(t * 18) * 3;
  }

  if (t < 0.79) {
    return 33 + Math.sin(t * 20) * 5;
  }

  return 21 - (t - 0.79) * 45;
}

function createSignalBars(): SignalBar[] {
  return Array.from({ length: ROW_COUNT }, (_, index) => {
    const t = index / (ROW_COUNT - 1);
    const top = 4 + t * 91;
    const center = 51 + Math.sin(index * 0.34) * 2.7;
    const width = Math.max(7, silhouetteWidth(t));
    const opacity = Math.min(0.98, 0.32 + Math.sin(t * Math.PI) * 0.58 + (index % 7 === 0 ? 0.16 : 0));
    const tone: SignalBar["tone"] = index % 9 === 0 ? "bright" : index % 4 === 0 ? "ghost" : "soft";

    if (t > 0.77) {
      const gap = 6 + (t - 0.77) * 58;
      const legWidth = Math.max(5.5, width * 0.44);

      return [
        {
          key: `${index}-left`,
          top,
          left: center - gap / 2 - legWidth,
          width: legWidth,
          opacity,
          tone,
        },
        {
          key: `${index}-right`,
          top,
          left: center + gap / 2,
          width: legWidth * (index % 3 === 0 ? 0.72 : 1),
          opacity: opacity * 0.86,
          tone: index % 5 === 0 ? "bright" : tone,
        },
      ];
    }

    return [
      {
        key: `${index}-main`,
        top,
        left: center - width / 2,
        width,
        opacity,
        tone,
      },
    ];
  }).flat();
}

const signalBars = createSignalBars();

const dataColumns = [
  "01 10 01 00 11",
  "api worker queue",
  "go pg docker",
  "signal runtime",
] as const;

const toneClass = {
  bright: "bg-white shadow-[0_0_24px_rgba(255,255,255,0.46)]",
  soft: "bg-white/[0.72] shadow-[0_0_14px_rgba(255,255,255,0.18)]",
  ghost: "bg-white/[0.38]",
};

export function AsciiSignalVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-16 right-0 z-0 w-full overflow-hidden md:inset-y-10 md:w-[62%]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_50%,rgba(255,255,255,0.12),transparent_36%),radial-gradient(ellipse_at_74%_68%,rgba(255,49,49,0.09),transparent_26%)]" />
      <div className="signal-billboard-grid absolute inset-0 opacity-[0.16]" />
      <div className="halftone-field absolute -right-16 top-12 h-80 w-80 opacity-45 md:h-[520px] md:w-[520px]" />
      <div className="halftone-field absolute bottom-4 left-6 h-44 w-72 opacity-20 md:left-0 md:h-72 md:w-[460px]" />

      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 select-none font-mono text-[92px] font-semibold uppercase leading-none text-white/[0.025] sm:block lg:text-[150px] xl:text-[184px]">
        RUNTIME
      </div>

      <div className="absolute left-[8%] top-[4%] hidden font-mono text-[11px] uppercase text-white/[0.32] lg:block">
        backend runtime / ascii signal
      </div>

      <div className="absolute inset-x-[10%] top-[8%] h-[82%] md:inset-x-[8%] lg:inset-x-[10%]">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
        <div className="absolute left-1/2 top-[8%] h-[78%] w-28 -translate-x-1/2 bg-white/10 blur-3xl" />

        {signalBars.map((bar, index) => (
          <span
            key={bar.key}
            className={`ascii-signal-bar ${toneClass[bar.tone]}`}
            style={{
              top: `${bar.top}%`,
              left: `${bar.left}%`,
              width: `${bar.width}%`,
              opacity: bar.opacity,
              animationDelay: `${index * -70}ms`,
            }}
          />
        ))}

        <span className="absolute left-[49%] top-[42%] h-[18%] w-[22%] bg-white/80 blur-[2px]" />
        <span className="absolute left-[50%] top-[38%] h-[28%] w-px bg-white/70 shadow-[0_0_40px_rgba(255,255,255,0.52)]" />
      </div>

      <div className="absolute bottom-8 left-[12%] hidden grid-cols-4 gap-4 font-mono text-[10px] text-white/[0.28] md:grid">
        {dataColumns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>

      <div className="absolute inset-5 hidden border border-white/[0.08] md:block">
        <span className="absolute -left-1.5 -top-1.5 h-2 w-2 bg-white" />
        <span className="absolute -right-1.5 -top-1.5 h-2 w-2 bg-white" />
        <span className="absolute -bottom-1.5 left-[36%] h-2 w-2 bg-signal shadow-red-glow" />
        <span className="absolute -bottom-1.5 -right-1.5 h-2 w-2 bg-white" />
      </div>

      <div className="scanline-overlay opacity-60" />
    </div>
  );
}
