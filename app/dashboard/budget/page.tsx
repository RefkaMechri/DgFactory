// page.tsx
import { Download } from "lucide-react";

import BudgetStats from "@/components/budget/BudgetStats";
import BudgetAlerts from "@/components/budget/BudgetAlerts";
import BudgetConsumptionChart from "@/components/budget/BudgetConsumptionChart";
import BudgetDomainDonut from "@/components/budget/BudgetDomainDonut";
import BudgetCostDonut from "@/components/budget/BudgetCostDonut";
import BudgetDetailsTable from "@/components/budget/BudgetDetailsTable";
import FinancialAnalysis from "@/components/budget/FinancialAnalysis";
import BudgetForecast from "@/components/budget/BudgetForecast";

export default function BudgetPage() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <div className="origin-top-left w-[138.8%] scale-[0.72] space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA6C3C]">
              Budget
            </p>

            <h1 className="text-2xl font-bold text-[#241B2E]">
              Gestion Budgétaire
            </h1>

            <p className="text-sm text-[#8B8398]">
              Vue d&lsquo;ensemble de la performance budgétaire de la Digital Factory.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl bg-[#EA6C3C] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#C2540B]">
            <Download size={16} />
            Exporter
          </button>
        </div>

        {/* Layout 2 colonnes indépendantes, comme la référence */}
        <div className="grid min-w-0 grid-cols-1 gap-3 xl:grid-cols-12 xl:items-start">
          {/* Colonne gauche : Stats -> Graphiques -> Table */}
          <div className="min-w-0 space-y-3 xl:col-span-9">
            <BudgetStats />

            <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-3">
              <div className="min-w-0 lg:col-span-1">
                <BudgetConsumptionChart />
              </div>
              <div className="min-w-0 lg:col-span-1">
                <BudgetDomainDonut />
              </div>
              <div className="min-w-0 lg:col-span-1">
                <BudgetCostDonut />
              </div>
            </div>

            <BudgetDetailsTable />
          </div>

          {/* Colonne droite : Alertes -> Analyse Financière -> Prévisions */}
          <div className="min-w-0 space-y-3 xl:col-span-3">
            <BudgetAlerts />
            <FinancialAnalysis />
            <BudgetForecast />
          </div>
        </div>

        <p className="text-center text-xs font-semibold text-[#8B8398]">
          Données mises à jour le 12 Mai 2030 à 09:30
        </p>
      </div>
    </div>
  );
}