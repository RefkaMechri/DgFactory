"use client";

import { chartPalette } from "./theme";
import type { FunnelStage } from "./portfolioanalytics";

interface PipelineFunnelProps {
  stages: FunnelStage[];
}

export default function PipelineFunnel({ stages }: PipelineFunnelProps) {
  const max = Math.max(...stages.map((s) => s.value), 1);

  return (
    <div className="space-y-2">
      {stages.map((stage, i) => {
        const widthPct = Math.max(8, (stage.value / max) * 100);
        return (
          <div key={stage.name} className="grid grid-cols-[82px_1fr_28px] items-center gap-2">
            <span className="text-[11px] font-bold text-[#70718A]">{stage.name}</span>
            <div className="h-7 overflow-hidden rounded-full bg-[#F1F3F8]">
              <div
                className="flex h-full items-center justify-center rounded-full text-[11px] font-black text-white shadow-sm transition-all"
                style={{ width: `${widthPct}%`, backgroundColor: chartPalette[i % chartPalette.length] }}
              >
                {stage.value > 0 ? stage.value : ""}
              </div>
            </div>
            <span className="text-right text-[11px] font-black text-[#111827]">{stage.value}</span>
          </div>
        );
      })}
    </div>
  );
}
