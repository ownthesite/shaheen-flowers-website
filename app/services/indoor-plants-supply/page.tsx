"use client";
import Image from "next/image";
import CTASection from "@/components/sections/cta-section";

import { Sun, LayoutGrid, Palette, Leaf, CheckCircle2 } from "lucide-react";

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

const expertise = [
  {
    title: "Lighting Assessment",
    icon: Sun,
  },
  {
    title: "Space Planning",
    icon: LayoutGrid,
  },
  {
    title: "Design Matching",
    icon: Palette,
  },
  {
    title: "Plant Health Expertise",
    icon: Leaf,
  },
];

// --- DATA ARRAYS ---
const supplyCategories = [
  {
    title: "Indoor Plants",
    items: [
      "Ornamental Plants",
      "Air-Purifying Plants",
      "Decorative Foliage",
      "Low-Maintenance Plants",
      "Large Indoor Plants",
    ],
  },
  {
    title: "Pots & Planters",
    items: [
      "Ceramic Pots",
      "Fiberglass Planters",
      "Designer Pots",
      "Decorative Containers",
      "Customized Planters",
    ],
  },
];

const servedSectors = [
  {
    icon: "🏢",
    title: "Offices",
    desc: "Enhance productivity and workplace aesthetics with low-maintenance desk and floor plants.",
  },
  {
    icon: "🏨",
    title: "Hotels",
    desc: "Create luxurious, welcoming lobbies and serene guest rooms with premium foliage.",
  },
  {
    icon: "🍽",
    title: "Restaurants",
    desc: "Improve dining ambiance and acoustics with natural green partitions and decorative pots.",
  },
  {
    icon: "🏠",
    title: "Homes",
    desc: "Bring life to your living spaces with personalized residential indoor plant setups.",
  },
  {
    icon: "🛍",
    title: "Retail Stores",
    desc: "Elevate the shopping experience and reinforce your brand with striking indoor greenery.",
  },
  {
    icon: "🏬",
    title: "Commercial Buildings",
    desc: "Transform expansive atriums and corridors with large-scale indoor landscaping.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Site Assessment",
    desc: "We evaluate your space, lighting conditions, and layout to determine the best approach.",
  },
  {
    num: "02",
    title: "Plant Selection",
    desc: "Expert curation of plants that thrive in your specific environment.",
  },
  {
    num: "03",
    title: "Pot & Planter Matching",
    desc: "Pairing plants with premium containers that match your interior design aesthetics.",
  },
  {
    num: "04",
    title: "Delivery & Installation",
    desc: "Professional, mess-free installation by our indoor landscaping specialists.",
  },
];

const faqs = [
  "What are the best indoor plants for offices?",
  "Which plants require low maintenance?",
  "Do you supply decorative pots and planters?",
  "Can you provide indoor plants for hotels and commercial spaces?",
  "How do I choose the right indoor plant for my space?",
  "Do you offer customized planting solutions?",
];

export default function Page() {
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
            Indoor Plants & Pots Supply UAE
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight text-white mb-8 max-w-4xl">
            Indoor Plants and Pots <br />
            <span className="font-serif italic text-white/90">
              Supply in UAE
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed text-stone-400 max-w-2xl mb-12">
            Premium indoor plants, decorative pots, and customized planting
            solutions for homes, offices, hotels, restaurants, retail stores,
            and commercial spaces across the UAE.
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
              Bring{" "}
              <span className="font-serif italic text-stone-600">Nature</span>{" "}
              Indoors
            </h2>
            <div className="space-y-6 text-lg leading-relaxed font-light text-stone-500">
              <p>
                Indoor plants do more than just improve aesthetics; they create
                healthier, more inviting environments. Whether you are looking
                to enhance a cozy home corner or a sprawling commercial space,
                the right greenery transforms the atmosphere completely.
              </p>
              <p>
                As a leading indoor plants supplier in the UAE, we offer
                professional consultation and supply services to ensure your
                space benefits from nature's touch.
              </p>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-stone-100">
            <Image
              src="/images/services/indoor.jpg"
              alt="Indoor Plants Supply"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
            />
          </div>
        </motion.div>
      </section>

      {/* 3. WHAT WE SUPPLY */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-6 block">
            What We Supply
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-24">
            Indoor Plants &{" "}
            <span className="font-serif italic text-stone-600">
              Decorative Pots
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-24">
            {supplyCategories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-light tracking-tight text-stone-900 mb-8 pb-4 border-b border-stone-200">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm font-light leading-relaxed text-stone-600 flex items-center gap-4"
                    >
                      <span className="text-stone-300">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. WHY CHOOSE OUR INDOOR PLANTS (Editorial Zig-Zag Layout) */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-24 items-center"
        >
          <div className="lg:order-2">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-12">
              Benefits of{" "}
              <span className="font-serif italic text-stone-600">
                Indoor Plants
              </span>
            </h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">
                  Visual Benefits
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone-500">
                  Elegant interiors, modern appearance, and better ambiance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">
                  Environmental Benefits
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone-500">
                  Improved air quality, reduced stress, and a natural
                  atmosphere.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-2">
                  Business Benefits
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone-500">
                  Better customer experience, professional appearance, and
                  stronger brand impression.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. PLANT & POT SELECTION PROCESS */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-6 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-24">
            How We Help You{" "}
            <span className="font-serif italic text-stone-600">Choose</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-24">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex gap-8">
                <span className="text-7xl md:text-8xl font-serif italic text-stone-200 leading-none">
                  {step.num}
                </span>
                <div className="pt-4">
                  <h3 className="text-xl font-light text-stone-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-stone-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 8. OUR EXPERTISE & 9. WHY SHAHEEN FLOWERS */}
      <section className="py-32 px-6 max-w-6xl mx-auto bg-stone-100 rounded-3xl my-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-8">
            Professional Indoor{" "}
            <span className="font-serif italic text-stone-600">
              Plant Specialists
            </span>
          </h2>
          <p className="text-lg leading-relaxed font-light text-stone-500 mb-16">
            Our experienced team helps clients choose the right plants and pots
            based on available space, lighting conditions, maintenance
            requirements, and design preferences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left mb-24 border-b border-stone-200 pb-24">
            {expertise.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i}>
                  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-stone-500" />
                  </div>

                  <h4 className="text-sm font-medium text-stone-900">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>

          <h3 className="text-2xl font-light text-stone-900 mb-12">
            Trusted Indoor Plant Supplier in UAE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              "Premium Quality Plants",
              "Wide Variety of Pots",
              "Customized Solutions",
              "Reliable Delivery",
              "Expert Advice",
              "Customer-Focused Service",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm font-light text-stone-600"
              >
                <CheckCircle2 className="w-4 h-4 text-stone-500 shrink-0" />
                {feature}
              </div>
            ))}
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
