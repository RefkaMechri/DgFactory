
"use client";
import {
  Lightbulb,
  Search,
  Code2,
  FlaskConical,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    name: "Idéation",
    count: "5 produits",
    icon: Lightbulb,
    style: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    name: "Analyse",
    count: "6 produits",
    icon: Search,
    style: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    name: "Développement",
    count: "10 produits",
    icon: Code2,
    style: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    name: "Test",
    count: "6 produits",
    icon: FlaskConical,
    style: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    name: "Déploiement",
    count: "3 produits",
    icon: Rocket,
    style: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  {
    name: "En Production",
    count: "5 produits",
    icon: CheckCircle2,
    style: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
];

const rows = [
  {
    product: "Application Mobile Bancaire",
    phase: "Développement",
    progress: 70,
    next: "Tests Utilisateurs",
    date: "15/06/2026",
    color: "bg-blue-400",
  },
  {
    product: "Crédit Digital",
    phase: "Test",
    progress: 40,
    next: "Déploiement",
    date: "30/06/2026",
    color: "bg-violet-400",
  },
  {
    product: "Open Banking",
    phase: "Déploiement",
    progress: 80,
    next: "Go Live",
    date: "10/07/2026",
    color: "bg-cyan-400",
  },
];

export default function ProductLifecycle() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">
        Cycle de Vie des Produits
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.name}
              className={`rounded-2xl border p-4 text-center shadow-[0_8px_24px_rgba(15,23,42,0.03)] ${step.style}`}
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Icon size={20} strokeWidth={2.3} />
              </div>

              <p className="mt-3 text-xs font-black">{step.name}</p>
              <p className="mt-1 text-[11px] font-bold opacity-60">
                {step.count}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-7 overflow-hidden rounded-2xl border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs font-bold text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">Produit</th>
              <th className="px-4 py-3 text-left">Phase Actuelle</th>
              <th className="px-4 py-3 text-left">Progression</th>
              <th className="px-4 py-3 text-left">Prochaine Étape</th>
              <th className="px-4 py-3 text-left">Date Cible</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row) => (
              <tr key={row.product}>
                <td className="px-4 py-4 font-bold text-slate-700">
                  {row.product}
                </td>

                <td className="px-4 py-4">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                    {row.phase}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-32 rounded-full bg-slate-100">
                      <div
                        className={`h-2.5 rounded-full ${row.color}`}
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>

                    <span className="text-xs font-black text-slate-600">
                      {row.progress}%
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4 font-semibold text-slate-500">
                  {row.next}
                </td>

                <td className="px-4 py-4 font-semibold text-slate-400">
                  {row.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mt-5 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
        Voir tous les produits →
      </button>
    </div>
  );
}