// MajorRisks.tsx
import { majorRisks } from "@/data/executive";

export default function MajorRisks() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Risques Majeurs
        </h2>

        <span className="rounded-full bg-[#FFF3D0] px-2.5 py-0.5 text-sm font-black text-[#B8790A]">
          4
        </span>
      </div>

      <div className="space-y-3">
        {majorRisks.map((risk) => (
          <div
            key={risk.title}
            className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
          >
            <p className="text-sm font-black text-[#1E2433]">
              {risk.title}
            </p>

            <p className="text-sm font-semibold text-slate-400">
              {risk.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}