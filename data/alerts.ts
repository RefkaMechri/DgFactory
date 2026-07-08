import {
  AlertTriangle,
  Clock,
  UserX,
  ShieldAlert,
  TrendingDown,
  CheckCircle2,
  Bell,
} from "lucide-react";

export const alertStats = [
  {
    label: "Dépassement Budgétaire",
    value: "12",
    trend: "+2 vs semaine dernière",
    icon: AlertTriangle,
    color: "rose",
  },
  {
    label: "Retard de Sprint",
    value: "18",
    trend: "+3 vs semaine dernière",
    icon: Clock,
    color: "orange",
  },
  {
    label: "Ressource Indisponible",
    value: "15",
    trend: "+1 vs semaine dernière",
    icon: UserX,
    color: "amber",
  },
  {
    label: "Risque Critique",
    value: "7",
    trend: "+1 vs semaine dernière",
    icon: ShieldAlert,
    color: "violet",
  },
  {
    label: "KPI Dégradé",
    value: "9",
    trend: "-1 vs semaine dernière",
    icon: TrendingDown,
    color: "blue",
  },
];

export const severityData = [
  { label: "Critique", value: 14, percent: "23%", color: "#ef4444" },
  { label: "Élevé", value: 20, percent: "33%", color: "#f97316" },
  { label: "Moyen", value: 17, percent: "28%", color: "#facc15" },
  { label: "Faible", value: 6, percent: "10%", color: "#3b82f6" },
  { label: "Information", value: 4, percent: "6%", color: "#94a3b8" },
];

export const alertEvolution = [
  { week: "S13", critique: 24, eleve: 18, moyen: 11, faible: 5 },
  { week: "S14", critique: 28, eleve: 19, moyen: 13, faible: 5 },
  { week: "S15", critique: 31, eleve: 20, moyen: 12, faible: 5 },
  { week: "S16", critique: 29, eleve: 22, moyen: 13, faible: 5 },
  { week: "S17", critique: 28, eleve: 20, moyen: 11, faible: 5 },
  { week: "S18", critique: 34, eleve: 24, moyen: 14, faible: 6 },
];

export const alertStatistics = [
  {
    label: "Total des alertes",
    value: "61",
    trend: "+6 vs semaine dernière",
    icon: AlertTriangle,
    color: "rose",
  },
  {
    label: "Alertes ouvertes",
    value: "26",
    trend: "+3 vs semaine dernière",
    icon: Clock,
    color: "orange",
  },
  {
    label: "Alertes résolues",
    value: "29",
    trend: "+5 vs semaine dernière",
    icon: CheckCircle2,
    color: "emerald",
  },
  {
    label: "Temps moyen de traitement",
    value: "2j 4h",
    trend: "-12% vs semaine dernière",
    icon: Clock,
    color: "blue",
  },
];

export const recentNotifications = [
  {
    title: "Dépassement budgétaire détecté",
    description: "Budget projet KYC Digital dépassé de 12%",
    time: "10:24",
    color: "rose",
  },
  {
    title: "Retard de Sprint",
    description: "Le Sprint 23 de l’équipe Mobile Banking est en retard",
    time: "09:15",
    color: "orange",
  },
  {
    title: "Ressource indisponible",
    description: "Sarah Amine indisponible",
    time: "Hier",
    color: "amber",
  },
  {
    title: "Risque critique identifié",
    description: "Vulnérabilité critique sur l’infrastructure cloud",
    time: "Hier",
    color: "violet",
  },
  {
    title: "KPI dégradé",
    description: "Taux de livraison passé sous le seuil",
    time: "16 Mai",
    color: "blue",
  },
];

export const alertHistory = [
  {
    id: "ALT-061",
    alert: "Dépassement Budgétaire",
    category: "Application Mobile Bancaire",
    severity: "Critique",
    source: "Finance",
    status: "Ouverte",
    assignedTo: "Ahmed Triki",
    date: "18/05/2030 10:24",
  },
  {
    id: "ALT-060",
    alert: "Retard de Sprint",
    category: "Équipe Mobile Banking",
    severity: "Élevé",
    source: "Jira",
    status: "Ouverte",
    assignedTo: "Yassine Amine",
    date: "18/05/2030 09:15",
  },
  {
    id: "ALT-059",
    alert: "Ressource Indisponible",
    category: "Squad Data & IA",
    severity: "Moyen",
    source: "HR System",
    status: "Ouverte",
    assignedTo: "Sara Dridi",
    date: "17/05/2030 14:30",
  },
  {
    id: "ALT-058",
    alert: "Risque Critique",
    category: "Infrastructure Cloud",
    severity: "Critique",
    source: "Security",
    status: "En cours",
    assignedTo: "Mehdi Baccar",
    date: "17/05/2030 08:00",
  },
  {
    id: "ALT-057",
    alert: "KPI Dégradé",
    category: "Core Banking Intégration",
    severity: "Moyen",
    source: "KPI Monitor",
    status: "En cours",
    assignedTo: "Ines Zouari",
    date: "16/05/2030 19:20",
  },
  {
    id: "ALT-056",
    alert: "Dépassement Budgétaire",
    category: "Infrastructure Cloud",
    severity: "Élevé",
    source: "Finance",
    status: "Résolu",
    assignedTo: "Omar Messaoud",
    date: "16/05/2030 10:05",
  },
  {
    id: "ALT-055",
    alert: "Retard de Sprint",
    category: "Open Banking API",
    severity: "Moyen",
    source: "Jira",
    status: "Résolu",
    assignedTo: "Karim Aït",
    date: "15/05/2030 16:45",
  },
  {
    id: "ALT-054",
    alert: "Risque Critique",
    category: "RGPD Compliance",
    severity: "Critique",
    source: "Compliance",
    status: "Résolu",
    assignedTo: "Ahmed Triki",
    date: "15/05/2030 09:20",
  },
];

export const statusData = [
  { label: "Ouverte", value: 26, percent: "43%", color: "#ef4444" },
  { label: "En cours", value: 17, percent: "28%", color: "#f97316" },
  { label: "Résolue", value: 16, percent: "26%", color: "#10b981" },
  { label: "Fermée", value: 2, percent: "3%", color: "#94a3b8" },
];

export const topAlertProjects = [
  { project: "Open Banking", alerts: 12, color: "bg-rose-500" },
  { project: "Application Mobile", alerts: 10, color: "bg-rose-400" },
  { project: "KYC Digital", alerts: 8, color: "bg-orange-400" },
  { project: "Migration Cloud", alerts: 6, color: "bg-blue-500" },
  { project: "Data Platform", alerts: 5, color: "bg-blue-400" },
];

export const selectedAlert = {
  title: "Dépassement budgétaire projet KYC Digital",
  description:
    "Le budget consommé (12,4 M MAD) dépasse le budget prévu (11,0 M MAD) de 12%.",
  severity: "Critique",
  source: "Finance",
  detectedAt: "18/05/2030 10:24",
  assignedTo: "Ahmed Triki",
  dueDate: "20/05/2030",
  status: "Ouverte",
};