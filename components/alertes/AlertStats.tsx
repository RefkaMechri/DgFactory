// AlertStats.tsx
import { alertStats } from "@/data/alerts";
import { ChevronRight } from "lucide-react";

const styles: Record<string, string> = {
  rose: "bg-[#FCE4E7] text-[#D1435A]",
  orange: "bg-[#FFE8D2] text-[#C9711F]",
  amber: "bg-[#FFF3D0] text-[#B8790A]",
  violet: "bg-[#EDE7FA] text-[#6E56C9]",
  blue: "bg-[#E4EEFC] text-[#3D6FC9]",
};

export default function AlertStats() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
      {alertStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${styles[stat.color]}`}
                >
                  <Icon size={22} strokeWidth={2.4} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-500">
                    {stat.label}
                  </p>

                  <p className="mt-0.5 text-2xl font-black text-[#1E2433]">
                    {stat.value}
                  </p>

                  <p className="mt-0.5 text-xs font-bold text-[#D1435A]">
                    {stat.trend}
                  </p>
                </div>
              </div>

              <ChevronRight size={18} className="text-slate-300" />
            </div>
          </div>
        );
      })}
    </div>
  );
}