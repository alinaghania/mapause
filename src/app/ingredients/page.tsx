import Image from "next/image";
import Link from "next/link";

type EvidenceLevel = "TRES FORTE" | "FORTE" | "MODEREE" | "Standard";

interface Ingredient {
  name: string;
  percentage: string;
  role: string;
  description: string;
  evidence: EvidenceLevel;
}

const ingredients: Ingredient[] = [
  {
    name: "Hydrolat Sauge Sclaree bio",
    percentage: "35%",
    role: "Regulateur hormonal",
    description:
      "Ingredient phare de la formule. Contribue a reduire le cortisol et augmenter la serotonine, favorisant une regulation hormonale naturelle sur le long terme. Utilisee depuis des siecles pour les desagrements feminins.",
    evidence: "FORTE",
  },
  {
    name: "Hydrolat Menthe Poivree bio",
    percentage: "20%",
    role: "Rafraichissant + vasoconstricteur",
    description:
      "Apporte une sensation de fraicheur immediate grace a ses composes mentholes naturels. Agit egalement comme vasoconstricteur leger pour reduire le flux sanguin cutane.",
    evidence: "MODEREE",
  },
  {
    name: "Eau Thermale",
    percentage: "20%",
    role: "Mineraux apaisants",
    description:
      "Riche en mineraux et oligo-elements apaisants. Renforce l'hydratation cutanee et calme les sensations d'inconfort. Base aqueuse de haute qualite pour la formule.",
    evidence: "MODEREE",
  },
  {
    name: "Hydrolat Hamamelis bio",
    percentage: "10%",
    role: "Vasoconstricteur",
    description:
      "Puissant vasoconstricteur naturel qui aide a reduire le flux sanguin a la surface de la peau, diminuant ainsi la sensation de chaleur. Effet en 10 secondes a 5 minutes.",
    evidence: "MODEREE",
  },
  {
    name: "Gel Aloe Vera bio",
    percentage: "5%",
    role: "Refroidissement par evaporation",
    description:
      "Amplifie le refroidissement par evaporation a la surface de la peau. Apporte hydratation et apaisement tout en prolongeant la sensation de fraicheur.",
    evidence: "MODEREE",
  },
  {
    name: "Glycerine vegetale",
    percentage: "3%",
    role: "Humectant",
    description:
      "Humectant naturel qui attire et retient l'eau dans les couches superieures de l'epiderme. Empeche la deshydratation cutanee et laisse la peau douce.",
    evidence: "Standard",
  },
  {
    name: "Menthyl Lactate",
    percentage: "0.5%",
    role: "Agent cooling TRPM8",
    description:
      "Active les recepteurs de froid TRPM8 de la peau, declenchant une sensation de fraicheur sans abaisser la temperature reelle. Effet prolonge et plus doux que le menthol pur.",
    evidence: "FORTE",
  },
  {
    name: "L-Menthol",
    percentage: "0.2%",
    role: "Fraicheur immediate TRPM8",
    description:
      "Le plus puissant activateur connu des recepteurs TRPM8. Procure une sensation de fraicheur immediate et intense des la premiere seconde d'application. Effet en 0-10 secondes.",
    evidence: "TRES FORTE",
  },
  {
    name: "Polysorbate 20",
    percentage: "0.5%",
    role: "Solubilisant",
    description:
      "Emulsifiant doux qui permet de solubiliser les actifs liposolubles dans la phase aqueuse. Garantit l'homogeneite de la formule et la finesse du spray.",
    evidence: "Standard",
  },
  {
    name: "Conservateur naturel",
    percentage: "0.5%",
    role: "Conservation bio",
    description:
      "Systeme conservateur approuve par Ecocert, garantissant la stabilite microbiologique de la formule sans recourir aux parabenes, au phenoxyethanol ou a tout autre conservateur controverse.",
    evidence: "Standard",
  },
];

const excludedIngredients = [
  "Alcool denature",
  "Parfum synthetique",
  "Parabenes",
  "Phenoxyethanol",
  "Colorants",
  "Allergenes declares",
];

function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  const colors: Record<EvidenceLevel, string> = {
    "TRES FORTE": "bg-emerald-100 text-emerald-800",
    FORTE: "bg-emerald-50 text-emerald-700",
    MODEREE: "bg-amber-50 text-amber-700",
    Standard: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`inline-block text-xs font-medium tracking-wide px-3 py-1 rounded-full ${colors[level]}`}
    >
      {level}
    </span>
  );
}

export default function IngredientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mist py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="tracking-[0.2em] uppercase text-xs text-sage-600">
            Ingredients
          </p>
          <h1 className="font-[var(--font-heading)] text-5xl mt-6">
            Notre Formule
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Chaque ingredient a une raison scientifique d&apos;etre la.
          </p>
          <div className="mt-10 max-w-xs mx-auto">
            <Image
              src="/images/packshot-spa.png"
              alt="Mapause - flacon brume anti bouffees de chaleur"
              width={320}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Ingredients grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ingredients.map((ing, i) => (
              <div
                key={i}
                className="bg-ivory rounded-2xl p-8 border border-sage-100 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-[var(--font-heading)] text-3xl text-sage-600">
                      {ing.percentage}
                    </span>
                    <h3 className="font-[var(--font-heading)] text-xl mt-1">
                      {ing.name}
                    </h3>
                  </div>
                  <EvidenceBadge level={ing.evidence} />
                </div>
                <p className="tracking-[0.2em] uppercase text-xs text-sage-600 mt-4">
                  {ing.role}
                </p>
                <p className="text-muted-foreground mt-3 leading-relaxed flex-1">
                  {ing.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we DON'T include */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="tracking-[0.2em] uppercase text-xs text-sage-600">
            Notre engagement
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl mt-4">
            Ce que notre formule ne contient PAS
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Nous avons exclu tout ce qui n&apos;a pas sa place dans un soin de
            qualite.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {excludedIngredients.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 border border-sage-100 flex items-center gap-3"
              >
                <svg
                  className="w-5 h-5 text-rose-gold shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
                <span className="font-medium text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-mist py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="font-[var(--font-heading)] text-4xl">
            Convaincue par notre formule ?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Essayez Mapause et ressentez la difference.
          </p>
          <Link
            href="/#product"
            className="inline-block mt-8 bg-sage-600 text-white rounded-full px-10 py-4 font-medium hover:bg-sage-700 transition-colors"
          >
            Decouvrir notre brume
          </Link>
        </div>
      </section>
    </>
  );
}
