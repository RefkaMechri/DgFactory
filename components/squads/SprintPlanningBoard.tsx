import { planningColumns } from "@/data/squads";
import { MoreHorizontal } from "lucide-react";

const statusStyles: Record<string, string> = {
  "À faire": "bg-slate-50 text-slate-600",
  "En cours": "bg-blue-50 text-blue-600",
  "En revue": "bg-amber-50 text-amber-600",
  Terminé: "bg-emerald-50 text-emerald-600",
};

export default function SprintPlanningBoard() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Sprint Planning Board
          </h2>
          <p className="text-xs font-semibold text-slate-400">
            Sprint 23 — Squad Mobile Banking
          </p>
        </div>

        <button className="rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
          Ajouter une story
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        {planningColumns.map((column) => (
          <div
            key={column.title}
            className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3"
          >
            <div className="mb-4 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-black ${
                  statusStyles[column.title]
                }`}
              >
                {column.title}
              </span>

              <span className="text-xs font-bold text-slate-400">
                {column.points}
              </span>
            </div>

            <div className="space-y-3">
              {column.items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-black text-blue-500">
                      {item.id}
                    </span>

                    <MoreHorizontal size={16} className="text-slate-400" />
                  </div>

                  <p className="text-sm font-bold leading-snug text-slate-800">
                    {item.title}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((avatar) => (
                        <img
                          key={avatar}
                          src={`https://i.pravatar.cc/32?img=${avatar + item.points}`}
                          className="h-7 w-7 rounded-full border-2 border-white"
                          alt=""
                        />
                      ))}
                    </div>

                    <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-black text-slate-600">
                      {item.points} pts
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}