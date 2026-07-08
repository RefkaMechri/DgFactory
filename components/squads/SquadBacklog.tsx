// SquadBacklog.tsx
import { backlogItems } from "@/data/squads";

const priorityStyles: Record<string, string> = {
  Haute: "bg-[#FCE4E7] text-[#D1435A]",
  Moyenne: "bg-[#FFF3D0] text-[#B8790A]",
  Basse: "bg-[#DFF3E6] text-[#2F9C5E]",
};

export default function SquadBacklog() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">Backlog Squad</h2>
          <p className="text-xs font-semibold text-slate-400">
            User stories priorisées
          </p>
        </div>

        <button className="rounded-xl bg-[#E4EEFC] px-3 py-1.5 text-xs font-bold text-[#3D6FC9]">
          Ajouter
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs font-bold text-slate-400">
            <tr>
              <th className="px-3 py-2.5 text-left">ID</th>
              <th className="px-3 py-2.5 text-left">Story</th>
              <th className="px-3 py-2.5 text-left">Epic</th>
              <th className="px-3 py-2.5 text-left">Priorité</th>
              <th className="px-3 py-2.5 text-left">Estimation</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {backlogItems.map((item) => (
              <tr key={item.id}>
                <td className="px-3 py-3 font-black text-[#3D6FC9]">
                  {item.id}
                </td>

                <td className="px-3 py-3 font-bold text-[#1E2433]">
                  {item.story}
                </td>

                <td className="px-3 py-3 font-semibold text-slate-500">
                  {item.epic}
                </td>

                <td className="px-3 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      priorityStyles[item.priority]
                    }`}
                  >
                    {item.priority}
                  </span>
                </td>

                <td className="px-3 py-3 font-black text-[#1E2433]">
                  {item.estimation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}