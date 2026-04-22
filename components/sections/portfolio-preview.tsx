'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Project = {
  image: string
  title: string
  category: string
}

export default function PortfolioPreview() {
  const projects: Project[] = [
    {
      image: '/images/new/26.png',
      title: 'Modern Office Green Space',
      category: 'Commercial',
    },
    {
      image: '/images/new/27.png',
      title: 'Indoor Plant Installation',
      category: 'Interior',
    },
    {
      image: '/images/new/28.png',
      title: 'Residential Garden Design',
      category: 'Residential',
    },
  ]

  // subtle motion
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="py-32 bg-[#FAFAFA] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-stone-500 mb-4">
            Selected Works
          </p>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">
            Featured <span className="font-serif italic text-stone-500">Projects</span>
          </h2>

          <p className="mt-6 text-lg text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
            A curated selection of our landscaping and plant installations.
          </p>
        </motion.div>

        {/* PREMIUM EDITORIAL GRID */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">

          {/* BIG LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-[1.6s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-700" />
            </div>

            <div className="mt-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
                {projects[0].category}
              </p>

              <h3 className="text-2xl md:text-3xl font-light text-stone-900">
                {projects[0].title}
              </h3>

              <div className="mt-4 w-10 h-[1px] bg-stone-300 group-hover:w-20 transition-all duration-500" />
            </div>
          </motion.div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-12 md:gap-16">

            {[projects[1], projects[2]].map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-[1.6s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-700" />
                </div>

                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-light text-stone-900">
                    {project.title}
                  </h3>

                  <div className="mt-4 w-8 h-[1px] bg-stone-300 group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-block text-sm uppercase tracking-[0.2em] text-stone-900 hover:text-stone-500 transition"
          >
            View Full Portfolio →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}