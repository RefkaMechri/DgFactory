import { resourceStats } from "@/data/resources";

const styles: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  orange: "bg-orange-50 text-orange-600",
  violet: "bg-violet-50 text-violet-600",
};

export default function ResourceStats() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {resourceStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  styles[stat.color]
                }`}
              >
                <Icon size={26} strokeWidth={2.3} />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-500">
                  {stat.label}
                </p>

                <p className="mt-1 text-3xl font-black text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs font-bold text-emerald-500">
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