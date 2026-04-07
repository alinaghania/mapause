import Image from "next/image";
import Link from "next/link";
import { Shield, Truck, RotateCcw } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Paiement securise" },
  { icon: Truck, label: "Livraison offerte des 45\u20AC" },
  { icon: RotateCcw, label: "Retour 30 jours" },
];

export function CtaSection() {
  return (
    <section className="gradient-dark py-20 lg:py-28 text-center text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <Image
          src="/images/packshot-spa.png"
          alt="MAPAUSE brume SOS fraîcheur"
          width={128}
          height={128}
          className="h-32 w-auto mx-auto mb-6 drop-shadow-2xl"
        />
        <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl text-white">
          Prete a retrouver votre fraicheur ?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mt-4">
          Rejoignez des milliers de femmes qui ont dit stop aux bouffees de
          chaleur.
        </p>
        <p className="text-2xl font-[var(--font-heading)] mt-8">
          A partir de 19,90&euro;
        </p>
        <Link
          href="/products"
          className="inline-block bg-rose-gold text-charcoal hover:bg-rose-light rounded-full px-10 py-4 text-lg font-medium mt-6 transition-colors"
        >
          Commander maintenant
        </Link>
        <div className="flex justify-center gap-8 mt-8 text-white/50 text-sm flex-wrap">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} className="inline-flex items-center gap-2">
                <Icon size={18} />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
