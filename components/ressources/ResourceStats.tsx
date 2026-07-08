// ResourceStats.tsx
import { resourceStats } from "@/data/resources";

const styles: Record<string, string> = {
  blue: "bg-[#E4EEFC] text-[#3D6FC9]",
  orange: "bg-[#FFE8D2] text-[#C9711F]",
  violet: "bg-[#EDE7FA] text-[#6E56C9]",
};

export default function ResourceStats() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      {resourceStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  styles[stat.color]
                }`}
              >
                <Icon size={22} strokeWidth={2.3} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-500">
                  {stat.label}
                </p>

                <p className="mt-0.5 text-2xl font-black text-[#1E2433]">
                  {stat.value}
                </p>

                <p className="mt-0.5 text-xs font-bold text-[#2F9C5E]">
                  {stat.trend}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}