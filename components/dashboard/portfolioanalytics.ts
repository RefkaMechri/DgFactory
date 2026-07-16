
// Minimal shape this file depends on — matches the fields already used in
// ProjectsTable. If your real Project type in "@/data/projects" has different
// names, just adjust the accessors below (marked with comments).
export interface PortfolioProject {
  id: number | string;
  name: string;
  category: string;
  priority: string;
  status: string;
  budget: string | number;
  progress: number;
  owner: string;
}

export interface SliceDatum {
  name: string;
  value: number;
  color: string;
}

// Groups projects by domain (project.category) and returns counts per domain.
export function getDomainDistribution(projects: PortfolioProject[]): SliceDatum[] {
  const counts = new Map<string, number>();
  projects.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, value], i) => ({ name, value, color: chartPalette[i % chartPalette.length] }));
}

// Sums budget by domain. Budgets are parsed as numbers — adjust this parser if
// your budget field is formatted differently (e.g. "18,5 M" vs "18.5").
export function getBudgetDistribution(projects: PortfolioProject[]): SliceDatum[] {
  const totals = new Map<string, number>();
  projects.forEach((p) => {
    const raw = typeof p.budget === "number" ? p.budget : parseFloat(String(p.budget).replace(",", "."));
    const value = Number.isFinite(raw) ? raw : 0;
    totals.set(p.category, (totals.get(p.category) ?? 0) + value);
  });

  return Array.from(totals.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, value], i) => ({ name, value, color: chartPalette[i % chartPalette.length] }));
}

// Maps each project's status onto one of 5 pipeline stages. Adjust STAGE_MAP
// to match the actual status strings your data uses.
const STAGE_ORDER = ["Idéation", "Analyse", "En cours", "Tests", "Déploiement"] as const;
const STAGE_MAP: Record<string, (typeof STAGE_ORDER)[number]> = {
  Idéation: "Idéation",
  Analyse: "Analyse",
  Dev: "En cours",
  "En cours": "En cours",
  Test: "Tests",
  Tests: "Tests",
  "En prod.": "Déploiement",
  Déploiement: "Déploiement",
};

export interface FunnelStage {
  name: string;
  value: number;
}

export function getPipelineStages(projects: PortfolioProject[]): FunnelStage[] {
  const counts = new Map<string, number>(STAGE_ORDER.map((s) => [s, 0]));
  projects.forEach((p) => {
    const stage = STAGE_MAP[p.status];
    if (stage) counts.set(stage, (counts.get(stage) ?? 0) + 1);
  });
  return STAGE_ORDER.map((name) => ({ name, value: counts.get(name) ?? 0 }));
}

// Groups projects into the 4 macro-statuses shown on the executive dashboard
// donut ("État du Portefeuille"). Adjust STATUS_GROUPS if your status strings
// differ — any status not listed anywhere falls through and simply isn't
// counted (same behavior the table/badges already have for unknown values).
export interface StatusDatum {
  label: string;
  value: number;
  color: string;
}

const STATUS_GROUPS: { label: string; statuses: string[]; color: string }[] = [
  { label: "En cours", statuses: ["Idéation", "Analyse", "Dev", "En cours", "Test", "Tests"], color: "#1d4ed8" },
  { label: "En production", statuses: ["En prod.", "Déploiement"], color: "#3b82f6" },
  { label: "À risque", statuses: ["Risque"], color: "#f59e0b" },
  { label: "En pause", statuses: ["En pause", "Pause"], color: "#94a3b8" },
];

export function getPortfolioStatusDistribution(projects: PortfolioProject[]): StatusDatum[] {
  return STATUS_GROUPS.map((group) => ({
    label: group.label,
    value: projects.filter((p) => group.statuses.includes(p.status)).length,
    color: group.color,
  }));
}