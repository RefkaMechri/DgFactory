"use client";

type HeaderProps = {
  title?: string;
  eyebrow?: string;
};

export default function Header({
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between px-8">
      <div>
        <p className="text-[11px] font-semibold tracking-[0.14em] text-[#F2622E] mb-0.5">
        </p>
        <h2 className="text-2xl font-bold text-[#0A1730] leading-tight">
        </h2>
      </div>

      <div className="flex items-center gap-3">
        {/* search */}
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            placeholder="Rechercher..."
            className="w-72 rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-2.5 text-sm text-[#0A1730] placeholder:text-slate-400 outline-none transition focus:border-[#F2622E] focus:bg-white focus:ring-4 focus:ring-[#F2622E]/10"
          />
        </div>

        {/* filters */}
        <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-[#0A1730] transition hover:border-slate-300 hover:bg-slate-50">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M7 12h10M10 18h4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Filtres
        </button>

        <div className="h-8 w-px bg-slate-200 mx-1" />

        {/* notifications */}
        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#0A1730] transition hover:border-slate-300 hover:bg-slate-50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4a5.5 5.5 0 00-5.5 5.5c0 4.5-1.5 5.8-2 6.5h15c-.5-.7-2-2-2-6.5A5.5 5.5 0 0012 4z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path d="M10 19a2.2 2.2 0 004 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-[#F2622E] ring-2 ring-white" />
        </button>

        {/* avatar */}
        <button className="flex items-center gap-2 rounded-xl pl-1 pr-2.5 py-1 transition hover:bg-slate-50">
          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#F2622E] to-[#2FBFAE] flex items-center justify-center text-white text-sm font-bold">
            IH
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-400">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}