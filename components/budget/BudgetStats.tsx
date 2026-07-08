// BudgetStats.tsx
import { budgetStats } from "@/data/budget";

const styles: Record<string, string> = {
  blue: "bg-[#FFE4D2] text-[#B9501F]",
  orange: "bg-[#FFD9CE] text-[#C1442E]",
  emerald: "bg-[#FFF1C2] text-[#97650A]",
  violet: "bg-[#E7E4F5] text-[#5B4E8B]",
};

const progressStyles: Record<string, string> = {
  blue: "bg-[#EA6C3C]",
  orange: "bg-[#E2765A]",
  emerald: "bg-[#D9A441]",
  violet: "bg-[#8C7CC4]",
};

export default function BudgetStats() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      {budgetStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="flex flex-col justify-between rounded-2xl border border-[#F0E0D2] bg-white p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles[stat.color]}`}
              >
                <Icon size={22} strokeWidth={2.3} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-[#8B8398]">
                  {stat.label}
                </p>

                <p className="mt-1 text-2xl font-black text-[#241B2E]">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm font-bold text-[#241B2E]">
                  {stat.main}
                </p>

                <p
                  className={`mt-1 text-xs font-bold ${
                    stat.subTrend === "true"
                      ? "text-[#3F9152]"
                      : "text-[#8B8398]"
                  }`}
                >
                  {stat.trend}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-[#8B8398]">
                <span>{stat.progress}%</span>
                <span>du budget total</span>
              </div>

              <div className="h-2 rounded-full bg-[#F2E9E0]">
                <div
                  className={`h-2 rounded-full ${progressStyles[stat.color]}`}
                  style={{ width: `${Math.min(stat.progress, 100)}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}