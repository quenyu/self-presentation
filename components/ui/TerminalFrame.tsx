import type { ReactNode } from "react";

type TerminalFrameProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function TerminalFrame({ title, children, className }: TerminalFrameProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] ${className ?? ""}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-xs text-zinc-500">
        <span>{title}</span>
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan/70" />
        </span>
      </div>
      {children}
    </div>
  );
}
