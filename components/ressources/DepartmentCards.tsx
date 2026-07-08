// DepartmentCards.tsx
import { departments } from "@/data/resources";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles: Record<string, any> = {
  blue: {
    icon: "bg-[#E4EEFC] text-[#3D6FC9]",
    ring: "border-[#8FB4E8]",
    text: "text-[#3D6FC9]",
  },
  emerald: {
    icon: "bg-[#DFF3E6] text-[#2F9C5E]",
    ring: "border-[#8FD1A8]",
    text: "text-[#2F9C5E]",
  },
  cyan: {
    icon: "bg-[#DFF4F6] text-[#1E8FA0]",
    ring: "border-[#8CD3DB]",
    text: "text-[#1E8FA0]",
  },
  violet: {
    icon: "bg-[#EDE7FA] text-[#6E56C9]",
    ring: "border-[#B7A6E8]",
    text: "text-[#6E56C9]",
  },
};

export default function DepartmentCards() {
  return (
    <div>
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Vue par Département
      </h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
        {departments.map((dept) => {
          const Icon = dept.icon;
          const style = styles[dept.color];

          return (
            <div
              key={dept.name}
              className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.icon}`}
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-500">
                      {dept.name}
                    </p>
                    <p className="text-2xl font-black text-[#1E2433]">
                      {dept.fte}
                    </p>
                    <p className="text-xs font-bold text-slate-400">FTE</p>
                  </div>
                </div>

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 bg-white text-xs font-black ${style.ring} ${style.text}`}
                >
                  {dept.occupation}%
                </div>
              </div>

              <p
                className={`mt-2 text-right text-xs font-bold ${
                  dept.trend.startsWith("-") ? "text-[#D1435A]" : "text-[#2F9C5E]"
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