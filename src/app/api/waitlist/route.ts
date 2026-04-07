import { NextRequest } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { email, firstName, lastName, phone, address, city, postalCode, country, items } = data;

    if (!email || !firstName || !lastName) {
      return Response.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    const db = await getDb();

    // Check if email already exists
    const existing = await db.collection("waitlist").findOne({ email: email.toLowerCase() });

    if (existing) {
      // Update existing entry
      await db.collection("waitlist").updateOne(
        { email: email.toLowerCase() },
        {
          $set: {
            firstName,
            lastName,
            phone,
            address,
            city,
            postalCode,
            country,
            items,
            updatedAt: new Date(),
          },
        }
      );
    } else {
      // Create new entry
      await db.collection("waitlist").insertOne({
        email: email.toLowerCase(),
        firstName,
        lastName,
        phone,
        address,
        city,
        postalCode,
        country,
        items,
        notified: false,
        createdAt: new Date(),
      });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
