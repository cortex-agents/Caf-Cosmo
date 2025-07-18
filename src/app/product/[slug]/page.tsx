'use client'

import { useState } from 'react'
import { products } from '@/data/products'
import Image from 'next/image'
import { notFound, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Product } from '@/types/Product'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductDetailPage({ params }: any) {
  const router = useRouter();
  const product: Product | undefined = products.find((item) => item.slug === params.slug);
  const [quantity, setQuantity] = useState(1);

  if (!product) return notFound();

  const handleAddToCart = () => {
    const existingCart = localStorage.getItem('addToCart');
    const cart: Product[] = existingCart ? JSON.parse(existingCart) : [];

    const index = cart.findIndex((item: Product) => item.id === product.id);

    if (index !== -1) {
      cart[index].quantity = (cart[index].quantity || 1) + quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('addToCart', JSON.stringify(cart));
    router.push('/cart');
  };

  const handleBuyNow = () => {
    localStorage.setItem("checkoutNow", JSON.stringify([{ ...product, quantity }]));
    router.push("/checkout");
  };

  return (
    <section className="min-h-screen py-12 px-6 md:px-10 bg-[#fefefe]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px]"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-xl text-amber-600 font-bold">${product.price}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                –
              </button>
              <span className="px-4 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded font-semibold transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-black hover:bg-gray-900 text-white py-2 px-6 rounded font-semibold transition"
            >
              Buy Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
