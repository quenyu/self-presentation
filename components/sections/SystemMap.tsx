import { Reveal } from "@/components/ui/Reveal";
import { StatusDot } from "@/components/ui/StatusDot";
import { architecturePath, projects, stackSignals } from "@/lib/data";
import type { ProjectItem } from "@/lib/data";

const moduleLayout = [
  {
    meta: "analytics.scan",
    position: "lg:left-[5%] lg:top-[24%] lg:w-[330px]",
    tone: "cyan",
  },
  {
    meta: "events.route",
    position: "lg:right-[5%] lg:top-[18%] lg:w-[360px]",
    tone: "red",
  },
  {
    meta: "review.context",
    position: "lg:left-[13%] lg:bottom-[10%] lg:w-[360px]",
    tone: "white",
  },
  {
    meta: "learning.flow",
    position: "lg:right-[12%] lg:bottom-[12%] lg:w-[330px]",
    tone: "cyan",
  },
] as const;

const stackPositions = [
  "lg:left-[39%] lg:top-[30%]",
  "lg:left-[54%] lg:top-[28%]",
  "lg:left-[62%] lg:top-[45%]",
  "lg:left-[37%] lg:top-[61%]",
  "lg:left-[52%] lg:top-[66%]",
  "lg:left-[28%] lg:top-[44%]",
] as const;

const toneTextClass = {
  red: "text-signal",
  cyan: "text-cyan",
  white: "text-white",
};

function RuntimeLines() {
  return (
    <svg className="absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path d="M31 34 C40 38 42 44 50 49" stroke="rgba(255,255,255,0.24)" strokeWidth="0.18" fill="none" />
      <path d="M70 31 C60 36 58 43 50 49" stroke="rgba(255,255,255,0.22)" strokeWidth="0.18" fill="none" />
      <path d="M31 73 C39 64 43 56 50 51" stroke="rgba(255,255,255,0.18)" strokeWidth="0.18" fill="none" />
      <path d="M70 72 C61 65 57 57 50 51" stroke="rgba(255,49,49,0.28)" strokeWidth="0.18" fill="none" />
      <path d="M50 24 V76" stroke="rgba(255,255,255,0.11)" strokeWidth="0.12" strokeDasharray="1 1.2" />
      <path d="M24 50 H77" stroke="rgba(255,255,255,0.09)" strokeWidth="0.12" strokeDasharray="1 1.2" />
    </svg>
  );
}

function SystemModule({ project, index }: { project: ProjectItem; index: number }) {
  const layout = moduleLayout[index];

  return (
    <article
      className={`group relative z-10 border border-white/[0.08] bg-black/[0.62] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.38)] backdrop-blur-sm transition duration-300 hover:border-white/[0.24] hover:bg-black/[0.78] lg:absolute ${layout.position}`}
    >
      <div className="mb-4 flex items-center justify-between gap-4 font-mono text-[11px] text-white/[0.38]">
        <span className={toneTextClass[layout.tone]}>{layout.meta}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>

      <h3 className="text-2xl font-semibold leading-none text-white">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-white/[0.52]">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 font-mono text-[11px] text-white/[0.58]">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-2 border-t border-white/[0.08] pt-3 font-mono text-[11px] leading-5 text-white/[0.44]">
        <StatusDot tone={layout.tone} />
        <span>{project.signal}</span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/0 transition group-hover:bg-white/60" />
    </article>
  );
}

function RuntimeCore() {
  return (
    <div className="relative z-10 border border-white/[0.1] bg-black/[0.72] p-5 shadow-[0_0_90px_rgba(255,255,255,0.08)] backdrop-blur-sm lg:absolute lg:left-1/2 lg:top-[49%] lg:w-[350px] lg:-translate-x-1/2 lg:-translate-y-1/2">
      <div className="font-mono text-[11px] uppercase text-white/[0.36]">/runtime/core</div>
      <div className="mt-3 text-3xl font-semibold leading-none text-white">backend signal</div>
      <div className="mt-5 flex flex-wrap gap-2">
        {stackSignals.map((item) => (
          <span key={item} className="bg-white px-2.5 py-1 font-mono text-[11px] text-black">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 grid gap-2 font-mono text-[11px] text-white/[0.42]">
        {architecturePath.map((item, index) => (
          <div key={item} className="flex items-center gap-2">
            <span className="w-5 text-white/[0.24]">{String(index + 1).padStart(2, "0")}</span>
            <span className={index === 2 ? "text-white" : ""}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StackSatellites() {
  return (
    <div className="relative z-10 grid grid-cols-2 gap-2 font-mono text-[11px] text-white/40 sm:grid-cols-3 lg:block">
      {stackSignals.map((item, index) => (
        <div key={item} className={`border border-white/[0.08] bg-black/[0.42] px-3 py-2 lg:absolute ${stackPositions[index]}`}>
          {item}
        </div>
      ))}
    </div>
  );
}

function CodeSignal() {
  return (
    <div className="relative z-10 border border-white/[0.08] bg-black/[0.64] font-mono text-xs text-white/[0.56] lg:absolute lg:bottom-[6%] lg:left-1/2 lg:w-[440px] lg:-translate-x-1/2">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 text-[11px] text-white/[0.34]">
        <span>signal.go</span>
        <span className="text-white">Go + PostgreSQL</span>
      </div>
      <pre className="overflow-x-auto p-4 leading-6">
        <code>{`package main

func signal() Profile {
    return Profile{
        Role: "Backend Developer",
        Core: "Go + PostgreSQL",
        Layer: "JS / 3D Web",
    }
}`}</code>
      </pre>
    </div>
  );
}

export function SystemMap() {
  return (
    <section id="systems" className="px-3 py-5 sm:px-4">
      <Reveal className="mx-auto max-w-[1720px] overflow-hidden rounded-[30px] border border-white/10 bg-[#020203] p-4 shadow-panel-glow sm:p-6 lg:p-8">
        <div className="relative overflow-hidden rounded-[24px] bg-[#030303] p-5 sm:p-7 lg:p-9">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_52%,rgba(255,255,255,0.07),transparent_33%),radial-gradient(ellipse_at_78%_22%,rgba(255,49,49,0.08),transparent_27%)]" />
          <div className="signal-billboard-grid absolute inset-0 opacity-[0.1]" />
          <div className="halftone-field absolute -left-20 bottom-0 h-72 w-[520px] opacity-20" />

          <div className="relative z-10 grid gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <div className="font-mono text-xs uppercase text-white/[0.38]">system map / projects</div>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.94] text-white sm:text-6xl lg:text-7xl">
                Four practical systems, one backend signal.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/50 lg:justify-self-end">
              Projects are shown as runtime modules around the same stack: Go services, data, queues, automation and interface layer.
            </p>
          </div>

          <div className="relative z-10 mt-7 grid min-h-[860px] gap-4 overflow-hidden border border-white/[0.07] bg-black/[0.42] p-4 sm:p-5 lg:block lg:min-h-[760px] lg:p-0">
            <RuntimeLines />
            <div className="scanline-overlay opacity-35" />
            <StackSatellites />
            <RuntimeCore />
            {projects.map((project, index) => (
              <SystemModule key={project.name} project={project} index={index} />
            ))}
            <CodeSignal />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
