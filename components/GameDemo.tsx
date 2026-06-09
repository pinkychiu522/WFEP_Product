'use client';

import { useState } from 'react';
import { GAME_DEMO_URL } from '@/lib/constants';

const languages = ['廣東話', 'English', '普通話'];

export function GameDemo() {
  const [selected, setSelected] = useState(0);

  const startGame = () => {
    window.open(GAME_DEMO_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="game-demo">
      <h2>立即體驗試玩版</h2>
      <p style={{ marginBottom: 20 }}>三語學習遊戲</p>
      <div className="lang-options">
        {languages.map((lang, i) => (
          <button
            key={lang}
            type="button"
            className={`lang-btn${selected === i ? ' selected' : ''}`}
            onClick={() => setSelected(i)}
          >
            {lang}
          </button>
        ))}
      </div>
      <button type="button" className="btn-start" onClick={startGame}>
        開始遊戲
      </button>
    </section>
  );
}
