"use client";
import {
  Smartphone,
  Monitor,
  CreditCard,
  Wallet,
  Network,
} from "lucide-react";

const roadmap = [
  {
    name: "Application Mobile Bancaire",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-700",
    items: [
      {
        title: "Nouveautés & Expérience",
        left: "0%",
        width: "44%",
        color: "bg-blue-200 text-blue-700",
      },
      {
        title: "V2.5",
        left: "46%",
        width: "30%",
        color: "bg-blue-200 text-blue-700",
      },
    ],
  },

  {
    name: "Banque en Ligne",
    icon: Monitor,
    color: "bg-emerald-100 text-emerald-700",
    items: [
      {
        title: "Refonte Tableau de bord",
        left: "0%",
        width: "34%",
        color: "bg-emerald-200 text-emerald-700",
      },
      {
        title: "Open Finance",
        left: "40%",
        width: "28%",
        color: "bg-emerald-200 text-emerald-700",
      },
    ],
  },

  {
    name: "Crédit Digital",
    icon: CreditCard,
    color: "bg-amber-100 text-amber-700",
    items: [
      {
        title: "Scoring IA",
        left: "0%",
        width: "26%",
        color: "bg-amber-200 text-amber-700",
      },
      {
        title: "Automatisation Décision",
        left: "48%",
        width: "34%",
        color: "bg-amber-200 text-amber-700",
      },
    ],
  },

  {
    name: "Paiement Mobile",
    icon: Wallet,
    color: "bg-violet-100 text-violet-700",
    items: [
      {
        title: "Paiement International",
        left: "0%",
        width: "42%",
        color: "bg-violet-200 text-violet-700",
      },
      {
        title: "Wallet & NFC",
        left: "50%",
        width: "24%",
        color: "bg-violet-200 text-violet-700",
      },
    ],
  },

  {
    name: "Open Banking",
    icon: Network,
    color: "bg-cyan-100 text-cyan-700",
    items: [
      {
        title: "API Marketplace",
        left: "0%",
        width: "34%",
        color: "bg-cyan-200 text-cyan-700",
      },
      {
        title: "Open Data Services",
        left: "44%",
        width: "34%",
        color: "bg-cyan-200 text-cyan-700",
      },
    ],
  },
];

export default function ProductRoadmap() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">

      <h2 className="text-lg font-bold text-slate-900">
        Roadmap des Produits
      </h2>

      {/* Timeline */}

      <div className="mt-8 grid grid-cols-[220px_1fr]">

        <div />

        <div className="relative">

          <div className="grid grid-cols-4 text-center">

            <div>
              <p className="text-xs font-bold text-slate-700">
                T2 2030
              </p>

              <p className="text-[11px] text-slate-400">
                Avr - Juin
              </p>
            </div>

            <div className="relative">

              <div className="absolute left-0 top-0 bottom-0 w-px bg-red-300" />

              <p className="text-xs font-bold text-red-500">
                Aujourd&lsquo;hui
              </p>

              <p className="mt-3 text-xs font-bold text-slate-700">
                T3 2030
              </p>

              <p className="text-[11px] text-slate-400">
                Juil - Sept
              </p>

            </div>

            <div>

              <p className="text-xs font-bold text-slate-700">
                T4 2030
              </p>

              <p className="text-[11px] text-slate-400">
                Oct - Déc
              </p>

            </div>

            <div>

              <p className="text-xs font-bold text-slate-700">
                T1 2027
              </p>

              <p className="text-[11px] text-slate-400">
                Jan - Mars
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* lignes */}

      <div className="mt-6 space-y-5">

        {roadmap.map((row) => {
          const Icon = row.icon;

          return (
            <div
              key={row.name}
              className="grid grid-cols-[220px_1fr] items-center gap-4"
            >

              {/* Produit */}

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${row.color}`}
                >
                  <Icon size={18} />
                </div>

                <span className="text-sm font-semibold text-slate-700">
                  {row.name}
                </span>

              </div>

              {/* Timeline */}

              <div className="relative h-10 rounded-xl bg-slate-50">

                {/* lignes verticales */}

                <div className="absolute left-1/4 top-0 h-full w-px bg-slate-100" />
                <div className="absolute left-2/4 top-0 h-full w-px bg-slate-100" />
                <div className="absolute left-3/4 top-0 h-full w-px bg-slate-100" />

                {row.items.map((item) => (

                  <div
                    key={item.title}
                    className={`absolute top-1 flex h-8 items-center justify-center rounded-xl px-3 text-xs font-bold shadow-sm ${item.color}`}
                    style={{
                      left: item.left,
                      width: item.width,
                    }}
                  >
                    {item.title}
                  </div>

                ))}

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}