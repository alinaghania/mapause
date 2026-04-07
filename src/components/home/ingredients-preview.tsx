import Link from "next/link";

const ingredients = [
  {
    percentage: "35%",
    name: "Sauge Sclaree",
    type: "Hydrolat bio",
    role: "Regulateur hormonal",
  },
  {
    percentage: "20%",
    name: "Menthe Poivree",
    type: "Hydrolat bio",
    role: "Rafraichissant",
  },
  {
    percentage: "20%",
    name: "Eau Thermale",
    type: "Mineraux",
    role: "Apaisant cutane",
  },
  {
    percentage: "10%",
    name: "Hamamelis",
    type: "Hydrolat bio",
    role: "Vasoconstricteur",
  },
  {
    percentage: "5%",
    name: "Aloe Vera",
    type: "Gel bio",
    role: "Anti-inflammatoire",
  },
];

export function IngredientsPreview() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <p className="tracking-[0.2em] uppercase text-xs text-sage-600 text-center">
        Formule
      </p>
      <h2 className="font-[var(--font-heading)] text-4xl text-center mt-4">
        Des actifs scientifiquement valides
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 px-6 max-w-screen-xl mx-auto">
        {ingredients.map((item) => (
          <div
            key={item.name}
            className="aspect-[3/4] bg-white rounded-xl border border-sage-200 shadow-sm flex flex-col overflow-hidden"
          >
            <div className="h-1 bg-sage-600 rounded-t-xl" />
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-4xl font-[var(--font-heading)] font-bold text-sage-700">
                {item.percentage}
              </p>
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.type}</p>
              </div>
              <span className="text-sm text-white bg-sage-600 px-4 py-1.5 rounded-full font-medium inline-block">
                {item.role}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/ingredients"
          className="inline-block bg-sage-600 text-white rounded-full px-8 py-3 font-medium mt-8 hover:bg-sage-700 transition-colors"
        >
          Voir la formule complete &rarr;
        </Link>
      </div>
    </section>
  );
}
