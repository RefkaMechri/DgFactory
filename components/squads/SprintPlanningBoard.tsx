// SprintPlanningBoard.tsx
import { planningColumns } from "@/data/squads";
import { MoreHorizontal } from "lucide-react";

const statusStyles: Record<string, string> = {
  "À faire": "bg-slate-50 text-slate-600",
  "En cours": "bg-[#E4EEFC] text-[#3D6FC9]",
  "En revue": "bg-[#FFF3D0] text-[#B8790A]",
  Terminé: "bg-[#DFF3E6] text-[#2F9C5E]",
};

export default function SprintPlanningBoard() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Sprint Planning Board
          </h2>
          <p className="text-xs font-semibold text-slate-400">
            Sprint 23 — Squad Mobile Banking
          </p>
        </div>

        <button className="rounded-xl bg-[#E4EEFC] px-3 py-1.5 text-xs font-bold text-[#3D6FC9]">
          Ajouter une story
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 xl:grid-cols-4">
        {planningColumns.map((column) => (
          <div
            key={column.title}
            className="rounded-xl border border-slate-100 bg-slate-50/60 p-3"
          >
            <div className="mb-3 flex items-center justify-between">
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

            <div className="space-y-2">
              {column.items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-black text-[#3D6FC9]">
                      {item.id}
                    </span>

                    <MoreHorizontal size={16} className="text-slate-400" />
                  </div>

                  <p className="text-sm font-bold leading-snug text-[#1E2433]">
                    {item.title}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((avatar) => (
                        <img
                          key={avatar}
                          src={`https://i.pravatar.cc/32?img=${avatar + item.points}`}
                          className="h-6 w-6 rounded-full border-2 border-white"
                          alt=""
                        />
                      ))}
                    </div>

                    <span className="rounded-full bg-slate-50 px-2.5 py-0.5 text-xs font-black text-slate-600">
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