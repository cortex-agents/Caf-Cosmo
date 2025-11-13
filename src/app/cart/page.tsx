'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types/Product';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMinus, FiPlus, FiTrash2, FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem('addToCart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const updateCart = (updatedItems: Product[]) => {
    setCartItems(updatedItems);
    localStorage.setItem('addToCart', JSON.stringify(updatedItems));
  };

  const handleRemove = (id: string) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    updateCart(updatedItems);
  };

  const handleQuantityChange = (id: string, delta: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
        : item
    );
    updateCart(updatedItems);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handleProceedToCheckout = () => {
    setLoading(true);
    if (cartItems.length > 0) {
      localStorage.removeItem('checkoutNow');
      router.push('/checkout');
    } else {
      toast.error('Your cart is empty');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 max-w-4xl mx-auto px-2 sm:px-4 py-8 w-full pt-28">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="flex items-center gap-3 mb-10 justify-center"
        >
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-white shadow-lg">
            <FiShoppingCart size={28} />
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
            Your Cart
          </h1>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-[350px] bg-white rounded-2xl shadow-md p-10"
          >
            <FiShoppingCart size={60} className="text-gray-400 mb-6" />
            <p className="text-gray-600 text-lg font-semibold mb-4">Your cart is empty.</p>
            <Link href="/menu" className="inline-block px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full shadow hover:scale-105 transition cursor-pointer">
              Go to Menu
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
            }}
            className="space-y-7"
          >
            <AnimatePresence>
              {cartItems.map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between border-b pb-4 bg-white rounded-2xl shadow-md group hover:shadow-lg transition-shadow duration-200 p-4 sm:p-6"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded-xl border border-gray-100 shadow-sm"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-gray-800 group-hover:text-amber-500 transition-colors duration-200 mb-1">{item.name}</h2>
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <motion.button
                          whileTap={{ scale: 0.8 }}
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-amber-100 hover:bg-amber-200 text-amber-800 shadow transition cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus />
                        </motion.button>
                        <span className="font-semibold text-gray-800 text-base px-2">{item.quantity}</span>
                        <motion.button
                          whileTap={{ scale: 0.8 }}
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-amber-100 hover:bg-amber-200 text-amber-800 shadow transition cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <FiPlus />
                        </motion.button>
                      </div>
                      {/* Remove Button */}
                      <motion.button
                        whileHover={{ scale: 1.15, color: '#ef4444' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleRemove(item.id)}
                        className="mt-3 text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-medium transition cursor-pointer"
                        aria-label="Remove item"
                      >
                        <FiTrash2 className="w-4 h-4" /> Remove
                      </motion.button>
                    </div>
                  </div>
                  <div className="text-right min-w-[90px]">
                    <p className="text-lg font-bold text-gray-900">${item.price}</p>
                    <p className="text-sm text-gray-500">
                      Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-right mt-12 bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="border-b border-dashed border-gray-300 mb-4 pb-4">
                <h2 className="text-xl font-extrabold text-gray-900 mb-1">Total</h2>
                <p className="text-3xl font-extrabold text-amber-500">${totalAmount.toFixed(2)}</p>
              </div>
              <button
                onClick={handleProceedToCheckout}
                disabled={loading}
                className={`inline-block mt-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full shadow-lg transition text-lg cursor-pointer ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </motion.div>
          </motion.div>
        )}

      </main>
    </div>
  );
}
