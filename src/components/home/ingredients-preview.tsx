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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-sage-50 to-ivory">
      <p className="tracking-[0.2em] uppercase text-xs text-sage-600 text-center">
        Formule
      </p>
      <h2 className="font-[var(--font-heading)] text-4xl text-center mt-4">
        Des actifs scientifiquement valides
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 px-6 max-w-screen-xl mx-auto">
        {ingredients.map((item) => (
          <div
            key={item.name}
            className="aspect-[3/4] bg-white rounded-2xl p-6 border border-sage-100 flex flex-col justify-between"
          >
            <p className="text-3xl font-[var(--font-heading)] font-bold text-sage-600">
              {item.percentage}
            </p>
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.type}</p>
            </div>
            <span className="text-sm text-sage-700 bg-sage-50 px-3 py-1 rounded-full inline-block">
              {item.role}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/ingredients"
          className="text-sage-600 hover:text-sage-800 font-medium transition-colors"
        >
          Voir la formule complete &rarr;
        </Link>
      </div>
    </section>
  );
}
