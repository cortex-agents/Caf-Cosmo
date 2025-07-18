// D:\cortex_agents_projects\cafe-cosmo\src\components\AddToCartBtn.tsx

'use client';

import { useRouter } from 'next/navigation';
import { Product } from '@/types/Product';

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const router = useRouter();

  const handleAddToCart = () => {
    const existingCart = localStorage.getItem('addToCart');
    const cart = existingCart ? JSON.parse(existingCart) : [];

    const index = cart.findIndex((item: Product) => item.id === product.id);

    if (index !== -1) {
      cart[index].quantity = (cart[index].quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('addToCart', JSON.stringify(cart));

    router.push('/cart');
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button>
  );
}
