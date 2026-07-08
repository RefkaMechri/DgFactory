// SquadTabs.tsx
import {
  LayoutGrid,
  CalendarDays,
  ClipboardList,
  Users,
  Rocket,
  FileBarChart,
} from "lucide-react";

const tabs = [
  { label: "Vue d'ensemble", icon: LayoutGrid },
  { label: "Planning Sprint", icon: CalendarDays },
  { label: "Backlog", icon: ClipboardList },
  { label: "Capacité Équipe", icon: Users },
  { label: "Releases", icon: Rocket },
  { label: "Rapports", icon: FileBarChart },
];

export default function SquadTabs() {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 bg-white">
      <div className="flex items-center gap-8">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const active = index === 0;

          return (
            <button
              key={tab.label}
              className={`relative flex items-center gap-2 pb-3 pt-2.5 text-sm font-bold transition ${
                active
                  ? "text-[#3D6FC9]"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Icon size={17} strokeWidth={2.2} />
              <span>{tab.label}</span>

              {active && (
                <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#7CA8E8]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}