// FinancialAnalysis.tsx
import { financialAnalysis } from "@/data/budget";

export default function FinancialAnalysis() {
  return (
    <div className="rounded-2xl border border-[#F0E0D2] bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-bold text-[#241B2E]">
        Analyse Financière
      </h2>

      <div className="space-y-3">
        {financialAnalysis.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-xl bg-[#FBF4EE] px-3 py-2.5 last:mb-0"
          >
            <div>
              <p className="text-xs font-semibold text-[#5A5266]">
                {item.label}
              </p>

              <p className="text-[11px] font-bold text-[#8B8398]">
                {item.detail}
              </p>
            </div>

            <p className="text-lg font-black text-[#241B2E]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}