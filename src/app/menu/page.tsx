'use client'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { Product } from '@/types/Product' // 👈 ye line add karo
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function MenuPage() {
  return (
    <section id="menu" className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Menu</h2>
        <p className="text-gray-500 mt-2">Explore the best of Café Cosmo</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((product: Product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </motion.div>
    </section>
  )
}
