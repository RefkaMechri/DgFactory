"use client";

import { useEffect, useState } from "react";
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

/**
 * Source unique de vérité pour la liste des projets, partagée entre toutes
 * les pages (Portefeuille, Dashboard exécutif, ...) via localStorage.
 * Un seul onglet écrit les changements, les autres se resynchronisent grâce
 * à l'évènement "storage".
 */
export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(loadStoredProjects);
  const [isHydrated, setIsHydrated] = useState(false);

  // Resynchronise après le montage (le rendu serveur de Next.js n'a pas
  // accès à window) et écoute les changements faits depuis un autre onglet.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProjects(loadStoredProjects());
    setIsHydrated(true);

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setProjects(loadStoredProjects());
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Sauvegarde à chaque changement, une fois l'hydratation initiale faite.
  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects, isHydrated]);

  const addProject = (project: Omit<Project, "id">) => {
    setProjects((prev) => {
      const nextId = prev.reduce((max, p) => Math.max(max, Number(p.id)), 0) + 1;
      return [...prev, { ...project, id: nextId }];
    });
  };

  const deleteProject = (id: Project["id"]) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return { projects, addProject, deleteProject, isHydrated };
}