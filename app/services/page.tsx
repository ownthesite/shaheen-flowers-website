'use client'

import Image from 'next/image'
import CTASection from '@/components/sections/cta-section'
import { motion } from 'framer-motion'
import { Leaf, RefreshCcw, ShieldCheck, Sparkles } from 'lucide-react'


type Service = {
  title: string
  description: string
  image: string
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Indoor Plants & Installations',
      description:
        'Premium indoor plant solutions for offices, hotels, and residences. We design, supply, and install plants that enhance air quality and elevate interior spaces.',
      image: '/images/services/indoor.jpg',
    },
    {
      title: 'Outdoor Landscaping',
      description:
        'Complete outdoor landscaping including design, execution, and transformation of villas, rooftops, and commercial environments.',
      image: '/images/services/outdoor.jpg',
    },
    {
      title: 'Plant Maintenance',
      description:
        'Scheduled maintenance services including watering, pruning, fertilization, and health monitoring to ensure long-term plant vitality.',
      image: '/images/services/maintenance.jpg',
    },
    {
      title: 'Green Walls & Features',
      description:
        'Modern vertical gardens and preserved green walls designed to create stunning visual impact in interiors and commercial spaces.',
      image: '/images/services/greenwall.jpg',
    },
    {
      title: 'Artificial Plants Solutions',
      description:
        'High-quality artificial plants for spaces where natural greenery is not practical, without compromising aesthetics.',
      image: '/images/services/artificial.jpg',
    },
  ]

    const features = [
    {
      icon: ShieldCheck,
      title: 'Free Plant Replacement',
      desc: 'We replace unhealthy plants at no cost, ensuring your space always looks fresh and vibrant.',
    },
    {
      icon: Sparkles,
      title: 'Custom Plant Styling',
      desc: 'Each project is carefully designed to match your interior, architecture, and brand identity.',
    },
    {
      icon: RefreshCcw,
      title: 'Scheduled Maintenance',
      desc: 'Regular care including watering, pruning, and monitoring for long-term plant health.',
    },
    {
      icon: Leaf,
      title: 'Premium Plant Quality',
      desc: 'We source and maintain high-quality plants suited for indoor and outdoor environments.',
    },
  ]

  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  return (
    <div className="bg-[#FAFAFA]">
      {/* PREMIUM HERO */}
      <section className="relative py-32 md:py-48 bg-stone-950 text-white overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-stone-800/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative max-w-6xl mx-auto px-6 z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-300">
                Our Expertise
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8">
              Landscaping & <br className="hidden md:block" />
              <span className="font-serif italic text-white/90">Plant Solutions</span>
            </h1>

            <p className="text-stone-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Complete indoor and outdoor botanical curation — from visionary design and installation to meticulous long-term maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL SERVICES ZIG-ZAG */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 space-y-32 md:space-y-48">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              {/* IMAGE (Editorial 4/5 Aspect) */}
              <div
                className={`group relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 shadow-sm ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* TEXT CONTENT */}
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Large Subtle Numbering */}
                <span className="text-7xl md:text-8xl font-serif italic text-stone-200 mb-6 select-none">
                  0{index + 1}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-6">
                  {service.title}
                </h2>

                <p className="text-stone-500 leading-relaxed text-lg font-light">
                  {service.description}
                </p>
                
                <div className="mt-10">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 uppercase tracking-widest cursor-pointer group">
                    <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors">
                      Learn More
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Why Choose{' '}
            <span className="font-serif italic text-green-400">
              Shaheen Flowers
            </span>
          </h3>

          <p className="text-stone-400 text-lg leading-relaxed">
            More than installation — we provide complete plant care solutions to keep your spaces consistently green, healthy, and well-maintained.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-stone-800 flex items-center justify-center mb-6 group-hover:bg-green-700 transition">
                <feature.icon className="w-5 h-5 text-stone-300 group-hover:text-white transition" />
              </div>

              <h4 className="text-lg font-medium mb-3">
                {feature.title}
              </h4>

              <p className="text-sm text-stone-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
      

      {/* CTA */}
      <div className="bg-[#FAFAFA]">
        <CTASection
          title="Start Your Project"
          description="Talk to our team to design your indoor or outdoor plant solution."
        />
      </div>
    </div>
  )
}