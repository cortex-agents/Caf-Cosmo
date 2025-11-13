'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'
import { FiShoppingCart } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search.trim()) return
    router.push(`/search?q=${encodeURIComponent(search.trim())}`)
    setSearch('')
    setShowMobileSearch(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 shadow-xl h-20 border-b border-amber-200">
      <div className="px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-[clamp(2rem,4vw,2.5rem)] font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
          Café <span className="text-amber-500 font-bold">Cosmo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-700 font-medium px-2 py-1 hover:text-amber-500 transition"
            >
              {link.name}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-1 rounded-full bg-amber-50/70 border border-amber-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
            <button type="submit" className="absolute right-2 top-1 text-gray-700 hover:text-amber-500">
              <Search size={16} />
            </button>
          </form>
          <motion.div whileHover={{ scale: 1.12 }}>
            <Link href="/cart" className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-white/70 hover:bg-amber-200 transition group border border-amber-100" aria-label="Cart">
              <FiShoppingCart className="text-gray-700 group-hover:text-amber-500 text-2xl" />
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Nav & Icons */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Search */}
          <button onClick={() => setShowMobileSearch(!showMobileSearch)} className="text-gray-700 cursor-pointer">
            <Search size={24} />
          </button>
          {/* Mobile Cart */}
          <motion.div whileHover={{ scale: 1.15 }}>
            <Link href="/cart" className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-amber-200 transition group border border-amber-100 cursor-pointer" aria-label="Cart">
              <FiShoppingCart className="text-gray-700 group-hover:text-amber-500 text-2xl" />
            </Link>
          </motion.div>
          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {isOpen ? <X className="text-gray-700 w-7 h-7" /> : <Menu className="text-gray-700 w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Modal */}
      <AnimatePresence>
        {showMobileSearch && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="absolute top-20 left-0 w-full z-50 bg-white/90 backdrop-blur-sm py-3 px-6 border-b border-amber-200 shadow-lg"
          >
            <form onSubmit={handleSearch} className="flex items-center gap-4 w-full">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              <button type="submit" className="text-gray-700 hover:text-amber-500 cursor-pointer">
                <Search size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay & Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              key="mobile-menu"
              initial={{ y: -32, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
              exit={{ y: -32, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
              className="absolute top-20 left-0 w-full z-50 bg-white/95 rounded-b-2xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col items-center gap-2 py-4 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 text-xl font-semibold hover:text-amber-500 hover:bg-amber-50 transition py-2 px-4 w-full text-center"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
