// BudgetCostDonut.tsx
import { budgetCostTypes } from "@/data/budget";

export default function BudgetCostDonut() {
  return (
    <div className="rounded-2xl border border-[#F0E0D2] bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-bold text-[#241B2E]">
        Analyse des Coûts par Type
      </h2>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#EA6C3C_0_55%,#E7C169_55%_75%,#D9A441_75%_85%,#8C7CC4_85%_92%,#E4DCE9_92%_100%)]">
          <div className="absolute inset-3 rounded-full bg-white" />

          <div className="relative text-center">
            <p className="text-xl font-black text-[#241B2E]">3 248</p>
            <p className="text-[10px] font-semibold text-[#8B8398]">k€</p>
          </div>
        </div>

        <div className="w-full space-y-2">
          {budgetCostTypes.map((item) => (
            <div
              key={item.type}
              className="flex items-center justify-between rounded-xl bg-[#FBF4EE] px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <span className="text-xs font-semibold text-[#5A5266]">
                  {item.type}
                </span>
              </div>

              <span className="text-xs font-black text-[#241B2E]">
                {item.amount} k€ ({item.percent})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}