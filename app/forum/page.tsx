import { Footer } from '@/components/Footer';
import { ForumPostList } from '@/components/ForumPostList';
import { Header } from '@/components/Header';

export default function ForumPage() {
  return (
    <>
      <Header />
      <div className="container">
        <ForumPostList />
      </div>
      <Footer showPayments={false} />
    </>
  );
}
