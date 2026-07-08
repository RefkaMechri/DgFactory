import { projectAllocation } from "@/data/resources";

export default function ProjectAllocation() {
  const max = Math.max(...projectAllocation.map((item) => item.fte));

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-base font-bold text-slate-900">
        Allocation par Projet (Top 10)
      </h2>

      <div className="space-y-3">
        {projectAllocation.map((item) => (
          <div
            key={item.project}
            className="grid grid-cols-[210px_1fr_60px] items-center gap-3"
          >
            <p className="truncate text-sm font-semibold text-slate-600">
              {item.project}
            </p>

            <div className="h-3 rounded-full bg-slate-100">
              <div
                className="h-3 rounded-full bg-blue-500"
                style={{ width: `${(item.fte / max) * 100}%` }}
              />
            </div>

            <p className="text-right text-sm font-black text-slate-800">
              {item.fte} FTE
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}