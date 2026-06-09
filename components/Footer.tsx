'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

type FooterProps = {
  compact?: boolean;
  showPayments?: boolean;
};

export function Footer({ compact = false, showPayments = true }: FooterProps) {
  const router = useRouter();

  const goToNotice = () => {
    router.push('/cart#cartNoticeSection');
  };

  if (compact) {
    return (
      <footer className="site-footer">
        <div className="footer-bottom">© ExploreX 共融學習 · 由家開始</div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>關於我們</h4>
          <ul>
            <li>
              <Link href="/about">關於我們</Link>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={goToNotice}>
                隱私政策
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={goToNotice}>
                條款與細則
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={goToNotice}>
                指南與支援
              </button>
            </li>
            <li>
              <Link href="/cart">購物車直擊</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>聯絡我們</h4>
          <ul>
            <li>香港九龍旺角</li>
            <li>營業時間：11:00 – 17:30</li>
            <li>電郵：pinkychiu522@gmail.com</li>
            <li>電話：(+852) 9922 0043</li>
            <li>WhatsApp：(+852) 1234 5678</li>
          </ul>
        </div>
      </div>
      {showPayments && (
        <div className="footer-payments">
          <i className="fab fa-cc-visa" />
          <i className="fab fa-cc-mastercard" />
          <i className="fab fa-cc-paypal" />
          <i className="fab fa-alipay" />
          <i className="fab fa-weixin" />
        </div>
      )}
      <div className="footer-bottom">© ExploreX 共融學習 · 由家開始</div>
    </footer>
  );
}
