"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type Service = {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  cta: string;
  orientation?: "portrait" | "landscape";
};

export default function Services() {
  const services: Service[] = [
    {
      title: "Indoor Plants and Pots Supply",
      description:
        "We supply healthy indoor plants and decorative pots for homes, offices, hotels, and retail spaces across the UAE. As an indoor plant supplier, we help you choose the right species and planters for light conditions, layout, and maintenance needs.",
      benefits: [
        "Wide selection of indoor and ornamental plants",
        "Decorative pots and planters to match your interior",
        "Delivery and placement for offices and commercial sites",
        "Advice on plant care and suitable varieties for UAE conditions",
      ],
      image: "/images/services/indoor.jpg",
      cta: "Request a plant supply quote",
    },
    {
      title: "Indoor Plants Maintenance with AMC",
      description:
        "Keep your indoor greenery healthy year-round with our annual maintenance contracts. Our team handles watering, pruning, cleaning, fertilising, and plant replacement so your space always looks its best.",
      benefits: [
        "Scheduled visits based on your contract plan",
        "Free replacement of unhealthy plants under AMC",
        "Suitable for offices, hotels, and residential properties",
        "One team for supply, installation, and ongoing care",
      ],
      image: "/images/services/maintenance.jpg",
      cta: "Ask about indoor AMC plans",
    },
    {
      title: "Outdoor Landscaping with AMC",
      description:
        "From garden design and installation to long-term landscape maintenance, we offer outdoor landscaping with AMC in UAE for villas, compounds, hotels, and commercial properties. Your garden stays healthy without you managing the details.",
      benefits: [
        "Landscape design, planting, and hardscape coordination",
        "Regular garden maintenance under annual contracts",
        "Irrigation checks and seasonal plant care",
        "Experience with UAE climate and soil conditions",
      ],
      image: "/images/services/outdoor.jpg",
      cta: "Discuss outdoor landscaping AMC",
    },
    {
      title: "Artificial Plants and Green Wall Solutions",
      description:
        "When natural planting is not practical, our artificial plants and green wall solutions add greenery without daily upkeep. Ideal for interiors, feature walls, and areas with limited light or access.",
      benefits: [
        "Realistic artificial plants for indoor and outdoor use",
        "Green wall design and installation",
        "Low maintenance — no watering or pruning required",
        "Custom layouts for offices, lobbies, and retail spaces",
      ],
      image: "/images/services/greenwall.jpg",
      cta: "Explore green wall options",
      orientation: "landscape",
    },
  ];

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
                Our Services
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8">
              Landscaping & <br className="hidden md:block" />
              <span className="font-serif italic text-white/90">
                Plant Care
              </span>
            </h1>

            <p className="text-stone-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Indoor plants, outdoor landscaping with AMC, and artificial green
              wall solutions — supply, installation, and maintenance from one
              team across the UAE.
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
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              {/* IMAGE (Editorial 4/5 Aspect) */}
              <div
                className={`group relative rounded-2xl overflow-hidden bg-stone-100 shadow-sm ${
                  service.orientation === "landscape"
                    ? "aspect-[16/9] lg:min-h-[450px]"
                    : "aspect-[4/5]"
                } ${index % 2 === 1 ? "lg:order-2" : ""}`}
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
              <div
                className={`flex flex-col ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {/* Large Subtle Numbering */}
                <span className="text-7xl md:text-8xl font-serif italic text-stone-200 mb-6 select-none">
                  0{index + 1}
                </span>

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-6">
                  {service.title}
                </h2>

                <p className="text-stone-500 leading-relaxed text-lg font-light mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="text-stone-600 text-sm font-light leading-relaxed flex gap-3"
                    >
                      <span className="text-stone-400 shrink-0">—</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="mt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 uppercase tracking-widest group"
                  >
                    <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors">
                      {service.cta}
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#FAFAFA]">
        <CTASection
          title="Not Sure Which Service You Need?"
          description="Tell us about your space and we will recommend the right plants, landscaping plan, or AMC contract for you."
        />
      </div>
    </div>
  );
}
