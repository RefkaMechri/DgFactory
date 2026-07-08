import { Plus } from "lucide-react";
import PortfolioStats from "@/components/portefeuille/PortfolioStats";
import PortfolioFilters from "@/components/portefeuille/PortfolioFilters";
import ProjectsTable from "@/components/portefeuille/ProjectsTable";
import PortfolioCharts from "@/components/portefeuille/portfoliocharts";
import { projects } from "@/data/projects";

export default function PortefeuillePage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
    <div className="origin-top-left w-[125%] scale-[0.8] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Portefeuille digital
            </p>

            <h1 className="text-2xl font-bold text-slate-900">
              Pilotage des initiatives
            </h1>

            <p className="text-sm text-slate-500">
              Synthèse des budgets, priorités, risques, avancement et pipeline
              projet.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-orange-600">
            <Plus size={16} />
            Nouveau Projet
          </button>
        </div>

        <PortfolioStats />

        <PortfolioCharts projects={projects} />

        <PortfolioFilters />

        <ProjectsTable />
      </div>
    </div>
  );
}