import { teamCapacity } from "@/data/squads";

export default function TeamCapacity() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Capacité Équipe
          </h2>
          <p className="text-xs font-semibold text-slate-400">
            Disponibilité par sprint
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
              <th className="px-4 py-3 text-left">Membre</th>
              <th className="px-4 py-3 text-left">Rôle</th>
              <th className="px-4 py-3 text-left">S20</th>
              <th className="px-4 py-3 text-left">S21</th>
              <th className="px-4 py-3 text-left">S22</th>
              <th className="px-4 py-3 text-left">S23</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {teamCapacity.map((member) => (
              <tr key={member.member}>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/40?u=${member.member}`}
                      alt={member.member}
                      className="h-8 w-8 rounded-full"
                    />

                    <span className="font-bold text-slate-700">
                      {member.member}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4 font-semibold text-slate-500">
                  {member.role}
                </td>

                {[member.s20, member.s21, member.s22, member.s23].map(
                  (value, index) => (
                    <td key={index} className="px-4 py-4">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-600">
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
    </div>
  );
}