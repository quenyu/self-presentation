import { Reveal } from "@/components/ui/Reveal";
import { StatusDot } from "@/components/ui/StatusDot";
import { stackItems, stackMetrics } from "@/lib/data";

const accentBarClass = {
  red: "bg-signal",
  cyan: "bg-cyan",
  white: "bg-white",
};

const accentTextClass = {
  red: "text-signal",
  cyan: "text-cyan",
  white: "text-white",
};

export function StackOverview() {
  return (
    <section id="stack" className="px-4 py-16 sm:py-20">
      <Reveal className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div className="lg:sticky lg:top-6">
          <div className="font-mono text-xs uppercase text-cyan/80">Stack / Resource Overview</div>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[0.98] text-white sm:text-5xl">
            Backend core, delivery pipeline and visual interface layer.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            Стек собран вокруг практичных задач: API, хранение данных, контейнеризация,
            автоматизация и интерфейсы, которые показывают результат без лишнего шума.
          </p>

          <div className="mt-6 grid max-w-xl grid-cols-2 gap-3">
            {stackMetrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <StatusDot tone={metric.tone} />
                  <span className="font-mono text-[11px] uppercase text-zinc-500">backend signal</span>
                </div>
                <div className="text-lg font-semibold text-white">{metric.label}</div>
                <div className={`mt-1 font-mono text-xs ${accentTextClass[metric.tone]}`}>{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-panel/85 shadow-panel-glow backdrop-blur">
          <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.035] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-mono text-xs text-zinc-500">/stack/runtime</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">Resource overview</h3>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 font-mono text-xs text-zinc-300">
              <StatusDot tone="red" />
              latency budget: controlled
            </div>
          </div>

          <div className="grid gap-3 p-4 sm:p-5">
            {stackItems.map((item) => (
              <div
                key={item.name}
                className="grid gap-3 rounded-xl border border-white/10 bg-black/24 p-4 transition hover:border-cyan/35 hover:bg-white/[0.045] md:grid-cols-[160px_1fr_56px] md:items-center"
              >
                <div>
                  <div className="text-lg font-semibold text-white">{item.name}</div>
                  <div className="font-mono text-xs text-zinc-500">{item.role}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase text-zinc-500">
                    <span>{item.status}</span>
                    <span>{item.level}/100</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${accentBarClass[item.accent]} shadow-cyan-glow`}
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
                <div className="font-mono text-sm text-white md:text-right">{item.level}</div>
              </div>
            ))}
          </div>

          <div className="grid border-t border-white/10 sm:grid-cols-3">
            {["service map", "workers", "deploy path"].map((label, index) => (
              <div key={label} className="border-white/10 p-4 font-mono text-xs text-zinc-500 sm:border-r sm:last:border-r-0">
                <div className="mb-2 flex items-center gap-2 text-white">
                  <StatusDot tone={index === 1 ? "red" : "cyan"} />
                  {label}
                </div>
                <div>{index === 0 ? "Go -> DB -> UI" : index === 1 ? "jobs / retries" : "Docker / edge"}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
