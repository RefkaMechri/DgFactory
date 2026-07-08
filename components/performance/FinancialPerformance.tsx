import { financialPerformance } from "@/data/performance";

export default function FinancialPerformance() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-base font-bold text-slate-900">
        Analyse Financière Performance
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {financialPerformance.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-slate-50 px-5 py-4 text-center"
          >
            <p className={`text-3xl font-black ${item.color}`}>
              {item.value}
            </p>

            <p className="mt-1 text-sm font-black text-slate-900">
              {item.label}
            </p>

            <p className="text-xs font-semibold text-slate-400">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}