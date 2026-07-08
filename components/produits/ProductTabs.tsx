import {
  LayoutGrid,
  CalendarDays,
  LineChart,
  ClipboardList,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";

const tabs = [
  { label: "Vue d’ensemble", icon: LayoutGrid },
  { label: "Roadmap", icon: CalendarDays },
  { label: "Performance", icon: LineChart },
  { label: "Backlog", icon: ClipboardList },
  { label: "Cycle de vie", icon: RefreshCw },
];

export default function ProductTabs() {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 bg-white">
      <div className="flex items-center gap-8">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const active = index === 0;

          return (
            <button
              key={tab.label}
              className={`relative flex items-center gap-2 pb-4 pt-3 text-sm font-bold transition ${
                active
                  ? "text-blue-600"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Icon size={17} strokeWidth={2.2} />

              <span>{tab.label}</span>

              {active && (
                <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-blue-500" />
              )}
            </button>
          );
        })}
      </div>

      <div className="hidden items-center gap-3 lg:flex">
        <select className="h-10 rounded-xl border border-slate-100 bg-white px-4 text-sm font-semibold text-slate-600 shadow-sm outline-none">
          <option>Tous les produits</option>
          <option>Application Mobile Bancaire</option>
          <option>Banque en Ligne</option>
          <option>Crédit Digital</option>
          <option>Paiement Mobile</option>
          <option>Open Banking</option>
        </select>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white text-blue-500 shadow-sm">
          <SlidersHorizontal size={18} />
        </button>

        <button className="flex h-10 items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 text-sm font-bold text-blue-500 shadow-sm">
          <SlidersHorizontal size={18} />
          Filtres avancés
        </button>
      </div>
    </div>
  );
}