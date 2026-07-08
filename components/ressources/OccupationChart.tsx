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
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-base font-bold text-slate-900">
        Taux d’Occupation par Département
      </h2>

      <div className="h-[280px]">
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
              stroke="#f59e0b"
              strokeDasharray="5 5"
              label={{
                value: "Objectif 80%",
                position: "insideTopRight",
                fill: "#f59e0b",
                fontSize: 11,
              }}
            />

            <Bar
              dataKey="occupation"
              fill="#2563eb"
              radius={[10, 10, 0, 0]}
              barSize={42}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}