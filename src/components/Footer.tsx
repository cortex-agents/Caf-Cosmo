'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { href: 'https://facebook.com', icon: <FaFacebookF />, label: 'Facebook' },
    { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: <FaLinkedinIn />, label: 'LinkedIn' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  // Animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#111113] text-white pt-14 pb-7 mt-0 relative overflow-hidden shadow-2xl"
    >
      {/* Animated Glow behind logo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-amber-300/10 via-pink-300/10 to-sky-400/10 blur-2xl z-0"
      />

      {/* Content Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
        
        {/* Logo & Tagline */}
        <motion.div
          variants={fadeUp as import('framer-motion').Variants}
          custom={1}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col items-center md:items-start"
        >
          <div className="relative flex items-center justify-center w-28 h-28 mb-4">
            <motion.div
              animate={{
                background: [
                  'conic-gradient(from 0deg, #fbbf24, #f472b6, #38bdf8, #fbbf24)',
                  'conic-gradient(from 360deg, #fbbf24, #f472b6, #38bdf8, #fbbf24)'
                ]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute inset-0 rounded-full blur-sm opacity-80"
            />
            <div className="relative z-10 rounded-full bg-[#111113] border-4 border-white/20 shadow-xl flex items-center justify-center w-24 h-24">
              <Image
                src="/logo.png"
                alt="Café Cosmo Logo"
                width={64}
                height={64}
                className="object-contain rounded-full"
                priority
              />
            </div>
          </div>
          <p className="text-sm text-gray-400 text-center md:text-left max-w-[220px] mt-2">
            Crafted with ❤️ by Cortex Agents
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeUp as import('framer-motion').Variants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col items-center space-y-3"
        >
          {quickLinks.map((item, index) => (
            <motion.div key={item.name} variants={fadeUp as import('framer-motion').Variants} custom={index + 3}>
              <Link
                href={item.href}
                className="group flex items-center gap-2 text-gray-300 hover:text-amber-400 transition font-semibold text-base tracking-wide relative"
              >
                <FaChevronRight size={14} className="opacity-70 group-hover:opacity-100 transition" />
                <span className="group-hover:underline underline-offset-4 decoration-amber-400">
                  {item.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp as import('framer-motion').Variants}
          custom={5}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center md:justify-end space-x-6"
        >
          {socialLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              aria-label={item.label}
              whileHover={{ scale: 1.18, boxShadow: '0 0 0 4px #fbbf24, 0 0 16px #fbbf24' }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full w-12 h-12 flex items-center justify-center text-xl text-gray-200 hover:text-amber-400 transition-all duration-200 shadow-lg"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      />

      {/* Bottom Note */}
      <motion.div
        className="text-center text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-400 to-sky-400 select-none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        © {new Date().getFullYear()} Café Cosmo. All rights reserved.
      </motion.div>
    </motion.footer>
  )
}
