// components/HomeMenu.tsx
'use client'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import ProductCard from './ProductCard'
import Link from 'next/link'

export default function HomeMenu() {
  return (
    <section id="menu" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight"
        >
          Our <span className="text-amber-500">Menu</span>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={{ ...product, slug: product.slug }} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-500 transition cursor-pointer"
            >
              More Items
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
