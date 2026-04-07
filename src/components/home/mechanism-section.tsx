const layers = [
  {
    dotColor: "bg-[#C97070]",
    label: "INSTANTANE",
    step: "01",
    title: "Fraicheur Immediate",
    time: "0-10 secondes",
    description:
      "Le Menthyl Lactate et le L-Menthol activent le recepteur TRPM8. Signal de froid envoye au cerveau instantanement.",
    tags: ["Menthyl Lactate", "L-Menthol"],
  },
  {
    dotColor: "bg-sage-600",
    label: "PHYSIQUE",
    step: "02",
    title: "Action Vasculaire",
    time: "10 sec - 5 min",
    description:
      "L'Hamamelis resserre les vaisseaux dilates. L'Aloe Vera refroidit par evaporation. Reduction visible des rougeurs.",
    tags: ["Hamamelis", "Aloe Vera"],
  },
  {
    dotColor: "bg-[#8B6F5E]",
    label: "PROFOND",
    step: "03",
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
      <div className="py-16 lg:py-20 px-6 lg:px-12 max-w-screen-xl mx-auto">
        <p className="tracking-[0.2em] uppercase text-xs text-sage-600 text-center">
          Science
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl text-center mt-4">
          Comment ca marche ?
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mt-4">
          3 couches d&apos;action en un seul geste
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {layers.map((layer) => {
            return (
              <div
                key={layer.title}
                className="relative bg-white rounded-xl p-8 border border-sage-200 shadow-sm"
              >
                <span className="font-[var(--font-heading)] text-5xl text-sage-200 absolute top-4 right-6 select-none">
                  {layer.step}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${layer.dotColor} inline-block`} />
                  <span className="uppercase tracking-widest text-xs font-bold text-foreground/70">{layer.label}</span>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-semibold mt-6">
                  {layer.title}
                </h3>
                <span className="inline-block bg-sage-700 text-white px-3 py-1 rounded-full text-xs font-medium mt-2">
                  {layer.time}
                </span>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {layer.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {layer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-sage-300 bg-sage-50 text-sage-800 font-medium text-xs px-3 py-1 rounded-full"
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
