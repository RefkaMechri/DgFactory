// AlertEvolutionChart.tsx
"use client";

import { alertEvolution } from "@/data/alerts";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function AlertEvolutionChart() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Évolution des Alertes
      </h2>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={alertEvolution}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
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
              dataKey="critique"
              stroke="#EF8FA0"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Critique"
            />

            <Line
              type="monotone"
              dataKey="eleve"
              stroke="#EDB97D"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Élevé"
            />

            <Line
              type="monotone"
              dataKey="moyen"
              stroke="#F0D68A"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Moyen"
            />

            <Line
              type="monotone"
              dataKey="faible"
              stroke="#7CA8E8"
              strokeWidth={3}
              dot={{ r: 4 }}
              name="Faible"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}