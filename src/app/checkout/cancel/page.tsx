import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto max-w-lg px-6 py-32 text-center">
      <p className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
        Annulation
      </p>
      <h1 className="font-[var(--font-serif)] text-4xl font-light italic">
        Commande annulee
      </h1>
      <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
        Votre commande a ete annulee. Vos articles sont toujours dans votre panier.
      </p>
      <Button
        nativeButton={false}
        className="mt-10 h-12 px-12 rounded-none text-[12px] tracking-[0.3em] uppercase"
        render={<Link href="/cart" />}
      >
        Retour au panier
      </Button>
    </div>
  );
}
