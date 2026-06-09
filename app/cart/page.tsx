import { CartPage } from '@/components/CartPage';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Cart() {
  return (
    <>
      <Header />
      <CartPage />
      <Footer showPayments={false} />
    </>
  );
}
