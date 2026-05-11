import { navItems } from "@/lib/data";

const statRows = [
  ["Runtime", "Go"],
  ["Data", "PostgreSQL"],
  ["Delivery", "Docker"],
] as const;

export function HeroSection() {
  return (
    <section id="identity" className="px-3 pb-5 pt-3 sm:px-4">
      <div className="billboard-shell relative mx-auto max-w-[1720px] overflow-hidden rounded-[28px] border border-white/10 bg-[#050706] p-4 sm:p-5 lg:p-6">
        <div className="billboard-canvas relative min-h-[88svh] overflow-hidden rounded-[20px]">
          <div className="luminous-fall" />
          <div className="foliage-blob right-[8%] top-[10%] h-48 w-56" />
          <div className="foliage-blob right-[28%] top-[22%] h-40 w-52 opacity-55" />
          <div className="foliage-blob bottom-[12%] right-[6%] h-40 w-72 opacity-50" />
          <div className="absolute inset-y-0 left-0 z-[1] w-full bg-gradient-to-r from-black/88 via-black/55 to-transparent md:w-[68%]" />
          <div className="absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-t from-black/72 to-transparent" />

          <header className="relative z-20 flex items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
            <a
              href="#identity"
              className="text-2xl font-semibold tracking-[-0.06em] text-white outline-none transition hover:text-white/75 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white/70"
            >
              quenyu
            </a>
            <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/28 px-3 py-2 text-sm text-white/58 backdrop-blur-md md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 outline-none transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black outline-none transition hover:bg-[#e8ffb4] focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Get started
            </a>
          </header>

          <div className="relative z-10 grid min-h-[calc(88svh-96px)] grid-rows-[1fr_auto] px-5 pb-7 sm:px-8 lg:px-10 lg:pb-10">
            <div className="flex items-center py-16 lg:py-0">
              <div className="max-w-[760px]">
                <div className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-[#dfff9d]/70">
                  backend / automation / visual web
                </div>
                <h1 className="text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-white sm:text-7xl lg:text-[96px] xl:text-[112px]">
                  Backend systems with a cinematic interface layer
                </h1>
                <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-white/68 sm:text-lg">
                  Go, PostgreSQL, Docker and automation — presented as a clean visual product, not a generic developer dashboard.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#systems"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black outline-none transition hover:bg-[#e8ffb4] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    See it in action →
                  </a>
                  <a
                    href="#systems"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-black/28 px-6 text-sm font-semibold text-white outline-none backdrop-blur-md transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    View stack
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3 lg:max-w-[620px]">
              {statRows.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/26 p-4 backdrop-blur-md">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/38">{label}</div>
                  <div className="mt-2 text-lg font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute right-[7%] top-[43%] z-[2] hidden -translate-y-1/2 text-right md:block">
            <div className="mb-2 text-[clamp(54px,7vw,118px)] font-semibold leading-none tracking-[-0.08em] text-white/92 drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
              runtime
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-white/52">secure backend signal</div>
          </div>

          <div className="pointer-events-none absolute bottom-9 right-10 z-[2] hidden max-w-[360px] text-sm leading-6 text-white/66 lg:block">
            An interface for APIs, parsers, queues and product-like demos — built with Go-minded structure and visual taste.
          </div>

          <div className="soft-grain" />
          <div className="scanline-overlay" />
        </div>
      </div>
    </section>
  );
}
