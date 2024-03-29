import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const AddToCartModal = dynamic(
  () => import('../../../components/AddToCartModal'),
  { loading: () => <p>Loading...</p>, ssr: false }
);

export default function Product() {
  const router = useRouter();

  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);

  function handleAddToCart() {
    setIsAddToCartModalVisible(!isAddToCartModalVisible);
  }

  return (
    <div>
      <h1>Page: {router.query.slug}</h1>

      <button onClick={handleAddToCart}>Add to Cart</button>

      { isAddToCartModalVisible && <AddToCartModal />}
    </div>
  );
}
