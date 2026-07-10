"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";

type MenuItem = {
  title: string;
  href: string;
  icon: (active: boolean) => ReactNode;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

const iconStroke = (active: boolean) => (active ? "#ffffff" : "#8b93c9");

const menuGroups: MenuGroup[] = [
  {
    label: "APERÇU",
    items: [
      {
        title: "Tableau de Bord",
        href: "/dashboard",
        icon: (active) => (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke={iconStroke(active)} strokeWidth="1.7" />
            <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" stroke={iconStroke(active)} strokeWidth="1.7" />
            <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" stroke={iconStroke(active)} strokeWidth="1.7" />
            <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" stroke={iconStroke(active)} strokeWidth="1.7" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "PILOTAGE",
    items: [
      {
        title: "Portefeuille Digital",
        href: "/dashboard/portefeuille",
        icon: (active) => (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="6" width="18" height="13" rx="2" stroke={iconStroke(active)} strokeWidth="1.7" />
            <path d="M3 9h18" stroke={iconStroke(active)} strokeWidth="1.7" />
            <path d="M16 13.5h2.5" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "Produits Digitaux",
        href: "/dashboard/produits",
        icon: (active) => (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 3l8 4.2v9.6L12 21l-8-4.2V7.2L12 3z" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M4 7.2L12 11l8-3.8M12 11v10" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "Squads Agile",
        href: "/dashboard/squads",
        icon: (active) => (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="8" r="3" stroke={iconStroke(active)} strokeWidth="1.7" />
            <circle cx="17" cy="10" r="2.4" stroke={iconStroke(active)} strokeWidth="1.7" />
            <path d="M3.5 19c.6-3.2 3-5 5.5-5s4.9 1.8 5.5 5" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinecap="round" />
            <path d="M14.5 19c.4-2.3 1.7-3.7 3.4-4.2" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "OPÉRATIONS",
    items: [
      {
        title: "Ressources",
        href: "/dashboard/ressources",
        icon: (active) => (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 3l8 4.5-8 4.5-8-4.5L12 3z" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M4 12l8 4.5 8-4.5" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M4 16.5L12 21l8-4.5" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "Budget",
        href: "/dashboard/budget",
        icon: (active) => (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8.5" stroke={iconStroke(active)} strokeWidth="1.7" />
            <path d="M12 7.5v9M14.5 9.7c0-1-1-1.7-2.5-1.7s-2.5.8-2.5 1.9c0 2.6 5 1.2 5 3.8 0 1.1-1.1 1.9-2.5 1.9s-2.5-.7-2.5-1.7" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "SUIVI & CONTRÔLE",
    items: [
      {
        title: "Performance KPI",
        href: "/dashboard/kpi",
        icon: (active) => (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3.5 19V5M3.5 19h17" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinecap="round" />
            <path d="M6.5 15.5l3.5-4 3 2.5 4.5-6" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 8h3v3" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "Centre d'Alertes",
        href: "/dashboard/alertes",
        icon: (active) => (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 4a5.5 5.5 0 00-5.5 5.5c0 4.5-1.5 5.8-2 6.5h15c-.5-.7-2-2-2-6.5A5.5 5.5 0 0012 4z" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M10 19a2.2 2.2 0 004 0" stroke={iconStroke(active)} strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <aside
      className={`relative h-screen flex flex-col bg-gradient-to-b from-[#0A1730] to-[#060E22] text-white overflow-visible transition-all duration-300 ${
        open ? "w-72" : "w-20"
      }`}
    >
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#F2622E] via-[#F2622E]/40 to-[#2FBFAE]" />

      <button
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
          setShowLogout(false);
        }}
        className="absolute top-6 -right-4 z-30 h-8 w-8 rounded-full bg-[#F2622E] text-white shadow-lg flex items-center justify-center hover:bg-[#E0501F] transition"
      >
        <svg
          className={`transition-transform duration-300 ${open ? "" : "rotate-180"}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`${open ? "px-7" : "px-3 text-center"} pt-8 pb-6 border-b border-white/[0.06]`}>
        {open ? (
          <>
            <h1 className="text-[#F2622E] font-extrabold text-lg tracking-tight leading-none">
              YK DIGITAL
            </h1>
            <p className="text-[11px] text-[#7C86B3] mt-1.5 tracking-wide">
              Digital Factory
            </p>
          </>
        ) : (
          <h1 className="text-[#F2622E] font-extrabold text-lg">YK</h1>
        )}
      </div>

      <nav className="yaqeen-nav-scroll flex-1 overflow-y-auto px-4 py-5 space-y-6">
        {menuGroups.map((group) => (
          <div key={group.label}>
            {open && (
              <p className="px-3 mb-2 text-[10.5px] font-semibold tracking-[0.12em] text-[#4C5680]">
                {group.label}
              </p>
            )}

            <div className="space-y-1">
              {group.items.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={!open ? item.title : undefined}
                    className={`group relative flex items-center rounded-xl py-2.5 text-[13.5px] font-medium transition-all duration-200 ${
                      open ? "gap-3 px-3" : "justify-center px-0"
                    } ${
                      active
                        ? "bg-gradient-to-r from-[#F2622E] to-[#E0501F] text-white shadow-[0_6px_18px_-6px_rgba(242,98,46,0.55)]"
                        : "text-[#A6ADD1] hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center justify-center shrink-0">
                      {item.icon(active)}
                    </span>

                    {open && <span className="truncate">{item.title}</span>}

                    {open && active && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white/80" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="relative border-t border-white/[0.06] p-4">
        <div
          className={`flex items-center rounded-xl py-2.5 hover:bg-white/[0.05] transition ${
            open ? "gap-3 px-2" : "justify-center px-0"
          }`}
        >
          <div className="relative shrink-0">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#F2622E] to-[#2FBFAE] flex items-center justify-center text-white text-sm font-bold">
              IH
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#4ade80] border-2 border-[#0A1730]" />
          </div>

          {open && (
            <>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  Imen Hamdi
                </p>
                <p className="text-[11.5px] text-[#7C86B3] truncate">
                  Digital Factory Director
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowLogout((prev) => !prev)}
                className="ml-auto shrink-0 text-[#7C86B3] hover:text-white transition"
              >
                <svg
                  className={`transition-transform duration-200 ${
                    showLogout ? "rotate-90" : ""
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>

        {open && showLogout && (
          <button
            type="button"
            onClick={handleLogout}
            className="mt-2 w-full rounded-xl px-3 py-2 text-left text-[13px] font-medium text-[#A6ADD1] hover:bg-white/[0.05] hover:text-white transition"
          >
            Se déconnecter
          </button>
        )}
      </div>

      <style jsx global>{`
        .yaqeen-nav-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(242, 98, 46, 0.45) transparent;
        }
        .yaqeen-nav-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .yaqeen-nav-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .yaqeen-nav-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f2622e, #2fbfae);
          border-radius: 999px;
        }
        .yaqeen-nav-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ff7a45, #38d6c2);
        }
      `}</style>
    </aside>
  );
}