import { Zap, Waves, Brain } from "lucide-react";

const layers = [
  {
    icon: Zap,
    iconBg: "bg-rose-light",
    iconColor: "text-rose-gold",
    title: "Fraicheur Immediate",
    time: "0-10 secondes",
    description:
      "Le Menthyl Lactate et le L-Menthol activent le recepteur TRPM8. Signal de froid envoye au cerveau instantanement.",
    tags: ["Menthyl Lactate", "L-Menthol"],
  },
  {
    icon: Waves,
    iconBg: "bg-sage-100",
    iconColor: "text-sage-600",
    title: "Action Vasculaire",
    time: "10 sec - 5 min",
    description:
      "L'Hamamelis resserre les vaisseaux dilates. L'Aloe Vera refroidit par evaporation. Reduction visible des rougeurs.",
    tags: ["Hamamelis", "Aloe Vera"],
  },
  {
    icon: Brain,
    iconBg: "bg-champagne",
    iconColor: "text-charcoal",
    title: "Regulation Hormonale",
    time: "Usage regulier",
    description:
      "La Sauge Sclaree reduit le cortisol et augmente la serotonine. Reduction progressive de la frequence des bouffees.",
    tags: ["Sauge Sclaree"],
  },
];

export function MechanismSection() {
  return (
    <section className="bg-white">
      <div className="py-20 lg:py-28 px-6 lg:px-12 max-w-screen-xl mx-auto">
        <p className="tracking-[0.2em] uppercase text-xs text-sage-600 text-center">
          Science
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl text-center mt-4">
          Triple action, efficacite prouvee
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mt-4">
          La seule brume qui combine 3 mecanismes d&apos;action contre les
          bouffees de chaleur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.title}
                className="bg-ivory rounded-2xl p-8 border border-sage-100"
              >
                <div
                  className={`w-14 h-14 rounded-full ${layer.iconBg} ${layer.iconColor} flex items-center justify-center`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl mt-6">
                  {layer.title}
                </h3>
                <p className="text-xs text-sage-600 uppercase tracking-wider mt-2">
                  {layer.time}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {layer.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {layer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-sage-50 text-sage-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
