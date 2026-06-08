"use client";

import Image from "next/image";
import CTASection from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function About() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

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

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight mb-8"
            >
              Creating Green Spaces
              <br />
              Across the{" "}
              <span className="font-serif italic text-white/90">UAE</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-stone-400 font-light leading-relaxed max-w-2xl"
            >
              At Shaheen Flowers and Ornamental Plants Trading LLC, we believe
              every outdoor space has the potential to become something special.
              We create beautiful environments that bring comfort, value, and
              lasting impressions.
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
          transition={{ duration: 2, ease: "easeOut" }}
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
            { value: "10+", label: "Years Experience" },
            { value: "300+", label: "Clients" },
            { value: "1K+", label: "Plants Installed" },
            { value: "UAE", label: "Coverage" },
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
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-light text-stone-900 mb-6"
            >
              Our{" "}
              <span className="font-serif italic text-stone-500">Story</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-lg leading-relaxed mb-6"
            >
              Serving clients across the UAE, we provide professional
              landscaping with AMC designed to turn ordinary spaces into
              attractive, functional green areas. Our work covers landscape
              design, garden development, ornamental plant supply, irrigation
              installation, and ongoing landscape maintenance.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-lg leading-relaxed"
            >
              Whether it is a private villa, commercial property, hotel, park,
              or corporate facility, we approach every project with the same
              dedication and attention to detail. We understand the UAE climate
              and select plants, materials, and techniques that thrive here.
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
              alt="Story"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
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
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-4xl font-light leading-relaxed text-stone-300"
          >
            Our mission is to create beautiful landscapes that leave a{" "}
            <span className="font-serif italic text-white">
              lasting impression
            </span>{" "}
            — spaces that are visually appealing, practical, and easy to
            maintain.
          </motion.h2>
        </motion.div>
      </section>

      {/* EXPERTISE */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-light text-stone-900 mb-12">
            Our{" "}
            <span className="font-serif italic text-stone-500">Expertise</span>
          </h2>

          <div className="border-t border-stone-200">
            {[
              "Indoor plants and pots supply",
              "Indoor plants maintenance with AMC",
              "Outdoor landscaping with AMC",
              "Artificial plants and green wall solutions",
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
        title="Let Us Work on Your Space"
        description="Tell us about your villa, office, or commercial property — we will recommend the right plants and maintenance plan for you."
      />
    </div>
  );
}
