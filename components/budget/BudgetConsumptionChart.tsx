// BudgetConsumptionChart.tsx
"use client";

import { budgetConsumption } from "@/data/budget";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BudgetConsumptionChart() {
  return (
    <div className="h-full rounded-2xl border border-[#F0E0D2] bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold text-[#241B2E]">
          Consommation Budgétaire Cumulée
        </h2>

        <button className="rounded-lg bg-[#FFE4D2] px-3 py-1.5 text-xs font-bold text-[#B9501F]">
          Jan – Déc 2026
        </button>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={budgetConsumption}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F0E0D2"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#8B8398" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#8B8398" }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #F0E0D2",
                fontSize: "12px",
              }}
            />

            <Area
              type="monotone"
              dataKey="real"
              stroke="#EA6C3C"
              fill="#FFE4D2"
              strokeWidth={3}
              name="Budget Réel"
            />

            <Line
              type="monotone"
              dataKey="planned"
              stroke="#C7B9E0"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 3 }}
              name="Budget Prévu"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}