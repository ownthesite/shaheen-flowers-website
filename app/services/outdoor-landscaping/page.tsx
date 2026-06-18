"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CTASection from "@/components/sections/cta-section";

import {
  Users,
  PencilRuler,
  Trees,
  Wrench,
  ShieldCheck,
  HeartHandshake,
  Building2,
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const viewportConfig = { once: true, margin: "-100px" };

// --- DATA ARRAYS ---
const services = [
  {
    title: "Soft Landscaping",
    items: [
      "Trees and Shrubs Planting",
      "Flower Beds",
      "Ground Covers",
      "Decorative Plants",
      "Seasonal Planting",
    ],
  },
  {
    title: "Hard Landscaping",
    items: [
      "Walkways and Pathways",
      "Decorative Stone Features",
      "Garden Borders",
      "Outdoor Seating Areas",
      "Landscape Structures",
    ],
  },
  {
    title: "Lawn Solutions",
    items: [
      "Natural Grass Installation",
      "Lawn Development",
      "Lawn Restoration",
      "Turf Solutions",
    ],
  },
  {
    title: "Irrigation Systems",
    items: [
      "Automatic Irrigation",
      "Drip Irrigation",
      "Water Management Systems",
      "Landscape Watering Solutions",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Site Assessment",
    desc: "Detailed evaluation of the terrain, soil quality, and environmental factors.",
  },
  {
    num: "02",
    title: "Landscape Planning & Design",
    desc: "Crafting a cohesive design that balances aesthetics, functionality, and sustainability.",
  },
  {
    num: "03",
    title: "Material & Plant Selection",
    desc: "Curating premium flora and hardscape materials suited for the UAE climate.",
  },
  {
    num: "04",
    title: "Installation & Development",
    desc: "Expert execution by our landscaping specialists with minimal disruption.",
  },
  {
    num: "05",
    title: "Final Inspection & Handover",
    desc: "Rigorous quality checks ensuring every detail aligns with your vision.",
  },
];

const spaces = [
  "Residential Villas",
  "Private Gardens",
  "Commercial Buildings",
  "Hotels & Resorts",
  "Restaurants & Cafés",
  "Retail Developments",
  "Corporate Facilities",
  "Public Spaces",
];

const benefits = [
  {
    title: "Visual Benefits",
    desc: "Enhanced property appearance, modern outdoor design, and attractive green spaces that captivate the eye.",
  },
  {
    title: "Functional Benefits",
    desc: "Better space utilization, improved outdoor comfort, and meticulously organized landscape layouts.",
  },
  {
    title: "Property Benefits",
    desc: "Increased property value, stronger first impressions, and long-term landscape sustainability.",
  },
];

const reasons = [
  {
    title: "Experienced Landscaping Team",
    icon: Users,
  },
  {
    title: "Customized Design Solutions",
    icon: PencilRuler,
  },
  {
    title: "Quality Plants & Materials",
    icon: Trees,
  },
  {
    title: "Professional Installation",
    icon: Wrench,
  },
  {
    title: "Reliable Project Execution",
    icon: ShieldCheck,
  },
  {
    title: "Customer-Focused Service",
    icon: HeartHandshake,
  },
  {
    title: "End-to-End Landscaping Support",
    icon: Building2,
  },
];

const faqs = [
  "Do you provide complete landscape design services?",
  "Can you handle residential and commercial landscaping projects?",
  "Do you install irrigation systems?",
  "Do you provide lawn installation services?",
  "Can you redesign existing outdoor spaces?",
  "Do you offer landscape maintenance services?",
];

export default function OutdoorLandscapingPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-stone-200">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0C0A09] pt-48 pb-32 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-6xl mx-auto flex flex-col items-start"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-300 mb-8 block">
            Expert Outdoor Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight text-white mb-8 max-w-4xl">
            Outdoor Landscaping <br />
            <span className="font-serif italic text-white/90">
              Services in UAE
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed text-stone-400 max-w-2xl mb-12">
            Professional landscape design, garden development, lawn
            installation, irrigation systems, and outdoor planting solutions for
            residential, commercial, and hospitality projects across the UAE.
          </p>
        </motion.div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-24 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-8">
              Transform Outdoor Spaces with{" "}
              <span className="font-serif italic text-stone-600">
                Professional Landscaping
              </span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed font-light text-stone-500">
              <p>
                At Shaheen Flowers and Ornamental Plants Trading LLC, we provide
                professional outdoor landscaping services in the UAE, helping
                clients create beautiful, functional, and sustainable outdoor
                environments. Our landscaping solutions are designed to enhance
                the appearance, value, and usability of residential properties,
                commercial developments, hotels, restaurants, public spaces, and
                corporate facilities.
              </p>
              <p>
                Whether you require a complete landscape transformation or
                improvements to an existing outdoor area, our experienced team
                delivers customized solutions tailored to your vision, space,
                and budget.
              </p>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-stone-100">
            <Image
              src="/images/services/outdoor.jpg"
              alt="Outdoor Landscaping Services"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
            />
          </div>
        </motion.div>
      </section>

      {/* 3. OUR LANDSCAPING SERVICES */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-6 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-24 max-w-2xl">
            Complete Outdoor{" "}
            <span className="font-serif italic text-stone-600">
              Landscaping Solutions
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-y-16 gap-x-24">
            {services.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-light tracking-tight text-stone-900 mb-8 pb-4 border-b border-stone-200">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm font-light leading-relaxed text-stone-600 flex items-start gap-4"
                    >
                      <span className="text-stone-300 mt-1">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. OUR LANDSCAPING PROCESS (Editorial Numbers) */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-24">
            From Concept to{" "}
            <span className="font-serif italic text-stone-600">Completion</span>
          </h2>
          <div className="space-y-24">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-8 md:gap-24 items-start border-b border-stone-200 pb-24 last:border-0 last:pb-0"
              >
                <span className="text-7xl md:text-8xl font-serif italic text-stone-200 leading-none shrink-0">
                  {step.num}
                </span>
                <div className="pt-4 md:pt-6">
                  <h3 className="text-2xl font-light text-stone-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg font-light leading-relaxed text-stone-500 max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. OUTDOOR SPACES WE TRANSFORM */}
      <section className="py-32 px-6 max-w-6xl mx-auto bg-stone-100 rounded-3xl my-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-16">
            Landscaping Solutions for{" "}
            <span className="font-serif italic text-stone-600">
              Every Property
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {spaces.map((space, idx) => (
              <div key={idx} className="border-t border-stone-300 pt-4">
                <p className="text-sm font-medium text-stone-900">{space}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. BENEFITS OF PROFESSIONAL LANDSCAPING (Editorial Zig-Zag) */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-24 items-center"
        >
          <div className="lg:order-1">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-12">
              Why Invest in{" "}
              <span className="font-serif italic text-stone-600">
                Outdoor Landscaping?
              </span>
            </h2>
            <div className="space-y-10">
              {benefits.map((benefit, i) => (
                <div key={i}>
                  <h3 className="text-lg font-medium text-stone-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-stone-500">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. WHY CHOOSE SHAHEEN FLOWERS */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-6">
              Trusted Landscaping Company{" "}
              <span className="font-serif italic text-stone-600">in UAE</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;

              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-stone-500" />
                  </div>

                  <h3 className="text-sm font-light text-stone-900 leading-relaxed max-w-[150px]">
                    {reason.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <div className="bg-[#FAFAFA]">
        <CTASection
          title="Not Sure Which Service You Need?"
          description="Tell us about your space and we will recommend the right plants, landscaping plan, or AMC contract for you."
        />
      </div>
    </main>
  );
}
