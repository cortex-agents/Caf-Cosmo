// D:\cortex_agents_projects\cafe-cosmo\src\app\menu

'use client'
import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { Product } from '@/types/Product'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <section id="menu" className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-tight" style={{ color: '#f59e0b' }}>Our Menu</h2>
        <p className="text-gray-600 leading-relaxed mt-2">Explore the best of Café Cosmo</p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-colors duration-300 cursor-pointer ${
              selectedCategory === category
                ? 'bg-amber-500 text-white shadow'
                : 'bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-600 text-lg mt-12"
        >
          No products found in this category.
        </motion.div>
      ) : (
        <motion.div
          key={selectedCategory} // Add key here to re-trigger animation on change
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product: Product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  )
}
