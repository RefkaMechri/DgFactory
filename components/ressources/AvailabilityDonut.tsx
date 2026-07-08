import { availabilityData } from "@/data/resources";

export default function AvailabilityDonut() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-base font-bold text-slate-900">
        Disponibilité des Ressources (FTE)
      </h2>

      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#34d399_0_17%,#3b82f6_17%_84%,#f59e0b_84%_91%,#8b5cf6_91%_96%,#cbd5e1_96%_100%)]">
          <div className="absolute inset-4 rounded-full bg-white" />

          <div className="relative text-center">
            <p className="text-3xl font-black text-slate-900">28</p>
            <p className="text-xs font-semibold text-slate-500">
              Disponibles
            </p>
          </div>
        </div>

        <div className="w-full space-y-3">
          {availabilityData.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-semibold text-slate-600">
                  {item.label}
                </span>
              </div>

              <b className="text-sm text-slate-900">
                {item.value} ({item.percent})
              </b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}