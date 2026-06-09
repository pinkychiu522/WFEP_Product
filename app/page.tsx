import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { GameDemo } from '@/components/GameDemo';
import { Header } from '@/components/Header';
import { ProductSection } from '@/components/ProductSection';

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="container">
        <section className="hero">
          <Image
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80"
            alt="父子親子互動學習"
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 1100px"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay">
            <h1>ExploreX 讓每個孩子享有平等的快樂學習</h1>
            <p className="hero-sub">共融探索 · 由家開始</p>
          </div>
        </section>

        <div className="features-row">
          <div className="feature-pill">
            <h3>
              <i className="fas fa-users" /> 共融
            </h3>
            <p>專為 SEN 設計，人人可及</p>
          </div>
          <div className="feature-pill">
            <h3>
              <i className="fas fa-language" /> 多語
            </h3>
            <p>廣東話、英語、普通話 AR 互動</p>
          </div>
          <div className="feature-pill">
            <h3>
              <i className="fas fa-graduation-cap" /> 專業
            </h3>
            <p>專家研發，專業教學法</p>
          </div>
          <div className="feature-pill">
            <h3>
              <i className="fas fa-seedling" /> 全人發展
            </h3>
            <p>技能培養，不只知識</p>
          </div>
        </div>

        <section className="about-split">
          <Image
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
            alt="親子共玩學習墊"
            width={800}
            height={600}
          />
          <div>
            <h2>ExploreX：共融探索·由家開始</h2>
            <p>
              我們致力推動共融教育，為 SEN 家庭提供可負擔、高質素的親子互動學習工具。從家中開始，讓每個孩子都能享受探索的樂趣。
            </p>
          </div>
        </section>

        <h2 className="section-heading">快來體驗探索，ExploreX 與您共創美好時光</h2>
        <div className="gallery-grid">
          <Image src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80" alt="家庭學習場景 1" width={400} height={400} />
          <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80" alt="家庭學習場景 2" width={400} height={400} />
          <Image src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80" alt="家庭學習場景 3" width={400} height={400} />
          <Image src="/images/classroom-learning-scene.png" alt="課堂學習場景 1" width={400} height={400} />
          <Image src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80" alt="課堂學習場景 2" width={400} height={400} />
          <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80" alt="課堂學習場景 3" width={400} height={400} />
        </div>

        <GameDemo />

        <section className="app-section">
          <Image
            src="/images/interactive-learning-app.png"
            alt="AR 互動學習 App"
            width={600}
            height={400}
          />
          <div>
            <h2>ExploreX 互動學習 App</h2>
            <p style={{ marginTop: 12, color: 'var(--text-muted)' }}>
              掃描實體學習卡，開啟 AR 互動體驗。支援三語切換、進度追蹤，讓學習變得有趣又有效。
            </p>
            <ul style={{ margin: '16px 0 0 20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <li>AR 即時互動辨識</li>
              <li>廣東話 / 英語 / 普通話</li>
              <li>學習進度雲端同步</li>
            </ul>
          </div>
        </section>
      </div>

      <ProductSection />

      <div className="container">
        <blockquote className="testimonial">
          「以前帶 Jayden 出街最怕奇怪眼光，自從用 ExploreX，佢學識面對失敗，我哋討論區搵到同路人，唔需要完美，只需要互相支撐。」—
          Monica，SEN 家長
        </blockquote>
      </div>

      <Footer />
    </>
  );
}
