'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { products } from '@/lib/products'

export default function ProductsPreview() {
  const plants = products.filter(p => p.category === 'plants').slice(0, 25)
  const planters = products.filter(p => p.category === 'planters').slice(0, 15)

  const items = [
    {
      title: 'Botanical Plants',
      subtitle: 'Living architecture for your space',
      image: plants[0]?.image,
      href: '/products?category=plants',
    },
    {
      title: 'Modern Planters',
      subtitle: 'Minimalist vessels and pots',
      image: planters[3]?.image,
      href: '/products?category=planters',
    },
    {
      title: 'Curated Sets',
      subtitle: 'Perfectly paired combinations',
      image: plants[23]?.image, // Using the second plant as a fallback for "Featured/Sets"
      href: '/products',
    },
  ]

  // Framer Motion variants for staggered rendering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  }

  return (
    <section className="py-32 bg-[#FAFAFA] border-t border-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            {/* Pill-shaped overline */}
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-stone-200/50 border border-stone-200">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">
                Curated Collections
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">
              Explore Our <span className="font-serif italic">Range</span>
            </h2>
          </motion.div>

          {/* Top Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-500 transition-colors"
            >
              <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-500 transition-colors">
                View All Products
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* LOOKBOOK GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Link href={item.href} className="group block relative cursor-pointer">
                
                {/* Image Container - changed to 4/5 for an editorial feel */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                  )}
                  
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-stone-900/20 transition-colors duration-500" />
                  
                  {/* Floating Action Pill on Hover */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 text-stone-900" />
                  </div>
                </div>

                {/* Typography */}
                <div className="mt-5 flex flex-col items-center text-center">
                  <h3 className="text-xl font-medium text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500 font-light">
                    {item.subtitle}
                  </p>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors w-full"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  )
}