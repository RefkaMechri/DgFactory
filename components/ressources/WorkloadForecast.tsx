import { workloadForecast } from "@/data/resources";

function getBadgeStyle(value: string) {
  const numeric = Number(value.replace("%", ""));

  if (numeric > 85) return "bg-rose-50 text-rose-600";
  if (numeric >= 75) return "bg-amber-50 text-amber-600";
  return "bg-emerald-50 text-emerald-600";
}

export default function WorkloadForecast() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Prévision de Charge
          </h2>
          <p className="text-xs font-semibold text-slate-400">
            Projection sur les 4 prochaines semaines
          </p>
        </div>

        <button className="rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
          Exporter
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs font-bold text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">Département</th>
              <th className="px-4 py-3 text-center">S21</th>
              <th className="px-4 py-3 text-center">S22</th>
              <th className="px-4 py-3 text-center">S23</th>
              <th className="px-4 py-3 text-center">S24</th>
              <th className="px-4 py-3 text-center">Tendance</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {workloadForecast.map((row) => (
              <tr
                key={row.department}
                className={row.department === "Global" ? "bg-slate-50" : ""}
              >
                <td className="px-4 py-4 font-black text-slate-800">
                  {row.department}
                </td>

                {[row.s21, row.s22, row.s23, row.s24].map((value, index) => (
                  <td key={index} className="px-4 py-4 text-center">
                    <span
                      className={`inline-flex min-w-16 justify-center rounded-lg px-3 py-1 text-xs font-black ${getBadgeStyle(
                        value
                      )}`}
                    >
                      {value}
                    </span>
                  </td>
                ))}

                <td className="px-4 py-4 text-center text-lg font-black text-blue-500">
                  {row.trend}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}