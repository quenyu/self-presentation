import { Reveal } from "@/components/ui/Reveal";
import { contactLinks } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="px-3 pb-4 pt-5 sm:px-4">
      <Reveal className="billboard-shell mx-auto max-w-[1720px] overflow-hidden rounded-[28px] border border-white/10 bg-[#050706] p-4 sm:p-5 lg:p-6">
        <div className="billboard-canvas relative min-h-[60svh] overflow-hidden rounded-[20px] p-5 sm:p-8 lg:p-10">
          <div className="luminous-fall right-[16%] opacity-65" />
          <div className="foliage-blob bottom-[8%] right-[8%] h-56 w-96 opacity-45" />
          <div className="absolute inset-0 bg-black/44" />
          <div className="absolute -right-10 bottom-3 select-none text-[110px] font-semibold uppercase leading-none tracking-[-0.09em] text-white/[0.055] sm:text-[170px] lg:text-[260px]">
            SIGNAL
          </div>

          <div className="relative z-10 flex min-h-[calc(60svh-80px)] flex-col justify-between gap-10">
            <div className="flex items-center justify-between gap-4 text-xs text-white/50">
              <span className="font-mono uppercase tracking-[0.18em] text-[#dfff9d]/70">final handshake</span>
              <span className="hidden sm:inline">backend runtime available</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_470px] lg:items-end">
              <div>
                <h2 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-7xl lg:text-[96px]">
                  Open to backend tasks
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
                  API, parsers, Telegram bots, automation, PostgreSQL, Docker and clean web interfaces.
                </p>
              </div>

              <div className="lightbox-panel rounded-3xl p-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between gap-5 rounded-2xl px-4 py-4 text-sm text-white/58 outline-none transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <span>{link.label}</span>
                    <span className="text-right font-semibold text-white">{link.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="soft-grain" />
          <div className="scanline-overlay opacity-30" />
        </div>
      </Reveal>
    </section>
  );
}
