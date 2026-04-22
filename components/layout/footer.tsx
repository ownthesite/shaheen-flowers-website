'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-white pt-24 pb-8 border-t border-stone-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP SECTION: BRAND & GRID */}
        <div className="grid md:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Brand Presentation (Spans 5 columns) */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-2">
                Shaheen <span className="font-serif italic text-stone-400">Flowers</span>
              </h2>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-600 mb-8">
                & Ornamental Plants Trdg.
              </p>

              <p className="text-stone-400 font-light leading-relaxed max-w-sm">
                Bespoke landscaping and botanical solutions across the UAE. We deliver uncompromising quality, sustainability, and architectural elegance.
              </p>
            </motion.div>
          </div>

          {/* Quick Links (Spans 3 columns) */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-stone-500 mb-8">
                Navigation
              </h4>

              <ul className="space-y-4 text-sm font-light text-stone-300">
                {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="group inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
                    >
                      <span className="relative">
                        {item}
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact (Spans 4 columns) */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-stone-500 mb-8">
                Contact & Inquiries
              </h4>

              <div className="space-y-6 text-sm font-light text-stone-300">
                
                {/* Phone */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-stone-500 group-hover:bg-white group-hover:text-stone-900 transition-all duration-500 shrink-0">
                    <Phone size={14} />
                  </div>
                  <div className="space-y-1.5 pt-1 group-hover:text-white transition-colors duration-300">
                    <p className="flex justify-between w-full max-w-[200px]">
                      <span className="text-stone-500">Mobile:</span> 
                      <span>+971 50 7750967</span>
                    </p>
                    <p className="flex justify-between w-full max-w-[200px]">
                      <span className="text-stone-500">Tel:</span> 
                      <span>+971 6 7415779</span>
                    </p>
                    <p className="flex justify-between w-full max-w-[200px]">
                      <span className="text-stone-500">Fax:</span> 
                      <span>+971 6 7415790</span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <a href="mailto:sales@shaheenflowers.com" className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-stone-500 group-hover:bg-white group-hover:text-stone-900 transition-all duration-500 shrink-0">
                    <Mail size={14} />
                  </div>
                  <p className="group-hover:text-white transition-colors duration-300">
                    sales@shaheenflowers.com
                  </p>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-stone-500 group-hover:bg-white group-hover:text-stone-900 transition-all duration-500 shrink-0">
                    <MapPin size={14} />
                  </div>
                  <p className="group-hover:text-white transition-colors duration-300">
                    P.O. Box 13019, Ajman, UAE
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT & AGENCY CREDIT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-stone-600 font-medium"
        >
          <p>
            © {year} Shaheen Flowers. All rights reserved.
          </p>

          <a 
            href="https://ownthesite-landing.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-1 hover:text-stone-300 transition-colors duration-300"
          >
            Digital Experience by <span className="text-stone-400 group-hover:text-white transition-colors duration-300">OwnTheSite</span>
            <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </motion.div>

      </div>
    </footer>
  )
}