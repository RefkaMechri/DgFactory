// BudgetAlerts.tsx
import { AlertTriangle } from "lucide-react";
import { budgetAlerts } from "@/data/budget";

const levelStyles: Record<string, string> = {
  Critique: "bg-[#FCE7E7] text-[#C0433C]",
  Élevé: "bg-[#FFE4D2] text-[#B9501F]",
  Moyen: "bg-[#FFF1C2] text-[#97650A]",
};

export default function BudgetAlerts() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#F5D9D9] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#F5D9D9] bg-[#FCEDED] px-4 py-3">
        <div className="flex items-center gap-2">
          <AlertTriangle size={17} className="text-[#C0433C]" />
          <h2 className="text-sm font-bold text-[#C0433C]">
            Alertes de Dépassement
          </h2>
        </div>

        <span className="rounded-full bg-[#FCE7E7] px-2.5 py-0.5 text-xs font-black text-[#C0433C]">
          {budgetAlerts.length}
        </span>
      </div>

      <div className="flex-1 divide-y divide-[#F3ECE4]">
        {budgetAlerts.map((alert) => (
          <div key={alert.domain} className="flex items-center gap-3 px-4 py-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FCE7E7] text-[#C0433C]">
              <AlertTriangle size={15} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-black text-[#241B2E]">
                {alert.domain}
              </p>
              <p className="text-xs font-semibold text-[#8B8398]">
                {alert.detail}
              </p>
            </div>

            <div className="text-right">
              <span className="rounded-full bg-[#FCE7E7] px-2.5 py-0.5 text-xs font-black text-[#C0433C]">
                {alert.badge}
              </span>

              <p
                className={`mt-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                  levelStyles[alert.level]
                }`}
              >
                {alert.level}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mx-4 mb-4 mt-2 rounded-full bg-[#FFE4D2] px-4 py-2 text-sm font-bold text-[#B9501F]">
        Voir toutes les alertes →
      </button>
    </div>
  );
}