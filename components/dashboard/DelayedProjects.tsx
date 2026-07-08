// DelayedProjects.tsx
import { delayedProjects } from "@/data/executive";

export default function DelayedProjects() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Projets en Retard
        </h2>

        <span className="rounded-full bg-[#FCE4E7] px-2.5 py-0.5 text-sm font-black text-[#D1435A]">
          3
        </span>
      </div>

      <div className="space-y-3">
        {delayedProjects.map((project) => (
          <div
            key={project.title}
            className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
          >
            <p className="text-sm font-black text-[#1E2433]">
              {project.title}
            </p>

            <p className="text-sm font-semibold text-slate-400">
              {project.subtitle}
            </p>

            <div className="mt-2 h-2.5 rounded-full bg-slate-100">
              <div
                className="h-2.5 rounded-full bg-[#EDB97D]"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}