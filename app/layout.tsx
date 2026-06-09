import type { Metadata } from 'next';
import { CartFloat } from '@/components/CartFloat';
import { Providers } from '@/components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: '探索學院 ExploreX - 共融探索·由家開始',
  description: '探索學院 ExploreX — 共融探索·由家開始。SEN友善、多語支援的親子學習平台。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-HK">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        <Providers>
          {children}
          <CartFloat />
        </Providers>
      </body>
    </html>
  );
}
