"use client";

import { useState, type FormEvent } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";

interface NewProjectModalProps {
  onClose: () => void;
  onSubmit: (project: Omit<Project, "id">) => void;
}

const PRIORITIES = ["Critique", "Haute", "Moyenne", "Faible"];
const STATUSES = ["Idéation", "Analyse", "Dev", "Test", "En prod.", "Risque"];

export default function NewProjectModal({ onClose, onSubmit }: NewProjectModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(PRIORITIES[2]);
  const [status, setStatus] = useState(STATUSES[0]);
  const [budget, setBudget] = useState("");
  const [owner, setOwner] = useState("");

  const canSubmit = name.trim() !== "" && category.trim() !== "" && owner.trim() !== "" && budget.trim() !== "";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onSubmit({
      name: name.trim(),
      category: category.trim(),
      priority,
      status,
      budget: Number(budget) || 0,
      progress: 0,
      owner: owner.trim(),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-[20px] bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-black text-[#111827]">Nouveau projet</h2>
          <button onClick={onClose} className="text-[#70718A] hover:text-[#111827]">
            <X size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="mb-1 block text-[11px] font-bold text-[#70718A]">Nom du projet</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-9 w-full rounded-xl border border-[#E7E8F0] bg-[#FAFBFD] px-3 text-xs font-medium text-[#111827] outline-none placeholder:text-[#A7ADBD] focus:border-[#FF6A45]"
              placeholder="Ex: Refonte parcours crédit"
            />
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-bold text-[#70718A]">Domaine</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-9 w-full rounded-xl border border-[#E7E8F0] bg-[#FAFBFD] px-3 text-xs font-medium text-[#111827] outline-none placeholder:text-[#A7ADBD] focus:border-[#FF6A45]"
              placeholder="Ex: Data & IA"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-[11px] font-bold text-[#70718A]">Priorité</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="h-9 w-full rounded-xl border border-[#E7E8F0] bg-[#FAFBFD] px-2 text-xs font-semibold text-[#111827] outline-none focus:border-[#FF6A45]"
              >
                {PRIORITIES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-bold text-[#70718A]">Statut</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-9 w-full rounded-xl border border-[#E7E8F0] bg-[#FAFBFD] px-2 text-xs font-semibold text-[#111827] outline-none focus:border-[#FF6A45]"
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-[11px] font-bold text-[#70718A]">Budget (K €)</label>
              <input
                type="number"
                min={0}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="h-9 w-full rounded-xl border border-[#E7E8F0] bg-[#FAFBFD] px-3 text-xs font-medium text-[#111827] outline-none placeholder:text-[#A7ADBD] focus:border-[#FF6A45]"
                placeholder="150"
              />
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-bold text-[#70718A]">Responsable</label>
              <input
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="h-9 w-full rounded-xl border border-[#E7E8F0] bg-[#FAFBFD] px-3 text-xs font-medium text-[#111827] outline-none placeholder:text-[#A7ADBD] focus:border-[#FF6A45]"
                placeholder="Ex: Core Banking & APIs"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[#E7E8F0] px-4 py-2 text-xs font-bold text-[#70718A] hover:text-[#111827]"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={!canSubmit}
              className="rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-orange-600 disabled:opacity-40"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}