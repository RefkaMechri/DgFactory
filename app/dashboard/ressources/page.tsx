import { Plus } from "lucide-react";

import ResourceStats from "@/components/ressources/ResourceStats";
import DepartmentCards from "@/components/ressources/DepartmentCards";
import OccupationChart from "@/components/ressources/OccupationChart";
import AvailabilityDonut from "@/components/ressources/AvailabilityDonut";
import ProjectAllocation from "@/components/ressources/ProjectAllocation";
import ResourceProjectMatrix from "@/components/ressources/ResourceProjectMatrix";
import ResourcePlanning from "@/components/ressources/ResourcePlanning";
import WorkloadForecast from "@/components/ressources/WorkloadForecast";

export default function RessourcesPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
      <div className="origin-top-left w-[138.8%] scale-[0.72] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Ressources
            </p>

            <h1 className="text-2xl font-bold text-slate-900">
              Gestion des Ressources
            </h1>

            <p className="text-sm text-slate-500">
              Suivi de la capacité, disponibilité, allocation et charge des
              équipes.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-orange-600">
            <Plus size={16} />
            Nouvelle Ressource
          </button>
        </div>

        <ResourceStats />

        <DepartmentCards />

        <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-12">
          <div className="min-w-0 xl:col-span-8">
            <OccupationChart />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <AvailabilityDonut />
          </div>

          <div className="min-w-0 xl:col-span-5">
            <ProjectAllocation />
          </div>

          <div className="min-w-0 xl:col-span-7">
            <WorkloadForecast />
          </div>

          <div className="min-w-0 xl:col-span-12">
            <ResourceProjectMatrix />
          </div>

          <div className="min-w-0 xl:col-span-12">
            <ResourcePlanning />
          </div>
        </div>
      </div>
    </div>
  );
}