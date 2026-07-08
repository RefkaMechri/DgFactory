// KpiTable.tsx
import { kpiTable } from "@/data/performance";

const statusStyles: Record<string, string> = {
  success: "bg-[#8FD1A8]",
  warning: "bg-[#EDB97D]",
};

export default function KpiTable() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Tableau des KPI
        </h2>

        <button className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold text-slate-700 shadow-sm">
          Export
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2.5 text-left">KPI</th>
              <th className="px-3 py-2.5 text-left">Définition</th>
              <th className="px-3 py-2.5 text-left">Unité</th>
              <th className="px-3 py-2.5 text-left">Objectif</th>
              <th className="px-3 py-2.5 text-left">Réalisation M-1</th>
              <th className="px-3 py-2.5 text-left">Réalisation</th>
              <th className="px-3 py-2.5 text-left">Écart</th>
              <th className="px-3 py-2.5 text-left">Atteinte</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {kpiTable.map((item) => (
              <tr key={item.kpi}>
                <td className="px-3 py-3 font-black text-[#1E2433]">
                  {item.kpi}
                </td>

                <td className="px-3 py-3 font-semibold text-slate-500">
                  {item.definition}
                </td>

                <td className="px-3 py-3 font-semibold text-slate-400">
                  {item.unit}
                </td>

                <td className="px-3 py-3 font-black text-[#3D6FC9]">
                  {item.objective}
                </td>

                <td className="px-3 py-3 font-semibold text-slate-400">
                  {item.previous}
                </td>

                <td className="px-3 py-3 font-black text-[#1E2433]">
                  {item.current}
                </td>

                <td
                  className={`px-3 py-3 font-black ${
                    item.gap.startsWith("-")
                      ? "text-[#D1435A]"
                      : "text-[#2F9C5E]"
                  }`}
                >
                  {item.gap}
                </td>

                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${statusStyles[item.status]}`}
                    />

                    <div className="h-2.5 w-28 rounded-full bg-slate-100">
                      <div
                        className={`h-2.5 rounded-full ${statusStyles[item.status]}`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}