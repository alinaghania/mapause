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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const session = event.data.object as any;
    const db = await getDb();
    await db.collection("orders").insertOne({
      stripeSessionId: session.id,
      stripeCustomerId: session.customer,
      email: session.customer_details?.email,
      phone: session.customer_details?.phone,
      name: session.customer_details?.name,
      shippingAddress: session.shipping_details?.address,
      shippingName: session.shipping_details?.name,
      billingAddress: session.customer_details?.address,
      amount: session.amount_total,
      shipping: session.total_details?.amount_shipping,
      items: session.metadata?.items ? JSON.parse(session.metadata.items) : [],
      status: "paid",
      createdAt: new Date(),
    });
  }

  return new Response("ok");
}
