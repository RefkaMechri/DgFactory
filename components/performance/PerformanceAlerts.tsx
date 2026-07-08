// PerformanceAlerts.tsx
import { performanceAlerts } from "@/data/performance";

export default function PerformanceAlerts() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Alertes & Recommandations
      </h2>

      <div className="space-y-2.5">
        {performanceAlerts.map((alert) => (
          <div
            key={alert.title}
            className={`rounded-xl border-l-4 bg-slate-50 px-3 py-3 ${alert.color}`}
          >
            <p className="text-sm font-black text-[#1E2433]">
              {alert.title}
            </p>

            <p className="mt-0.5 text-sm font-semibold text-slate-400">
              {alert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}