'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Product } from '@/types/Product';

export default function CheckoutPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [postal, setPostal] = useState('');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [payment, setPayment] = useState('COD');
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const checkoutNow = localStorage.getItem('checkoutNow');
    if (checkoutNow) {
      try {
        setProducts(JSON.parse(checkoutNow));
      } catch {
        setProducts([]);
      }
    } else {
      const cartData = localStorage.getItem('addToCart');
      if (cartData) {
        try {
          setProducts(JSON.parse(cartData));
        } catch {
          setProducts([]);
        }
      }
    }
  }, []);

  const totalAmount = products.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    if (name && email && phone && city && postal && address && payment && products.length > 0) {
      setOrderPlaced(true);
      localStorage.removeItem('addToCart');
      localStorage.removeItem('checkoutNow');
      toast.success('🎉 Order placed successfully!');
    } else {
      toast.error('Please fill all fields');
    }
  };

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-sky-50">
        <p className="text-xl text-gray-600">No products in checkout.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12 px-2 sm:px-4 md:px-10 bg-gradient-to-br from-amber-50 via-white to-sky-50 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center bg-gradient-to-tr from-amber-500 via-pink-500 to-sky-500 bg-clip-text text-transparent mb-10 tracking-tight"
        >
          Checkout
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Products Summary */}
          <div className="space-y-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 shadow-sm flex gap-4 bg-white/80"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={80}
                  className="rounded-lg object-cover shadow"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">Qty: {product.quantity || 1}</p>
                  <p className="text-amber-600 font-bold">
                    ${(product.price * (product.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <div className="border-t border-dashed border-gray-300 pt-4 mt-4">
              <p className="text-right font-extrabold text-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
                Total: ${totalAmount.toFixed(2)}
              </p>
            </div>
          </div>

          {/* User Info Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8"
            onSubmit={e => { e.preventDefault(); handlePlaceOrder(); }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-amber-400 outline-none" />
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-amber-400 outline-none" />
              <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-amber-400 outline-none" />
              <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-amber-400 outline-none" />
              <input type="text" placeholder="Postal Code" value={postal} onChange={(e) => setPostal(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-amber-400 outline-none" />
            </div>

            <textarea placeholder="Full Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-amber-400 outline-none" rows={3} />
            <textarea placeholder="Delivery Instructions (optional)" value={instructions} onChange={(e) => setInstructions(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-amber-400 outline-none" rows={2} />

            <div>
              <label className="block mb-2 font-medium text-gray-700">Payment Method</label>
              <select value={payment} onChange={e => setPayment(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-amber-400 outline-none">
                <option value="COD">Cash on Delivery</option>
                <option value="Card">Credit/Debit Card</option>
                <option value="UPI">UPI</option>
              </select>
            </div>

            <motion.button whileTap={{ scale: 0.97 }} type="submit" className="w-full bg-gradient-to-tr from-amber-400 via-pink-400 to-sky-400 hover:from-amber-500 hover:to-sky-500 text-white font-bold py-3 rounded-xl shadow-lg text-lg mt-2 transition">
              Place Order
            </motion.button>
          </motion.form>
        </motion.div>

        {orderPlaced && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-10 bg-white/90 border border-green-300 p-8 rounded-2xl text-center shadow-xl flex flex-col items-center gap-6">
            <div className="text-4xl">🎉</div>
            <div className="text-xl font-bold text-green-700">Your order has been placed successfully!</div>
            <div className="text-gray-600">Thank you for shopping with Café Cosmo. You will receive a confirmation email soon.</div>
            <div className="flex gap-4 justify-center mt-4">
              <button onClick={() => router.push('/')} className="px-6 py-2 bg-gradient-to-tr from-amber-400 via-pink-400 to-sky-400 text-white font-bold rounded-full shadow hover:scale-105 transition">Go to Home</button>
              <button onClick={() => router.push('/menu')} className="px-6 py-2 bg-gradient-to-tr from-sky-400 via-pink-400 to-amber-400 text-white font-bold rounded-full shadow hover:scale-105 transition">Continue Shopping</button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
