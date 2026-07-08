import { backlogItems } from "@/data/squads";

const priorityStyles: Record<string, string> = {
  Haute: "bg-rose-50 text-rose-600",
  Moyenne: "bg-amber-50 text-amber-600",
  Basse: "bg-emerald-50 text-emerald-600",
};

export default function SquadBacklog() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">Backlog Squad</h2>
          <p className="text-xs font-semibold text-slate-400">
            User stories priorisées
          </p>
        </div>

        <button className="rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
          Ajouter
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs font-bold text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Story</th>
              <th className="px-4 py-3 text-left">Epic</th>
              <th className="px-4 py-3 text-left">Priorité</th>
              <th className="px-4 py-3 text-left">Estimation</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {backlogItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4 font-black text-blue-500">
                  {item.id}
                </td>

                <td className="px-4 py-4 font-bold text-slate-700">
                  {item.story}
                </td>

                <td className="px-4 py-4 font-semibold text-slate-500">
                  {item.epic}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      priorityStyles[item.priority]
                    }`}
                  >
                    {item.priority}
                  </span>
                </td>

                <td className="px-4 py-4 font-black text-slate-700">
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