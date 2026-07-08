// AlertHistoryTable.tsx
import { alertHistory } from "@/data/alerts";
import { MoreHorizontal } from "lucide-react";

const severityStyles: Record<string, string> = {
  Critique: "bg-[#FCE4E7] text-[#D1435A]",
  Élevé: "bg-[#FFE8D2] text-[#C9711F]",
  Moyen: "bg-[#FFF3D0] text-[#B8790A]",
};

const statusStyles: Record<string, string> = {
  Ouverte: "bg-[#FCE4E7] text-[#D1435A]",
  "En cours": "bg-[#FFE8D2] text-[#C9711F]",
  Résolu: "bg-[#DFF3E6] text-[#2F9C5E]",
};

export default function AlertHistoryTable() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Historique des Alertes
        </h2>

        <div className="flex items-center gap-2">
          <select className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold text-slate-600 shadow-sm">
            <option>Tous statuts</option>
          </select>

          <select className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold text-slate-600 shadow-sm">
            <option>Toutes gravités</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2.5 text-left">ID</th>
              <th className="px-3 py-2.5 text-left">Alerte</th>
              <th className="px-3 py-2.5 text-left">Catégorie</th>
              <th className="px-3 py-2.5 text-left">Gravité</th>
              <th className="px-3 py-2.5 text-left">Source</th>
              <th className="px-3 py-2.5 text-left">Statut</th>
              <th className="px-3 py-2.5 text-left">Assigné à</th>
              <th className="px-3 py-2.5 text-left">Date</th>
              <th className="px-3 py-2.5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {alertHistory.map((item) => (
              <tr key={item.id}>
                <td className="px-3 py-3 font-black text-slate-400">
                  {item.id}
                </td>

                <td className="px-3 py-3 font-black text-[#1E2433]">
                  {item.alert}
                </td>

                <td className="px-3 py-3 font-semibold text-slate-500">
                  {item.category}
                </td>

                <td className="px-3 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black ${
                      severityStyles[item.severity]
                    }`}
                  >
                    {item.severity}
                  </span>
                </td>

                <td className="px-3 py-3 font-semibold text-slate-400">
                  {item.source}
                </td>

                <td className="px-3 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black ${
                      statusStyles[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-3 py-3 font-semibold text-[#1E2433]">
                  {item.assignedTo}
                </td>

                <td className="px-3 py-3 font-semibold text-slate-400">
                  {item.date}
                </td>

                <td className="px-3 py-3 text-center">
                  <button className="rounded-full border border-slate-200 px-2.5 py-1 text-slate-500">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}