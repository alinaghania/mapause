import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="font-[var(--font-serif)] text-2xl tracking-[0.3em] uppercase">Sona</span>
            <p className="mt-4 text-sm text-background/60 leading-relaxed max-w-xs">
              Tops indiens brodes a la main et churiyans artisanaux. L'eclat de la tradition, le style d'aujourd'hui.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-background/40">Collection</h4>
            <ul className="space-y-3">
              <li><Link href="/products?category=tops" className="text-sm text-background/60 hover:text-background transition-colors">Tops Brodes</Link></li>
              <li><Link href="/products?category=accessoires" className="text-sm text-background/60 hover:text-background transition-colors">Churiyans & Accessoires</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-background/40">Services</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>Livraison offerte des 80 EUR</li>
              <li>Retours gratuits sous 30 jours</li>
              <li>Paiement securise</li>
              <li>Expedition mondiale</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-6 text-background/40">Newsletter</h4>
            <p className="text-sm text-background/60 mb-4">Recevez nos nouveautes en avant-premiere.</p>
            <div className="flex">
              <input type="email" placeholder="votre@email.com" className="flex-1 bg-transparent border-b border-background/30 text-sm py-2 px-0 focus:outline-none focus:border-background placeholder:text-background/30" />
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-background/10 text-center text-[11px] tracking-[0.15em] uppercase text-background/30">SONA {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
