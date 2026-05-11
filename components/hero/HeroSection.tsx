import { AsciiSignalVisual } from "@/components/hero/AsciiSignalVisual";
import { navItems } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="identity" className="px-3 pb-5 pt-3 sm:px-4">
      <div className="relative mx-auto min-h-[90svh] max-w-[1720px] overflow-hidden rounded-[30px] border border-white/10 bg-[#020203] shadow-panel-glow">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_52%,rgba(255,255,255,0.08),transparent_34%),radial-gradient(ellipse_at_20%_95%,rgba(255,49,49,0.08),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.035] to-transparent" />
        <AsciiSignalVisual />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full bg-gradient-to-r from-black via-black/90 to-transparent md:w-[72%]" />

        <header className="relative z-20 flex items-center justify-between gap-4 px-4 py-4 sm:px-7 lg:px-9">
          <a
            href="#identity"
            className="font-mono text-sm text-white outline-none transition hover:text-white/70 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white/70"
          >
            quenyu
          </a>
          <nav className="hidden items-center gap-7 font-mono text-xs text-white/[0.42] md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="outline-none transition hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-white/[0.14] bg-white/[0.035] px-3 py-2 font-mono text-xs text-white outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-signal shadow-red-glow" />
            Hire signal
          </a>
        </header>

        <div className="relative z-10 flex min-h-[calc(90svh-76px)] items-end px-4 pb-9 pt-28 sm:px-7 sm:pb-12 lg:px-10 lg:pb-14">
          <div className="max-w-[880px]">
            <div className="mb-6 font-mono text-xs uppercase text-white/[0.42]">backend / automation / visual web</div>
            <h1 className="max-w-[900px] text-balance text-5xl font-semibold leading-[0.9] text-white sm:text-7xl lg:text-[92px] xl:text-[106px]">
              Golang backend developer with a cinematic JS interface
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-white/[0.58] sm:text-lg">
              Go, PostgreSQL, Docker, automation and visual web interfaces for backend systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#systems"
                className="inline-flex h-12 items-center justify-center bg-white px-5 font-mono text-sm text-black outline-none transition hover:bg-white/[0.82] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                See projects -&gt;
              </a>
              <a
                href="#systems"
                className="inline-flex h-12 items-center justify-center border border-white/[0.14] bg-white/[0.03] px-5 font-mono text-sm text-white outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                View stack
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 right-6 z-10 hidden font-mono text-[11px] text-white/[0.34] md:block">
          Go + PostgreSQL / Docker delivery / JS interface
        </div>
      </div>
    </section>
  );
}
