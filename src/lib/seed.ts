import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://test_2:bYBf4nvclOaDmosA@cluster0.ihfhxbd.mongodb.net/?appName=Cluster0";

const products = [
  {
    slug: "top-bordeaux",
    name: "Amara",
    description: "Mousseline bordeaux, broderies argentees, bordure sequins argent et pierres rouges.",
    price: 4900,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-bordeaux.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "top-bleu-nuit",
    name: "Nila",
    description: "Mousseline bleu nuit, broderies dorees, bordure sequins or et perles bleu fonce.",
    price: 4900,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-bleu-nuit.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "top-rose-poudre",
    name: "Priya",
    description: "Mousseline rose poudre, broderies or rose, bordure sequins rose et nacre.",
    price: 4500,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-rose-poudre.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "top-noir-dore",
    name: "Kali",
    description: "Mousseline noire, broderies dorees, bordure sequins or et perles noires.",
    price: 5200,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-noir-dore.png"],
    featured: true,
    createdAt: new Date(),
  },
  {
    slug: "top-vert-emeraude",
    name: "Meera",
    description: "Mousseline vert emeraude, broderies dorees, bordure sequins or et perles vertes.",
    price: 4900,
    category: "tops",
    sizes: ["XS", "S", "M", "L"],
    images: ["/products/top-vert-emeraude.png"],
    featured: true,
    createdAt: new Date(),
  },
];

async function seed() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("sona-store");
    await db.collection("products").deleteMany({});
    await db.collection("products").insertMany(products);
    console.log(`Seeded ${products.length} products`);
  } finally {
    await client.close();
  }
}

seed().catch(console.error);
