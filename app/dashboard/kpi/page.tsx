// page.tsx
import PerformanceStats from "@/components/performance/PerformanceStats";
import KpiEvolutionChart from "@/components/performance/KpiEvolutionChart";
import DepartmentPerformance from "@/components/performance/DepartmentPerformance";
import ProductPerformanceBars from "@/components/performance/ProductPerformanceBars";
import KpiTable from "@/components/performance/KpiTable";
import TrendAnalysis from "@/components/performance/TrendAnalysis";
import FinancialPerformance from "@/components/performance/FinancialPerformance";
import PerformanceAlerts from "@/components/performance/PerformanceAlerts";

export default function PerformancePage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
      <div className="origin-top-left w-[138.8%] scale-[0.72] space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Performance
            </p>

            <h1 className="text-2xl font-bold text-slate-900">
              Pilotage de la Performance
            </h1>

            <p className="text-sm text-slate-500">
              Suivi des KPI, objectifs, tendances et performance opérationnelle.
            </p>
          </div>
        </div>

        <PerformanceStats />

        <div className="grid min-w-0 grid-cols-1 gap-3 xl:grid-cols-12 xl:items-stretch">
          <div className="min-w-0 xl:col-span-6">
            <KpiEvolutionChart />
          </div>

          <div className="min-w-0 xl:col-span-3">
            <DepartmentPerformance />
          </div>

          <div className="min-w-0 xl:col-span-3">
            <ProductPerformanceBars />
          </div>

          <div className="min-w-0 xl:col-span-12">
            <KpiTable />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <TrendAnalysis />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <FinancialPerformance />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <PerformanceAlerts />
          </div>
        </div>
      </div>
    </div>
  );
}