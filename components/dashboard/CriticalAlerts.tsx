// CriticalAlerts.tsx
import { criticalAlerts } from "@/data/executive";

export default function CriticalAlerts() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Alertes Critiques
        </h2>

        <span className="rounded-full bg-[#FCE4E7] px-2.5 py-0.5 text-sm font-black text-[#D1435A]">
          3
        </span>
      </div>

      <div className="space-y-3">
        {criticalAlerts.map((alert) => (
          <div
            key={alert.title + alert.subtitle}
            className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-black text-[#1E2433]">
                  {alert.title}
                </p>

                <p className="text-sm font-semibold text-slate-400">
                  {alert.subtitle}
                </p>
              </div>

              <span className="text-xs font-bold text-slate-400">
                {alert.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}