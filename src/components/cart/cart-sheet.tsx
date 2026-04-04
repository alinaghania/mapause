"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-provider";
import { formatPrice } from "@/lib/utils";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader className="pb-6">
          <SheetTitle className="font-[var(--font-serif)] text-2xl font-light italic">
            Panier
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-sm text-muted-foreground">Votre panier est vide</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.slug}-${item.size}`}
                  className="flex gap-4"
                >
                  <div className="relative h-28 w-22 shrink-0 overflow-hidden bg-accent">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="88px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-sm tracking-wide">{item.product.name}</h4>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          Taille: {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.slug, item.size)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          className="h-7 w-7 border flex items-center justify-center"
                          onClick={() =>
                            updateQuantity(item.product.slug, item.size, item.quantity - 1)
                          }
                        >
                          <Minus className="h-2.5 w-2.5" />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          className="h-7 w-7 border flex items-center justify-center"
                          onClick={() =>
                            updateQuantity(item.product.slug, item.size, item.quantity + 1)
                          }
                        >
                          <Plus className="h-2.5 w-2.5" />
                        </button>
                      </div>
                      <p className="text-sm">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                  Total
                </span>
                <span className="text-lg tracking-wide">{formatPrice(totalPrice)}</span>
              </div>
              <Button
                nativeButton={false}
                className="w-full h-12 rounded-none text-[12px] tracking-[0.3em] uppercase"
                render={<Link href="/cart" onClick={() => onOpenChange(false)} />}
              >
                Voir le panier
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
