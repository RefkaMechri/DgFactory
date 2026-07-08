// OccupationChart.tsx
"use client";

import { occupationData } from "@/data/resources";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export default function OccupationChart() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Taux d&rsquo;Occupation par Département
      </h2>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={occupationData}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="department"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                fontSize: "12px",
              }}
              formatter={(value) => [`${value}%`, "Occupation"]}
            />

            <ReferenceLine
              y={80}
              stroke="#E0A854"
              strokeDasharray="5 5"
              label={{
                value: "Objectif 80%",
                position: "insideTopRight",
                fill: "#B8790A",
                fontSize: 11,
              }}
            />

            <Bar
              dataKey="occupation"
              fill="#7CA8E8"
              radius={[10, 10, 0, 0]}
              barSize={42}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}