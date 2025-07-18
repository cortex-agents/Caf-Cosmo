// Updated: Navbar with search + proper routing
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
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search.trim()) return
    router.push(`/search?q=${encodeURIComponent(search.trim())}`)
    setSearch('')
    setIsOpen(false)
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md">
        <Link href="/" className="text-2xl font-bold text-white">
          Café <span className='text-amber-400'>Cosmo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-white hover:text-amber-300 transition"
            >
              {link.name}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1 rounded-full bg-white/20 text-white placeholder-white/60 focus:outline-none"
            />
            <button type="submit" className="absolute right-2 top-1 text-white">
              <Search size={16} />
            </button>
          </form>
          {/* Cart Icon */}
          <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.92 }}>
            <Link href="/cart" className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400/20 transition group" aria-label="Cart">
              <FiShoppingCart className="text-white group-hover:text-amber-400 transition text-2xl" />
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: '85vh', transition: { duration: 1, ease: [0.75, 0, 0.23, 1] } }}
            exit={{ height: 0, transition: { duration: 1, ease: [0.75, 0, 0.23, 1] } }}
            className="bg-black/90 overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="flex flex-col items-center justify-center py-12 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl hover:text-amber-400 transition"
                >
                  {link.name}
                </Link>
              ))}
              <form onSubmit={handleSearch} className="w-3/4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/50"
                />
              </form>
              {/* Cart Icon for Mobile */}
              <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.92 }}>
                <Link href="/cart" className="mt-4 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-amber-400/20 transition group" aria-label="Cart">
                  <FiShoppingCart className="text-white group-hover:text-amber-400 transition text-3xl" />
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
