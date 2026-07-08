// ProjectAllocation.tsx
import { projectAllocation } from "@/data/resources";

export default function ProjectAllocation() {
  const max = Math.max(...projectAllocation.map((item) => item.fte));

  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Allocation par Projet (Top 10)
      </h2>

      <div className="space-y-2">
        {projectAllocation.map((item) => (
          <div
            key={item.project}
            className="grid grid-cols-[190px_1fr_60px] items-center gap-3"
          >
            <p className="truncate text-sm font-semibold text-slate-600">
              {item.project}
            </p>

            <div className="h-2.5 rounded-full bg-slate-100">
              <div
                className="h-2.5 rounded-full bg-[#7CA8E8]"
                style={{ width: `${(item.fte / max) * 100}%` }}
              />
            </div>

            <p className="text-right text-sm font-black text-[#1E2433]">
              {item.fte} FTE
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}