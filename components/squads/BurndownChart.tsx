"use client";

import { burndownData } from "@/data/squads";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BurndownChart() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Burndown Chart — Sprint 23 (Squad Mobile Banking)
        </h2>

        <button className="rounded-xl border border-slate-100 bg-white px-3 py-2 text-xs font-bold text-slate-500 shadow-sm">
          ⛶
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_120px]">
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={burndownData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="day"
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
                dataKey="remaining"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 3 }}
              />

              <Line
                type="monotone"
                dataKey="objective"
                stroke="#cbd5e1"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-xs font-semibold text-slate-400">
              Travail initial
            </p>
            <p className="text-xl font-black text-slate-900">100 pts</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400">
              Travail restant
            </p>
            <p className="text-xl font-black text-slate-900">28 pts</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400">Terminé</p>
            <p className="text-xl font-black text-emerald-500">72%</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400">
              Jours restants
            </p>
            <p className="text-xl font-black text-slate-900">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}