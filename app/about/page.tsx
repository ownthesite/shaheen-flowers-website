'use client'

import Image from 'next/image'
import CTASection from '@/components/sections/cta-section'
import { motion } from 'framer-motion'

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  return (
    <div className="bg-[#FAFAFA]">

      {/* HERO */}
      <section className="relative py-32 md:py-44 bg-stone-950 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-stone-800/30 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400">
                About Shaheen Flowers
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight mb-8">
              We Design.<br />
              Create.<br />
              <span className="font-serif italic text-white/90">Make It Real.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-stone-400 font-light leading-relaxed max-w-2xl">
              A UAE-based landscaping firm with over a decade of expertise,
              creating natural environments for homes, offices, and commercial spaces.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CINEMATIC IMAGE */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-stone-900">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/images/about/cinematic.jpg"
            alt="Landscaping Project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-28 bg-white border-b border-stone-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-16 text-center"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '300+', label: 'Clients' },
            { value: '1K+', label: 'Plants Installed' },
            { value: 'UAE', label: 'Coverage' },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="text-5xl md:text-6xl font-light text-stone-900 mb-3">
                {item.value}
              </div>
              <p className="text-xs uppercase tracking-widest text-stone-500">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STORY */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-light text-stone-900 mb-6">
              Built on <span className="font-serif italic text-stone-500">Experience</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-stone-500 text-lg leading-relaxed mb-6">
              Shaheen Flowers LLC has built a strong reputation across the UAE
              by delivering reliable landscaping and plant solutions tailored to each space.
            </motion.p>

            <motion.p variants={fadeUp} className="text-stone-500 text-lg leading-relaxed">
              With hundreds of completed projects, we focus on quality,
              consistency, and long-term plant health.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/about/story.jpg"
              alt="Indoor Plant Design"
              fill
              className="object-cover transition duration-[1.6s] hover:scale-105"
            />
          </motion.div>

        </div>
      </section>

      {/* QUOTE */}
      <section className="py-28 bg-stone-900 text-white text-center px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-light leading-relaxed text-stone-300">
            "We transform spaces into <span className="font-serif italic text-white">living environments</span> that improve well-being and elevate everyday life."
          </motion.h2>
        </motion.div>
      </section>

      {/* EXPERTISE */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-light text-stone-900 mb-12">
            Our <span className="font-serif italic text-stone-500">Expertise</span>
          </h2>

          <div className="border-t border-stone-200">
            {[
              'Indoor plants & installations',
              'Commercial landscaping',
              'Villa garden design',
              'Plant maintenance services',
            ].map((item, i) => (
              <div
                key={i}
                className="py-6 border-b border-stone-200 text-lg text-stone-600 hover:text-stone-900 transition"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let’s Create a Greener Space"
        description="Talk to our team and start your project today."
      />
    </div>
  )
}