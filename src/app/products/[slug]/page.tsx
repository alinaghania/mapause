import { getDb } from "@/lib/mongodb";
import { ProductDetails } from "@/components/products/product-details";
import { notFound } from "next/navigation";
import type { Product } from "@/lib/types";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const db = await getDb();

  const product = (await db
    .collection("products")
    .findOne({ slug })) as unknown as Product | null;

  if (!product) notFound();

  return (
    <div className="mx-auto max-w-screen-2xl">
      <ProductDetails product={JSON.parse(JSON.stringify(product))} />
    </div>
  );
}
