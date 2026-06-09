'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';

type NavKey = 'home' | 'about' | 'forum' | 'products' | 'cart';

function isActive(pathname: string, key: NavKey) {
  if (key === 'home') return pathname === '/';
  if (key === 'about') return pathname === '/about';
  if (key === 'forum') return pathname.startsWith('/forum');
  if (key === 'cart') return pathname === '/cart';
  if (key === 'products') return pathname === '/';
  return false;
}

export function Header() {
  const pathname = usePathname();
  const onCart = pathname === '/cart';

  const fourth: { href: string; label: string; key: NavKey } = onCart
    ? { href: '/cart', label: '購物車', key: 'cart' }
    : { href: '/#products-section', label: '精選商品', key: 'products' };

  const links: { href: string; label: string; key: NavKey }[] = [
    { href: '/', label: '首頁', key: 'home' },
    { href: '/about', label: '關於我們', key: 'about' },
    { href: '/forum', label: '討論區', key: 'forum' },
    fourth,
  ];

  return (
    <header className="site-header">
      <Link href="/" className="logo-wrap">
        <Logo />
        <div className="logo-text">
          探索學院 <span>ExploreX</span>
        </div>
      </Link>
      <nav className="orange-nav" aria-label="主要導覽">
        {links.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={isActive(pathname, link.key) ? 'active' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
