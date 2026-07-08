// PortfolioStatus.tsx
import { portfolioStatus } from "@/data/executive";

export default function PortfolioStatus() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        État du Portefeuille
      </h2>

      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#7CA8E8_0_48%,#A9C4EF_48%_76%,#EDB97D_76%_88%,#D7DCE3_88%_100%)]">
          <div className="absolute inset-3 rounded-full bg-white" />

          <div className="relative text-center">
            <p className="text-xl font-black text-[#1E2433]">25</p>
            <p className="text-[10px] font-semibold text-slate-500">Projets</p>
          </div>
        </div>

        <div className="w-full space-y-2">
          {portfolioStatus.map((item) => (
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