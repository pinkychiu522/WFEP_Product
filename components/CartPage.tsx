'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/constants';

export function CartPage() {
  const { cartPortable, cartCampus, portableSubtotal, campusSubtotal, total, updateQty } =
    useCart();

  return (
    <div className="container">
      <h1 className="page-title">購物車</h1>
      <div className="page-title-line" />

      <article className="cart-card">
        <div className="cart-card-left">
          <Image
            src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"
            alt="ExploreX 便攜學習套裝"
            width={600}
            height={180}
          />
          <h3>ExploreX 便攜學習套裝</h3>
        </div>
        <div className="cart-controls">
          <div className="qty-display">{cartPortable}</div>
          <div className="price-display">
            <span>${formatPrice(portableSubtotal)}</span>
            <br />
            <small>購買</small>
          </div>
          <div className="qty-btns">
            <button
              type="button"
              className="qty-btn"
              aria-label="減少"
              onClick={() => updateQty('portable', -1)}
            >
              −
            </button>
            <button
              type="button"
              className="qty-btn"
              aria-label="增加"
              onClick={() => updateQty('portable', 1)}
            >
              +
            </button>
          </div>
        </div>
      </article>

      <article className="cart-card">
        <div className="cart-card-left">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
            alt="ExploreX 校園大型迷宮學習套裝"
            width={600}
            height={180}
          />
          <h3>ExploreX 校園大型迷宮學習套裝</h3>
        </div>
        <div className="cart-controls">
          <div className="qty-display">{cartCampus}</div>
          <div className="price-display">
            <span>${formatPrice(campusSubtotal)}</span>
            <br />
            購買
          </div>
          <div className="qty-btns">
            <button
              type="button"
              className="qty-btn"
              aria-label="減少"
              onClick={() => updateQty('campus', -1)}
            >
              −
            </button>
            <button
              type="button"
              className="qty-btn"
              aria-label="增加"
              onClick={() => updateQty('campus', 1)}
            >
              +
            </button>
          </div>
        </div>
      </article>

      <div className="total-card">
        <span className="label">總計</span>
        <span className="amount">${formatPrice(total)}</span>
      </div>

      <div className="payment-icons">
        <i className="fab fa-cc-visa" />
        <i className="fab fa-cc-mastercard" />
        <i className="fab fa-cc-paypal" />
        <i className="fab fa-alipay" />
        <i className="fab fa-weixin" />
      </div>

      <section id="cartNoticeSection" className="notice-area">
        <h3>注意事項</h3>
        <h4>送貨及付款方式</h4>
        <p>送貨範圍：全港（港島、九龍、新界），偏遠地區順豐到付。</p>
        <p>送貨時間：一般 3–5 個工作天發貨，學校機構可預約批量。</p>
        <p>送貨方式：本地配送（順豐 / Zeek）、自取點。</p>
        <p>付款方式：信用卡、FPS / PayMe / 銀行轉帳、機構支票。</p>
        <h4>退換貨政策</h4>
        <p>商品須保持全新未使用，收貨 7 天內申請退換。</p>
        <p>損壞或錯貨免費換貨；退款 7–10 個工作天處理。</p>
        <p>已開封學習套裝、數碼產品及訂製商品恕不退換。</p>
      </section>
    </div>
  );
}
