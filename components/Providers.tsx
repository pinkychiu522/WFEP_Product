'use client';

import type { ReactNode } from 'react';
import { CartProvider } from '@/context/CartContext';
import { ForumProvider } from '@/context/ForumContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <ForumProvider>{children}</ForumProvider>
    </CartProvider>
  );
}
