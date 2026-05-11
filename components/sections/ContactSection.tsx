import { Reveal } from "@/components/ui/Reveal";
import { StatusDot } from "@/components/ui/StatusDot";
import { contactLinks } from "@/lib/data";

const tasks = ["API", "parsers", "Telegram bots", "PostgreSQL", "Docker", "web UI"] as const;

export function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-5 pt-14 sm:pt-16">
      <Reveal className="mx-auto max-w-[1500px] overflow-hidden rounded-[28px] border border-white/10 bg-[#07080a] p-4 shadow-panel-glow sm:p-6 lg:p-8">
        <div className="relative grid gap-8 overflow-hidden rounded-[24px] border border-white/10 bg-panel/85 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="thin-grid absolute inset-0 opacity-15" />
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_22%_0%,rgba(102,231,255,0.12),transparent_35%),radial-gradient(circle_at_84%_10%,rgba(255,49,49,0.12),transparent_32%)]" />
          <div className="halftone-panel absolute bottom-0 left-0 h-36 w-full opacity-20" />

          <div className="relative z-10">
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 font-mono text-xs uppercase text-cyan/80">
              <StatusDot tone="red" />
              Final Handshake
            </div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] text-white sm:text-5xl md:text-6xl">
              Open to backend tasks
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg">
              API, парсеры, Telegram-боты, автоматизация, PostgreSQL, Docker и аккуратные
              web-интерфейсы для демонстрации результата.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tasks.map((task) => (
                <span key={task} className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-xs text-zinc-300">
                  {task}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 self-end rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-sm shadow-panel-glow">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4 text-xs text-zinc-500">
              <span>contact.channels</span>
              <span className="text-signal">ready</span>
            </div>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-zinc-300 outline-none transition hover:border-cyan/45 hover:bg-white/[0.055] hover:text-white focus-visible:ring-2 focus-visible:ring-cyan/70"
                >
                  <span>{link.label}</span>
                  <span className="text-right text-white">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
