"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "FR",
  });

  const freeShipping = totalPrice >= 4500;
  const shippingCost = freeShipping ? 0 : 490;
  const grandTotal = totalPrice + shippingCost;

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: items.map((i) => ({
            name: i.product.name,
            format: i.format,
            quantity: i.quantity,
            price: i.product.price,
          })),
        }),
      });
      setShowModal(true);
    } catch {
      // silently handle
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-6 py-32 text-center">
        <h1 className="font-[var(--font-heading)] text-4xl">Votre panier est vide</h1>
        <p className="mt-4 text-muted-foreground">Ajoutez Aura a votre panier pour continuer.</p>
        <Link href="/" className="inline-block mt-8 bg-[#1A1A1A] text-white rounded-full px-10 py-4 font-medium hover:bg-[#333] transition-colors">
          Retour a l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 py-10 lg:py-16">
        <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Retour au panier
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Form */}
          <div className="lg:col-span-3">
            <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl">Finaliser la commande</h1>

            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              {/* Contact */}
              <div>
                <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">Contact</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Adresse email *"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-base focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-colors placeholder:text-muted-foreground/50"
                  />
                  <input
                    type="tel"
                    placeholder="Telephone (pour la livraison)"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-base focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              {/* Identity */}
              <div>
                <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">Identite</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Prenom *"
                    value={form.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-base focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-colors placeholder:text-muted-foreground/50"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Nom *"
                    value={form.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-base focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              {/* Shipping address */}
              <div>
                <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">Adresse de livraison</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Adresse *"
                    value={form.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-base focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-colors placeholder:text-muted-foreground/50"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Code postal *"
                      value={form.postalCode}
                      onChange={(e) => updateField("postalCode", e.target.value)}
                      className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-base focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-colors placeholder:text-muted-foreground/50"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Ville *"
                      value={form.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-base focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <select
                    value={form.country}
                    onChange={(e) => updateField("country", e.target.value)}
                    className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3.5 text-base focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-colors bg-white"
                  >
                    <option value="FR">France</option>
                    <option value="BE">Belgique</option>
                    <option value="CH">Suisse</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MC">Monaco</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1A1A1A] hover:bg-[#333] disabled:bg-[#999] text-white rounded-full h-14 text-lg font-medium transition-colors"
              >
                {loading ? "Enregistrement..." : "Valider ma commande"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                En validant, vous acceptez nos{" "}
                <Link href="/cgv" className="underline">CGV</Link> et notre{" "}
                <Link href="/politique-confidentialite" className="underline">politique de confidentialite</Link>.
              </p>
            </form>
          </div>

          {/* Right - Order summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 bg-[#F5F5F3] rounded-2xl p-8">
              <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-6">Recapitulatif</h2>

              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.product.slug}-${item.format}`} className="flex gap-4">
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-white">
                      <Image
                        src="/images/packshot-spa.png"
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#1A1A1A] text-white text-[10px] rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Aura de Mapause</p>
                      <p className="text-xs text-muted-foreground">{item.format}</p>
                    </div>
                    <p className="text-sm font-medium">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E5E5E5] mt-6 pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Livraison</span>
                  <span>{freeShipping ? "Offerte" : formatPrice(shippingCost)}</span>
                </div>
              </div>

              <div className="border-t border-[#E5E5E5] mt-4 pt-4 flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="font-[var(--font-heading)] text-2xl font-bold">{formatPrice(grandTotal)}</span>
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span>Paiement securise</span>
                <span>·</span>
                <span>Satisfaite ou remboursee 30j</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Out of stock modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl p-8 md:p-12 max-w-lg w-full text-center shadow-2xl">
            <div className="h-16 w-16 rounded-full bg-[#344E41]/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌿</span>
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl">
              Aura est bientot disponible
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Notre premiere production est en cours de finalisation.
              Vous etes maintenant sur la liste prioritaire — nous vous enverrons
              un email des qu&apos;Aura sera disponible.
            </p>
            <p className="mt-6 text-sm font-medium text-[#344E41]">
              Merci pour votre confiance, {form.firstName}.
            </p>
            <Link
              href="/"
              className="inline-block mt-8 bg-[#1A1A1A] text-white rounded-full px-10 py-4 font-medium hover:bg-[#333] transition-colors"
            >
              Retour a l&apos;accueil
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
