'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowUpRight } from 'lucide-react'

type CTASectionProps = {
  title?: string
  description?: string
}

export default function CTASection({
  title = 'Start Your Landscaping Project',
  description = 'Get a quick quote and expert guidance for your space.',
}: CTASectionProps) {
  const phoneNumber = '971552039009'
  // Updated message to be universally applicable
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`

  // Helper to dynamically apply mixed typography to the title prop
  const words = title.split(' ')
  const firstHalf = words.slice(0, Math.ceil(words.length / 2)).join(' ')
  const secondHalf = words.slice(Math.ceil(words.length / 2)).join(' ')

  return (
    <section className="relative py-32 md:py-40 bg-stone-950 text-white overflow-hidden flex items-center justify-center">
      
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Overline Tag */}
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-400">
              Take The Next Step
            </span>
          </div>

          {/* Dynamic Mixed Typography Title */}
          <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6">
            {firstHalf} <br className="hidden md:block" />
            <span className="font-serif italic text-white/90">{secondHalf}</span>
          </h2>

          <p className="text-lg md:text-xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Action Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-8"
        >
          {/* Primary CTA (WhatsApp) */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-stone-950 rounded-full text-sm font-semibold hover:bg-stone-200 transition-all duration-500 overflow-hidden">
              <MessageCircle size={18} className="relative z-10" />
              <span className="relative z-10">Chat on WhatsApp</span>
            </button>
          </a>

          {/* Secondary CTA (Enquiry Link) */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs font-medium text-stone-400 uppercase tracking-widest hover:text-white transition-colors duration-300"
          >
            <span className="underline underline-offset-4 decoration-stone-600 group-hover:decoration-white transition-colors duration-300">
              Or send an inquiry
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Trust Indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-[11px] uppercase tracking-widest text-stone-500 font-medium"
        >
          Our team typically responds within a few minutes
        </motion.p>

      </div>
    </section>
  )
}