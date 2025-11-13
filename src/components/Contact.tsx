'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2500)
    // TODO: Add real API integration here
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#191a1e] via-[#221e17] to-[#161310] text-white min-h-[80vh] relative overflow-x-hidden">
      {/* Decorative circles */}
      <div className="absolute top-32 left-56 w-28 h-28 bg-amber-500/20 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-16 right-64 w-16 h-16 bg-amber-200/25 rounded-full blur-2xl -z-10" />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* Info Block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-black mb-4 leading-tight text-amber-400 drop-shadow-sm">Get in Touch</h2>
          <div className="bg-white/10 rounded-xl p-6 shadow border-l-4 border-amber-500">
            <p className="mb-2 text-lg">📍 <span className="font-semibold">123 Coffee Lane, Karachi, Pakistan</span></p>
            <p className="mb-2 text-lg">
              📞 <a href="tel:+923001234567" className="underline text-amber-300 hover:text-amber-500">+92 300 1234567</a>
            </p>
            <p className="mb-2 text-lg">
              📧 <a href="mailto:hello@cafecosmo.com" className="underline text-amber-300 hover:text-amber-500">hello@cafecosmo.com</a>
            </p>
            <p className="mb-2 text-lg">🕒 Mon - Sun: 9:00 AM – 11:00 PM</p>
            <div className="flex gap-5 mt-6">
              <a href="https://facebook.com/cafecosmo" target="_blank" rel="noopener" className="bg-amber-400/20 rounded-full p-3 text-amber-300 hover:text-amber-600 transition">
                <FaFacebookF size={24} />
              </a>
              <a href="https://instagram.com/cafecosmo" target="_blank" rel="noopener" className="bg-amber-400/20 rounded-full p-3 text-amber-300 hover:text-amber-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener" className="bg-amber-400/20 rounded-full p-3 text-amber-300 hover:text-amber-600 transition">
                <FaWhatsapp size={24} />
              </a>
            </div>
            {/* Map block (Replace src with your map image or Google Map iframe) */}
            <div className="mt-7 rounded-xl overflow-hidden shadow-lg">
              <img src="/map-karachi.jpg" alt="Cafe location map" className="object-cover w-full h-[180px]" />
              <span className="absolute bottom-2 left-2 bg-white/80 text-amber-500 font-bold text-sm px-3 py-1 rounded shadow">
                Find us on Google Maps
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          onSubmit={handleSubmit}
          className="bg-white/10 rounded-xl shadow p-8 space-y-5 border-r-4 border-amber-500"
        >
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-md bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 border border-amber-300/10"
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-md bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 border border-amber-300/10"
              required
              autoComplete="email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 rounded-md bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 border border-amber-300/10"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-xl shadow-lg transition mt-3"
          >
            Send Message
          </motion.button>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="mt-5 bg-amber-400/90 text-black py-3 px-5 rounded-xl shadow text-lg font-bold"
            >
              ✅ Message sent successfully!
            </motion.div>
          )}
        </motion.form>
      </div>

      {/* Community Callout */}
      <div className="container mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="bg-white/5 rounded-xl text-center p-10 mt-12 max-w-3xl mx-auto shadow-amber-200/30 shadow"
        >
          <h3 className="text-3xl font-black text-amber-400 mb-4">Join the Cosmo Community!</h3>
          <span className="text-lg text-gray-200">
            Whether you’re asking questions, booking events, ya sharing feedback, our team is ready to connect. Visit us, DM on social media, or just drop a message—every conversation shapes our story.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
