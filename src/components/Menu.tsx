// components/HomeMenu.tsx
'use client'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function HomeMenu() {
  return (
    <section id="menu" className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-amber-500">Menu</span>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={{ ...product, slug: product.id }} />
          ))}
        </div>
      </div>
    </section>
  )
}
