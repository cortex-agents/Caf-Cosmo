'use client'
import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Ayesha",
    role: "Head Barista",
    img: "/about/team-ayesha.jpg",
    bio: "Crafts espresso with artistry, finds beauty in every cup."
  },
  {
    name: "Tariq",
    role: "Bean Hunter",
    img: "/about/team-tariq.jpg",
    bio: "Curates beans from the world’s best farms, elevating each blend."
  },
  {
    name: "Zara",
    role: "Dessert Artist",
    img: "/about/team-zara.jpg",
    bio: "Creates desserts inspired by global flavors and nostalgia."
  }
]

export default function About() {
  return (
    <section id="about" className="relative pb-36 pt-24 bg-gradient-to-br from-[#fff7ec] via-[#fefbf7] to-[#f9f4ea] text-gray-900">

      {/* Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-32 w-36 h-36 bg-amber-100 opacity-20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-32 w-24 h-24 bg-amber-200 opacity-25 rounded-full blur-2xl" />
      </div>

      {/* Brand Story / Intro */}
      <motion.div
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="container mx-auto px-4 max-w-5xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-2/3 space-y-8">
            <h2 className="text-6xl font-black mb-5 leading-snug">
              Welcome to <span className="text-amber-500">Café Cosmo</span>
            </h2>
            <p className="text-2xl text-gray-800">
              A modern café designed for the dreamers, thinkers, and creatives—a cozy escape where every cup tells a story, every corner inspires connection.
            </p>
            <div className="mt-6">
              <span className="text-lg font-semibold text-amber-500">Founded 2023:</span>
              <span className="ml-2 text-gray-700">Inspired by city adventures and faraway travels, Café Cosmo is the blend of local spirit and international flavor.</span>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/90 rounded-xl shadow p-5 flex flex-col gap-2 border-l-4 border-amber-400">
                <span className="font-bold text-lg text-amber-500">Our Vision</span>
                <span className="text-gray-700">Uniting cultures and conversations—one cup at a time.</span>
              </div>
              <div className="bg-white/90 rounded-xl shadow p-5 flex flex-col gap-2 border-l-4 border-amber-400">
                <span className="font-bold text-lg text-amber-500">Our Values</span>
                <span className="text-gray-700">Quality, creativity, sustainability, and warm hospitality.</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 relative h-[280px] w-full">
            <Image
              src="/about/cafe-interior.jpg"
              alt="Café Cosmo interior"
              fill
              className="rounded-2xl object-cover shadow-xl border-2 border-amber-100"
              priority
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute bottom-7 left-7 bg-white/80 px-4 py-2 rounded-xl shadow text-amber-500 font-bold text-base"
            >
              #CosmoCommunity
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Timeline + Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="container mx-auto px-4 max-w-5xl mt-20"
      >
        <h3 className="text-3xl font-bold mb-6 text-amber-600">Journey Highlights</h3>
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-amber-500">2023</span>
            <span className="text-md text-gray-700">Café Cosmo opens its doors</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-amber-500">2024</span>
            <span className="text-md text-gray-700">Signature blend launch, music nights begin</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-amber-500">2025</span>
            <span className="text-md text-gray-700">Green certification & pet-friendly spaces</span>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="container mx-auto px-4 max-w-5xl mt-20"
      >
        <h3 className="text-3xl font-bold mb-5 text-amber-600">Meet the Cosmo Crew</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -7, boxShadow: "0 4px 24px rgba(245,158,11,0.12)" }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-amber-100"
            >
              <div className="relative h-[100px] w-[100px] mb-3">
                <Image src={member.img} alt={member.name} fill className="rounded-full object-cover border-2 border-amber-200" />
              </div>
              <span className="font-bold text-lg text-amber-500">{member.name}</span>
              <span className="text-gray-700 text-md">{member.role}</span>
              <span className="mt-2 text-gray-600 text-sm">{member.bio}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community & Experience */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="container mx-auto px-4 max-w-5xl mt-20"
      >
        <h3 className="text-3xl font-bold mb-6 text-amber-600">Your Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-6 space-y-3 border border-amber-50">
            <span className="font-semibold text-amber-400">Personalized Service</span>
            <span className="text-gray-700">Custom coffee blends, table-side greetings, and barista recommendations just for you.</span>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 space-y-3 border border-amber-50">
            <span className="font-semibold text-amber-400">Events & Community</span>
            <span className="text-gray-700">Live music, poetry nights, art wall ― come connect, create, and celebrate!</span>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 space-y-3 border border-amber-50">
            <span className="font-semibold text-amber-400">Space for Ideas</span>
            <span className="text-gray-700">Pet-friendly, free Wi-Fi, and cozy workspaces for creators & students.</span>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 space-y-3 border border-amber-50">
            <span className="font-semibold text-amber-400">Sustainability</span>
            <span className="text-gray-700">Eco-friendly packaging, ethical sourcing, and seasonal menus.</span>
          </div>
        </div>
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="container mx-auto px-4 max-w-5xl mt-20"
      >
        <h3 className="text-3xl font-bold mb-6 text-amber-600">Frequently Asked Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow p-4 border border-amber-50">
              <span className="font-bold text-amber-500">What makes Café Cosmo unique?</span>
              <p className="text-gray-700 pl-2 mt-1">Specialty beans, curated spaces, pet-friendly and community events make every visit memorable.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 border border-amber-50">
              <span className="font-bold text-amber-500">Do you host events?</span>
              <p className="text-gray-700 pl-2 mt-1">Absolutely! Join our music nights, workshops, and open mics.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow p-4 border border-amber-50">
              <span className="font-bold text-amber-500">How do I join the loyalty program?</span>
              <p className="text-gray-700 pl-2 mt-1">Signup at the counter or via our app to earn points and special perks!</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 border border-amber-50">
              <span className="font-bold text-amber-500">Are pets allowed?</span>
              <p className="text-gray-700 pl-2 mt-1">Yes! We love animals—treats and cozy corners await your furry friends.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
