import { Briefcase, Wallet, Target, TrendingUp, ArrowUpRight } from "lucide-react";

interface StatDef {
  title: string;
  value: string;
  delta: string;
  icon: typeof Briefcase;
  gradient: string;
}

const stats: StatDef[] = [
  { title: "Projets actifs", value: "25", delta: "+5%", icon: Briefcase, gradient: "from-blue-500 to-indigo-500" },
  { title: "Budget total", value: "5035 K €", delta: "+5%", icon: Wallet, gradient: "from-orange-500 to-rose-500" },
  { title: "Réussite", value: "44%", delta: "+5%", icon: Target, gradient: "from-emerald-500 to-teal-500" },
  { title: "Valeur générée", value: "8500 K €", delta: "+5%", icon: TrendingUp, gradient: "from-violet-500 to-fuchsia-500" },
];

export default function PortfolioStats() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <article key={stat.title} className="group relative overflow-hidden rounded-[18px] border border-white bg-white p-3 shadow-sm ring-1 ring-[#E7E8F0] transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className={`absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br ${stat.gradient} opacity-10 blur-xl`} />
            <div className="relative flex items-center gap-3">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} text-white shadow-md`}>
                <Icon size={17} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[10px] font-bold uppercase tracking-wide text-[#7B8192]">{stat.title}</p>
                <h3 className="mt-0.5 text-xl font-black tracking-tight text-[#111827]">{stat.value}</h3>
                <p className="mt-0.5 flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                  <ArrowUpRight size={11} /> {stat.delta} vs mois dernier
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
