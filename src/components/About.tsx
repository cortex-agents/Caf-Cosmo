'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#fdfaf6] text-black">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* 📜 Text Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-amber-500">Café Cosmo</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Nestled in the heart of the city, Café Cosmo brings a warm and inviting atmosphere where flavors from around the world meet. Whether it&apos;s your morning espresso or a cozy evening with friends, we craft every moment to perfection.
          </p>
          <p className="mt-4 text-gray-600">
            With our hand-picked beans, fresh ingredients, and soulful interiors, you don&apos;t just enjoy coffee — you experience it.
          </p>
        </motion.div>

        {/* 🖼️ Image Section */}
        <motion.div
          className="relative w-full md:w-1/2 h-[300px] md:h-[400px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/about/cafe-interior.jpg"
            alt="Café Interior"
            fill
            className="rounded-lg object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
