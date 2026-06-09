'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export function CartFloat() {
  const { cartCount } = useCart();

  return (
    <Link href="/cart" className="cart-float" aria-label="購物車">
      <i className="fas fa-shopping-cart" />
      {cartCount > 0 && <span className="badge">{cartCount}</span>}
    </Link>
  );
}
