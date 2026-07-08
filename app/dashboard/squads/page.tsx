// page.tsx
import { Plus } from "lucide-react";

import SquadCards from "@/components/squads/SquadCards";
import SquadTabs from "@/components/squads/SquadTabs";
import BurndownChart from "@/components/squads/BurndownChart";
import VelocityTrend from "@/components/squads/VelocityTrend";
import SprintProgress from "@/components/squads/SprintProgress";
import SprintPlanningBoard from "@/components/squads/SprintPlanningBoard";
import SquadBacklog from "@/components/squads/SquadBacklog";
import TeamCapacity from "@/components/squads/TeamCapacity";

export default function SquadsPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
      <div className="origin-top-left w-[138.8%] scale-[0.72] space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Squads Agile
            </p>

            <h1 className="text-2xl font-bold text-slate-900">
              Gestion des Squads Agile
            </h1>

            <p className="text-sm text-slate-500">
              Suivi des sprints, vélocité, capacité équipe et backlog squad.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-orange-600">
            <Plus size={16} />
            Nouvelle Squad
          </button>
        </div>

        <SquadCards />

        <SquadTabs />

        <div className="grid min-w-0 grid-cols-1 gap-3 xl:grid-cols-12 xl:items-stretch">
          <div className="min-w-0 xl:col-span-7">
            <BurndownChart />
          </div>

          <div className="min-w-0 xl:col-span-5">
            <VelocityTrend />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <SprintProgress />
          </div>

          <div className="min-w-0 xl:col-span-8">
            <SprintPlanningBoard />
          </div>

          <div className="min-w-0 xl:col-span-6">
            <SquadBacklog />
          </div>

          <div className="min-w-0 xl:col-span-6">
            <TeamCapacity />
          </div>
        </div>
      </div>
    </div>
  );
}