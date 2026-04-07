import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Toaster } from "@/components/ui/sonner";

const karla = Karla({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MAPAUSE | Brume SOS Fraicheur Anti-Bouffees de Chaleur",
  description:
    "Quand la chaleur monte, Mapause. Brume rafraichissante aux hydrolats bio de Sauge Sclaree et Menthe Poivree. Sensation de fraicheur immediate. Fabriquee en France.",
  keywords: [
    "bouffees de chaleur",
    "menopause",
    "brume rafraichissante",
    "sauge sclaree",
    "menthe poivree",
    "soin naturel",
    "made in france",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${karla.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
        </CartProvider>
      </body>
    </html>
  );
}
