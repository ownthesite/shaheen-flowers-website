'use client'

import Image from 'next/image'
import CTASection from '@/components/sections/cta-section'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  title: string
  description: string
  image: string
  year: string
  category: string
}

export default function Portfolio() {
  // 🔥 ALL YOUR REAL WORKS
  const images = [
    '26.png','27.png','28.png','19.png','25.png','2.png','24.png','3.jpeg',
    '23.png','15.png','22.png','20.png','6.png','16.png','21.png','8.png',
    '5.png','7.png','9.png','10.png','11.png','12.png'
  ]

  // 🔥 Convert to projects with a bit more editorial dummy data
  const projects: Project[] = images.map((img, i) => ({
    title: `Project ${String(i + 1).padStart(2, '0')}`, // e.g., Project 01
    category: i % 2 === 0 ? 'Indoor Botanical' : 'Exterior Landscape',
    description: 'A bespoke botanical integration designed to elevate the surrounding architectural space.',
    image: `/images/new/${img}`,
    year: `${2022 + (i % 3)}`,
  }))

  // Framer Motion variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  return (
    <div className="bg-[#FAFAFA]">
      
      {/* PREMIUM HERO */}
      <section className="relative py-32 md:py-48 bg-stone-950 text-white overflow-hidden">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-800/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-400">
                Selected Works
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-tight mb-8">
              Our <span className="font-serif italic text-white/90">Portfolio</span>
            </h1>

            <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              An exclusive curation of our most defining landscaping and botanical architecture projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL PROJECT GRID */}
     <section className="py-32">
  <div className="max-w-6xl mx-auto px-6">

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-x-16 gap-y-32"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          className={`group ${index % 2 === 1 ? 'md:mt-32' : ''}`}
        >
          
          {/* IMAGE (NO RADIUS) */}
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
            />

            {/* VERY SUBTLE OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-700" />
          </div>

          {/* TEXT */}
          <div className="mt-8 max-w-md">

            {/* META */}
            <div className="flex justify-between items-center mb-4 text-xs text-stone-400 tracking-[0.15em] uppercase">
              <span>{project.category}</span>
              <span className="font-serif italic tracking-widest text-stone-500">
                {project.year}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900 mb-3">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-stone-500 leading-relaxed">
              {project.description}
            </p>

            {/* MINIMAL LINE */}
            <div className="mt-6 w-10 h-[1px] bg-stone-300 group-hover:w-20 transition-all duration-500" />
          </div>

        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

      {/* CTA SECTION */}
      <CTASection
        title="Start Your Project"
        description="Let’s design and build your living architecture together."
      />
    </div>
  )
}