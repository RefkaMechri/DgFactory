"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import PortfolioStats from "@/components/portefeuille/PortfolioStats";
import PortfolioFilters from "@/components/portefeuille/PortfolioFilters";
import ProjectsTable from "@/components/portefeuille/ProjectsTable";
import PortfolioCharts from "@/components/portefeuille/portfoliocharts";
import NewProjectModal from "@/components/portefeuille/NewProjectModal";
import { projects as initialProjects, type Project } from "@/data/projects";

const STORAGE_KEY = "yk-digital:portefeuille-projects";

// Lit le localStorage une seule fois, avant le premier rendu, pour éviter
// un "flash" des données par défaut suivi des données sauvegardées.
function loadStoredProjects(): Project[] {
  if (typeof window === "undefined") return initialProjects;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProjects;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : initialProjects;
  } catch {
    return initialProjects;
  }
}

export default function PortefeuillePage() {
  const [projects, setProjects] = useState<Project[]>(loadStoredProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Recharge depuis localStorage après le montage (nécessaire car le rendu
  // serveur de Next.js n'a pas accès à window, donc le premier rendu côté
  // client doit rester identique à celui du serveur avant de resynchroniser).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProjects(loadStoredProjects());
    setIsHydrated(true);
  }, []);

  // Sauvegarde à chaque changement, une fois l'hydratation initiale faite.
  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects, isHydrated]);

  const handleAddProject = (project: Omit<Project, "id">) => {
    setProjects((prev) => {
      const nextId = prev.reduce((max, p) => Math.max(max, Number(p.id)), 0) + 1;
      return [...prev, { ...project, id: nextId }];
    });
    setIsModalOpen(false);
  };

  const handleDeleteProject = (id: Project["id"]) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
      <div className="origin-top-left w-[125%] scale-[0.8] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Portefeuille digital
            </p>

            <h1 className="text-2xl font-bold text-slate-900">
              Pilotage des initiatives
            </h1>

            <p className="text-sm text-slate-500">
              Synthèse des budgets, priorités, risques, avancement et pipeline
              projet.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-orange-600"
          >
            <Plus size={16} />
            Nouveau Projet
          </button>
        </div>

        <PortfolioStats projects={projects} />

        <PortfolioCharts projects={projects} />

        <PortfolioFilters />

        <ProjectsTable projects={projects} onDelete={handleDeleteProject} />
      </div>

      {isModalOpen && (
        <NewProjectModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddProject}
        />
      )}
    </div>
  );
}