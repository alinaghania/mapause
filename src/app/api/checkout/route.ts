import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { items } = await req.json();

  const stripe = getStripe();

  const line_items = items.map(
    (item: { name: string; price: number; quantity: number; format: string }) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: `Aura de Mapause (${item.format})`,
          description: "Brume rafraichissante anti-bouffees de chaleur",
          images: [`${process.env.NEXT_PUBLIC_BASE_URL}/images/packshot-spa.png`],
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    })
  );

  // Calculate if free shipping (total >= 45EUR = 4500 cents)
  const totalCents = items.reduce(
    (sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity,
    0
  );
  const freeShipping = totalCents >= 4500;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    // Collect shipping address
    shipping_address_collection: {
      allowed_countries: ["FR", "BE", "CH", "LU", "MC"],
    },
    // Shipping options
    shipping_options: freeShipping
      ? [
          {
            shipping_rate_data: {
              type: "fixed_amount" as const,
              fixed_amount: { amount: 0, currency: "eur" },
              display_name: "Livraison offerte",
              delivery_estimate: {
                minimum: { unit: "business_day" as const, value: 3 },
                maximum: { unit: "business_day" as const, value: 5 },
              },
            },
          },
        ]
      : [
          {
            shipping_rate_data: {
              type: "fixed_amount" as const,
              fixed_amount: { amount: 490, currency: "eur" },
              display_name: "Livraison standard",
              delivery_estimate: {
                minimum: { unit: "business_day" as const, value: 3 },
                maximum: { unit: "business_day" as const, value: 5 },
              },
            },
          },
          {
            shipping_rate_data: {
              type: "fixed_amount" as const,
              fixed_amount: { amount: 0, currency: "eur" },
              display_name: "Livraison offerte des 45\u20AC d'achat",
              delivery_estimate: {
                minimum: { unit: "business_day" as const, value: 3 },
                maximum: { unit: "business_day" as const, value: 5 },
              },
            },
          },
        ],
    // Collect phone number
    phone_number_collection: { enabled: true },
    // Always collect billing address
    billing_address_collection: "required",
    // Allow promo codes
    allow_promotion_codes: true,
    // Create customer for future use
    customer_creation: "always",
    // Locale
    locale: "fr",
    // Metadata
    metadata: {
      items: JSON.stringify(
        items.map((i: { name: string; format: string; quantity: number }) => ({
          name: i.name,
          format: i.format,
          quantity: i.quantity,
        }))
      ),
    },
    // URLs
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
  });

  return Response.json({ url: session.url });
}
