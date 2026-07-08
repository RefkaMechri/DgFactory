// DirectionDistribution.tsx
"use client";

import { directionDistribution } from "@/data/executive";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function DirectionDistribution() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Répartition par Direction
      </h2>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={directionDistribution} layout="vertical">
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="#e2e8f0"
            />

            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
            />

            <YAxis
              dataKey="direction"
              type="category"
              axisLine={false}
              tickLine={false}
              width={100}
              tick={{ fontSize: 12, fill: "#64748b" }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                fontSize: "12px",
              }}
            />

            <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={18}>
              {directionDistribution.map((item) => (
                <Cell key={item.direction} fill={item.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}