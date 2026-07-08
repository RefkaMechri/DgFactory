// app/dashboard/produits/page.tsx

import ProductCards from "@/components/produits/ProductCards";
import ProductTabs from "@/components/produits/ProductTabs";
import ProductRoadmap from "@/components/produits/ProductRoadmap";
import ProductPerformance from "@/components/produits/ProductPerformance";
import ProductBacklog from "@/components/produits/ProductBacklog";
import ProductLifecycle from "@/components/produits/ProductLifecycle";

export default function ProduitsPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-slate-50">
      <div className="origin-top-left scale-[0.72] space-y-4 w-[138.8%]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Produits digitaux
            </p>

            <h1 className="text-2xl font-bold text-slate-900">
              Gestion des Produits Digitaux
            </h1>

            <p className="text-sm text-slate-500">
              Suivi des produits, performance, roadmap et backlog.
            </p>
          </div>

          <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white">
            + Nouveau Produit
          </button>
        </div>

        <ProductCards />

        <ProductTabs />

        <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-2">
          <ProductRoadmap />
          <ProductPerformance />
          <ProductBacklog />
          <ProductLifecycle />
        </div>
      </div>
    </div>
  );
}