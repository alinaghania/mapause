import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-accent">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.featured && (
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-foreground text-background px-3 py-1">
            Nouveau
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm tracking-wide">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
