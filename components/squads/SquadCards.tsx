// SquadCards.tsx
import { squads } from "@/data/squads";
import { Users, Gauge, Activity } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles: Record<string, any> = {
  blue: {
    card: "bg-[#EFF5FD] border-[#DCE9FA]",
    icon: "bg-[#E4EEFC] text-[#3D6FC9]",
    ring: "border-[#8FB4E8]",
    text: "text-[#3D6FC9]",
  },
  orange: {
    card: "bg-[#FFF6EC] border-[#FBE6CC]",
    icon: "bg-[#FFE8D2] text-[#C9711F]",
    ring: "border-[#EDB97D]",
    text: "text-[#C9711F]",
  },
  green: {
    card: "bg-[#F0FAF3] border-[#DCF0E3]",
    icon: "bg-[#DFF3E6] text-[#2F9C5E]",
    ring: "border-[#8FD1A8]",
    text: "text-[#2F9C5E]",
  },
  violet: {
    card: "bg-[#F5F2FC] border-[#E5DCF7]",
    icon: "bg-[#EDE7FA] text-[#6E56C9]",
    ring: "border-[#B7A6E8]",
    text: "text-[#6E56C9]",
  },
  cyan: {
    card: "bg-[#EFFAFB] border-[#D6EFF2]",
    icon: "bg-[#DFF4F6] text-[#1E8FA0]",
    ring: "border-[#8CD3DB]",
    text: "text-[#1E8FA0]",
  },
};

export default function SquadCards() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
      {squads.map((squad) => {
        const Icon = squad.icon;
        const style = styles[squad.color];

        return (
          <div
            key={squad.name}
            className={`rounded-2xl border p-4 shadow-sm ${style.card}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${style.icon}`}
              >
                <Icon size={22} />
              </div>

              <h3 className="text-base font-black text-[#1E2433]">
                {squad.name}
              </h3>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <img
                  src={`https://i.pravatar.cc/40?u=${squad.scrumMaster}`}
                  className="h-7 w-7 rounded-full"
                  alt={squad.scrumMaster}
                />
                <div>
                  <p className="text-[10px] font-semibold text-slate-500">
                    Scrum Master
                  </p>
                  <p className="text-[11px] font-bold text-[#1E2433]">
                    {squad.scrumMaster}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src={`https://i.pravatar.cc/40?u=${squad.productOwner}`}
                  className="h-7 w-7 rounded-full"
                  alt={squad.productOwner}
                />
                <div>
                  <p className="text-[10px] font-semibold text-slate-500">
                    Product Owner
                  </p>
                  <p className="text-[11px] font-bold text-[#1E2433]">
                    {squad.productOwner}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2 border-t border-white/70 pt-3">
              <div>
                <p className="text-[10px] font-semibold text-slate-500">
                  Membres
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <Users size={13} className={style.text} />
                  <b className="text-sm text-[#1E2433]">{squad.members}</b>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-500">
                  Sprint
                </p>
                <p className="mt-1 text-sm font-black text-[#1E2433]">
                  {squad.sprint}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-500">
                  Velocity
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <Gauge size={13} className="text-slate-500" />
                  <b className="text-sm text-[#1E2433]">{squad.velocity}</b>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-500">
                  Charge
                </p>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-4 bg-white text-xs font-black ${style.ring} ${style.text}`}
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