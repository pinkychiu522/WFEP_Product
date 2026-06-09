'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { initialForumPosts, type ForumPost } from '@/lib/data';

type ForumContextValue = {
  posts: ForumPost[];
  toggleLike: (postId: number) => void;
  getPost: (id: number) => ForumPost | undefined;
};

const ForumContext = createContext<ForumContextValue | null>(null);

export function ForumProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<ForumPost[]>(initialForumPosts);

  const value = useMemo<ForumContextValue>(
    () => ({
      posts,
      toggleLike: (postId) => {
        setPosts((prev) =>
          prev.map((p) => {
            if (p.id !== postId) return p;
            const liked = !p.liked;
            return { ...p, liked, likes: p.likes + (liked ? 1 : -1) };
          })
        );
      },
      getPost: (id) => posts.find((p) => p.id === id),
    }),
    [posts]
  );

  return <ForumContext.Provider value={value}>{children}</ForumContext.Provider>;
}

export function useForum() {
  const ctx = useContext(ForumContext);
  if (!ctx) throw new Error('useForum must be used within ForumProvider');
  return ctx;
}
