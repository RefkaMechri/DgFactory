"use client";

import { getPortfolioStatusDistribution } from "./portfolioanalytics";
import { useProjects } from "./useProjects";

export default function PortfolioStatus() {
  const { projects } = useProjects();
  const statusData = getPortfolioStatusDistribution(projects);
  const total = projects.length;

  // Construit le conic-gradient dynamiquement à partir des vraies parts,
  // au lieu des pourcentages figés (48% / 76% / 88% / 100%) d'origine.
  let cumulative = 0;
  const gradientStops = statusData
    .map((item) => {
      const start = total ? (cumulative / total) * 100 : 0;
      cumulative += item.value;
      const end = total ? (cumulative / total) * 100 : 0;
      return `${item.color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        État du Portefeuille
      </h2>

      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div
          className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundImage: total ? `conic-gradient(${gradientStops})` : undefined, backgroundColor: total ? undefined : "#E7E8F0" }}
        >
          <div className="absolute inset-3 rounded-full bg-white" />

          <div className="relative text-center">
            <p className="text-xl font-black text-[#1E2433]">{total}</p>
            <p className="text-[10px] font-semibold text-slate-500">Projets</p>
          </div>
        </div>

        <div className="w-full space-y-2">
          {statusData.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <span className="text-xs font-semibold text-slate-600">
                  {item.label}
                </span>
              </div>

              <span className="text-xs font-black text-[#1E2433]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}