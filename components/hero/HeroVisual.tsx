"use client";

import dynamic from "next/dynamic";
import { SceneFallback } from "@/components/three/SceneFallback";

const DataCoreScene = dynamic(() => import("@/components/three/DataCoreScene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

const eventRows = [
  ["api", "42ms", "ok"],
  ["worker", "q:03", "idle"],
  ["postgres", "pool:7", "stable"],
] as const;

const resourceRows = [
  { label: "api", value: 86 },
  { label: "queue", value: 68 },
  { label: "edge", value: 54 },
] as const;

const railItems = ["runtime", "scan", "queue", "edge", "logs"] as const;

function CircuitOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M18 34 H31 L36 39 H43" stroke="rgba(102,231,255,0.42)" strokeWidth="0.35" fill="none" />
      <path d="M16 63 H29 L34 58 H42" stroke="rgba(255,255,255,0.26)" strokeWidth="0.3" fill="none" />
      <path d="M58 31 H68 L72 27 H82" stroke="rgba(102,231,255,0.34)" strokeWidth="0.35" fill="none" />
      <path d="M60 68 H72 L76 73 H86" stroke="rgba(255,49,49,0.36)" strokeWidth="0.35" fill="none" />
      <path d="M48 18 V27" stroke="rgba(255,255,255,0.2)" strokeWidth="0.25" fill="none" />
      <path d="M52 73 V84" stroke="rgba(102,231,255,0.28)" strokeWidth="0.25" fill="none" />
      {[18, 36, 58, 82].map((x, index) => (
        <circle
          key={x}
          cx={x}
          cy={[34, 39, 68, 27][index]}
          r="0.75"
          fill={index === 2 ? "rgba(255,49,49,0.72)" : "rgba(102,231,255,0.72)"}
        />
      ))}
    </svg>
  );
}

export function HeroVisual() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[24px] border border-white/10 bg-[#050608] shadow-panel-glow sm:min-h-[520px] lg:min-h-[650px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(102,231,255,0.14),transparent_42%),radial-gradient(circle_at_74%_62%,rgba(255,49,49,0.08),transparent_26%)]" />
      <div className="thin-grid absolute inset-0 opacity-18" />
      <div aria-hidden="true">
        <SceneFallback />
      </div>
      <div className="absolute inset-0" aria-hidden="true">
        <DataCoreScene />
      </div>
      <CircuitOverlay />

      <div className="pointer-events-none absolute left-4 top-4 w-[min(286px,calc(100%-32px))] rounded-xl border border-white/10 bg-black/48 p-4 font-mono text-xs text-zinc-300 shadow-panel-glow backdrop-blur-md sm:left-5 sm:top-5">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
          <span className="flex items-center gap-2 text-white">
            <span className="h-2 w-2 rounded-full bg-signal shadow-red-glow" />
            runtime module
          </span>
          <span className="text-cyan">live</span>
        </div>
        <div className="space-y-2">
          {eventRows.map(([name, metric, state]) => (
            <div key={name} className="grid grid-cols-[70px_1fr_48px] gap-3 text-zinc-500">
              <span className="text-zinc-300">{name}</span>
              <span>{metric}</span>
              <span className="text-right text-white">{state}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 w-[min(280px,calc(100%-32px))] rounded-xl border border-white/10 bg-black/48 p-4 font-mono text-xs text-zinc-400 shadow-panel-glow backdrop-blur-md sm:bottom-5 sm:right-5">
        <div className="mb-4 flex items-center justify-between text-white">
          <span>resource map</span>
          <span className="text-cyan">72%</span>
        </div>
        <div className="space-y-3">
          {resourceRows.map((item, index) => (
            <div key={item.label} className="grid grid-cols-[54px_1fr_34px] items-center gap-3">
              <span>{item.label}</span>
              <span className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <span
                  className={`block h-full rounded-full ${index === 1 ? "bg-signal" : "bg-white"}`}
                  style={{ width: `${item.value}%` }}
                />
              </span>
              <span className="text-right text-zinc-500">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/35 p-2 backdrop-blur-md lg:block">
        <div className="grid gap-2">
          {railItems.map((item, index) => (
            <span
              key={item}
              className={`h-7 w-1.5 rounded-full ${index === 2 ? "bg-signal/80 shadow-red-glow" : "bg-cyan/60 shadow-cyan-glow"}`}
              title={item}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-5 hidden rounded-lg border border-white/10 bg-black/35 px-3 py-2 font-mono text-[11px] text-zinc-500 backdrop-blur-md sm:block">
        scan.vector / controlled
      </div>

      <div className="scanline-overlay" />
      <div className="noise-overlay" />
    </div>
  );
}
