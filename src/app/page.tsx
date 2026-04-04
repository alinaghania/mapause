import { getDb } from "@/lib/mongodb";
import { HeroSection } from "@/components/home/hero-section";
import { MarqueeBanner } from "@/components/home/marquee-banner";
import { FeaturedProducts } from "@/components/home/featured-products";
import { EditorialSection } from "@/components/home/editorial-section";
import { CategoriesSection } from "@/components/home/categories-section";
import type { Product } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const db = await getDb();
  const featured = (await db
    .collection("products")
    .find({ featured: true })
    .limit(8)
    .toArray()) as unknown as Product[];

  return (
    <>
      <HeroSection />
      <MarqueeBanner />
      <FeaturedProducts products={JSON.parse(JSON.stringify(featured))} />
      <EditorialSection />
      <CategoriesSection />
    </>
  );
}
