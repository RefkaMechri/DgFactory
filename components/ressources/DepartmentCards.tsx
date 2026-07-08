import { departments } from "@/data/resources";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles: Record<string, any> = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    ring: "border-blue-500",
    text: "text-blue-600",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    ring: "border-emerald-500",
    text: "text-emerald-600",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    ring: "border-cyan-500",
    text: "text-cyan-600",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    ring: "border-violet-500",
    text: "text-violet-600",
  },
};

export default function DepartmentCards() {
  return (
    <div>
      <h2 className="mb-4 text-base font-bold text-slate-900">
        Vue par Département
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {departments.map((dept) => {
          const Icon = dept.icon;
          const style = styles[dept.color];

          return (
            <div
              key={dept.name}
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon}`}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      {dept.name}
                    </p>
                    <p className="text-3xl font-black text-slate-900">
                      {dept.fte}
                    </p>
                    <p className="text-xs font-bold text-slate-400">FTE</p>
                  </div>
                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-4 bg-white text-xs font-black ${style.ring}`}
                >
                  {dept.occupation}%
                </div>
              </div>

              <p
                className={`mt-3 text-right text-xs font-bold ${
                  dept.trend.startsWith("-") ? "text-rose-500" : "text-emerald-500"
                }`}
              >
                {dept.trend}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}