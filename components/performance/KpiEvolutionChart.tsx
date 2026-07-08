// KpiEvolutionChart.tsx
"use client";

import { kpiEvolution } from "@/data/performance";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function KpiEvolutionChart() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Évolution des KPI (12 dernières semaines)
      </h2>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={kpiEvolution}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                fontSize: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="livraison"
              stroke="#7CA8E8"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Livraison %"
            />

            <Line
              type="monotone"
              dataKey="velocity"
              stroke="#B7A6E8"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Vélocité pts"
            />

            <Line
              type="monotone"
              dataKey="ttm"
              stroke="#8FD1A8"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="TTM (norm.)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}