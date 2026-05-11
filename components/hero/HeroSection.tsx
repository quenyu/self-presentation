import { HeroVisual } from "@/components/hero/HeroVisual";
import { navItems } from "@/lib/data";

const heroChips = ["Go backend", "PostgreSQL", "Docker", "REST API", "Visual web"] as const;

const signalStats = [
  { label: "runtime", value: "Go" },
  { label: "data", value: "PostgreSQL" },
  { label: "delivery", value: "Docker" },
] as const;

export function HeroSection() {
  return (
    <section id="identity" className="px-3 pb-12 pt-3 sm:px-4 lg:pb-16">
      <div className="relative mx-auto min-h-[86svh] max-w-[1500px] overflow-hidden rounded-[28px] border border-white/10 bg-[#07080a] shadow-panel-glow">
        <div className="absolute inset-0">
          <div className="thin-grid absolute inset-0 opacity-[0.18]" />
          <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_30%_0%,rgba(102,231,255,0.14),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(255,49,49,0.12),transparent_34%)]" />
          <div className="halftone-panel absolute bottom-0 left-0 h-48 w-full opacity-25" />
        </div>

        <header className="relative z-20 flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#identity"
            className="font-mono text-sm text-white outline-none transition hover:text-cyan focus-visible:rounded focus-visible:ring-2 focus-visible:ring-cyan/70"
          >
            quenyu
          </a>
          <nav className="hidden items-center gap-6 font-mono text-xs text-zinc-400 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="outline-none transition hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-cyan/70"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 font-mono text-xs text-white outline-none transition hover:border-signal/50 hover:bg-signal/10 focus-visible:ring-2 focus-visible:ring-signal/70"
          >
            <span className="h-2 w-2 rounded-full bg-signal shadow-red-glow" />
            Hire signal
          </a>
        </header>

        <div className="relative z-10 grid gap-6 p-4 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-8 xl:p-10">
          <div className="flex flex-col justify-center py-5 lg:min-h-[650px] lg:py-0">
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 font-mono text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-cyan shadow-cyan-glow" />
              backend / automation / visual web
            </div>

            <h1 className="max-w-[760px] text-balance text-5xl font-semibold leading-[0.94] text-white sm:text-6xl xl:text-7xl">
              Golang backend developer with a cinematic JS interface
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg">
              Самопрезентация как интерактивный control plane: Go отвечает за backend-логику,
              JavaScript — за 3D-сцену, motion и запоминающийся web-интерфейс.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 font-mono text-sm text-black outline-none transition hover:bg-cyan focus-visible:ring-2 focus-visible:ring-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080a]"
              >
                See projects -&gt;
              </a>
              <a
                href="#stack"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-5 font-mono text-sm text-white outline-none transition hover:border-cyan/60 hover:bg-cyan/10 focus-visible:ring-2 focus-visible:ring-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080a]"
              >
                View stack
              </a>
            </div>

            <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-xs text-zinc-300"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {signalStats.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
                  <div className="font-mono text-[11px] uppercase text-zinc-500">{item.label}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
