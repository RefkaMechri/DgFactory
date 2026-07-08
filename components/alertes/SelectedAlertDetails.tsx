// SelectedAlertDetails.tsx
import { selectedAlert } from "@/data/alerts";
import { AlertTriangle } from "lucide-react";

export default function SelectedAlertDetails() {
  return (
    <div className="rounded-2xl border border-[#F5D9D9] bg-[#FCEDED] p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_240px]">
        <div>
          <h2 className="mb-3 text-base font-bold text-slate-900">
            Détails de l&lsquo;Alerte Sélectionnée
          </h2>

          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FCE4E7] text-[#D1435A]">
              <AlertTriangle size={22} />
            </div>

            <div>
              <p className="text-base font-black text-[#1E2433]">
                {selectedAlert.title}
              </p>

              <p className="mt-0.5 text-sm font-semibold text-slate-500">
                {selectedAlert.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
                <div>
                  <p className="text-xs font-bold text-slate-400">Source</p>
                  <p className="text-sm font-black text-[#1E2433]">
                    {selectedAlert.source}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400">Détectée le</p>
                  <p className="text-sm font-black text-[#1E2433]">
                    {selectedAlert.detectedAt}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400">Assignée à</p>
                  <p className="text-sm font-black text-[#1E2433]">
                    {selectedAlert.assignedTo}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400">Échéance</p>
                  <p className="text-sm font-black text-[#1E2433]">
                    {selectedAlert.dueDate}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400">Statut</p>
                  <span className="mt-1 inline-flex rounded-full bg-[#FCE4E7] px-3 py-1 text-xs font-black text-[#D1435A]">
                    {selectedAlert.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-slate-900">
            Actions rapides
          </h3>

          <div className="space-y-2">
            <button className="w-full rounded-xl bg-[#7CA8E8] px-4 py-2.5 text-sm font-bold text-white">
              Prendre en charge
            </button>

            <button className="w-full rounded-xl border border-[#DCE9FA] bg-[#E4EEFC] px-4 py-2.5 text-sm font-bold text-[#3D6FC9]">
              Ajouter un commentaire
            </button>

            <button className="w-full rounded-xl border border-[#DCF0E3] bg-[#DFF3E6] px-4 py-2.5 text-sm font-bold text-[#2F9C5E]">
              Marquer comme résolue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}