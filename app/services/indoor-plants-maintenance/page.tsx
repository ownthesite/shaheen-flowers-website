"use client";
import Image from "next/image";
import CTASection from "@/components/sections/cta-section";

import {
  Users,
  CalendarClock,
  ClipboardList,
  Headphones,
  HeartPulse,
  MapPinned,
} from "lucide-react";

import { motion } from "framer-motion";

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

const reasons = [
  {
    title: "Experienced Plant Care Specialists",
    icon: Users,
  },
  {
    title: "Flexible AMC Packages",
    icon: ClipboardList,
  },
  {
    title: "Scheduled Maintenance Visits",
    icon: CalendarClock,
  },
  {
    title: "Reliable Customer Support",
    icon: Headphones,
  },
  {
    title: "Professional Plant Health Management",
    icon: HeartPulse,
  },
  {
    title: "Quality Service Across UAE",
    icon: MapPinned,
  },
];

// --- DATA ARRAYS ---
const includedServices = [
  {
    title: "Watering",
    desc: "Precise hydration schedules tailored to each plant species.",
  },
  {
    title: "Pruning & Trimming",
    desc: "Removing dead foliage to encourage healthy new growth.",
  },
  {
    title: "Plant Cleaning",
    desc: "Dusting and wiping leaves to ensure optimal photosynthesis.",
  },
  {
    title: "Fertilization",
    desc: "Seasonal nutrient boosts for vibrant and resilient foliage.",
  },
  {
    title: "Pest Control",
    desc: "Proactive monitoring and safe treatments to keep plants pest-free.",
  },
  {
    title: "Health Monitoring",
    desc: "Continuous evaluation of light, soil, and overall plant health.",
  },
  {
    title: "Plant Replacement",
    desc: "Swapping out declining plants to maintain a flawless aesthetic.",
  },
  {
    title: "Scheduled Visits",
    desc: "Consistent, hassle-free maintenance at your convenience.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Site Assessment",
    desc: "Evaluating your space's environmental conditions and current plant health.",
  },
  {
    num: "02",
    title: "Plant Health Evaluation",
    desc: "Detailed analysis of soil, lighting, and existing plant vitality.",
  },
  {
    num: "03",
    title: "Customized Plan",
    desc: "Developing a tailored maintenance schedule based on specific plant needs.",
  },
  {
    num: "04",
    title: "Scheduled Visits",
    desc: "Executing regular, unobtrusive care routines by our specialists.",
  },
  {
    num: "05",
    title: "Ongoing Monitoring",
    desc: "Continuous support and adjustments to ensure year-round vitality.",
  },
];

const spaces = [
  { icon: "🏢", title: "Offices" },
  { icon: "🏨", title: "Hotels" },
  { icon: "🍽", title: "Restaurants" },
  { icon: "🛍", title: "Retail Stores" },
  { icon: "🏬", title: "Commercial Buildings" },
  { icon: "🏠", title: "Residential Homes" },
];

const faqs = [
  "What is included in an indoor plant AMC?",
  "How often do maintenance visits take place?",
  "Do you replace unhealthy plants?",
  "Can you maintain plants in offices and commercial spaces?",
  "Do you provide customized maintenance contracts?",
];

export default function AMCPage() {
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
            Annual Maintenance Contract
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight text-white mb-8 max-w-4xl">
            Indoor Plants Maintenance <br />
            <span className="font-serif italic text-white/90">
              with AMC in UAE
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed text-stone-400 max-w-2xl mb-12">
            Professional indoor plant care services for offices, hotels, retail
            spaces, commercial buildings, and homes across the UAE.
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
              Professional Indoor{" "}
              <span className="font-serif italic text-stone-600">
                Plant Care
              </span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed font-light text-stone-500">
              <p>
                At Shaheen Flowers and Ornamental Plants Trading LLC, we provide
                reliable Indoor Plants Maintenance with AMC (Annual Maintenance
                Contract) services to keep indoor plants healthy, vibrant, and
                visually appealing throughout the year.
              </p>
              <p>
                Indoor plants enhance the appearance of any space, but regular
                care is essential to maintain their health and longevity. Our
                maintenance programs ensure your greenery remains fresh,
                attractive, and professionally maintained.
              </p>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-stone-100">
            <Image
              src="/images/services/maintenance.jpg"
              alt="Indoor Plants Maintenance"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
            />
          </div>
        </motion.div>
      </section>

      {/* 3. WHAT'S INCLUDED IN OUR AMC */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-6 block">
            Comprehensive Care
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-24">
            What's Included in{" "}
            <span className="font-serif italic text-stone-600">Our AMC</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {includedServices.map((service, idx) => (
              <div key={idx} className="border-t border-stone-200 pt-6">
                <h3 className="text-lg font-medium text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone-500">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. OUR MAINTENANCE PROCESS (Editorial Zig-Zag / Numbering) */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-24">
            How Our{" "}
            <span className="font-serif italic text-stone-600">AMC Works</span>
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

      {/* 5. SPACES WE MAINTAIN */}
      <section className="py-32 px-6 max-w-6xl mx-auto bg-stone-100 rounded-3xl my-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-16">
            Maintenance for{" "}
            <span className="font-serif italic text-stone-600">
              Every Environment
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {spaces.map((space, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FAFAFA] rounded-2xl shadow-sm border border-stone-200/50"
              >
                <div className="text-3xl mb-4">{space.icon}</div>
                <h3 className="text-lg font-light text-stone-900">
                  {space.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. BENEFITS OF AMC SERVICES (Editorial Zig-Zag) */}
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
              Why Choose Professional{" "}
              <span className="font-serif italic text-stone-600">
                Plant Maintenance?
              </span>
            </h2>
            <ul className="space-y-8">
              {[
                "Healthy & Long-Lasting Plants",
                "Consistent Professional Appearance",
                "Reduced Plant Loss",
                "Improved Indoor Environment",
                "Hassle-Free Maintenance",
                "Expert Care & Support",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-stone-300 mt-1">—</span>
                  <span className="text-lg font-light text-stone-600">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
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
              Trusted Plant Maintenance{" "}
              <span className="font-serif italic text-stone-600">in UAE</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;

              return (
                <div
                  key={i}
                  className="text-center p-8 border border-stone-200 rounded-2xl hover:border-stone-300 transition-colors"
                >
                  <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-stone-200 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-stone-500" />
                  </div>

                  <h3 className="text-lg font-light text-stone-900">
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
