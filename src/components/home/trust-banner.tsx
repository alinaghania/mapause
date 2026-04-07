import { Leaf, FlaskConical, MapPin, Heart } from "lucide-react";

const trustItems = [
  {
    icon: Leaf,
    title: "100% Naturelle",
    subtitle: "Formule bio certifiable",
  },
  {
    icon: FlaskConical,
    title: "Triple Action",
    subtitle: "Perceptuel, physique, hormonal",
  },
  {
    icon: MapPin,
    title: "Made in France",
    subtitle: "Fabrique avec soin",
  },
  {
    icon: Heart,
    title: "Sans Alcool",
    subtitle: "Sans parfum ajoute",
  },
];

export function TrustBanner() {
  return (
    <section className="w-full bg-white border-t border-b border-sage-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-2 py-8"
            >
              <item.icon className="text-sage-600" size={28} />
              <span className="font-medium text-charcoal">{item.title}</span>
              <span className="text-sm text-muted-foreground">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
