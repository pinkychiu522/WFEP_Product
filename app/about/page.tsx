import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="container">
        <h1 className="page-title" style={{ textAlign: 'left', marginTop: 28 }}>
          我們是誰？
        </h1>
        <Image
          className="full-img"
          src="/images/who-we-are.jpeg"
          alt="ExploreX 團隊"
          width={1200}
          height={675}
        />

        <section className="about-block">
          <h2>問題與願景</h2>
          <p>
            <strong>教育挑戰：</strong>香港及亞洲基層家庭教育成本高，缺乏寓學於樂的親子互動工具。
          </p>
          <p style={{ marginTop: 10 }}>
            <strong>願景：</strong>以低成本、高可及的數碼教育產品，推動語言、數學與品格教育，建立具社會影響力的平台。
          </p>
        </section>

        <div className="img-banner">
          <Image
            src="/images/professional-team-consultation.png"
            alt="專業團隊諮詢"
            width={1200}
            height={525}
            style={{ width: '100%', height: 'auto', aspectRatio: '16/7', objectFit: 'cover' }}
          />
          <div className="banner-text">ExploreX 讓學習觸手可及</div>
        </div>

        <section className="about-block">
          <h2>教育理念與特色</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>核心價值</h3>
              <p>語言啟蒙、數學思維、體能發展、品格培養</p>
            </div>
            <div className="about-card">
              <h3>特色</h3>
              <p>靈活場地（70㎡ 起）、高彈性、跨學科學習、親子共玩</p>
            </div>
            <div className="about-card">
              <h3>教學整合</h3>
              <p>課堂內外應用、策略競賽、主題涵蓋動物、數字、顏色及日常用品</p>
            </div>
            <div className="about-card">
              <h3>產品屬性</h3>
              <p>可重複使用、可擴展、可嵌入課程</p>
            </div>
          </div>
        </section>

        <div className="sen-overlay">
          <Image
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80"
            alt="SEN 家庭互動"
            width={1200}
            height={600}
            style={{ width: '100%', aspectRatio: '16/8', objectFit: 'cover' }}
          />
          <div className="sen-text">
            <p>· 家長在有限資源下，難以與 SEN 子女進行高效互動</p>
            <p>· 親友難以真正同理家長的感受</p>
            <p>· 照顧 SEN 學生需要時間及個別化密集支援</p>
          </div>
        </div>

        <section className="about-block">
          <h2>SDG &amp; ESG</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>教育公平 (SDG)</h3>
              <p>基層家庭可負擔，提升孩子語言與數學能力</p>
            </div>
            <div className="about-card">
              <h3>可持續材料 (ESG)</h3>
              <p>可重複使用布料及框架，減少一次性塑膠</p>
            </div>
            <div className="about-card">
              <h3>低碳運營</h3>
              <p>小型場地營運比傳統 STEM 課室節省 40% 能源</p>
            </div>
            <div className="about-card">
              <h3>雲端運算</h3>
              <p>使用雲端伺服器取代實體硬件，減少電子廢物</p>
            </div>
          </div>
        </section>
      </div>

      <Footer showPayments={false} />
    </>
  );
}
