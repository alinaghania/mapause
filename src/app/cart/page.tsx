"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCart();

  async function handleCheckout() {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
            size: i.size,
            image: i.product.images[0],
          })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      // checkout failed
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-32 text-center">
        <h1 className="font-[var(--font-serif)] text-4xl font-light italic">
          Votre panier
        </h1>
        <p className="mt-6 text-sm text-muted-foreground">
          Votre panier est vide.
        </p>
        <Button nativeButton={false} className="mt-10 h-12 px-12 rounded-none text-[12px] tracking-[0.3em] uppercase" render={<Link href="/products" />}>
          Decouvrir la collection
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-12 py-16">
      <h1 className="font-[var(--font-serif)] text-4xl font-light italic text-center mb-12">
        Votre panier
      </h1>

      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={`${item.product.slug}-${item.size}`}
            className="flex gap-6 pb-8 border-b"
          >
            <div className="relative h-36 w-28 shrink-0 overflow-hidden bg-accent">
              <Image
                src={item.product.images[0]}
                alt={item.product.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm tracking-wide">{item.product.name}</h3>
                  <p className="mt-1 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                    Taille: {item.size}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.product.slug, item.size)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    className="h-8 w-8 border flex items-center justify-center hover:bg-accent transition-colors"
                    onClick={() =>
                      updateQuantity(item.product.slug, item.size, item.quantity - 1)
                    }
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm w-6 text-center">{item.quantity}</span>
                  <button
                    className="h-8 w-8 border flex items-center justify-center hover:bg-accent transition-colors"
                    onClick={() =>
                      updateQuantity(item.product.slug, item.size, item.quantity + 1)
                    }
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <p className="text-sm tracking-wide">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            Total
          </span>
          <span className="text-lg tracking-wide">{formatPrice(totalPrice)}</span>
        </div>

        <Button
          size="lg"
          className="w-full h-14 rounded-none text-[12px] tracking-[0.3em] uppercase"
          onClick={handleCheckout}
        >
          Passer la commande
        </Button>

        <button
          onClick={clearCart}
          className="w-full text-center text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          Vider le panier
        </button>
      </div>
    </div>
  );
}
