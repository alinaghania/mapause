"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
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
      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 rounded-full bg-sage-100 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-sage-600" />
        </div>
      </div>
      <h1 className="font-[var(--font-heading)] text-4xl">
        Merci pour votre commande
      </h1>
      <p className="mt-6 text-muted-foreground leading-relaxed">
        Votre paiement a ete confirme. Vous recevrez un email de confirmation sous peu.
        Votre brume Mapause sera expediee sous 48h.
      </p>
      <Button
        nativeButton={false}
        className="mt-10 h-12 px-12 rounded-full bg-sage-600 hover:bg-sage-700 text-white"
        render={<Link href="/" />}
      >
        Retour a l&apos;accueil
      </Button>
    </div>
  );
}
