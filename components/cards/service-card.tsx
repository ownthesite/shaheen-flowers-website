'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  href = '#' 
}: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-white rounded-3xl p-8 border border-stone-100 hover:border-stone-200 hover:shadow-[0_16px_40px_rgb(0,0,0,0.04)] transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Subtle Ambient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Minimalist Icon Container */}
        <div className="mb-8 inline-flex items-center justify-center w-14 h-14 bg-stone-100 rounded-full text-stone-900 group-hover:scale-110 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 ease-out">
          {/* Ensure the icon scales nicely within its container */}
          <div className="w-6 h-6 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Typography */}
        <h3 className="text-xl md:text-2xl font-light tracking-tight text-stone-900 mb-4">
          {title}
        </h3>

        <p className="text-stone-500 text-sm leading-relaxed mb-10 font-light flex-grow">
          {description}
        </p>

        {/* Premium Action Link */}
        <div className="mt-auto">
          <a 
            href={href} 
            className="inline-flex items-center gap-2 text-xs font-medium text-stone-900 uppercase tracking-widest group/link"
          >
            <span className="underline underline-offset-4 decoration-stone-300 group-hover/link:decoration-stone-900 transition-colors duration-300">
              Explore Service
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
        
      </div>
    </motion.div>
  )
}