'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

type Testimonial = {
  name: string
  role: string
  location: string
  quote: string
  rating: number
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Ahmed Al Mansoori',
      location: 'Dubai, UAE',
      role: 'Villa Owner',
      rating: 5,
      quote:
        'OwnTheSite transformed our space into a complete outdoor experience. The detailing, vision, and execution were truly exceptional from start to finish.',
    },
    {
      name: 'Fatima Al Hashimi',
      location: 'Abu Dhabi, UAE',
      role: 'Corporate Manager',
      rating: 5,
      quote:
        'The botanical integrations completely elevated our workspace. Clean, professional, and meticulously maintained.',
    },
    {
      name: 'Mohammed Al Bloushi',
      location: 'Sharjah, UAE',
      role: 'Restaurant Owner',
      rating: 5,
      quote:
        'They understood our architectural vision and executed it better than expected. A masterclass in attention to detail.',
    },
  ]

  const main = testimonials[0]
  const others = testimonials.slice(1)

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  }

  return (
    <section className="py-32 bg-[#FAFAFA] border-t border-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* PREMIUM HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-stone-200/50 border border-stone-200">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-600">
              Client Voices
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-stone-900 mb-6">
            Words from <span className="font-serif italic text-stone-500">Our Clients</span>
          </h2>

          <p className="text-lg text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
            Real feedback from discerning clients across residential and commercial projects.
          </p>
        </motion.div>

        {/* TESTIMONIALS LAYOUT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* FEATURED TESTIMONIAL */}
          <motion.div variants={itemVariants} className="relative mb-24 md:mb-32">
            {/* Oversized Decorative Quote Mark */}
            <span className="absolute -top-12 md:-top-16 left-0 md:-left-12 text-8xl md:text-[160px] leading-none font-serif text-stone-200/60 select-none z-0">
              "
            </span>
            
            <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
              
              {/* Left Column: Quote */}
              <div className="flex-1">
                <p className="text-2xl md:text-4xl font-light text-stone-900 leading-snug tracking-tight">
                  {main.quote}
                </p>
              </div>

              {/* Right Column: Meta */}
              <div className="flex flex-col items-center md:items-start shrink-0 pt-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(main.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-stone-900 text-stone-900" />
                  ))}
                </div>
                <p className="text-lg font-medium tracking-tight text-stone-900 mb-1">
                  {main.name}
                </p>
                <p className="text-sm font-light text-stone-500 uppercase tracking-widest">
                  {main.role}
                </p>
                <p className="text-xs font-light text-stone-400 mt-1">
                  {main.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* SECONDARY TESTIMONIALS */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {others.map((t, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group border-t border-stone-200 pt-8"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-stone-800 text-stone-800 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    ))}
                  </div>
                  {/* Subtle 5.0 indicator */}
                  <span className="text-xs font-medium text-stone-400 font-serif italic">
                    5.0
                  </span>
                </div>

                <p className="text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-8">
                  "{t.quote}"
                </p>

                <div className="flex flex-col">
                  <p className="text-base font-medium tracking-tight text-stone-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">
                    {t.role} <span className="mx-1 opacity-50">·</span> {t.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}