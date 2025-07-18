// src/app/search/page.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/types/Product'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase() || ''
  const [filtered, setFiltered] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    )
    setTimeout(() => {
      setFiltered(results)
      setLoading(false)
    }, 800) // Simulated loading
  }, [query])

  return (
    <section className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Search results for: <span className="text-amber-600">{query}</span>
        </h2>

        {loading ? (
          <div className="text-center py-12 text-lg text-gray-500 animate-pulse">
            Searching for delicious matches...
          </div>
        ) : filtered.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 text-gray-400 text-lg">
            😕 No products found. Try searching for something else!
          </div>
        )}
      </div>
    </section>
  )
}
