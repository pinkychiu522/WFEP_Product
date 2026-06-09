'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useForum } from '@/context/ForumContext';
import { postReplies } from '@/lib/data';

function PostContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length) {
      elements.push(
        <ul key={`ul-${elements.length}`}>
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line) => {
    if (line.trim().startsWith('•')) {
      listItems.push(line.trim().slice(1).trim());
    } else {
      flushList();
      if (line.trim()) elements.push(<p key={`p-${elements.length}`}>{line}</p>);
    }
  });
  flushList();

  return <div className="detail-body">{elements}</div>;
}

export function PostDetail({ postId }: { postId: number }) {
  const { getPost, toggleLike, posts } = useForum();
  const post = getPost(postId);

  if (!post) {
    return (
      <div className="container" style={{ padding: '40px 20px' }}>
        <p>找不到此貼文。</p>
        <Link href="/forum" className="btn-back">
          返回討論區
        </Link>
      </div>
    );
  }

  const replies = postReplies[postId] ?? [];
  const otherPosts = posts.filter((p) => p.id !== postId).slice(0, 2);

  return (
    <div className="container">
      <Link href="/forum" className="btn-back">
        <i className="fas fa-arrow-left" /> 返回討論區
      </Link>

      <div className="detail-card">
        <div className="bookmark">
          <i className="fas fa-bookmark" />
        </div>
        <h2>
          【{post.tag}】{post.title}
        </h2>
        <div className="detail-author">
          <div className="avatar-circle">{post.avatar}</div>
          <div>
            <strong>{post.author}</strong>
            <br />
            <span className="post-time">{post.time}</span>
          </div>
        </div>
        <PostContent content={post.content} />
        <div className="detail-like-row">
          <button
            type="button"
            className={`btn-like-big${post.liked ? ' liked' : ''}`}
            onClick={() => toggleLike(post.id)}
            aria-label="讚好"
          >
            <i className="fas fa-thumbs-up" />
          </button>
        </div>
      </div>

      <div className="reply-tabs">
        <button type="button" className="reply-tab">
          回覆
        </button>
        <button type="button" className="reply-tab">
          轉發
        </button>
      </div>

      {replies.map((r) => (
        <div key={`${r.author}-${r.time}`} className="reply-card">
          <div className="reply-header">
            <div className="avatar-circle">{r.avatar}</div>
            <strong>{r.author}</strong>
            <span className="reply-time">{r.time}</span>
          </div>
          <p>{r.content}</p>
          <div className="post-actions" style={{ justifyContent: 'flex-end', marginTop: 12 }}>
            <button type="button">
              <i className="far fa-comment" />
            </button>
            <button type="button">
              <i className="fas fa-share" />
            </button>
            <button type="button">
              <i className="far fa-heart" />
            </button>
          </div>
        </div>
      ))}

      <div className="other-topics">
        <div className="other-topics-label">其他話題</div>
        {otherPosts.map((p) => (
          <Link key={p.id} href={`/forum/${p.id}`} className="other-post-card">
            <div className="post-avatar">
              <div className="avatar-circle">{p.avatar}</div>
              <div className="username">{p.author}</div>
            </div>
            <div className="post-right">
              <div className="other-post-title-bar">
                【{p.tag}】{p.title}
              </div>
              <div className="other-post-body">
                <div className="post-meta-row">
                  <span className="post-time">{p.time}</span>
                </div>
                <p className="post-preview">{p.content.substring(0, 60)}…</p>
                <div className="post-actions" style={{ justifyContent: 'flex-end' }}>
                  <span>
                    <i className="far fa-comment" />
                  </span>
                  <span>
                    <i className="fas fa-share" />
                  </span>
                  <span>
                    <i className="far fa-heart" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
