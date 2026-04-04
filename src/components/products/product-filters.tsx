"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const categories = [
  { value: "all", label: "Tout" },
  { value: "tops", label: "Tops Brodes" },
  { value: "accessoires", label: "Accessoires" },
];

const sortOptions = [
  { value: "newest", label: "Nouveautes" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix decroissant" },
];

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";
  const currentSort = searchParams.get("sort") || "newest";

  function setSort(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "newest") params.delete("sort");
    else params.set("sort", value);
    router.push(`/products?${params.toString()}`);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-6">
        {categories.map((c) => (
          <Link
            key={c.value}
            href={c.value === "all" ? "/products" : `/products?category=${c.value}`}
            className={`text-[12px] tracking-[0.2em] uppercase transition-all pb-1 ${
              currentCategory === c.value ? "text-foreground border-b border-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-4">
        {sortOptions.map((s) => (
          <button
            key={s.value}
            onClick={() => setSort(s.value)}
            className={`text-[11px] tracking-[0.15em] uppercase transition-all ${
              currentSort === s.value ? "text-foreground" : "text-muted-foreground/50 hover:text-muted-foreground"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
