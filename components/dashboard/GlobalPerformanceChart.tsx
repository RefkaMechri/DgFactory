// GlobalPerformanceChart.tsx
"use client";

import { globalPerformance } from "@/data/executive";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function GlobalPerformanceChart() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Performance Globale des Projets
        </h2>

        <button className="rounded-full bg-[#E4EEFC] px-3 py-1.5 text-sm font-bold text-[#3D6FC9]">
          Voir détails
        </button>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={globalPerformance}>
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
              dataKey="performance"
              stroke="#7CA8E8"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Performance %"
            />

            <Line
              type="monotone"
              dataKey="velocity"
              stroke="#EDB97D"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Vélocité"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}