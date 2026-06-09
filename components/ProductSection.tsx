'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export function ProductSection() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAdd = (type: 'portable' | 'campus') => {
    addToCart(type);
    router.push('/cart');
  };

  return (
    <section className="products-section" id="products-section">
      <div className="container-inner">
        <h2>商品</h2>

        <article className="product-card-lg">
          <div className="product-body">
            <Image
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"
              alt="ExploreX 便攜學習套裝"
              width={600}
              height={400}
            />
            <div className="product-info">
              <h3>ExploreX 便攜學習套裝</h3>
              <ul>
                <li>多款主題學習墊（動物、交通等）</li>
                <li>便攜收納藍色套裝</li>
                <li>三語 App 存取權限</li>
                <li>適合家庭啟蒙及感官統合</li>
              </ul>
              <div className="product-price">HK$200 / 套</div>
              <button type="button" className="btn-add-cart" onClick={() => handleAdd('portable')}>
                加入購物車
              </button>
              <Link href="/cart" className="btn-add-cart btn-add-cart--outline">
                查看詳情
              </Link>
            </div>
          </div>
        </article>

        <article className="product-card-lg">
          <div className="product-body">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
              alt="ExploreX 校園大型迷宮學習套裝"
              width={600}
              height={400}
            />
            <div className="product-info">
              <h3>ExploreX 校園大型迷宮學習套裝</h3>
              <ul>
                <li>二十款大型橫幅壁畫</li>
                <li>適合學校及團體學習</li>
                <li>兒童相機及互動配件</li>
                <li>培養團隊合作精神</li>
              </ul>
              <div className="product-price">HK$4,700 / 套</div>
              <button type="button" className="btn-add-cart" onClick={() => handleAdd('campus')}>
                加入購物車
              </button>
              <Link href="/cart" className="btn-add-cart btn-add-cart--outline">
                查看詳情
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
