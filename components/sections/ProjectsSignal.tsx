import { Reveal } from "@/components/ui/Reveal";
import { StatusDot } from "@/components/ui/StatusDot";
import { projects } from "@/lib/data";

const projectMeta = [
  { command: "analytics.scan", status: "modeling", tone: "cyan" },
  { command: "events.route", status: "async", tone: "red" },
  { command: "review.context", status: "automation", tone: "white" },
  { command: "learning.flow", status: "interface", tone: "cyan" },
] as const;

export function ProjectsSignal() {
  return (
    <section id="projects" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <div className="font-mono text-xs uppercase text-cyan/80">Projects / Signal</div>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.98] text-white sm:text-5xl">
              Practical systems, not a decorative portfolio grid.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-zinc-400 md:justify-self-end">
            Четыре проекта показывают разные стороны работы: аналитика, async backend,
            AI automation и интерфейсные системы с понятной логикой.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => {
            const meta = projectMeta[index];

            return (
              <Reveal key={project.name} delay={index * 0.05}>
                <article className="group relative min-h-[272px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/45 hover:bg-white/[0.055] hover:shadow-cyan-glow sm:p-6">
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="thin-grid absolute inset-0 opacity-15" />
                  </div>
                  <div className="absolute right-5 top-5 font-mono text-sm text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-7 flex flex-wrap items-center gap-3 pr-10">
                      <div className="flex items-center gap-2 font-mono text-xs text-cyan/85">
                        <StatusDot tone={meta.tone} />
                        {meta.command}
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 font-mono text-[11px] text-zinc-500">
                        {meta.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.name}</h3>
                    <p className="mt-4 min-h-[66px] text-pretty text-sm leading-6 text-zinc-400 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/25 px-3 py-1 font-mono text-xs text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                      <div className="mb-2 font-mono text-xs text-zinc-500">developer.signal</div>
                      <p className="text-sm leading-6 text-zinc-300">{project.signal}</p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-cyan opacity-0 transition group-hover:opacity-70" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
