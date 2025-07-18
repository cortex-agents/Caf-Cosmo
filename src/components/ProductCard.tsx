'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Product } from '@/types/Product'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="block group">
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
      >
        <div className="relative w-full h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
          <span className="text-amber-500 font-bold">${product.price}</span>
        </div>
      </motion.div>
    </Link>
  )
}
