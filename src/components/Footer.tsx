'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  const socials = [
    { href: 'https://facebook.com/cafecosmo', icon: <FaFacebookF />, label: 'Facebook' },
    { href: 'https://instagram.com/cafecosmo', icon: <FaInstagram />, label: 'Instagram' },
    { href: 'https://linkedin.com/company/cafecosmo', icon: <FaLinkedinIn />, label: 'LinkedIn' },
  ]
  const navs = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-transparent text-white pt-14 pb-7 relative overflow-x-hidden border-t border-gray-700">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 items-start relative z-10">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
         
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-amber-500 text-xl mb-0">Café Cosmo</span>
           
          </div>
          <span className="text-sm text-gray-500 max-w-[180px]">Feel the vibe. Taste the world.</span>
          <div className="relative flex items-center justify-center  h-20 my-4">
            <Link href="https://cortexagents.org" target="_blank" rel="noopener noreferrer" className="relative  flex items-center gap-1 justify-center  h-16 z-10">
              <Image src="/logo.png" alt="Cosmo Logo" width={40} height={40} className="object-contain rounded-full" priority />
              <span className="text-sm text-bold font-medium text-gray-500 hover:text-amber-500 transition cursor-pointer">
              Created by Cortex Agents
            </span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-2">
          <span className="uppercase text-amber-500 font-bold mb-2 tracking-wide">Quick Links</span>
          {navs.map(nav => (
            <Link
              key={nav.name}
              href={nav.href}
              className="group text-gray-400 hover:text-amber-500 font-medium text-base transition focus:outline-none"
            >
              <span className="group-hover:underline decoration-amber-500 underline-offset-4">{nav.name}</span>
            </Link>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-2 md:items-start mt-4 md:mt-0">
          <span className="uppercase text-amber-500 font-bold mb-2 tracking-wide">Contact</span>
          <span className="flex items-center gap-2 text-gray-400 text-base">
            <FaEnvelope className="text-amber-500" /> hello@cafecosmo.com
          </span>
          <span className="flex items-center gap-2 text-gray-400 text-base">
            📞 +92 300 1234567
          </span>
          <span className="text-gray-400 text-base">123 Coffee Lane, Karachi</span>
        </div>

        {/* Newsletter & Social */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <span className="uppercase text-amber-500 font-bold mb-2 tracking-wide">Get Connected</span>
          <form className="flex gap-2 mb-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded-l bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-amber-400"
              required
            />
            <button
              type="submit"
              className="rounded-r bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-3 mt-2">
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                whileHover={{ scale: 1.18, backgroundColor: "rgb(251 191 36)", color: "rgb(251 191 36)" }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-gray-700 text-lg text-gray-300 hover:text-amber-400 transition-all shadow-lg"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="w-full h-px bg-gray-700 my-7" />
      <div className="text-center text-xs font-semibold text-gray-400 select-none mt-3">
        © {new Date().getFullYear()} Café Cosmo. All rights reserved.
      </div>
    </footer>
  )
}
