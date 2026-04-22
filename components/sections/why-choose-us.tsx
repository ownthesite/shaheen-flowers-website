"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  RefreshCcw,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: string;
};

export default function WhyChooseUs() {
  const benefits: Benefit[] = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Free Plant Replacement",
      description:
        "We replace unhealthy plants at no cost, ensuring your space always looks fresh and vibrant.",
      number: "01",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Custom Plant Styling",
      description:
        "Each project is carefully designed to match your interior, architecture, and brand identity.",
      number: "02",
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      title: "Scheduled Maintenance",
      description:
        "Regular care including watering, pruning, and monitoring for long-term plant health.",
      number: "03",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Premium Plant Quality",
      description:
        "We source and maintain high-quality plants suited for indoor and outdoor environments.",
      number: "04",
    },
  ];

  // Framer Motion variants for a luxurious staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-32 bg-[#FAFAFA] border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* PREMIUM HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col items-start md:items-center md:text-center"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-stone-200/50 border border-stone-200">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-600">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-stone-900 mb-6">
            Trusted by Hundreds <br className="hidden md:block" />
            <span className="font-serif italic text-stone-500">of Clients</span>
          </h2>

          <p className="text-lg text-stone-500 font-light max-w-xl md:mx-auto leading-relaxed">
            Proven experience, uncompromising quality, and the foundation of
            long-term client trust.
          </p>
        </motion.div>

        {/* ARCHITECTURAL LEDGER (Row Style) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col border-t border-stone-200"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-12 border-b border-stone-200 hover:bg-white transition-colors duration-500 cursor-pointer px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl md:rounded-none"
            >
              {/* Left: Structural Number */}
              <div className="md:col-span-2 flex items-start">
                <span className="text-3xl md:text-4xl font-serif italic text-stone-300 group-hover:text-stone-900 transition-colors duration-500">
                  {benefit.number}
                </span>
              </div>

              {/* Middle: Title & Icon */}
              <div className="md:col-span-5 flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 shrink-0">
                  {benefit.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-light tracking-tight text-stone-900 mt-1">
                  {benefit.title}
                </h3>
              </div>

              {/* Right: Description & Action Arrow */}
              <div className="md:col-span-5 flex items-start justify-between gap-8 mt-2 md:mt-1">
                <p className="text-sm md:text-base text-stone-500 font-light leading-relaxed">
                  {benefit.description}
                </p>
                <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full border border-stone-200 items-center justify-center text-stone-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-stone-900 group-hover:text-stone-900 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* EDITORIAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 text-center flex justify-center"
        >
          <Link href="/contact">
            <button className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900 uppercase tracking-widest">
              <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors duration-300">
                Start Your Project
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
