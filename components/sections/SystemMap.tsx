import { Reveal } from "@/components/ui/Reveal";
import { projects, stackSignals } from "@/lib/data";
import type { ProjectItem } from "@/lib/data";

const projectPositions = [
  "lg:left-[6%] lg:top-[22%]",
  "lg:right-[8%] lg:top-[18%]",
  "lg:left-[18%] lg:bottom-[13%]",
  "lg:right-[18%] lg:bottom-[10%]",
] as const;

function ProjectModule({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <article
      className={`lightbox-panel relative z-10 rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[#e8ffb4]/40 lg:absolute lg:w-[340px] ${projectPositions[index]}`}
    >
      <div className="mb-5 flex items-center justify-between text-xs text-white/42">
        <span className="font-mono uppercase tracking-[0.16em] text-[#dfff9d]/80">module 0{index + 1}</span>
        <span className="h-2 w-2 rounded-full bg-[#e8ffb4] shadow-[0_0_22px_rgba(232,255,180,0.45)]" />
      </div>
      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-white/58">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/70">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-5 border-t border-white/10 pt-4 font-mono text-xs text-white/44">{project.signal}</div>
    </article>
  );
}

function CenterSignal() {
  return (
    <div className="lightbox-panel relative z-10 mx-auto max-w-[420px] rounded-3xl p-7 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
      <div className="mx-auto mb-5 mark-star scale-75" />
      <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#dfff9d]/70">backend signal</div>
      <h3 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white">Go runtime</h3>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {stackSignals.map((item) => (
          <span key={item} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ConnectionLines() {
  return (
    <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path d="M26 35 C38 38 42 44 50 50" stroke="rgba(232,255,180,0.38)" strokeWidth="0.18" fill="none" />
      <path d="M74 32 C63 39 58 45 50 50" stroke="rgba(255,255,255,0.28)" strokeWidth="0.18" fill="none" />
      <path d="M31 76 C41 66 45 58 50 50" stroke="rgba(255,255,255,0.22)" strokeWidth="0.18" fill="none" />
      <path d="M69 77 C60 66 55 58 50 50" stroke="rgba(232,255,180,0.3)" strokeWidth="0.18" fill="none" />
      <circle cx="50" cy="50" r="19" stroke="rgba(255,255,255,0.08)" strokeWidth="0.12" fill="none" />
    </svg>
  );
}

export function SystemMap() {
  return (
    <section id="systems" className="px-3 py-5 sm:px-4">
      <Reveal className="billboard-shell mx-auto max-w-[1720px] overflow-hidden rounded-[28px] border border-white/10 bg-[#050706] p-4 sm:p-5 lg:p-6">
        <div className="billboard-canvas relative min-h-[900px] overflow-hidden rounded-[20px] p-5 sm:p-8 lg:min-h-[820px] lg:p-10">
          <div className="luminous-fall right-[42%] opacity-55" />
          <div className="foliage-blob left-[22%] top-[18%] h-56 w-72 opacity-45" />
          <div className="foliage-blob bottom-[8%] right-[14%] h-52 w-80 opacity-40" />
          <div className="absolute inset-0 bg-black/28" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#dfff9d]/70">system map / projects</div>
              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-7xl lg:text-[88px]">
                Four systems around one backend signal.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/62 lg:justify-self-end">
              Projects are treated like product modules: analytics, delivery, automation and learning flow around the same backend-oriented stack.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid gap-4 lg:min-h-[590px] lg:block">
            <ConnectionLines />
            <CenterSignal />
            {projects.map((project, index) => (
              <ProjectModule key={project.name} project={project} index={index} />
            ))}
          </div>

          <div className="soft-grain" />
          <div className="scanline-overlay opacity-35" />
        </div>
      </Reveal>
    </section>
  );
}
