"use client";

import DonutChart from "./donutchart";
import PipelineFunnel from "./pipelinefunnel";
import {
  getBudgetDistribution,
  getDomainDistribution,
  getPipelineStages,
  type PortfolioProject,
} from "./portfolioanalytics";

interface PortfolioChartsProps {
  projects: PortfolioProject[];
}

function ChartCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[20px] border border-[#E7E8F0] bg-white p-4 shadow-sm">
      <div className="mb-3">
        <h3 className="text-sm font-black tracking-tight text-[#111827]">{title}</h3>
        <p className="mt-0.5 text-[11px] font-medium text-[#7B8192]">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

export default function PortfolioCharts({ projects }: PortfolioChartsProps) {
  const domainData = getDomainDistribution(projects);
  const budgetData = getBudgetDistribution(projects);
  const pipelineData = getPipelineStages(projects);
  const totalBudget = budgetData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
      <ChartCard title="Projets par domaine" subtitle="Répartition du portefeuille">
        <DonutChart data={domainData} centerValue={String(projects.length)} centerLabel="Projets" />
      </ChartCard>

      <ChartCard title="Pipeline initiatives" subtitle="Volume par phase">
        <PipelineFunnel stages={pipelineData} />
      </ChartCard>

      <ChartCard title="Budgets par domaine" subtitle="Montants en M LYD">
        <DonutChart
          data={budgetData}
          centerValue={totalBudget.toLocaleString("fr-FR", { maximumFractionDigits: 1 })}
          centerLabel="M LYD"
        />
      </ChartCard>
    </div>
  );
}
