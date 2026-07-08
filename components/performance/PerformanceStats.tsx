// PerformanceStats.tsx
import { performanceStats } from "@/data/performance";

const iconStyles: Record<string, string> = {
  blue: "bg-[#E4EEFC] text-[#3D6FC9]",
  orange: "bg-[#FFE8D2] text-[#C9711F]",
  emerald: "bg-[#DFF3E6] text-[#2F9C5E]",
  violet: "bg-[#EDE7FA] text-[#6E56C9]",
  cyan: "bg-[#DFF4F6] text-[#1E8FA0]",
  slate: "bg-slate-50 text-slate-600",
};

const barStyles: Record<string, string> = {
  blue: "bg-[#7CA8E8]",
  orange: "bg-[#EDB97D]",
  emerald: "bg-[#8FD1A8]",
  violet: "bg-[#B7A6E8]",
  cyan: "bg-[#8CD3DB]",
  slate: "bg-slate-400",
};

export default function PerformanceStats() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6">
      {performanceStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconStyles[stat.color]}`}
              >
                <Icon size={20} strokeWidth={2.3} />
              </div>

              <div>
                <p className="text-sm font-black text-[#1E2433]">
                  {stat.label}
                </p>

                <p className="mt-1 text-2xl font-black text-[#1E2433]">
                  {stat.value}
                </p>

                <p className="mt-0.5 text-xs font-semibold text-slate-400">
                  {stat.objective}
                </p>
              </div>
            </div>

            <div className="mt-4 h-2 rounded-full bg-slate-100">
              <div
                className={`h-2 rounded-full ${barStyles[stat.color]}`}
                style={{ width: `${stat.progress}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}