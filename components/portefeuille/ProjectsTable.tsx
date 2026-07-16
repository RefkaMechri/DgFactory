"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, MoreVertical, Trash2 } from "lucide-react";
import { badgeClasses, progressColor } from "./theme";
import type { Project } from "@/data/projects";

const PAGE_SIZE = 5;

interface ProjectsTableProps {
  projects: Project[];
  onDelete: (id: Project["id"]) => void;
}

export default function ProjectsTable({ projects, onDelete }: ProjectsTableProps) {
  const [page, setPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState<Project["id"] | null>(null);
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));

  // Keep the current page valid after a project is deleted (e.g. deleting
  // the last item on the last page).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageProjects = useMemo(
    () => projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [projects, page]
  );

  const handleDelete = (id: Project["id"]) => {
    onDelete(id);
    setOpenMenuId(null);
  };

  return (
    <section className="overflow-hidden rounded-[20px] border border-[#E7E8F0] bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EEF0F6] px-4 py-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF6A45]">Portefeuille</p>
          <h2 className="text-sm font-black text-[#111827]">Liste compacte des projets</h2>
        </div>
        <span className="rounded-full bg-[#F6F7FB] px-2.5 py-1 text-[11px] font-bold text-[#70718A]">
          Page {page}/{totalPages}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] text-left text-xs">
          <thead className="bg-[#FAFBFD] text-[10px] uppercase tracking-wide text-[#8A91A3]">
            <tr>
              <th className="px-3 py-2 font-black">#</th>
              <th className="px-3 py-2 font-black">Projet</th>
              <th className="px-3 py-2 font-black">Domaine</th>
              <th className="px-3 py-2 font-black">Priorité</th>
              <th className="px-3 py-2 font-black">Statut</th>
              <th className="px-3 py-2 font-black">Budget</th>
              <th className="px-3 py-2 font-black">Avancement</th>
              <th className="px-3 py-2 font-black">Responsable</th>
              <th className="px-3 py-2 font-black"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#EEF0F6]">
            {pageProjects.length === 0 && (
              <tr>
                <td colSpan={9} className="px-3 py-8 text-center text-[11px] font-semibold text-[#A7ADBD]">
                  Aucun projet
                </td>
              </tr>
            )}
            {pageProjects.map((project) => (
              <tr key={project.id} className="transition hover:bg-[#FAFBFD]">
                <td className="px-3 py-2.5 font-bold text-[#9AA1B2]">{project.id}</td>
                <td className="max-w-[260px] px-3 py-2.5">
                  <p className="truncate font-black text-[#111827] hover:text-[#FF6A45]">{project.name}</p>
                </td>
                <td className="px-3 py-2.5 font-semibold text-[#70718A]">{project.category}</td>
                <td className="px-3 py-2.5">
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-black ${badgeClasses(project.priority)}`}>{project.priority}</span>
                </td>
                <td className="px-3 py-2.5">
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-black ${badgeClasses(project.status)}`}>{project.status}</span>
                </td>
                <td className="px-3 py-2.5 font-black text-[#111827]">{project.budget}</td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 rounded-full bg-[#E8EBF2]">
                      <div className="h-1.5 rounded-full" style={{ width: `${project.progress}%`, backgroundColor: progressColor(project.progress) }} />
                    </div>
                    <span className="w-8 text-[11px] font-black text-[#111827]">{project.progress}%</span>
                  </div>
                </td>
                <td className="px-3 py-2.5 font-semibold text-[#70718A]">{project.owner}</td>
                <td className="relative px-3 py-2.5">
                  <button
                    onClick={() => setOpenMenuId((cur) => (cur === project.id ? null : project.id))}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E7E8F0] text-[#70718A] transition hover:border-[#FF6A45] hover:text-[#FF6A45]"
                  >
                    <MoreVertical size={13} />
                  </button>

                  {openMenuId === project.id && (
                    <>
                      {/* Click-catcher to close the menu when clicking elsewhere */}
                      <div className="fixed inset-0 z-10" onClick={() => setOpenMenuId(null)} />
                      <div className="absolute right-3 top-9 z-20 w-36 overflow-hidden rounded-xl border border-[#E7E8F0] bg-white shadow-lg">
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="flex w-full items-center gap-2 px-3 py-2 text-left text-[11px] font-bold text-rose-500 hover:bg-rose-50"
                        >
                          <Trash2 size={13} />
                          Supprimer
                        </button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#EEF0F6] px-4 py-3 text-[11px] font-semibold text-[#8A91A3]">
        <span>
          {projects.length === 0
            ? "Aucun projet"
            : `Affichage ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, projects.length)} sur ${projects.length}`}
        </span>
        <div className="flex items-center gap-1">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#E7E8F0] disabled:opacity-40">
            <ChevronLeft size={13} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button key={n} onClick={() => setPage(n)} className={`flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-black transition ${n === page ? "bg-[#111827] text-white" : "border border-[#E7E8F0] text-[#70718A]"}`}>
              {n}
            </button>
          ))}
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#E7E8F0] disabled:opacity-40">
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}