const layers = [
  {
    dotColor: "bg-[#C97070]",
    label: "INSTANTANE",
    step: "01",
    title: "Le signal de froid",
    time: "0-10 secondes",
    description:
      "Le Menthyl Lactate active vos recepteurs TRPM8. Votre cerveau recoit un signal de froid instantane. La sensation de chaleur s'efface en secondes.",
    tags: ["Menthyl Lactate", "L-Menthol"],
  },
  {
    dotColor: "bg-[#344E41]",
    label: "PHYSIQUE",
    step: "02",
    title: "La reponse vasculaire",
    time: "10 sec - 5 min",
    description:
      "L'Hamamelis resserre les vaisseaux dilates — le mecanisme exact inverse de la bouffee. L'Aloe Vera amplifie le refroidissement par evaporation.",
    tags: ["Hamamelis", "Aloe Vera"],
  },
  {
    dotColor: "bg-[#8B6F5E]",
    label: "PROFOND",
    step: "03",
    title: "L'equilibre retrouve",
    time: "Usage regulier",
    description:
      "La Sauge Sclaree agit en profondeur : elle reduit le cortisol et stimule la serotonine. Avec le temps, les bouffees deviennent moins frequentes, moins intenses.",
    tags: ["Sauge Sclaree"],
  },
];

export function MechanismSection() {
  return (
    <section className="bg-white">
      <div className="py-16 lg:py-20 px-6 lg:px-12 max-w-screen-xl mx-auto">
        <p className="tracking-[0.2em] uppercase text-xs text-[#344E41] text-center">
          Science
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl text-center mt-4">
          Comment Aura agit
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mt-4">
          Chaque vaporisation declenche une cascade de fraicheur en 3 temps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {layers.map((layer) => {
            return (
              <div
                key={layer.title}
                className="relative bg-white rounded-xl p-8 border border-[#E5E5E5] shadow-sm"
              >
                <span className="font-[var(--font-heading)] text-5xl text-[#F0F0F0] absolute top-4 right-6 select-none">
                  {layer.step}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full ${layer.dotColor} inline-block`} />
                  <span className="uppercase tracking-widest text-xs font-bold text-foreground/70">{layer.label}</span>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-semibold mt-6">
                  {layer.title}
                </h3>
                <span className="inline-block bg-[#1A1A1A] text-white px-3 py-1 rounded-full text-xs font-medium mt-2">
                  {layer.time}
                </span>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {layer.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {layer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#E5E5E5] bg-[#F5F5F3] text-[#1A1A1A] font-medium text-xs px-3 py-1 rounded-full"
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
