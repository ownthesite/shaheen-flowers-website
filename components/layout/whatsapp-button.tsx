'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phoneNumber = '971552039009'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 1.5, // Delayed entrance so it doesn't distract from the hero 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 group"
    >
      <div className="flex items-center gap-3 bg-stone-900 text-white pl-4 pr-5 py-3.5 rounded-full shadow-[0_16px_40px_rgb(0,0,0,0.16)] hover:bg-stone-800 hover:-translate-y-1 transition-all duration-300">

        {/* Icon */}
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />

        {/* Label & Online Indicator (hidden on small screens) */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-widest mt-0.5">
            Chat on WhatsApp
          </span>
          
          {/* Pulsing Online Dot */}
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </div>

      </div>
    </motion.a>
  )
}