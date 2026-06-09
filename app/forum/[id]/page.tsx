import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PostDetail } from '@/components/PostDetail';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ForumPostPage({ params }: Props) {
  const { id } = await params;
  const postId = parseInt(id, 10);

  return (
    <>
      <Header />
      <PostDetail postId={postId} />
      <Footer compact />
    </>
  );
}
