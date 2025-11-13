'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-hero_overlay relative h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero/hero_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌟 Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Welcome to <span className="text-amber-400">Café Cosmo</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white text-lg sm:text-lg md:text-2xl mt-4 mb-6 drop-shadow-md"
        >
          Where every sip feels like home ☕
        </motion.p>

        <motion.a
          href="#menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-amber-500 transition"
        >
          Explore Menu
        </motion.a>
      </div>
    </section>
  )
}
