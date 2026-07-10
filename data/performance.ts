// data/performance.ts

import {
  Clock,
  Gauge,
  Smile,
  Truck,
  ShieldCheck,
  Users,
} from "lucide-react";

export const performanceStats = [
  {
    label: "Time-to-Market",
    value: "9.2 sem.",
    objective: "Obj. 8 sem.",
    progress: 82,
    icon: Clock,
    color: "blue",
  },
  {
    label: "Vélocité Moyenne",
    value: "42 pts/sprint",
    objective: "Obj. 40 pts",
    progress: 92,
    icon: Gauge,
    color: "orange",
  },
  {
    label: "Satisfaction Client",
    value: "4,3/5",
    objective: "Obj. 4,5/5",
    progress: 86,
    icon: Smile,
    color: "emerald",
  },
  {
    label: "Taux Livraison",
    value: "72%",
    objective: "Obj. 90%",
    progress: 72,
    icon: Truck,
    color: "violet",
  },
  {
    label: "Qualité Releases",
    value: "98%",
    objective: "Obj. 95%",
    progress: 98,
    icon: ShieldCheck,
    color: "cyan",
  },
  {
    label: "Productivité Équipes",
    value: "87%",
    objective: "Obj. 95%",
    progress: 87,
    icon: Users,
    color: "slate",
  },
];

export const kpiEvolution = [
  { week: "S1", livraison: 76, velocity: 32, ttm: 92 },
  { week: "S2", livraison: 79, velocity: 36, ttm: 88 },
  { week: "S3", livraison: 78, velocity: 33, ttm: 91 },
  { week: "S4", livraison: 81, velocity: 38, ttm: 84 },
  { week: "S5", livraison: 80, velocity: 39, ttm: 83 },
  { week: "S6", livraison: 84, velocity: 36, ttm: 82 },
  { week: "S7", livraison: 83, velocity: 40, ttm: 80 },
  { week: "S8", livraison: 85, velocity: 41, ttm: 82 },
  { week: "S9", livraison: 86, velocity: 38, ttm: 81 },
  { week: "S10", livraison: 87, velocity: 42, ttm: 84 },
  { week: "S11", livraison: 89, velocity: 40, ttm: 79 },
  { week: "S12", livraison: 90, velocity: 41, ttm: 81 },
];

export const departmentPerformance = [
  { name: "Développement", value: 92, color: "#3b82f6" },
  { name: "Data & IA", value: 88, color: "#fb923c" },
  { name: "UX/UI", value: 85, color: "#10b981" },
  { name: "Infrastructure", value: 90, color: "#8b5cf6" },
  { name: "Cybersécurité", value: 82, color: "#06b6d4" },
];

export const productPerformance = [
  { name: "Application Mobile", value: 92, color: "#2563eb" },
  { name: "Banque en Ligne", value: 88, color: "#f97316" },
  { name: "Crédit Digital", value: 85, color: "#10b981" },
  { name: "Paiement Mobile", value: 90, color: "#8b5cf6" },
  { name: "Open Banking", value: 80, color: "#06b6d4" },
];

export const kpiTable = [
  {
    kpi: "Lead time mise en production",
    definition: "Temps entre l’idée et la livraison en production",
    unit: "pts/%",
    objective: "<8 sem.",
    previous: "9.2 sem.",
    current: "9.2 sem.",
    gap: "-1.4",
    status: "warning",
    progress: 65,
  },
  {
    kpi: "Taux de respect des délais",
    definition: "Part des livraisons faites à la date prévue",
    unit: "pts/%",
    objective: "85%",
    previous: "72%",
    current: "72%",
    gap: "+4%",
    status: "warning",
    progress: 65,
  },
  {
    kpi: "Taux de défauts/incidents",
    definition: "Qualité des releases et stabilité des parcours",
    unit: "pts/%",
    objective: "<3%",
    previous: "2.1%",
    current: "2.1%",
    gap: "-0.5%",
    status: "success",
    progress: 92,
  },
  {
    kpi: "Qualité des Releases",
    definition: "Releases sans anomalie critique",
    unit: "pts/%",
    objective: "95%",
    previous: "98%",
    current: "98%",
    gap: "+2%",
    status: "success",
    progress: 98,
  },
  {
    kpi: "Taux de Rework",
    definition: "Volume de retouches après livraison",
    unit: "pts/%",
    objective: "<5%",
    previous: "8%",
    current: "8%",
    gap: "-2%",
    status: "warning",
    progress: 65,
  },
  {
    kpi: "Vélocité des squads",
    definition: "Capacité des équipes à produire régulièrement",
    unit: "pts/%",
    objective: "40 pts",
    previous: "42 pts",
    current: "42 pts",
    gap: "+6%",
    status: "success",
    progress: 96,
  },
  {
    kpi: "Taux disponibilité équipes",
    definition: "Évalue la stabilité organisationnelle",
    unit: "pts/%",
    objective: "85%",
    previous: "78%",
    current: "78%",
    gap: "-2%",
    status: "warning",
    progress: 66,
  },
  {
    kpi: "Taux conformité des releases",
    definition: "Respect des standards et de la gouvernance",
    unit: "pts/%",
    objective: "95%",
    previous: "94%",
    current: "94%",
    gap: "+2%",
    status: "success",
    progress: 94,
  },
  {
    kpi: "Part projets livrés en agile",
    definition: "Niveau de transformation agile",
    unit: "pts/%",
    objective: "90%",
    previous: "87%",
    current: "87%",
    gap: "+5%",
    status: "success",
    progress: 90,
  },
  {
    kpi: "Satisfaction métiers (NPS interne)",
    definition: "Collaboration entre IT et métiers",
    unit: "pts/%",
    objective: "80%",
    previous: "72%",
    current: "72%",
    gap: "+3%",
    status: "warning",
    progress: 65,
  },
];

export const trendAnalysis = [
  { label: "MAU (Utilisateurs Actifs Mensuels)", value: "Val: 1.2M", trend: "+8%", type: "success" },
  { label: "Taux d'abandon de parcours", value: "Val: 18%", trend: "-3%", type: "warning" },
  { label: "Taux de rétention", value: "Val: 87%", trend: "+2%", type: "success" },
  { label: "NPS / Satisfaction client", value: "Val: 4.3/5", trend: "+0.3", type: "success" },
  { label: "Temps avant-1ère transaction", value: "Val: 8min", trend: "-2min", type: "success" },
];

export const financialPerformance = [
  { value: "2,35x", label: "ROI Digital Factory", sub: "ratio retour sur invest.", color: "text-emerald-500" },
  { value: "16.4 €", label: "Coût/Point de Vélocité", sub: "par point de story", color: "text-blue-500" },
  { value: "8 500 k €", label: "Valeur Métier Générée", sub: "impact direct", color: "text-blue-400" },
];

export const performanceAlerts = [
  {
    title: "Time-to-Market au-dessus objectif",
    description: "9,2 sem. vs objectif 8 sem. — Analyse des blocages recommandée.",
    color: "border-rose-400",
  },
  {
    title: "Charge Infrastructure élevée",
    description: "Département Infrastructure à 80% — risque de saturation.",
    color: "border-amber-400",
  },
  {
    title: "Vélocité en forte progression",
    description: "42 pts (+6%) — squads en phase d’amélioration continue.",
    color: "border-emerald-400",
  },
];