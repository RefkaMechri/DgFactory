// TopAlertProjects.tsx
import { topAlertProjects } from "@/data/alerts";

export default function TopAlertProjects() {
  const max = Math.max(...topAlertProjects.map((item) => item.alerts));

  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Top Projets avec le plus d&lsquo;Alertes
      </h2>

      <div className="space-y-3">
        {topAlertProjects.map((item, index) => (
          <div
            key={item.project}
            className="grid grid-cols-[20px_130px_1fr_28px] items-center gap-2"
          >
            <span className="text-sm font-black text-slate-400">
              {index + 1}
            </span>

            <span className="truncate text-sm font-bold text-slate-700">
              {item.project}
            </span>

            <div className="h-2.5 rounded-full bg-slate-100">
              <div
                className={`h-2.5 rounded-full ${item.color}`}
                style={{ width: `${(item.alerts / max) * 100}%` }}
              />
            </div>

            <span className="text-sm font-black text-[#1E2433]">
              {item.alerts}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-4 rounded-full bg-[#E4EEFC] px-4 py-2 text-sm font-bold text-[#3D6FC9]">
        Voir tous les projets →
      </button>
    </div>
  );
}