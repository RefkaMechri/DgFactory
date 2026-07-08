import {
  Smartphone,
  CreditCard,
  UserRound,
  Landmark,
  BarChart3,
} from "lucide-react";

export const squads = [
  {
    name: "Squad Mobile Banking",
    icon: Smartphone,
    color: "blue",
    scrumMaster: "Yassine Amine",
    productOwner: "Henda Benali",
    members: 8,
    sprint: "Sprint 23",
    velocity: 42,
    charge: 75,
  },
  {
    name: "Squad Paiements",
    icon: CreditCard,
    color: "orange",
    scrumMaster: "Sara Dridi",
    productOwner: "Karim Ait",
    members: 7,
    sprint: "Sprint 18",
    velocity: 38,
    charge: 62,
  },
  {
    name: "Squad Onboarding Client",
    icon: UserRound,
    color: "green",
    scrumMaster: "Mehdi Kabbaj",
    productOwner: "Amel Trabelsi",
    members: 6,
    sprint: "Sprint 12",
    velocity: 31,
    charge: 80,
  },
  {
    name: "Squad Open Banking",
    icon: Landmark,
    color: "violet",
    scrumMaster: "Rania Haki",
    productOwner: "Youssef Gharbi",
    members: 7,
    sprint: "Sprint 15",
    velocity: 27,
    charge: 68,
  },
  {
    name: "Squad Data & IA",
    icon: BarChart3,
    color: "cyan",
    scrumMaster: "Omar Messaoud",
    productOwner: "Sara Mrif",
    members: 9,
    sprint: "Sprint 21",
    velocity: 46,
    charge: 70,
  },
];

export const burndownData = [
  { day: "12 Mai", remaining: 96, objective: 100 },
  { day: "13 Mai", remaining: 88, objective: 88 },
  { day: "14 Mai", remaining: 75, objective: 76 },
  { day: "15 Mai", remaining: 64, objective: 64 },
  { day: "16 Mai", remaining: 52, objective: 52 },
  { day: "17 Mai", remaining: 45, objective: 40 },
  { day: "19 Mai", remaining: 28, objective: 28 },
  { day: "20 Mai", remaining: 16, objective: 16 },
  { day: "21 Mai", remaining: 5, objective: 4 },
  { day: "22 Mai", remaining: 0, objective: 0 },
];

export const velocityData = [
  { sprint: "S18", points: 35 },
  { sprint: "S19", points: 40 },
  { sprint: "S20", points: 37 },
  { sprint: "S21", points: 45 },
  { sprint: "S22", points: 42 },
  { sprint: "S23", points: 42 },
];

export const sprintProgress = [
  { squad: "Mobile Banking", sprint: "Sprint 23", progress: 72, color: "bg-blue-500" },
  { squad: "Paiements", sprint: "Sprint 18", progress: 65, color: "bg-orange-400" },
  { squad: "Onboarding Client", sprint: "Sprint 12", progress: 80, color: "bg-emerald-400" },
  { squad: "Open Banking", sprint: "Sprint 15", progress: 58, color: "bg-violet-400" },
  { squad: "Data & IA", sprint: "Sprint 21", progress: 70, color: "bg-cyan-400" },
];

export const planningColumns = [
  {
    title: "À faire",
    points: "28 pts",
    color: "bg-slate-50",
    items: [
      { id: "MB-145", title: "Améliorer virement", points: 8 },
      { id: "MB-146", title: "Gestion des bénéficiaires", points: 5 },
      { id: "MB-147", title: "Notifications push", points: 8 },
    ],
  },
  {
    title: "En cours",
    points: "36 pts",
    color: "bg-blue-50",
    items: [
      { id: "MB-141", title: "Authentification biométrique", points: 13 },
      { id: "MB-142", title: "Consultation comptes UI", points: 8 },
      { id: "MB-143", title: "Historique transactions", points: 8 },
    ],
  },
  {
    title: "En revue",
    points: "18 pts",
    color: "bg-orange-50",
    items: [
      { id: "MB-138", title: "Ajout compte favori", points: 8 },
      { id: "MB-139", title: "Paramètres de sécurité", points: 5 },
    ],
  },
  {
    title: "Terminé",
    points: "42 pts",
    color: "bg-emerald-50",
    items: [
      { id: "MB-135", title: "Dashboard refonte", points: 13 },
      { id: "MB-136", title: "Alertes solde faible", points: 5 },
      { id: "MB-137", title: "Localisation agences", points: 8 },
    ],
  },
];

export const backlogItems = [
  {
    id: "MB-150",
    story: "Chatbot assistance client",
    epic: "Support Client",
    priority: "Haute",
    estimation: "8 pts",
  },
  {
    id: "MB-151",
    story: "Virement international",
    epic: "Transactions",
    priority: "Haute",
    estimation: "13 pts",
  },
  {
    id: "MB-152",
    story: "Gestion cartes",
    epic: "Cartes",
    priority: "Moyenne",
    estimation: "5 pts",
  },
  {
    id: "MB-153",
    story: "Personnalisation dashboard",
    epic: "Expérience Client",
    priority: "Moyenne",
    estimation: "8 pts",
  },
  {
    id: "MB-154",
    story: "Export relevé bancaire",
    epic: "Documents",
    priority: "Basse",
    estimation: "3 pts",
  },
  {
    id: "MB-155",
    story: "Parrainage",
    epic: "Acquisition",
    priority: "Basse",
    estimation: "5 pts",
  },
];

export const teamCapacity = [
  {
    member: "Yassine Amine",
    role: "Scrum Master",
    s20: "80%",
    s21: "70%",
    s22: "60%",
    s23: "75%",
  },
  {
    member: "Henda Benali",
    role: "Product Owner",
    s20: "60%",
    s21: "60%",
    s22: "70%",
    s23: "60%",
  },
  {
    member: "Ahmed Triki",
    role: "Développeur",
    s20: "100%",
    s21: "90%",
    s22: "80%",
    s23: "100%",
  },
  {
    member: "Maroua Bouaziz",
    role: "Développeuse",
    s20: "80%",
    s21: "70%",
    s22: "60%",
    s23: "80%",
  },
  {
    member: "Mehdi Baccar",
    role: "QA Engineer",
    s20: "60%",
    s21: "50%",
    s22: "60%",
    s23: "60%",
  },
  {
    member: "Ines Zouari",
    role: "UX/UI Designer",
    s20: "70%",
    s21: "60%",
    s22: "50%",
    s23: "70%",
  },
];