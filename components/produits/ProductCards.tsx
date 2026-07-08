import { products } from "@/data/products";

const styles: Record<string, string> = {
  blue: "border-sky-100 bg-sky-50",
  orange: "border-amber-100 bg-amber-50",
  green: "border-emerald-100 bg-emerald-50",
  purple: "border-violet-100 bg-violet-50",
  cyan: "border-cyan-100 bg-cyan-50",
};

const progressStyles: Record<string, string> = {
  blue: "bg-sky-300",
  orange: "bg-amber-300",
  green: "bg-emerald-300",
  purple: "bg-violet-300",
  cyan: "bg-cyan-300",
};

const statusStyles: Record<string, string> = {
  blue: "bg-sky-100 text-sky-700",
  orange: "bg-amber-100 text-amber-700",
  green: "bg-emerald-100 text-emerald-700",
  purple: "bg-violet-100 text-violet-700",
  cyan: "bg-cyan-100 text-cyan-700",
};

export default function ProductCards() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
      {products.map((product) => (
        <div
          key={product.name}
          className={`rounded-2xl border ${styles[product.color]} p-4 shadow-sm`}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold leading-tight text-slate-900">
                {product.name}
              </h3>
              <p className="text-xs text-slate-500">{product.owner}</p>
            </div>

            <span
              className={`rounded-full px-2 py-1 text-[11px] font-bold ${
                statusStyles[product.color]
              }`}
            >
              {product.status}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
            <div>
              <p className="text-slate-400">Users</p>
              <p className="font-bold text-slate-900">{product.users}</p>
            </div>

            <div>
              <p className="text-slate-400">Score</p>
              <p className="font-bold text-slate-900">{product.satisfaction}</p>
            </div>

            <div>
              <p className="text-slate-400">KPI</p>
              <p className="font-bold text-slate-900">{product.progress}%</p>
            </div>
          </div>

          <div className="mt-3 h-2 rounded-full bg-white/70">
            <div
              className={`h-2 rounded-full ${progressStyles[product.color]}`}
              style={{ width: `${product.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
