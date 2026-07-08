"use client";
import {
  Users,
  Smile,
  Coins,
  TrendingUp,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const metrics = [
  {
    label: "Utilisateurs Actifs",
    value: "5,2M",
    trend: "+11% vs mois dernier",
    icon: Users,
    iconStyle: "bg-blue-50 text-blue-600",
  },
  {
    label: "Satisfaction Moyenne",
    value: "4,4/5",
    trend: "+0,3 vs mois dernier",
    icon: Smile,
    iconStyle: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Revenus Générés",
    value: "58,7M LYD",
    trend: "+18% vs mois dernier",
    icon: Coins,
    iconStyle: "bg-amber-50 text-amber-600",
  },
  {
    label: "Taux d’Adoption",
    value: "63%",
    trend: "+7% vs mois dernier",
    icon: TrendingUp,
    iconStyle: "bg-cyan-50 text-cyan-600",
  },
];

const chartData = [
  { month: "Déc.", mobile: 38, online: 24, credit: 7, payment: 5, open: 2 },
  { month: "Jan.", mobile: 43, online: 30, credit: 10, payment: 6, open: 3 },
  { month: "Fév.", mobile: 48, online: 34, credit: 14, payment: 8, open: 4 },
  { month: "Mars", mobile: 52, online: 39, credit: 17, payment: 10, open: 5 },
  { month: "Avr.", mobile: 55, online: 42, credit: 22, payment: 13, open: 7 },
  { month: "Mai", mobile: 56, online: 42, credit: 23, payment: 13, open: 8 },
  { month: "Juin", mobile: 58, online: 43, credit: 24, payment: 15, open: 9 },
  { month: "Juil.", mobile: 65, online: 48, credit: 28, payment: 17, open: 12 },
];

const legend = [
  { label: "Application Mobile Bancaire", color: "bg-blue-400" },
  { label: "Banque en Ligne", color: "bg-emerald-400" },
  { label: "Crédit Digital", color: "bg-amber-400" },
  { label: "Paiement Mobile", color: "bg-violet-400" },
  { label: "Open Banking", color: "bg-cyan-400" },
];

export default function ProductPerformance() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">
        Performance des Produits
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${metric.iconStyle}`}
                >
                  <Icon size={20} strokeWidth={2.3} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-2xl font-black text-slate-900">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold text-emerald-500">
                    {metric.trend}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
        <h3 className="text-sm font-bold text-slate-800">
          Évolution des Utilisateurs Actifs (M)
        </h3>

        <div className="mt-5 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_230px]">
          <div className="h-[290px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />

                <XAxis
                  dataKey="month"
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
                    borderRadius: "16px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
                    fontSize: "12px",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="mobile"
                  stroke="#60a5fa"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />

                <Line
                  type="monotone"
                  dataKey="online"
                  stroke="#34d399"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />

                <Line
                  type="monotone"
                  dataKey="credit"
                  stroke="#fbbf24"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />

                <Line
                  type="monotone"
                  dataKey="payment"
                  stroke="#a78bfa"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />

                <Line
                  type="monotone"
                  dataKey="open"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col justify-center space-y-3">
            {legend.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-xs font-semibold text-slate-600"
              >
                <span className={`h-3 w-3 rounded-full ${item.color}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}