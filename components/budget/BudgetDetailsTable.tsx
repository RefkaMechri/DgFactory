// BudgetDetailsTable.tsx
import { budgetDetails } from "@/data/budget";

export default function BudgetDetailsTable() {
  return (
    <div className="rounded-2xl border border-[#F0E0D2] bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold text-[#241B2E]">
          Détail Budgétaire par Domaine
        </h2>

        <button className="rounded-lg border border-[#F0E0D2] bg-white px-3 py-1.5 text-xs font-bold text-[#5A5266] shadow-sm">
          Export
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#F0E0D2]">
        <table className="w-full text-sm">
          <thead className="bg-[#FBF4EE] text-[11px] font-bold uppercase tracking-wide text-[#8B8398]">
            <tr>
              <th className="px-3 py-2.5 text-left">Domaine</th>
              <th className="px-3 py-2.5 text-left">Budget Prévu (k€)</th>
              <th className="px-3 py-2.5 text-left">Budget Réel (k€)</th>
              <th className="px-3 py-2.5 text-left">Écart (k€)</th>
              <th className="px-3 py-2.5 text-left">Écart (%)</th>
              <th className="px-3 py-2.5 text-left">Taux Exécution</th>
              <th className="px-3 py-2.5 text-left">Tendance</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#F3ECE4] bg-white">
            {budgetDetails.map((item) => (
              <tr key={item.domain}>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />

                    <span className="font-bold text-[#241B2E]">
                      {item.domain}
                    </span>
                  </div>
                </td>

                <td className="px-3 py-3 font-black text-[#241B2E]">
                  {item.planned}
                </td>

                <td className="px-3 py-3 font-black text-[#B9501F]">
                  {item.real}
                </td>

                <td className="px-3 py-3 font-black text-[#3F9152]">
                  {item.gap}
                </td>

                <td className="px-3 py-3 font-black text-[#3F9152]">
                  {item.gapPercent}
                </td>

                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-28 rounded-full bg-[#F2E9E0]">
                      <div
                        className="h-2 rounded-full bg-[#EA6C3C]"
                        style={{ width: `${item.execution}%` }}
                      />
                    </div>

                    <span className="font-black text-[#241B2E]">
                      {item.execution}%
                    </span>
                  </div>
                </td>

                <td className="px-3 py-3 text-base font-black text-[#C0433C]">
                  {item.trend}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}