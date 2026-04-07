"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { CartSheet } from "@/components/cart/cart-sheet";
import { useState } from "react";

const navItems = [
  { label: "Notre Histoire", href: "/notre-histoire" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Temoignages", href: "/temoignages" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  const { totalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6 lg:px-12">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <span className="font-[var(--font-heading)] text-2xl tracking-[0.2em] uppercase">MAPAUSE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 ml-16">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-[13px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)} aria-label="Ouvrir le panier">
          <ShoppingBag className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] font-medium text-background">{totalItems}</span>
          )}
        </Button>
        <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t px-6 py-6 space-y-4 bg-background">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="block text-[13px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
      <div className="border-b border-border/50" />
    </header>
  );
}
