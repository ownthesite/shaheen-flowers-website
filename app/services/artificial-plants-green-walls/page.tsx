"use client";
import CTASection from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import Image from "next/image";
import { PencilRuler, Sparkles, Wrench } from "lucide-react";

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
const offerings = [
  {
    title: "Premium Artificial Plants",
    desc: "Lifelike indoor and outdoor potted plants that require zero upkeep.",
  },
  {
    title: "Artificial Trees",
    desc: "Large-scale replica trees to create striking focal points in high-ceiling spaces.",
  },
  {
    title: "Vertical Gardens",
    desc: "Lush, dense artificial green walls designed to breathe life into blank surfaces.",
  },
  {
    title: "Decorative Foliage",
    desc: "Custom arrangements and loose foliage for modern planters and interior accents.",
  },
  {
    title: "Custom Green Walls",
    desc: "Tailored wall installations crafted to match your specific interior design theme.",
  },
];

const expertise = [
  {
    title: "Consultation & Design",
    description: "Matching the right textures and styles to your space.",
    icon: PencilRuler,
  },
  {
    title: "Premium Materials",
    description: "Sourcing hyper-realistic foliage that fools the eye.",
    icon: Sparkles,
  },
  {
    title: "Professional Installation",
    description: "Secure, seamless fitting by our expert team.",
    icon: Wrench,
  },
];

const spaces = [
  {
    title: "Offices & Corporate",
    desc: "Enhance reception areas and corporate workspaces with vibrant, maintenance-free greenery.",
  },
  {
    title: "Hotels & Hospitality",
    desc: "Create a welcoming atmosphere in lobbies and guest areas that looks fresh year-round.",
  },
  {
    title: "Restaurants & Cafes",
    desc: "Add natural charm to dining spaces without worrying about light or temperature constraints.",
  },
  {
    title: "Shopping Malls & Retail",
    desc: "Draw in customers with visually stunning, large-scale artificial installations.",
  },
  {
    title: "Villas & Residences",
    desc: "Achieve a sophisticated, modern look at home with zero watering or pruning.",
  },
];

const benefits = [
  {
    title: "Durability & Longevity",
    desc: "Crafted from premium, realistic materials designed to withstand the test of time.",
  },
  {
    title: "Zero Maintenance",
    desc: "Remains attractive throughout the year without watering, pruning, or fertilizing.",
  },
  {
    title: "Cost-Effective",
    desc: "A practical one-time investment that eliminates ongoing landscaping care costs.",
  },
  {
    title: "Versatile Placement",
    desc: "Perfect for environments with limited sunlight, water availability, or harsh air conditioning.",
  },
];

export default function ArtificialPlantsPage() {
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
            Maintenance-Free Greenery
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight text-white mb-8 max-w-4xl">
            Artificial Plants & <br />
            <span className="font-serif italic text-white/90">
              Green Wall Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed text-stone-400 max-w-2xl mb-12">
            Premium artificial plants and green wall solutions in UAE. Enhance
            homes, offices, hotels, and commercial spaces with realistic,
            maintenance-free greenery.
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
              Realistic Beauty,{" "}
              <span className="font-serif italic text-stone-600">
                Zero Upkeep
              </span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed font-light text-stone-500">
              <p>
                At Shaheen Flowers and Ornamental Plants Trading LLC, we provide
                high-quality artificial plants and green wall solutions in the
                UAE. Our products are designed to deliver the natural beauty of
                plants without the ongoing maintenance, making them an ideal
                choice for modern interiors and outdoor decorative applications.
              </p>
              <p>
                As a trusted supplier, we are committed to helping clients
                transform ordinary spaces into visually stunning environments
                that remain vibrant and welcoming all year round.
              </p>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-stone-100">
            <Image
              src="/images/services/greenwall.jpg"
              alt="Green Wall Installation"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
            />
          </div>
        </motion.div>
      </section>

      {/* 3. OUR OFFERINGS */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-6 block">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-24 max-w-2xl">
            Premium Artificial Foliage &{" "}
            <span className="font-serif italic text-stone-600">
              Vertical Gardens
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {offerings.map((item, idx) => (
              <div key={idx} className="border-t border-stone-200 pt-6">
                <h3 className="text-xl font-light text-stone-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. IMAGE GALLERY (Landscape Focus for Green Walls)
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group rounded-2xl overflow-hidden shadow-sm aspect-[16/9] lg:min-h-[400px] bg-stone-100"
              >
                <div className="w-full h-full bg-stone-200 group-hover:scale-110 transition-transform duration-[2000ms] ease-out flex items-center justify-center text-stone-400">
                  [Green Wall Gallery {item}]
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section> */}

      {/* 5. BENEFITS (Editorial Zig-Zag Layout) */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-24 items-center"
        >
          <div className="lg:order-1">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-12">
              Why Choose{" "}
              <span className="font-serif italic text-stone-600">
                Artificial Greenery?
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

      {/* 6. CUSTOMIZATION & INSTALLATION (Expertise) */}
      <section className="py-32 px-6 max-w-6xl mx-auto bg-stone-100 rounded-3xl my-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-8">
            Flawless{" "}
            <span className="font-serif italic text-stone-600">Execution</span>
          </h2>
          <p className="text-lg leading-relaxed font-light text-stone-500 mb-16">
            We work closely with clients to design and install customized
            artificial green walls and decorative plant arrangements. Our team
            focuses on quality, creativity, and meticulous attention to detail
            to ensure every installation meets the highest aesthetic standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-stone-200 pt-16">
            {expertise.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i}>
                  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-5 h-5 text-stone-500" />
                  </div>

                  <h4 className="text-base font-medium text-stone-900 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm font-light text-stone-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* 7. SPACES WE ENHANCE */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-stone-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-24">
            Transforming{" "}
            <span className="font-serif italic text-stone-600">
              Any Environment
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {spaces.map((space, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors"
              >
                <h3 className="text-xl font-light text-stone-900 mb-4">
                  {space.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone-500">
                  {space.desc}
                </p>
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
