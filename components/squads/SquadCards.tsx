import { squads } from "@/data/squads";
import { Users, Gauge, Activity } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles: Record<string, any> = {
  blue: {
    card: "bg-blue-50 border-blue-100",
    icon: "bg-blue-100 text-blue-600",
    ring: "border-blue-500",
  },
  orange: {
    card: "bg-orange-50 border-orange-100",
    icon: "bg-orange-100 text-orange-600",
    ring: "border-orange-500",
  },
  green: {
    card: "bg-emerald-50 border-emerald-100",
    icon: "bg-emerald-100 text-emerald-600",
    ring: "border-emerald-500",
  },
  violet: {
    card: "bg-violet-50 border-violet-100",
    icon: "bg-violet-100 text-violet-600",
    ring: "border-violet-500",
  },
  cyan: {
    card: "bg-cyan-50 border-cyan-100",
    icon: "bg-cyan-100 text-cyan-600",
    ring: "border-cyan-500",
  },
};

export default function SquadCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
      {squads.map((squad) => {
        const Icon = squad.icon;
        const style = styles[squad.color];

        return (
          <div
            key={squad.name}
            className={`rounded-3xl border p-5 shadow-sm ${style.card}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.icon}`}
              >
                <Icon size={24} />
              </div>

              <h3 className="text-base font-black text-slate-900">
                {squad.name}
              </h3>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <img
                  src={`https://i.pravatar.cc/40?u=${squad.scrumMaster}`}
                  className="h-8 w-8 rounded-full"
                  alt={squad.scrumMaster}
                />
                <div>
                  <p className="text-[10px] font-semibold text-slate-500">
                    Scrum Master
                  </p>
                  <p className="text-[11px] font-bold text-slate-800">
                    {squad.scrumMaster}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src={`https://i.pravatar.cc/40?u=${squad.productOwner}`}
                  className="h-8 w-8 rounded-full"
                  alt={squad.productOwner}
                />
                <div>
                  <p className="text-[10px] font-semibold text-slate-500">
                    Product Owner
                  </p>
                  <p className="text-[11px] font-bold text-slate-800">
                    {squad.productOwner}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2 border-t border-white/70 pt-4">
              <div>
                <p className="text-[10px] font-semibold text-slate-500">
                  Membres
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <Users size={13} className="text-blue-500" />
                  <b className="text-sm">{squad.members}</b>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-500">
                  Sprint
                </p>
                <p className="mt-1 text-sm font-black">{squad.sprint}</p>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-500">
                  Velocity
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <Gauge size={13} className="text-slate-500" />
                  <b className="text-sm">{squad.velocity}</b>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-500">
                  Charge
                </p>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-4 bg-white text-xs font-black ${style.ring}`}
                >
                  {squad.charge}%
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}