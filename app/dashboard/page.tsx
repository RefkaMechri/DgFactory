// page.tsx
import ExecutiveStats from "@/components/dashboard/ExecutiveStats";
import GlobalPerformanceChart from "@/components/dashboard/GlobalPerformanceChart";
import DirectionDistribution from "@/components/dashboard/DirectionDistribution";
import BudgetDistribution from "@/components/dashboard/BudgetDistribution";
import PortfolioStatus from "@/components/dashboard/PortfolioStatus";
import CriticalAlerts from "@/components/dashboard/CriticalAlerts";
import DelayedProjects from "@/components/dashboard/DelayedProjects";
import MajorRisks from "@/components/dashboard/MajorRisks";
import PendingDecisions from "@/components/dashboard/PendingDecisions";

export default function DashboardPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
      <div className="origin-top-left w-[138.8%] scale-[0.72] space-y-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
            Tableau de bord exécutif
          </p>

          <h1 className="text-2xl font-bold text-slate-900">
            Pilotage Digital Factory
          </h1>

          <p className="text-sm text-slate-500">
            Vue consolidée du portefeuille, des budgets, performances, risques
            et décisions prioritaires.
          </p>
        </div>

        <ExecutiveStats />

        <div className="grid min-w-0 grid-cols-1 gap-3 xl:grid-cols-12 xl:items-stretch">
          <div className="min-w-0 xl:col-span-6">
            <GlobalPerformanceChart />
          </div>

          <div className="min-w-0 xl:col-span-3">
            <DirectionDistribution />
          </div>

          <div className="min-w-0 xl:col-span-3">
            <PortfolioStatus />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <BudgetDistribution />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <CriticalAlerts />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <DelayedProjects />
          </div>

          <div className="min-w-0 xl:col-span-6">
            <MajorRisks />
          </div>

          <div className="min-w-0 xl:col-span-6">
            <PendingDecisions />
          </div>
        </div>
      </div>
    </div>
  );
}