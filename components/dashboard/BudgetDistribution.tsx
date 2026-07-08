// BudgetDistribution.tsx
import { budgetDistribution } from "@/data/executive";

export default function BudgetDistribution() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Répartition Budgétaire par Domaine
      </h2>

      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#7CA8E8_0_28%,#A9C4EF_28%_46%,#8FD1A8_46%_69%,#EF8FA0_69%_84%,#B7A6E8_84%_94%,#F0D68A_94%_100%)]">
          <div className="absolute inset-3 rounded-full bg-white" />

          <div className="relative text-center">
            <p className="text-xl font-black text-[#1E2433]">5 035</p>
            <p className="text-[10px] font-semibold text-slate-500">k€</p>
          </div>
        </div>

        <div className="w-full space-y-2">
          {budgetDistribution.map((item) => (
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
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}