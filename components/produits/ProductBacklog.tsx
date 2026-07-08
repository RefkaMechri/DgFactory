const backlogStats = [
  { label: "À faire", value: "512", percent: "41%", color: "bg-blue-400" },
  { label: "En cours", value: "376", percent: "30%", color: "bg-emerald-400" },
  { label: "En test", value: "208", percent: "17%", color: "bg-amber-400" },
  { label: "Bloqué", value: "92", percent: "7%", color: "bg-rose-400" },
  { label: "Terminé", value: "60", percent: "5%", color: "bg-slate-300" },
];

const items = [
  {
    element: "Amélioration Onboarding Biométrique",
    product: "App Mobile",
    priority: "Élevée",
    priorityStyle: "bg-rose-50 text-rose-600",
  },
  {
    element: "Intégration Apple Pay & Google Pay",
    product: "Paiement Mobile",
    priority: "Élevée",
    priorityStyle: "bg-rose-50 text-rose-600",
  },
  {
    element: "Simulation de crédit en temps réel",
    product: "Crédit Digital",
    priority: "Moyenne",
    priorityStyle: "bg-amber-50 text-amber-600",
  },
  {
    element: "Dashboard Financier Personnalisé",
    product: "Banque en Ligne",
    priority: "Moyenne",
    priorityStyle: "bg-amber-50 text-amber-600",
  },
  {
    element: "API Agrégation de comptes",
    product: "Open Banking",
    priority: "Faible",
    priorityStyle: "bg-emerald-50 text-emerald-600",
  },
];

export default function ProductBacklog() {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Backlog Summary</h2>

        <div className="mt-7 flex flex-col items-center gap-7 md:flex-row">
          <div className="relative flex h-44 w-44 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#60a5fa_0_41%,#34d399_41%_71%,#fbbf24_71%_88%,#fb7185_88%_95%,#cbd5e1_95%_100%)]">
            <div className="absolute inset-3 rounded-full bg-white" />

            <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(226,232,240,0.8)]">
              <p className="text-3xl font-black text-slate-900">1248</p>
              <p className="text-xs font-semibold text-slate-400">Tickets</p>
            </div>
          </div>

          <div className="w-full space-y-3">
            {backlogStats.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${item.color}`} />

                  <span className="text-sm font-semibold text-slate-600">
                    {item.label}
                  </span>
                </div>

                <div className="text-right">
                  <p className="text-sm font-black text-slate-900">
                    {item.value}
                  </p>
                  <p className="text-[11px] font-bold text-slate-400">
                    {item.percent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-slate-900">
            Top Éléments du Backlog
          </h2>

          <button className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
            Voir tout
          </button>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-xs font-bold text-slate-400">
              <tr>
                <th className="px-4 py-3 text-left">Élément</th>
                <th className="px-4 py-3 text-left">Produit</th>
                <th className="px-4 py-3 text-left">Priorité</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {items.map((item) => (
                <tr key={item.element} className="bg-white">
                  <td className="px-4 py-4 font-bold text-slate-700">
                    {item.element}
                  </td>

                  <td className="px-4 py-4 font-semibold text-blue-500">
                    {item.product}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${item.priorityStyle}`}
                    >
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-5 text-sm font-bold text-blue-500">
          Voir tout le backlog →
        </button>
      </div>
    </div>
  );
}