'use client'

import { motion } from 'framer-motion'
import { Leaf, Sprout, Droplets, Wind, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

type Service = {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ServicesOverview() {
  const services: Service[] = [
    {
      icon: <Leaf className="w-5 h-5" />,
      title: 'Indoor Plants',
      description:
        'Premium indoor botanicals curated for air purification and modern interiors.',
    },
    {
      icon: <Sprout className="w-5 h-5" />,
      title: 'Outdoor Landscaping',
      description:
        'Transform outdoor environments with structured, aesthetic architectural landscaping.',
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: 'Plant Maintenance',
      description:
        'Consistent, dedicated care programs to keep your greenery vibrant year-round.',
    },
    {
      icon: <Wind className="w-5 h-5" />,
      title: 'Green Walls',
      description:
        'Living vertical gardens designed for high-impact modern architectural spaces.',
    },
  ]

  // Framer Motion variants for a luxurious staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
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
            <span className="text-[10px] tracking-[0.2em] text-stone-600 font-bold uppercase">
              Our Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-6">
            Services Tailored <span className="font-serif italic">For You</span>
          </h2>

          <p className="text-lg text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
            Bespoke landscaping and botanical solutions designed to elevate both residential and commercial environments.
          </p>
        </motion.div>

        {/* EDITORIAL GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center text-center md:items-start md:text-left cursor-pointer"
            >
              {/* Interactive Icon Frame */}
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-stone-100 text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-stone-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-stone-500 font-light leading-relaxed">
                {service.description}
              </p>

              {/* Subtle visual indicator on hover */}
              <div className="mt-6 w-8 h-[1px] bg-stone-200 group-hover:bg-stone-900 group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* REFINED CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24 text-center flex justify-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900 uppercase tracking-widest"
          >
            <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors duration-300">
              Explore All Services
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}