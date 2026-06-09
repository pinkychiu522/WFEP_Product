'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { PRICE_CAMPUS, PRICE_PORTABLE } from '@/lib/constants';

type CartContextValue = {
  cartPortable: number;
  cartCampus: number;
  cartCount: number;
  portableSubtotal: number;
  campusSubtotal: number;
  total: number;
  addToCart: (type: 'portable' | 'campus') => void;
  updateQty: (type: 'portable' | 'campus', delta: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartPortable, setCartPortable] = useState(3);
  const [cartCampus, setCartCampus] = useState(1);

  const value = useMemo<CartContextValue>(() => {
    const portableSubtotal = cartPortable * PRICE_PORTABLE;
    const campusSubtotal = cartCampus * PRICE_CAMPUS;

    return {
      cartPortable,
      cartCampus,
      cartCount: cartPortable + cartCampus,
      portableSubtotal,
      campusSubtotal,
      total: portableSubtotal + campusSubtotal,
      addToCart: (type) => {
        if (type === 'portable') setCartPortable((n) => n + 1);
        if (type === 'campus') setCartCampus((n) => n + 1);
      },
      updateQty: (type, delta) => {
        if (type === 'portable') setCartPortable((n) => Math.max(0, n + delta));
        if (type === 'campus') setCartCampus((n) => Math.max(0, n + delta));
      },
    };
  }, [cartPortable, cartCampus]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
