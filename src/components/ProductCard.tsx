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
        whileHover={{ scale: 1.035, boxShadow: "0 8px 32px 0 rgba(245, 158, 11, 0.18)" }}
        transition={{ type: "spring", stiffness: 180 }}
        className="bg-white/95 rounded-2xl shadow-lg hover:shadow-amber-200 overflow-hidden cursor-pointer border border-amber-100 duration-300"
      >
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 350px, 100vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            priority
            style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
          />
          {/* Optionally, add "new" badge */}
          {/* <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">NEW</span> */}
        </div>
        <div className="p-5 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-500 transition">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 min-h-10">{product.description}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg text-amber-500 font-extrabold">${product.price}</span>
            {/* Add-to-cart or wishlist here if needed */}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
