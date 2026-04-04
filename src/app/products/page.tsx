import { Suspense } from "react";
import { getDb } from "@/lib/mongodb";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";
import type { Product } from "@/lib/types";

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ category?: string; sort?: string }>;
}

const categoryLabels: Record<string, string> = {
  tops: "Tops Brodes",
  accessoires: "Churiyans & Accessoires",
};

export default async function ProductsPage({ searchParams }: Props) {
  const { category, sort } = await searchParams;
  const db = await getDb();

  const filter: Record<string, string> = {};
  if (category && category !== "all") filter.category = category;

  let sortOption: Record<string, 1 | -1> = { createdAt: -1 };
  if (sort === "price-asc") sortOption = { price: 1 };
  if (sort === "price-desc") sortOption = { price: -1 };

  const products = (await db.collection("products").find(filter).sort(sortOption).toArray()) as unknown as Product[];

  const title = category && categoryLabels[category] ? categoryLabels[category] : "Collection";

  return (
    <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-12">
      <div className="text-center mb-12">
        <h1 className="font-[var(--font-serif)] text-4xl lg:text-5xl font-light italic">{title}</h1>
        <p className="mt-3 text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
          {products.length} piece{products.length !== 1 ? "s" : ""}
        </p>
      </div>
      <Suspense>
        <ProductFilters />
      </Suspense>
      <div className="mt-12">
        <ProductGrid products={JSON.parse(JSON.stringify(products))} />
      </div>
    </div>
  );
}
