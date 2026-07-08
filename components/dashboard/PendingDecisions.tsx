// PendingDecisions.tsx
import { pendingDecisions } from "@/data/executive";

export default function PendingDecisions() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Décisions à Valider
        </h2>

        <span className="rounded-full bg-[#FFF3D0] px-2.5 py-0.5 text-sm font-black text-[#B8790A]">
          3
        </span>
      </div>

      <div className="space-y-3">
        {pendingDecisions.map((decision) => (
          <div
            key={decision.title}
            className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
          >
            <div>
              <p className="text-sm font-black text-[#1E2433]">
                {decision.title}
              </p>

              <p className="text-sm font-semibold text-slate-400">
                {decision.subtitle}
              </p>
            </div>

            <span className="rounded-full bg-[#FFE8D2] px-3 py-1 text-xs font-black text-[#C9711F]">
              {decision.delay}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}