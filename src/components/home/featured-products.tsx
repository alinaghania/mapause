"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-24">
      <Reveal>
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-3">
            Selection
          </p>
          <h2 className="font-[var(--font-serif)] text-4xl lg:text-5xl font-light italic">
            Nos coups de coeur
          </h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={i * 0.1}>
            <Link href={`/products/${product.slug}`} className="group block">
              <motion.div
                className="relative aspect-[3/4] overflow-hidden bg-accent"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </motion.div>
              <div className="mt-4 space-y-1">
                <h3 className="text-sm tracking-wide">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-block border border-foreground px-12 py-4 text-[12px] tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Voir toute la collection
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
