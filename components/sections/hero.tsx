'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const slides = [
  {
    title: 'Indoor Plants',
    subtitle: 'Bring nature inside your space',
    description:
      'Elegant indoor plants designed for offices, homes, and luxury interiors.',
    image: '/images/hero/indoor.jpeg',
    cta: '/products?category=plants',
  },
  {
    title: 'Outdoor Landscaping',
    subtitle: 'Transform your outdoor environment',
    description:
      'Premium landscaping solutions for villas, rooftops, and commercial spaces.',
    image: '/images/hero/outdoor.jpg',
    cta: '/services',
  },
  {
    title: 'Planters & Decor',
    subtitle: 'Design that complements greenery',
    description:
      'Modern planters and decor elements crafted for premium spaces.',
    image: '/images/hero/planters.jpg',
    cta: '/products?category=planters',
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000) // Increased to 6s to allow the premium slow-zoom to breathe

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full bg-stone-950 overflow-hidden">
      
      {/* BACKGROUND IMAGES WITH SLOW ZOOM */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          // The scale: 1.15 to 1.0 creates a slow panning/zoom effect (Ken Burns)
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" } 
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            priority
            className="object-cover"
          />
          {/* Refined gradient overlay: Darker at the bottom/left for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* TEXT CONTENT - Left aligned for an editorial layout */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-end pb-32">
        <div className="max-w-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Overline Subtitle */}
              <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-stone-300 mb-4">
                {slides[index].subtitle}
              </p>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
                {slides[index].title.split(' ')[0]}{' '}
                <span className="font-serif italic text-white/90">
                  {slides[index].title.split(' ').slice(1).join(' ')}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-stone-300 font-light max-w-md mb-10 leading-relaxed">
                {slides[index].description}
              </p>

              {/* Glassmorphism CTA Button */}
              <Link href={slides[index].cta} className="inline-block group">
                <div className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 hover:bg-white hover:text-stone-950 transition-all duration-500">
                  <span className="text-sm font-medium tracking-wide">
                    Explore Collection
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* PREMIUM PAGINATION CONTROLS */}
      <div className="absolute bottom-10 left-6 md:left-auto md:right-12 z-20 flex items-center gap-6">
        <div className="text-white/60 text-xs font-medium tracking-widest tabular-nums">
          <span className="text-white">0{index + 1}</span> — 0{slides.length}
        </div>
        
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="py-2"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div 
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  i === index ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

    </section>
  )
}