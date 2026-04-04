import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://test_2:bYBf4nvclOaDmosA@cluster0.ihfhxbd.mongodb.net/?appName=Cluster0";

const products = [
  {
    slug: "top-bordeaux-brode",
    name: "Top Bordeaux Brode",
    description:
      "Halter top en soie bordeaux orne de broderies argentees et d'un motif floral central en perles noires et vertes. Fines bretelles, coupe ajustee, dos nu. Une piece artisanale d'exception faconnee a la main dans la tradition indienne.",
    price: 4900,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-bordeaux-brode.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "top-vert-emeraude-dore",
    name: "Top Vert Emeraude & Or",
    description:
      "Halter top en mousseline vert emeraude, transparence delicate, parseme de sequins dores. Large bande de broderie or en bas. Fines bretelles dorees. L'alliance de la sensualite et du raffinement.",
    price: 4500,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-vert-dore.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "top-rouge-festif-miroir",
    name: "Top Rouge Festif Miroir",
    description:
      "Choli brode rouge cramoisi, travail de fil dore, miroirs et sequins. Manches courtes, coupe crop ajustee. La piece incontournable pour les celebrations, mariages et fetes.",
    price: 5500,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-rouge-festif.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "top-noir-sequins-or",
    name: "Top Noir Sequins Cascade Or",
    description:
      "Halter top noir profond recouvert de sequins dores en cascade. Dos nu avec lacage croise. La piece glamour par excellence pour les soirees qui comptent.",
    price: 5200,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-noir-sequins.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "top-rose-perles",
    name: "Top Rose Perles Nacrees",
    description:
      "Blouse en soie rose poudre, broderies de perles nacrees delicatement posees sur le bustier. Manches courtes bouffantes. Romantisme et finesse pour les occasions precieuses.",
    price: 4700,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-rose-perles.png"],
    featured: false,
    createdAt: new Date(),
  },
  {
    slug: "top-blanc-miroir-argent",
    name: "Top Blanc Miroir Argent",
    description:
      "Choli blanc immacule, parseme de miroirs argentes et de broderies fines. Dos echancre avec attaches. La purete du blanc sublimee par l'eclat des miroirs.",
    price: 4800,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-blanc-miroir.png"],
    featured: false,
    createdAt: new Date(),
  },
  {
    slug: "top-bleu-marine-zari",
    name: "Top Bleu Marine Zari Dore",
    description:
      "Blouse bleu marine profond entierement recouverte de broderie zari doree. Col rond, manches trois-quarts. La sophistication intemporelle du travail zari indien.",
    price: 5100,
    category: "tops",
    sizes: ["S", "M", "L", "XL"],
    images: ["/products/top-bleu-zari.png"],
    featured: false,
    createdAt: new Date(),
  },
  {
    slug: "top-mauve-velours-brode",
    name: "Top Mauve Velours Brode",
    description:
      "Choli en velours mauve profond, broderies ton sur ton et perles cristal cousues main. Tissu luxueux au toucher soyeux. Une piece de collection pour les connaisseuses.",
    price: 5800,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-mauve-velours.png"],
    featured: false,
    createdAt: new Date(),
  },
  {
    slug: "top-corail-gota-patti",
    name: "Top Corail Gota Patti",
    description:
      "Blouse corail eclatant avec travail gota patti traditionnel du Rajasthan. Rubans dores appliques a la main, lacage dos. Artisanat authentique, couleur vibrante.",
    price: 4600,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-corail-gota.png"],
    featured: false,
    createdAt: new Date(),
  },
  {
    slug: "top-dore-brocart",
    name: "Top Dore Brocart Royal",
    description:
      "Choli entierement en brocart dore tisse main, manches courtes. La piece ultime pour les mariages et grandes celebrations. Eclat royal garanti.",
    price: 6900,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-dore-brocart.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "churiyans-or-classique",
    name: "Churiyans Or Classique",
    description:
      "Set de 12 bracelets dores traditionnels, finition brillante. Les indispensables qui apportent lumiere et mouvement a chaque geste. Se portent empiles pour un effet maximal.",
    price: 2900,
    category: "accessoires",
    sizes: ["S", "M", "L"],
    images: ["/products/churiyans-or.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "churiyans-multicolores-festif",
    name: "Churiyans Multicolores Festifs",
    description:
      "Set de 24 churiyans en laque coloree : rouge, vert, bleu et dore melanges. L'explosion de couleurs pour les fetes, mariages et celebrations. La joie au poignet.",
    price: 3900,
    category: "accessoires",
    sizes: ["S", "M", "L"],
    images: ["/products/churiyans-multicolores.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "churiyans-perles-blanches",
    name: "Churiyans Perles de Mariee",
    description:
      "Set de 8 bracelets ornes de perles blanches sur base doree. La finesse et la delicatesse d'un bijou de mariee. Parfait pour completer une tenue nuptiale.",
    price: 4900,
    category: "accessoires",
    sizes: ["S", "M", "L"],
    images: ["/products/churiyans-perles.png"],
    featured: false,
    createdAt: new Date(),
  },
  {
    slug: "churiyans-rouge-mariage",
    name: "Churiyans Rouges Mariage",
    description:
      "Set de 16 churiyans rouge et dore, les traditionnels chooda de mariee. L'indispensable du trousseau. Eclat, tradition et bonheur reunis.",
    price: 5900,
    category: "accessoires",
    sizes: ["S", "M", "L"],
    images: ["/products/churiyans-rouge.png"],
    featured: false,
    createdAt: new Date(),
  },
  {
    slug: "churiyans-argent-grave",
    name: "Churiyans Argent Grave",
    description:
      "Set de 6 churiyans en argent plaque avec gravure fine traditionnelle. La subtilite et le raffinement de l'argent pour un look elegant au quotidien.",
    price: 3900,
    category: "accessoires",
    sizes: ["S", "M", "L"],
    images: ["/products/churiyans-argent.png"],
    featured: false,
    createdAt: new Date(),
  },
  {
    slug: "churiyans-turquoise-kundan",
    name: "Churiyans Turquoise Kundan",
    description:
      "Set de 10 bracelets turquoise avec pierres kundan serties a la main. L'alliance vibrante de la couleur et de la tradition joailliere indienne.",
    price: 4500,
    category: "accessoires",
    sizes: ["S", "M", "L"],
    images: ["/products/churiyans-turquoise.png"],
    featured: false,
    createdAt: new Date(),
  },
];

async function seed() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("sona-store");
    const collection = db.collection("products");
    await collection.deleteMany({});
    await collection.insertMany(products);
    console.log(`Seeded ${products.length} products into sona-store.products`);
  } finally {
    await client.close();
  }
}

seed().catch(console.error);
