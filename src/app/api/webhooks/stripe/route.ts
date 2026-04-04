import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getDb } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event;
  try {
    event = getStripe().webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return new Response("Webhook signature verification failed", {
      status: 400,
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const db = await getDb();
    await db.collection("orders").insertOne({
      stripeSessionId: session.id,
      amount: session.amount_total,
      status: "paid",
      createdAt: new Date(),
    });
  }

  return new Response("ok");
}
