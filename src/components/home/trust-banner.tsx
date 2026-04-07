const trustItems = [
  {
    title: "100% Naturelle",
    subtitle: "Formule bio certifiable Ecocert",
  },
  {
    title: "Triple Action",
    subtitle: "3 mecanismes scientifiquement valides",
  },
  {
    title: "Made in France",
    subtitle: "Formulee et fabriquee en France",
  },
  {
    title: "Clean Beauty",
    subtitle: "Sans alcool, sans parfum synthetique",
  },
];

export function TrustBanner() {
  return (
    <section className="w-full bg-white border-y border-sage-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="bg-sage-50 rounded-xl px-6 py-5 text-center border-t-2 border-sage-600"
            >
              <span className="text-base font-bold text-foreground block">{item.title}</span>
              <span className="text-sm text-foreground/60 block mt-1">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
