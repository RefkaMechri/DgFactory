import { planningRows } from "@/data/resources";

function getCellStyle(value: string) {
  const numeric = Number(value.replace("%", ""));

  if (numeric > 85) return "bg-rose-50 text-rose-600";
  if (numeric >= 65) return "bg-amber-50 text-amber-600";
  return "bg-emerald-50 text-emerald-600";
}

export default function ResourcePlanning() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Planning des Ressources
          </h2>
          <p className="text-xs font-semibold text-slate-400">
            Semaine 20 - Mai 2026
          </p>
        </div>

        <button className="rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
          Semaine
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs font-bold text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">Ressource</th>
              <th className="px-4 py-3 text-center">Lun 12</th>
              <th className="px-4 py-3 text-center">Mar 13</th>
              <th className="px-4 py-3 text-center">Mer 14</th>
              <th className="px-4 py-3 text-center">Jeu 15</th>
              <th className="px-4 py-3 text-center">Ven 16</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {planningRows.map((row) => (
              <tr key={row.resource}>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/40?u=${row.resource}`}
                      alt={row.resource}
                      className="h-8 w-8 rounded-full"
                    />

                    <span className="font-bold text-slate-700">
                      {row.resource}
                    </span>
                  </div>
                </td>

                {[row.mon, row.tue, row.wed, row.thu, row.fri].map(
                  (value, index) => (
                    <td key={index} className="px-4 py-4 text-center">
                      <span
                        className={`inline-flex min-w-16 justify-center rounded-lg px-3 py-1 text-xs font-black ${getCellStyle(
                          value
                        )}`}
                      >
                        {value}
                      </span>
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          Charge faible (&lt;65%)
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          Charge optimale (65% - 85%)
        </span>

        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          Surcharge (&gt;85%)
        </span>
      </div>
    </div>
  );
}