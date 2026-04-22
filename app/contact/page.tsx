'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TEMP: simulate network request
    setTimeout(() => {
      console.log(form)
      alert('Message sent successfully. Our team will contact you shortly.')
      setIsSubmitting(false)
      setForm({ name: '', email: '', message: '' })
    }, 1000)
  }

  // Framer Motion variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      
      {/* PREMIUM HERO */}
      <section className="relative py-32 md:py-48 bg-stone-950 text-white overflow-hidden">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-stone-800/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-400">
                Contact Us
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8">
              Let’s Talk About <br className="hidden md:block" />
              <span className="font-serif italic text-white/90">Your Project</span>
            </h1>

            <p className="text-stone-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12">
              Reach out to discuss bespoke landscaping, premium plant curation, or ongoing maintenance services across the UAE.
            </p>

            {/* HIGH-END PRIMARY CTA */}
            <a
              href="https://wa.me/971552039009"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-stone-950 rounded-full text-sm font-semibold hover:bg-stone-200 transition-all duration-500"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* LEFT: EDITORIAL CONTACT INFO (Col Span 5) */}
          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="sticky top-32"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-12">
                Direct <span className="font-serif italic text-stone-500">Inquiries</span>
              </motion.h2>

              <div className="space-y-8 text-stone-600 font-light text-lg">
                
                {/* Phone */}
                <motion.div variants={fadeUp} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-2 pt-2 text-stone-500">
                    <p className="flex justify-between w-full max-w-[220px]">
                      <span className="text-stone-400 text-sm uppercase tracking-widest">Mobile</span> 
                      <span className="text-stone-900">+971 55 2039009</span>
                    </p>
                    <p className="flex justify-between w-full max-w-[220px]">
                      <span className="text-stone-400 text-sm uppercase tracking-widest">Mobile</span> 
                      <span className="text-stone-900">+971 50 7750967</span>
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeUp} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 shrink-0">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:sales@shaheenflowers.com" className="text-stone-900 hover:text-stone-500 transition-colors">
                    sales@shaheenflowers.com
                  </a>
                </motion.div>

                {/* Location */}
                <motion.div variants={fadeUp} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <p className="text-stone-900">
                    P.O. Box 13019, Ajman, UAE
                  </p>
                </motion.div>

              </div>

              <motion.p variants={fadeUp} className="mt-16 text-[11px] font-medium uppercase tracking-widest text-stone-400">
                Our team usually responds within minutes.
              </motion.p>
            </motion.div>
          </div>

          {/* RIGHT: LUXURY FORM (Col Span 7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 md:p-12 rounded-[2rem] border border-stone-100 shadow-[0_16px_40px_rgb(0,0,0,0.02)]"
            >
              <h3 className="text-2xl font-light tracking-tight text-stone-900 mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Custom Input Fields */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-stone-500 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-5 py-4 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:border-stone-400 focus:ring-4 focus:ring-stone-100 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-stone-500 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-5 py-4 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:border-stone-400 focus:ring-4 focus:ring-stone-100 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-stone-500 ml-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your vision..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full bg-stone-50/50 border border-stone-200 rounded-xl px-5 py-4 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:border-stone-400 focus:ring-4 focus:ring-stone-100 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-3 bg-stone-900 text-white py-4 mt-4 rounded-xl text-sm font-semibold uppercase tracking-widest hover:bg-stone-800 transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && (
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  )
}