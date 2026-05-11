import { Reveal } from "@/components/ui/Reveal";
import { StatusDot } from "@/components/ui/StatusDot";
import { TerminalFrame } from "@/components/ui/TerminalFrame";
import { architectureNodes } from "@/lib/data";

function ArchitectureFlow() {
  return (
    <div className="rounded-2xl border border-white/10 bg-panel/85 p-4 shadow-panel-glow sm:p-5">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-zinc-500">
        <span>backend.flow</span>
        <span className="text-cyan">Client -&gt; External APIs</span>
      </div>

      <div className="grid gap-3 xl:grid-cols-[repeat(6,minmax(0,1fr))]">
        {architectureNodes.map((node, index) => (
          <div key={node.label} className="relative">
            <div className="min-h-32 rounded-xl border border-white/10 bg-black/28 p-4 transition hover:border-cyan/40 hover:bg-white/[0.045]">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
                <StatusDot tone={index === 2 ? "cyan" : "red"} />
              </div>
              <div className="text-base font-semibold leading-tight text-white">{node.label}</div>
              <div className="mt-3 font-mono text-xs leading-5 text-zinc-500">{node.detail}</div>
            </div>
            {index < architectureNodes.length - 1 ? (
              <>
                <div className="hidden xl:absolute xl:-right-3 xl:top-1/2 xl:z-10 xl:block xl:-translate-y-1/2 xl:font-mono xl:text-sm xl:text-cyan">
                  -&gt;
                </div>
                <div className="mx-auto h-3 w-px bg-cyan/35 xl:hidden" aria-hidden="true" />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function CodePanel() {
  return (
    <TerminalFrame title="signal.go" className="shadow-panel-glow">
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-zinc-300 sm:p-6 sm:text-[15px]">
        <code>{`package main

func signal() Profile {
    return Profile{
        Role: "Backend Developer",
        Core: "Go + PostgreSQL",
        Layer: "JS / 3D Web",
    }
}`}</code>
      </pre>
    </TerminalFrame>
  );
}

export function BackendArchitecture() {
  return (
    <section id="architecture" className="px-4 py-16 sm:py-20">
      <Reveal className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <div className="font-mono text-xs uppercase text-cyan/80">Backend Architecture</div>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[0.98] text-white sm:text-5xl">
            The visual layer sits on top of clear backend thinking.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            Сайт может быть кинематографичным, но сигнал остается инженерным:
            API, данные, воркеры, внешние сервисы и понятные границы ответственности.
          </p>

          <div className="mt-6 grid max-w-xl grid-cols-2 gap-3 font-mono text-xs text-zinc-500">
            {["request boundary", "domain logic", "state layer", "async jobs"].map((item, index) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-2 flex items-center gap-2 text-white">
                  <StatusDot tone={index % 2 === 0 ? "cyan" : "red"} />
                  {item}
                </div>
                <div>{index === 0 ? "gateway" : index === 1 ? "Go service" : index === 2 ? "PostgreSQL" : "worker"}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <ArchitectureFlow />
          <CodePanel />
        </div>
      </Reveal>
    </section>
  );
}
