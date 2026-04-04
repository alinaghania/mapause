"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { useEffect } from "react";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="mx-auto max-w-lg px-6 py-32 text-center">
      <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
        Confirmation
      </p>
      <h1 className="font-[var(--font-serif)] text-4xl font-light italic">
        Merci pour votre commande
      </h1>
      <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
        Votre paiement a ete confirme. Vous recevrez un email de confirmation sous peu.
      </p>
      <Button
        nativeButton={false}
        className="mt-10 h-12 px-12 rounded-none text-[12px] tracking-[0.3em] uppercase"
        render={<Link href="/products" />}
      >
        Continuer mes achats
      </Button>
    </div>
  );
}
