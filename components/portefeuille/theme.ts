export const theme = {
  ink: "#08142A",
  ink2: "#0D1B35",
  accent: "#FF7A59",
  accentHover: "#F05A34",
  accentSoft: "#FFF1EC",
  bg: "#F7F8FC",
  card: "#FFFFFF",
  border: "#E6EAF2",
  text: "#101827",
  muted: "#6F7890",
  mutedSoft: "#A8B0C2",
} as const;

export const chartPalette = [
  "#FFB8A6", // pastel orange/coral
  "#AFCBFF", // pastel blue
  "#CBB9FF", // pastel violet
  "#AEE8C9", // pastel green
  "#FFD89E", // pastel amber
  "#C9D3E2", // pastel slate
];

export function badgeClasses(value: string) {
  const map: Record<string, string> = {
    Critique: "bg-rose-50 text-rose-500 ring-1 ring-rose-100",
    Risque: "bg-rose-50 text-rose-500 ring-1 ring-rose-100",
    Haute: "bg-orange-50 text-orange-500 ring-1 ring-orange-100",
    Moyenne: "bg-amber-50 text-amber-600 ring-1 ring-amber-100",
    Faible: "bg-slate-100 text-slate-500 ring-1 ring-slate-200",

    Dev: "bg-blue-50 text-blue-500 ring-1 ring-blue-100",
    Analyse: "bg-violet-50 text-violet-500 ring-1 ring-violet-100",
    "En cours": "bg-orange-50 text-orange-500 ring-1 ring-orange-100",
    Test: "bg-amber-50 text-amber-600 ring-1 ring-amber-100",
    Tests: "bg-amber-50 text-amber-600 ring-1 ring-amber-100",
    "En prod.": "bg-emerald-50 text-emerald-500 ring-1 ring-emerald-100",
    Déploiement: "bg-emerald-50 text-emerald-500 ring-1 ring-emerald-100",
    Idéation: "bg-purple-50 text-purple-500 ring-1 ring-purple-100",
  };

  return map[value] ?? "bg-slate-100 text-slate-500 ring-1 ring-slate-200";
}

export function progressColor(progress: number) {
  if (progress === 100) return "#7DD3A8";
  if (progress >= 70) return "#AFCBFF";
  if (progress >= 45) return "#FFB8A6";
  return "#FFD89E";
}