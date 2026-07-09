import {
  FolderKanban,
  Box,
  Wallet,
  TrendingUp,
  Smile,
  Clock,
} from "lucide-react";

export const executiveStats = [
  {
    label: "Projets Actifs",
    value: "25",
    trend: "+2 ce mois",
    detail: "5 squads actives",
    icon: FolderKanban,
    color: "blue",
  },
  {
    label: "En Production",
    value: "7",
    trend: "+1",
    detail: "sur 25 projets",
    icon: Box,
    color: "blue",
  },
  {
    label: "Budget Consommé",
    value: "3 248 k €",
    trend: "+4,3%",
    detail: "64,5% du total",
    icon: Wallet,
    color: "orange",
  },
  {
    label: "Taux d'Avancement",
    value: "72,5%",
    trend: "+2,1%",
    detail: "objectif 85%",
    icon: TrendingUp,
    color: "violet",
  },
  {
    label: "Satisfaction Métier",
    value: "4,3/5",
    trend: "+0,3",
    detail: "objectif 4,5/5",
    icon: Smile,
    color: "emerald",
  },
  {
    label: "Time-to-Market",
    value: "9,2 sem.",
    trend: "-1,4",
    detail: "objectif 8 semaines",
    icon: Clock,
    color: "orange",
  },
];

export const globalPerformance = [
  { week: "S1", performance: 78, velocity: 34 },
  { week: "S2", performance: 80, velocity: 37 },
  { week: "S3", performance: 79, velocity: 35 },
  { week: "S4", performance: 82, velocity: 38 },
  { week: "S5", performance: 81, velocity: 39 },
  { week: "S6", performance: 84, velocity: 37 },
  { week: "S7", performance: 83, velocity: 41 },
  { week: "S8", performance: 85, velocity: 42 },
  { week: "S9", performance: 87, velocity: 40 },
  { week: "S10", performance: 88, velocity: 43 },
  { week: "S11", performance: 91, velocity: 42 },
  { week: "S12", performance: 92, velocity: 42 },
];

export const directionDistribution = [
  { direction: "Dir. Transfo.", value: 54, color: "#1d4ed8" },
  { direction: "Dir. Produit", value: 38, color: "#3b82f6" },
  { direction: "Dir. Perf.", value: 23, color: "#f59e0b" },
  { direction: "Dir. Support", value: 25, color: "#10b981" },
];

export const budgetDistribution = [
  {
    label: "Parcours",
    value: "1 060 k€",
    color: "#0f73ff",
  },
  {
    label: "Core",
    value: "955 k€",
    color: "#3b82f6",
  },
  {
    label: "Data",
    value: "1 150 k€",
    color: "#10b981",
  },
  {
    label: "Sécurité",
    value: "780 k€",
    color: "#ef4444",
  },
  {
    label: "Infrastructure",
    value: "775 k€",
    color: "#8b5cf6",
  },
  {
    label: "Innovation",
    value: "315 k€",
    color: "#f59e0b",
  },
];

export const portfolioStatus = [
  { label: "En cours", value: 12, color: "#1d4ed8" },
  { label: "En production", value: 7, color: "#3b82f6" },
  { label: "À risque", value: 3, color: "#f59e0b" },
  { label: "En pause", value: 3, color: "#94a3b8" },
];

export const criticalAlerts = [
  {
    title: "Dépassement Budgétaire",
    subtitle: "Application Mobile Bancaire",
    time: "10:24",
  },
  {
    title: "Risque Critique",
    subtitle: "Infrastructure Cloud",
    time: "11:30",
  },
  {
    title: "Risque Critique",
    subtitle: "RGPD Compliance",
    time: "09:20",
  },
];

export const delayedProjects = [
  {
    title: "Intégration APIs Core Banking",
    subtitle: "Core Banking & APIs · 72%",
    progress: 72,
  },
  {
    title: "Gestion des paiements instantanés",
    subtitle: "Core Banking & APIs · 60%",
    progress: 60,
  },
  {
    title: "Mise en conformité réglementaire digitale",
    subtitle: "Sécurité & Conformité · 55%",
    progress: 55,
  },
];

export const majorRisks = [
  {
    title: "Fuite de données sensibles clients",
    subtitle: "Cyber · Impact: 5/5",
  },
  {
    title: "Dépassement budgétaire Core Banking",
    subtitle: "Budgétaire · Impact: 4/5",
  },
  {
    title: "Indisponibilité services critiques (SLA)",
    subtitle: "Opérationnel · Impact: 5/5",
  },
  {
    title: "Non-conformité RGPD/BCL",
    subtitle: "Réglementaire · Impact: 4/5",
  },
];

export const pendingDecisions = [
  {
    title: "Validation budget supplémentaire",
    subtitle: "Open Banking · Délai : 2j",
    delay: "2j",
  },
  {
    title: "Approbation roadmap produit",
    subtitle: "Crédit Digital · Délai : 3j",
    delay: "3j",
  },
  {
    title: "Choix fournisseur Cloud",
    subtitle: "Infrastructure · Délai : 5j",
    delay: "5j",
  },
];