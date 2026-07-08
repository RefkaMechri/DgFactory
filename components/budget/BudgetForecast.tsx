// BudgetForecast.tsx
"use client";

import { forecastSummary, forecastChart } from "@/data/budget";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BudgetForecast() {
  return (
    <div className="rounded-2xl border border-[#F0E0D2] bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold text-[#241B2E]">
          Prévisions Budgétaires
        </h2>

        <button className="rounded-lg bg-[#E7E4F5] px-3 py-1.5 text-xs font-bold text-[#5B4E8B]">
          Scénario de base
        </button>
      </div>

      <div className="rounded-xl bg-[#FBF4EE] p-3">
        <p className="mb-2 text-[10px] font-black uppercase tracking-wide text-[#8B8398]">
          Scénario de base
        </p>

        <div className="space-y-2">
          {forecastSummary.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between text-sm"
            >
              <span className="font-semibold text-[#5A5266]">
                {item.label}
              </span>

              <span className="font-black text-[#241B2E]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecastChart}>
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

            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#EA6C3C"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Prévision"
            />

            <Line
              type="monotone"
              dataKey="budget"
              stroke="#C7B9E0"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 4 }}
              name="Budget"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}