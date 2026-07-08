// AlertSeverityDonut.tsx
import { severityData } from "@/data/alerts";

export default function AlertSeverityDonut() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Répartition des Alertes par Gravité
      </h2>

      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#EF8FA0_0_23%,#EDB97D_23%_56%,#F0D68A_56%_84%,#7CA8E8_84%_94%,#D7DCE3_94%_100%)]">
          <div className="absolute inset-3 rounded-full bg-white" />

          <div className="relative text-center">
            <p className="text-xl font-black text-[#1E2433]">61</p>
            <p className="text-[10px] font-semibold text-slate-500">Alertes</p>
          </div>
        </div>

        <div className="w-full space-y-2">
          {severityData.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <span className="text-xs font-semibold text-slate-600">
                  {item.label}
                </span>
              </div>

              <span className="text-xs font-black text-[#1E2433]">
                {item.value} ({item.percent})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}