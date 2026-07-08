// RecentNotifications.tsx
import { recentNotifications } from "@/data/alerts";
import {
  AlertTriangle,
  Clock,
  UserX,
  ShieldAlert,
  TrendingDown,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const icons: Record<string, any> = {
  rose: AlertTriangle,
  orange: Clock,
  amber: UserX,
  violet: ShieldAlert,
  blue: TrendingDown,
};

const styles: Record<string, string> = {
  rose: "bg-[#FCE4E7] text-[#D1435A]",
  orange: "bg-[#FFE8D2] text-[#C9711F]",
  amber: "bg-[#FFF3D0] text-[#B8790A]",
  violet: "bg-[#EDE7FA] text-[#6E56C9]",
  blue: "bg-[#E4EEFC] text-[#3D6FC9]",
};

export default function RecentNotifications() {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">
          Notifications Récentes
        </h2>

        <button className="text-xs font-bold text-[#3D6FC9]">
          Voir tout
        </button>
      </div>

      <div className="space-y-3">
        {recentNotifications.map((notification) => {
          const Icon = icons[notification.color];

          return (
            <div
              key={notification.title}
              className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${styles[notification.color]}`}
              >
                <Icon size={16} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-black text-[#1E2433]">
                  {notification.title}
                </p>

                <p className="text-xs font-semibold text-slate-400">
                  {notification.description}
                </p>
              </div>

              <span className="text-xs font-bold text-slate-400">
                {notification.time}
              </span>
            </div>
          );
        })}
      </div>

      <button className="mt-4 rounded-full bg-[#E4EEFC] px-4 py-2 text-sm font-bold text-[#3D6FC9]">
        Voir toutes les notifications →
      </button>
    </div>
  );
}