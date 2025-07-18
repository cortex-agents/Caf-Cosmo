'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // TODO: yahan future mein API call lag sakti hai

    // Alert show
    alert('Your message has been sent!')

    // Form clear
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        
        {/* 🏠 Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-amber-400">Get in Touch</h2>
          <p className="mb-4">📍 123 Coffee Lane, Karachi, Pakistan</p>
          <p className="mb-4">📞 +92 300 1234567</p>
          <p className="mb-4">📧 hello@cafecosmo.com</p>
          <p className="mb-4">🕒 Mon - Sun: 9:00 AM – 11:00 PM</p>
        </motion.div>

        {/* ✉️ Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-white/10 backdrop-blur text-white placeholder-gray-300"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-white/10 backdrop-blur text-white placeholder-gray-300"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-md bg-white/10 backdrop-blur text-white placeholder-gray-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-6 rounded transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
