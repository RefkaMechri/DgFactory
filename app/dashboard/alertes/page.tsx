// page.tsx
import { Plus } from "lucide-react";

import AlertStats from "@/components/alertes/AlertStats";
import AlertSeverityDonut from "@/components/alertes/AlertSeverityDonut";
import AlertEvolutionChart from "@/components/alertes/AlertEvolutionChart";
import AlertStatistics from "@/components/alertes/AlertStatistics";
import RecentNotifications from "@/components/alertes/RecentNotifications";
import AlertHistoryTable from "@/components/alertes/AlertHistoryTable";
import AlertStatusDonut from "@/components/alertes/AlertStatusDonut";
import TopAlertProjects from "@/components/alertes/TopAlertProjects";
import SelectedAlertDetails from "@/components/alertes/SelectedAlertDetails";

export default function AlertsPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
      <div className="origin-top-left w-[138.8%] scale-[0.72] space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Alertes
            </p>

            <h1 className="text-2xl font-bold text-slate-900">
              Centre des Alertes
            </h1>

            <p className="text-sm text-slate-500">
              Suivi des alertes critiques, notifications et actions correctives.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-orange-600">
            <Plus size={16} />
            Nouvelle Alerte
          </button>
        </div>

        <AlertStats />

        <div className="grid min-w-0 grid-cols-1 gap-3 xl:grid-cols-12 xl:items-stretch">
          <div className="min-w-0 xl:col-span-4">
            <AlertSeverityDonut />
          </div>

          <div className="min-w-0 xl:col-span-5">
            <AlertEvolutionChart />
          </div>

          <div className="min-w-0 xl:col-span-3">
            <AlertStatistics />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <RecentNotifications />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <AlertStatusDonut />
          </div>

          <div className="min-w-0 xl:col-span-4">
            <TopAlertProjects />
          </div>

          <div className="min-w-0 xl:col-span-12">
            <SelectedAlertDetails />
          </div>

          <div className="min-w-0 xl:col-span-12">
            <AlertHistoryTable />
          </div>
        </div>
      </div>
    </div>
  );
}