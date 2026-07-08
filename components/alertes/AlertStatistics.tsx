// AlertStatistics.tsx
import { alertStatistics } from "@/data/alerts";

const styles: Record<string, string> = {
  rose: "bg-[#FCE4E7] text-[#D1435A]",
  orange: "bg-[#FFE8D2] text-[#C9711F]",
  emerald: "bg-[#DFF3E6] text-[#2F9C5E]",
  blue: "bg-[#E4EEFC] text-[#3D6FC9]",
};

export default function AlertStatistics() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Statistiques des Alertes
      </h2>

      <div className="space-y-3">
        {alertStatistics.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles[item.color]}`}
              >
                <Icon size={18} />
              </div>

              <div>
                <p className="text-xl font-black text-[#1E2433]">
                  {item.value}
                </p>

                <p className="text-sm font-bold text-slate-600">
                  {item.label}
                </p>

                <p className="text-xs font-bold text-[#2F9C5E]">
                  {item.trend}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}