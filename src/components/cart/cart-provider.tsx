"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Product, CartItem } from "@/lib/types";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, format: string) => void;
  removeItem: (slug: string, format: string) => void;
  updateQuantity: (slug: string, format: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("mapause-cart");
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        // corrupted data
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("mapause-cart", JSON.stringify(items));
    }
  }, [items, loaded]);

  const addItem = useCallback((product: Product, format: string) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.slug === product.slug && i.format === format
      );
      if (existing) {
        return prev.map((i) =>
          i.product.slug === product.slug && i.format === format
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, format, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((slug: string, format: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.slug === slug && i.format === format))
    );
  }, []);

  const updateQuantity = useCallback(
    (slug: string, format: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(slug, format);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.product.slug === slug && i.format === format ? { ...i, quantity } : i
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
