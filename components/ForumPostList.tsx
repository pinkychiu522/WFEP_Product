'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useForum } from '@/context/ForumContext';

export function ForumPostList() {
  const { posts, toggleLike } = useForum();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return posts;
    const q = query.toLowerCase();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q)
    );
  }, [posts, query]);

  return (
    <>
      <section className="forum-hero">
        <h1>ExploreX Forum</h1>
        <p>Find solutions, get advice, help others.</p>
        <div className="search-bar">
          <i className="fas fa-search" />
          <input
            type="search"
            placeholder="Search everything"
            aria-label="搜尋討論區"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </section>

      <div className="announce-box">
        <h3>更新及維護</h3>
        <ul>
          <li>
            <strong>【社區公告】</strong> 討論區升級完成！新增「敏感話題」智能分流。
          </li>
          <li>
            <strong>【重要提醒】</strong> 家長互助專區 — SEN 資源分享區已開放。
          </li>
          <li>
            <strong>【最新攻略】</strong> 新增家長與社工私信系統。
          </li>
        </ul>
      </div>

      <div className="forum-topics-header">
        <h2>話題</h2>
        <button
          type="button"
          className="btn-post"
          onClick={() => alert('發文功能即將推出，敬請期待！')}
        >
          發文
        </button>
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', padding: 32, color: '#999' }}>找不到相關話題</p>
      ) : (
        filtered.map((post) => (
          <div key={post.id} className="forum-post-item">
            <div className="post-avatar">
              <div className="avatar-circle">{post.avatar}</div>
              <div className="username">{post.author}</div>
            </div>
            <div className="post-content">
              <Link href={`/forum/${post.id}`} className="post-link">
                <div className="post-tag">【{post.tag}】</div>
                <div className="post-title-text">{post.title}</div>
                <div className="post-preview">
                  {post.content.substring(0, 100)}
                  {post.content.length > 100 ? '…' : ''}
                </div>
              </Link>
              <div className="post-meta-row">
                <span className="post-time">{post.time}</span>
                <div className="post-actions">
                  <button type="button" aria-label="留言">
                    <i className="far fa-comment" /> {post.comments}
                  </button>
                  <button type="button" aria-label="分享">
                    <i className="fas fa-share" />
                  </button>
                  <button
                    type="button"
                    className={`like-btn${post.liked ? ' liked' : ''}`}
                    aria-label="讚好"
                    onClick={() => toggleLike(post.id)}
                  >
                    <i className={`${post.liked ? 'fas' : 'far'} fa-heart`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="forum-pagination">1</div>
    </>
  );
}
