import { Reveal } from "@/components/ui/Reveal";
import { contactLinks } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="px-3 pb-4 pt-5 sm:px-4">
      <Reveal className="mx-auto max-w-[1720px] overflow-hidden rounded-[30px] border border-white/10 bg-[#020203] p-4 shadow-panel-glow sm:p-6 lg:p-8">
        <div className="relative min-h-[62svh] overflow-hidden rounded-[24px] bg-black p-5 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_24%_28%,rgba(255,255,255,0.09),transparent_30%),radial-gradient(ellipse_at_74%_76%,rgba(255,49,49,0.08),transparent_28%)]" />
          <div className="signal-billboard-grid absolute inset-0 opacity-[0.12]" />
          <div className="absolute -right-8 bottom-2 select-none text-[96px] font-semibold uppercase leading-none text-white/[0.035] sm:text-[150px] lg:text-[230px]">
            SIGNAL
          </div>
          <div className="halftone-field absolute bottom-0 right-0 h-80 w-[520px] opacity-25" />

          <div className="relative z-10 flex min-h-[calc(62svh-80px)] flex-col justify-between gap-10">
            <div className="flex items-center justify-between gap-4 font-mono text-xs text-white/40">
              <span>final handshake</span>
              <span className="hidden sm:inline">backend runtime available</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-end">
              <div>
                <h2 className="max-w-4xl text-5xl font-semibold leading-[0.9] text-white sm:text-7xl lg:text-[96px]">
                  Open to backend tasks
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/[0.56] sm:text-lg">
                  API, parsers, Telegram bots, automation, PostgreSQL, Docker and clean web interfaces.
                </p>
              </div>

              <div className="border border-white/[0.08] bg-black/50 p-3 backdrop-blur-sm">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between gap-5 border-b border-white/[0.08] px-3 py-4 font-mono text-sm text-white/[0.48] outline-none transition last:border-b-0 hover:text-white focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <span>{link.label}</span>
                    <span className="text-right text-white">{link.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="scanline-overlay opacity-30" />
        </div>
      </Reveal>
    </section>
  );
}
