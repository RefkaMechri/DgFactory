"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import type { SliceDatum } from "./portfolioanalytics";

interface DonutChartProps {
  data: SliceDatum[];
  centerValue: string;
  centerLabel: string;
  valueSuffix?: string;
}

export default function DonutChart({ data, centerValue, centerLabel, valueSuffix = "" }: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="grid grid-cols-[126px_1fr] items-center gap-4">
      <div className="relative h-[126px] w-[126px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={42} outerRadius={58} paddingAngle={3} cornerRadius={7} stroke="none">
              {data.map((slice) => (
                <Cell key={slice.name} fill={slice.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string) => [`${value}${valueSuffix}`, name]}
              contentStyle={{ borderRadius: 12, border: "1px solid #E7E8F0", fontSize: 11, boxShadow: "0 12px 30px rgba(15,23,42,.08)" }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-black tracking-tight text-[#111827]">{centerValue}</span>
          <span className="text-[10px] font-semibold text-[#7B8192]">{centerLabel}</span>
        </div>
      </div>

      <ul className="min-w-0 space-y-1.5">
        {data.map((slice) => {
          const pct = total ? Math.round((slice.value / total) * 100) : 0;
          return (
            <li key={slice.name} className="grid grid-cols-[1fr_auto] items-center gap-2 text-[11px]">
              <span className="flex min-w-0 items-center gap-2 font-semibold text-[#111827]">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: slice.color }} />
                <span className="truncate">{slice.name}</span>
              </span>
              <span className="rounded-full bg-[#F6F7FB] px-2 py-0.5 text-[10px] font-bold text-[#70718A]">
                {pct}% · {slice.value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
