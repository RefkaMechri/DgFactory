"use client";

import { FolderKanban, Box, Wallet, TrendingUp, Smile, Clock } from "lucide-react";
import { useProjects } from "./useProjects";

const iconStyles: Record<string, string> = {
  blue: "bg-[#E4EEFC] text-[#3D6FC9]",
  orange: "bg-[#FFE8D2] text-[#C9711F]",
  violet: "bg-[#EDE7FA] text-[#6E56C9]",
  emerald: "bg-[#DFF3E6] text-[#2F9C5E]",
};

const barStyles: Record<string, string> = {
  blue: "bg-[#7CA8E8]",
  orange: "bg-[#EDB97D]",
  violet: "bg-[#B7A6E8]",
  emerald: "bg-[#8FD1A8]",
};

export default function ExecutiveStats() {
  const { projects } = useProjects();

  const total = projects.length;
  const inProduction = projects.filter(
    (p) => p.status === "En prod." || p.status === "Déploiement"
  ).length;
  const totalBudget = projects.reduce((sum, p) => sum + (Number(p.budget) || 0), 0);
  const consumedBudget = projects.reduce(
    (sum, p) => sum + ((Number(p.budget) || 0) * p.progress) / 100,
    0
  );
  const consumedPct = totalBudget ? Math.round((consumedBudget / totalBudget) * 1000) / 10 : 0;
  const avgProgress = total
    ? Math.round((projects.reduce((sum, p) => sum + p.progress, 0) / total) * 10) / 10
    : 0;
  const squadCount = new Set(projects.map((p) => p.owner)).size;

  // "Satisfaction Métier" et "Time-to-Market" n'ont pas d'équivalent dans les
  // données projets — ils restent statiques faute de source pour les calculer.
  const stats = [
    {
      label: "Projets Actifs",
      value: String(total),
      trend: "",
      detail: `${squadCount} squads actives`,
      icon: FolderKanban,
      color: "blue",
    },
    {
      label: "En Production",
      value: String(inProduction),
      trend: "",
      detail: `sur ${total} projets`,
      icon: Box,
      color: "blue",
    },
    {
      label: "Budget Consommé",
      value: `${Math.round(consumedBudget).toLocaleString("fr-FR")} k €`,
      trend: "",
      detail: `${consumedPct}% du total`,
      icon: Wallet,
      color: "orange",
    },
    {
      label: "Taux d'Avancement",
      value: `${avgProgress}%`,
      trend: "",
      detail: "objectif 85%",
      icon: TrendingUp,
      color: "violet",
    },
    {
      label: "Satisfaction Métier",
      value: "4,3/5",
      trend: "+0,3",
      detail: "objectif 4,5/5",
      icon: Smile,
      color: "emerald",
    },
    {
      label: "Time-to-Market",
      value: "9,2 sem.",
      trend: "-1,4",
      detail: "objectif 8 semaines",
      icon: Clock,
      color: "orange",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconStyles[stat.color]}`}
              >
                <Icon size={20} strokeWidth={2.3} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-500">
                  {stat.label}
                </p>

                <p className="mt-1 text-2xl font-black text-[#1E2433]">
                  {stat.value}
                </p>

                {stat.trend && (
                  <p className="mt-0.5 text-sm font-bold text-[#2F9C5E]">
                    {stat.trend}
                  </p>
                )}

                <p className="text-xs font-medium text-slate-400">
                  {stat.detail}
                </p>
              </div>
            </div>

            <div className="mt-4 h-2 rounded-full bg-slate-100">
              <div
                className={`h-2 w-3/4 rounded-full ${barStyles[stat.color]}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}