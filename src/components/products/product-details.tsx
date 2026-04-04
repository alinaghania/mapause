"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";
import type { Product } from "@/lib/types";

export function ProductDetails({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  function handleAddToCart() {
    if (!selectedSize) {
      toast.error("Veuillez selectionner une taille");
      return;
    }
    addItem(product, selectedSize);
    toast.success(`${product.name} ajoute au panier`);
  }

  return (
    <div className="grid gap-0 lg:grid-cols-[1fr_480px]">
      <div className="space-y-2">
        <div className="relative aspect-[3/4] overflow-hidden bg-accent">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
        </div>
        {product.images.length > 1 && (
          <div className="flex gap-2">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative h-24 w-20 overflow-hidden transition-opacity ${
                  i === selectedImage ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} vue ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-0">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
          {product.category}
        </p>
        <h1 className="font-[var(--font-serif)] text-3xl lg:text-4xl font-light italic">
          {product.name}
        </h1>
        <p className="mt-4 text-lg tracking-wide">
          {formatPrice(product.price)}
        </p>

        <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        <div className="mt-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Taille
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[48px] h-10 px-4 text-[12px] tracking-[0.1em] uppercase border transition-all ${
                  selectedSize === size
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <Button
          size="lg"
          className="mt-10 w-full h-14 text-[12px] tracking-[0.3em] uppercase rounded-none"
          onClick={handleAddToCart}
        >
          Ajouter au panier
        </Button>

        <div className="mt-10 pt-8 border-t space-y-3">
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
            Livraison offerte des 100 EUR
          </p>
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
            Retours gratuits sous 30 jours
          </p>
          <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
            Paiement 100% securise
          </p>
        </div>
      </div>
    </div>
  );
}
