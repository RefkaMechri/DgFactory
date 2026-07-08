"use client";

import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";

const selects = [
  "Domaines",
  "Statuts",
  "Priorités",
  "Directions",
  "Responsables",
];

export default function PortfolioFilters() {
  return (
    <div className="rounded-[20px] border border-[#E7E8F0] bg-white p-3 shadow-sm">
      <div className="grid grid-cols-[minmax(210px,1fr)_repeat(5,minmax(120px,145px))_86px_34px] items-center gap-2">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#A7ADBD]" size={14} />
          <input
            placeholder="Rechercher..."
            className="h-9 w-full rounded-xl border border-[#E7E8F0] bg-[#FAFBFD] pl-8 pr-3 text-xs font-medium text-[#111827] outline-none placeholder:text-[#A7ADBD] focus:border-[#FF6A45]"
          />
        </div>

        {selects.map((label) => (
          <select
            key={label}
            className="h-9 min-w-0 rounded-xl border border-[#E7E8F0] bg-[#FAFBFD] px-2 text-xs font-semibold text-[#111827] outline-none focus:border-[#FF6A45]"
            defaultValue={label}
          >
            <option>{label}</option>
          </select>
        ))}

        <button className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl border border-[#E7E8F0] bg-white px-2 text-xs font-bold text-[#111827] hover:border-[#FF6A45] hover:text-[#FF6A45]">
          <SlidersHorizontal size={13} />
          Avancés
        </button>

        <button className="inline-flex h-9 items-center justify-center rounded-xl text-[#70718A] hover:text-[#111827]">
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  );
}