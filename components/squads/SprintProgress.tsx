import { sprintProgress } from "@/data/squads";

export default function SprintProgress() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Progression des Sprints
        </h2>

        <p className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
          69% moyenne
        </p>
      </div>

      <div className="space-y-4">
        {sprintProgress.map((item) => (
          <div key={item.squad}>
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-800">
                  {item.squad}
                </p>
                <p className="text-xs font-semibold text-slate-400">
                  {item.sprint}
                </p>
              </div>

              <span className="text-sm font-black text-slate-700">
                {item.progress}%
              </span>
            </div>

            <div className="h-2.5 rounded-full bg-slate-100">
              <div
                className={`h-2.5 rounded-full ${item.color}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}