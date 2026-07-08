"use client";

import { badgeClasses } from "./theme";
import type { PortfolioProject } from "./portfolioanalytics";

interface KanbanBoardProps {
  projects: PortfolioProject[];
}

const STAGES: { name: string; statuses: string[]; accent: string; bg: string }[] = [
  { name: "Idéation", statuses: ["Idéation"], accent: "#8B5CF6", bg: "#F5F1FF" },
  { name: "Analyse", statuses: ["Analyse"], accent: "#3B82F6", bg: "#EFF6FF" },
  { name: "En cours", statuses: ["Dev", "En cours"], accent: "#FF6A45", bg: "#FFF0EA" },
  { name: "Tests", statuses: ["Test", "Tests"], accent: "#F59E0B", bg: "#FFF7E8" },
  { name: "Déploiement", statuses: ["En prod.", "Déploiement"], accent: "#22C55E", bg: "#ECFDF3" },
];

export default function KanbanBoard({ projects }: KanbanBoardProps) {
  return (
    <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 xl:grid-cols-5">
      {STAGES.map((stage) => {
        const stageProjects = projects.filter((p) => stage.statuses.includes(p.status));
        return (
          <div key={stage.name} className="overflow-hidden rounded-[18px] border border-[#E7E8F0] bg-[#FAFBFD]">
            <div className="flex items-center justify-between px-3 py-2" style={{ backgroundColor: stage.bg }}>
              <span className="text-[11px] font-black" style={{ color: stage.accent }}>{stage.name}</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-[10px] font-black" style={{ color: stage.accent }}>{stageProjects.length}</span>
            </div>

            <div className="max-h-[340px] space-y-2 overflow-y-auto p-2.5">
              {stageProjects.length === 0 && <p className="py-6 text-center text-[11px] font-semibold text-[#A7ADBD]">Aucun projet</p>}
              {stageProjects.map((project) => (
                <article key={project.id} className="rounded-xl border border-[#E7E8F0] bg-white p-2.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <p className="line-clamp-2 text-xs font-black leading-snug text-[#111827]">{project.name}</p>
                  <p className="mt-1 truncate text-[11px] font-semibold text-[#70718A]">{project.category}</p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-black ${badgeClasses(project.priority)}`}>{project.priority}</span>
                    <span className="truncate text-[10px] font-bold text-[#9AA1B2]">{project.owner}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
