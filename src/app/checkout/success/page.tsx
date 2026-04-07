"use client";

import Link from "next/link";
import { CheckCircle2, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { useEffect } from "react";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 lg:py-28">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 rounded-full bg-[#344E41]/10 flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-[#344E41]" />
          </div>
        </div>
        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl">
          Merci pour votre commande
        </h1>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
          Votre commande a ete confirmee. Vous recevrez un email de confirmation
          avec le suivi de votre colis.
        </p>
      </div>

      {/* Order steps */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-[#F5F5F3] rounded-xl">
          <CheckCircle2 className="h-8 w-8 mx-auto text-[#344E41]" />
          <h3 className="font-semibold mt-3">Commande confirmee</h3>
          <p className="text-sm text-muted-foreground mt-1">Paiement recu</p>
        </div>
        <div className="text-center p-6 bg-[#F5F5F3] rounded-xl">
          <Package className="h-8 w-8 mx-auto text-[#344E41]" />
          <h3 className="font-semibold mt-3">Preparation</h3>
          <p className="text-sm text-muted-foreground mt-1">Expedition sous 48h</p>
        </div>
        <div className="text-center p-6 bg-[#F5F5F3] rounded-xl">
          <Truck className="h-8 w-8 mx-auto text-[#344E41]" />
          <h3 className="font-semibold mt-3">Livraison</h3>
          <p className="text-sm text-muted-foreground mt-1">3-5 jours ouvrables</p>
        </div>
      </div>

      {/* What's next */}
      <div className="mt-12 p-8 border border-[#E5E5E5] rounded-xl">
        <h3 className="font-semibold text-lg">Et maintenant ?</h3>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="font-medium text-foreground shrink-0">1.</span>
            Un email de confirmation vient d&apos;etre envoye a votre adresse
          </li>
          <li className="flex items-start gap-3">
            <span className="font-medium text-foreground shrink-0">2.</span>
            Votre brume Aura sera preparee et expediee sous 48h
          </li>
          <li className="flex items-start gap-3">
            <span className="font-medium text-foreground shrink-0">3.</span>
            Vous recevrez un email avec le numero de suivi
          </li>
          <li className="flex items-start gap-3">
            <span className="font-medium text-foreground shrink-0">4.</span>
            Livraison en 3-5 jours ouvrables en France metropolitaine
          </li>
        </ul>
      </div>

      <div className="mt-10 text-center space-y-4">
        <Button
          nativeButton={false}
          className="h-14 px-12 rounded-full bg-[#1A1A1A] hover:bg-[#333] text-white text-base"
          render={<Link href="/" />}
        >
          Retour a l&apos;accueil
        </Button>
        <p className="text-sm text-muted-foreground">
          Une question ? <Link href="/contact" className="underline hover:text-foreground">Contactez-nous</Link>
        </p>
      </div>
    </div>
  );
}
