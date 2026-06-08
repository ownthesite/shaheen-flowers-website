"use client";

import Image from "next/image";
import CTASection from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations"

type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  category: string;
};

export default function Portfolio() {
  // 🔥 ALL YOUR REAL WORKS
  const images = [
    "26.webp",
    "27.webp",
    "28.webp",
    "19.webp",
    "25.webp",
    "2.webp",
    "24.webp",
    "3.jpeg",
    "23.webp",
    "15.webp",
    "22.webp",
    "20.webp",
    "6.webp",
    "16.webp",
    "21.webp",
    "8.webp",
    "5.webp",
    "7.webp",
    "9.webp",
    "10.webp",
    "11.webp",
    "12.webp",
  ];

  const categoryLabels = [
    "Villa Garden",
    "Commercial Landscaping",
    "Indoor Greenery",
    "Garden Installation",
    "AMC Maintenance",
    "Landscape Design",
  ];

  const descriptionLabels = [
    "A completed villa garden with planting, irrigation, and seasonal care under an AMC contract.",
    "Commercial landscaping for a hotel or office — designed, installed, and maintained on schedule.",
    "Indoor plant installation for offices and lobbies, with ongoing maintenance visits.",
    "Full garden installation including ornamental plants, beds, and irrigation setup.",
    "Ongoing landscape maintenance keeping outdoor plants healthy through regular AMC visits.",
    "Landscape design and execution tailored to UAE climate and the client's outdoor space.",
  ];

  // Convert to projects with editorial data
  const projects: Project[] = images.map((img, i) => ({
    title: `Project ${String(i + 1).padStart(2, "0")}`,
    category: categoryLabels[i % categoryLabels.length],
    description: descriptionLabels[i % descriptionLabels.length],
    image: `/images/new/${img}`,
    year: `${2022 + (i % 3)}`,
  }));

  // Framer Motion variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  

  return (
    <div className="bg-[#FAFAFA]">
      {/* PREMIUM HERO */}
      <section className="relative py-32 md:py-40 bg-stone-950 text-white overflow-hidden flex items-center justify-center">
        {/* Center Ambient Glow (match system) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1]   as const }}
            className="flex flex-col items-center"
          >
            {/* Overline */}
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-400">
                Selected Works
              </span>
            </div>

            {/* Title (fixed scale + structure) */}
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6">
              Our Landscaping <br className="hidden md:block" />
              <span className="font-serif italic text-white/90">Portfolio</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
              Completed landscaping projects, garden installations, commercial
              landscaping, indoor greenery work, and maintenance contracts from
              across the UAE.
            </p>
          </motion.div>

          {/* Optional micro-structure (adds weight without clutter) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-stone-500"
          >
            <span>Completed Projects</span>
            <span>Garden Installations</span>
            <span>Maintenance Contracts</span>
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
                className={`group ${index % 2 === 1 ? "md:mt-32" : ""}`}
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
        title="Want Results Like These?"
        description="Share your project details and we will outline a landscaping or AMC maintenance plan for your property."
      />
    </div>
  );
}
