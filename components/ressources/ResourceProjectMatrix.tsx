// ResourceProjectMatrix.tsx
import { resourceMatrix } from "@/data/resources";

export default function ResourceProjectMatrix() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-slate-900">
        Matrice Ressource - Projet
      </h2>

      <div className="overflow-hidden rounded-xl border border-slate-100">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs font-bold text-slate-400">
            <tr>
              <th className="px-3 py-2.5 text-left">Ressource</th>
              <th className="px-3 py-2.5 text-left">Rôle</th>
              <th className="px-3 py-2.5 text-left">Département</th>
              <th className="px-3 py-2.5 text-center">App Mobile</th>
              <th className="px-3 py-2.5 text-center">Refonte SI Crédit</th>
              <th className="px-3 py-2.5 text-center">Open Banking</th>
              <th className="px-3 py-2.5 text-center">Paiement Instantané</th>
              <th className="px-3 py-2.5 text-center">Data & Analytics</th>
              <th className="px-3 py-2.5 text-center">Disponibilité</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {resourceMatrix.map((item) => (
              <tr key={item.resource}>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://i.pravatar.cc/40?u=${item.resource}`}
                      alt={item.resource}
                      className="h-7 w-7 rounded-full"
                    />

                    <span className="font-bold text-slate-700">
                      {item.resource}
                    </span>
                  </div>
                </td>

                <td className="px-3 py-3 font-semibold text-slate-500">
                  {item.role}
                </td>

                <td className="px-3 py-3 font-bold text-[#3D6FC9]">
                  {item.department}
                </td>

                {[
                  item.appMobile,
                  item.credit,
                  item.openBanking,
                  item.paiement,
                  item.data,
                ].map((value, index) => (
                  <td key={index} className="px-3 py-3 text-center">
                    <span
                      className={`inline-flex min-w-12 justify-center rounded-lg px-3 py-1 text-xs font-bold ${
                        value === "-"
                          ? "bg-slate-50 text-slate-400"
                          : "bg-[#E4EEFC] text-[#3D6FC9]"
                      }`}
                    >
                      {value}
                    </span>
                  </td>
                ))}

                <td className="px-3 py-3 text-center">
                  <span className="rounded-full bg-[#DFF3E6] px-3 py-1 text-xs font-black text-[#2F9C5E]">
                    {item.availability}
                  </span>
                </td>
              </tr>
            ))}

            <tr className="bg-slate-50">
              <td className="px-3 py-3 font-black text-[#1E2433]" colSpan={3}>
                Total Allocation (FTE)
              </td>
              <td className="px-3 py-3 text-center font-black text-[#1E2433]">
                2.3
              </td>
              <td className="px-3 py-3 text-center font-black text-[#1E2433]">
                1.8
              </td>
              <td className="px-3 py-3 text-center font-black text-[#1E2433]">
                1.7
              </td>
              <td className="px-3 py-3 text-center font-black text-[#1E2433]">
                1.5
              </td>
              <td className="px-3 py-3 text-center font-black text-[#1E2433]">
                2.0
              </td>
              <td className="px-3 py-3 text-center font-black text-[#1E2433]">
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}