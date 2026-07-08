// TrendAnalysis.tsx
import { trendAnalysis } from "@/data/performance";

export default function TrendAnalysis() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Analyse des Tendances
      </h2>

      <div className="space-y-3">
        {trendAnalysis.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
          >
            <div>
              <p className="text-sm font-black text-[#1E2433]">
                {item.label}
              </p>

              <p className="text-xs font-semibold text-slate-400">
                {item.value}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-black ${
                item.type === "success"
                  ? "bg-[#DFF3E6] text-[#2F9C5E]"
                  : "bg-[#FFF3D0] text-[#B8790A]"
              }`}
            >
              {item.trend}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}