"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  function handleCheckout() {
    window.location.href = "/checkout";
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-32 text-center">
        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl">
          Votre panier
        </h1>
        <p className="mt-6 text-muted-foreground">Votre panier est vide.</p>
        <Button
          nativeButton={false}
          className="mt-10 h-12 px-12 rounded-full bg-[#1A1A1A] hover:bg-[#333] text-white"
          render={<Link href="/" />}
        >
          Decouvrir Mapause
        </Button>
      </div>
    );
  }

  const freeShipping = totalPrice >= 4500;

  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-12 py-16">
      <h1 className="font-[var(--font-heading)] text-4xl text-center mb-12">
        Votre panier
      </h1>

      {!freeShipping && (
        <div className="mb-8 bg-[#F5F5F3] rounded-2xl p-4 text-center text-sm">
          <Truck className="inline h-4 w-4 mr-2 text-[#344E41]" />
          Plus que <strong>{formatPrice(4500 - totalPrice)}</strong> pour la livraison offerte
        </div>
      )}

      {freeShipping && (
        <div className="mb-8 bg-[#344E41]/10 rounded-2xl p-4 text-center text-sm text-[#344E41] font-medium">
          <Truck className="inline h-4 w-4 mr-2" />
          Livraison offerte !
        </div>
      )}

      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={`${item.product.slug}-${item.format}`}
            className="flex gap-6 pb-8 border-b border-[#E5E5E5]"
          >
            <div className="relative h-36 w-28 shrink-0 overflow-hidden rounded-xl bg-[#F5F5F3]">
              <Image
                src="/images/packshot-spa.png"
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium tracking-wide">{item.product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Format: {item.format}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.product.slug, item.format)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    className="h-8 w-8 border rounded-full flex items-center justify-center hover:bg-[#F5F5F3] transition-colors"
                    onClick={() =>
                      updateQuantity(item.product.slug, item.format, item.quantity - 1)
                    }
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm w-6 text-center">{item.quantity}</span>
                  <button
                    className="h-8 w-8 border rounded-full flex items-center justify-center hover:bg-[#F5F5F3] transition-colors"
                    onClick={() =>
                      updateQuantity(item.product.slug, item.format, item.quantity + 1)
                    }
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <p className="font-medium">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        <div className="flex items-center justify-between text-lg">
          <span className="text-sm tracking-[0.15em] uppercase text-muted-foreground">
            Total
          </span>
          <span className="font-[var(--font-heading)] text-2xl">{formatPrice(totalPrice)}</span>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> Paiement securise</span>
          <span className="flex items-center gap-1"><Truck className="h-3.5 w-3.5" /> {freeShipping ? "Livraison offerte" : "Livraison des 45EUR"}</span>
        </div>

        <Button
          size="lg"
          className="w-full h-14 rounded-full bg-[#1A1A1A] hover:bg-[#333] text-white text-base font-medium tracking-wide"
          onClick={handleCheckout}
        >
          Passer la commande
        </Button>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Vous serez redirige vers notre page de paiement securisee
        </p>

        <button
          onClick={clearCart}
          className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Vider le panier
        </button>
      </div>
    </div>
  );
}
