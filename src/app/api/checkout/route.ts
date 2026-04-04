import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { items } = await req.json();

  const line_items = items.map(
    (item: { name: string; price: number; quantity: number; size: string }) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: `${item.name} (${item.size})`,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    })
  );

  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    line_items,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
  });

  return Response.json({ url: session.url });
}
