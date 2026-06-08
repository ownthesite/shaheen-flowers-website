"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/cta-section";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function LandscapingWithAmcUae() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: "What is landscaping with AMC in UAE?",
      answer:
        "Landscaping with AMC means your outdoor garden or landscape is maintained under an Annual Maintenance Contract. Instead of calling for one-off visits, you have a fixed schedule of care — watering, pruning, fertilising, pest checks, and plant replacement — handled by the same team throughout the year.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We serve clients across the UAE, including Ajman, Dubai, Sharjah, Abu Dhabi, and surrounding emirates. Contact us with your location and we will confirm availability for your property.",
    },
    {
      question: "Do you handle both new installations and existing gardens?",
      answer:
        "Yes. We design and install new landscapes, and we also take over maintenance of existing gardens. If your outdoor space needs replanting, irrigation repairs, or a full refresh, we can assess it and propose an AMC plan.",
    },
    {
      question: "What is included in an outdoor landscaping AMC?",
      answer:
        "Typical AMC coverage includes scheduled garden maintenance, plant health monitoring, pruning, fertilising, irrigation checks, seasonal adjustments, and replacement of plants that do not survive under normal conditions. Scope is agreed before the contract starts.",
    },
    {
      question: "Can you combine outdoor landscaping AMC with indoor plant maintenance?",
      answer:
        "Absolutely. Many of our clients run both outdoor landscape maintenance and indoor plants maintenance with AMC under one provider. This keeps all greenery on a single schedule and one point of contact.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Call us at +91 85474 16951, send a WhatsApp message, or use our contact form. We will ask about your property type, garden size, current condition, and maintenance needs before providing a tailored quote.",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
                Garden Maintenance & Landscape Care
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight mb-8"
            >
              Landscaping with AMC{" "}
              <span className="font-serif italic text-white/90">in UAE</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-stone-400 font-light leading-relaxed max-w-2xl"
            >
              Professional outdoor landscaping with annual maintenance contracts
              for villas, compounds, hotels, and commercial properties. We
              design, install, and maintain gardens that stay healthy in the UAE
              climate — so you do not have to manage it yourself.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-lg leading-relaxed mb-6"
            >
              A well-maintained garden adds value to any property, but in the
              UAE, outdoor plants need consistent care — the right watering,
              seasonal pruning, soil attention, and irrigation checks. Without
              regular maintenance, even a beautifully installed landscape can
              decline within months.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-lg leading-relaxed mb-6"
            >
              At Shaheen Flowers and Ornamental Plants Trading LLC, we offer
              landscaping with AMC in UAE so your outdoor space receives
              scheduled, professional care throughout the year. Whether you have
              a villa garden in Ajman, a hotel entrance in Dubai, or a
              commercial compound in Sharjah, our team handles the work on a
              fixed plan you can depend on.
            </motion.p>
            <motion.p variants={fadeUp} className="text-stone-500 text-lg leading-relaxed">
              We also supply{" "}
              <Link href="/products" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900">
                indoor plants and ornamental varieties
              </Link>
              , run indoor plants maintenance with AMC, and install{" "}
              <Link href="/services" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900">
                artificial plants and green walls
              </Link>
              — giving you one partner for all your greenery needs.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-lg leading-relaxed mb-6 mt-6"
            >
              Many property owners invest in a new garden or landscape upgrade and
              then struggle to keep it looking the same six months later. Plants
              dry out, irrigation gets blocked, weeds spread, and shrubs become
              overgrown. That is exactly the problem an AMC solves — structured,
              recurring landscape maintenance UAE gardens need to stay presentable.
            </motion.p>
            <motion.p variants={fadeUp} className="text-stone-500 text-lg leading-relaxed">
              Whether you are comparing landscaping companies in the UAE or
              renewing an existing contract, it helps to work with a team that
              handles design, planting, and aftercare under one roof. That is how
              we operate at Shaheen Flowers — from the first consultation through
              every scheduled maintenance visit.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/services/outdoor.jpg"
              alt="Outdoor landscaping with AMC in UAE"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY AMC MATTERS */}
      <section className="py-28 bg-[#FAFAFA] border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-light text-stone-900 mb-8"
            >
              Why Landscaping{" "}
              <span className="font-serif italic text-stone-500">AMC Matters</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-stone-500 text-lg leading-relaxed mb-6">
              Outdoor landscaping is not a one-time job. Heat, sand, irrigation
              issues, and seasonal changes all affect plant health. An Annual
              Maintenance Contract (AMC) gives you predictable garden maintenance
              instead of reactive fixes when something goes wrong.
            </motion.p>
            <motion.p variants={fadeUp} className="text-stone-500 text-lg leading-relaxed mb-6">
              With landscape maintenance UAE clients can plan for, you know when
              our team will visit, what tasks are covered, and how plant
              replacements are handled. That is especially important for
              commercial landscaping UAE properties — hotels, offices, and retail
              spaces where the exterior must look presentable every day.
            </motion.p>
            <motion.p variants={fadeUp} className="text-stone-500 text-lg leading-relaxed">
              For homeowners, an AMC means your villa garden stays tidy without
              you arranging separate visits for watering, trimming, or
              fertilising. For businesses, it means one landscaping company UAE
              partner accountable for the entire outdoor area.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* OUR LANDSCAPING SERVICES */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-6">
              Our{" "}
              <span className="font-serif italic text-stone-500">
                Landscaping Services
              </span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed max-w-3xl font-light">
              We cover the full cycle — from landscape design and planting to
              ongoing garden maintenance UAE property owners and managers rely
              on. Below is what our outdoor landscaping with AMC in UAE typically
              includes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 border-t border-stone-200 pt-12">
            {[
              {
                title: "Garden Maintenance Services",
                body: "Regular visits for mowing, edging, weeding, bed cleaning, and general tidying. We keep lawns, shrubs, and planted areas in good condition so your garden looks cared for between seasons.",
              },
              {
                title: "Irrigation Support",
                body: "Checks on drip lines, sprinklers, timers, and water pressure. Early detection of blockages or leaks prevents plant stress and avoids costly repairs later.",
              },
              {
                title: "Plant Care Services",
                body: "Pruning, fertilising, pest monitoring, and replacement of plants that fail under normal conditions. We select ornamental plant varieties suited to local heat and soil.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border-b border-stone-200 pb-10 md:border-b-0 md:pb-0"
              >
                <h3 className="text-xl font-light text-stone-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL & RESIDENTIAL */}
      <section className="py-32 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Commercial{" "}
              <span className="font-serif italic text-stone-400">
                Landscaping
              </span>
            </h2>
            <p className="text-stone-400 font-light leading-relaxed mb-6">
              Hotels, corporate offices, retail centres, and industrial compounds
              need outdoor areas that reflect their standards. We design and
              maintain entrance plantings, perimeter landscaping, courtyards, and
              shared green zones under AMC contracts tailored to foot traffic and
              visibility requirements.
            </p>
            <p className="text-stone-400 font-light leading-relaxed">
              Our commercial landscaping UAE work includes coordination with
              facility managers, clear visit schedules, and reporting on plant
              condition — so your team always knows the landscape is being
              looked after.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Residential{" "}
              <span className="font-serif italic text-stone-400">
                Landscaping
              </span>
            </h2>
            <p className="text-stone-400 font-light leading-relaxed mb-6">
              Villa gardens, townhouse plots, and private outdoor terraces benefit
              from the same structured approach. We help you choose plants that
              survive UAE summers, install irrigation where needed, and maintain
              the space through an AMC so you enjoy the garden without the daily
              workload.
            </p>
            <p className="text-stone-400 font-light leading-relaxed">
              From a small front garden to a full backyard landscape, we scale
              our services to your property and budget — with honest advice on
              what will work long term in your location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS OF AMC */}
      <section className="py-32 bg-[#FAFAFA] border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12 text-center">
            Benefits of{" "}
            <span className="font-serif italic text-stone-500">AMC</span>
          </h2>

          <div className="border-t border-stone-200">
            {[
              "Fixed schedule — no need to book ad-hoc garden visits",
              "Predictable costs compared to emergency call-outs",
              "Healthier plants through consistent watering and pruning",
              "Free or included plant replacement under agreed terms",
              "One team familiar with your property and its specific needs",
              "Less downtime — issues caught early during routine checks",
            ].map((item, i) => (
              <div
                key={i}
                className="py-6 border-b border-stone-200 text-lg text-stone-600 font-light"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
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
              Why Choose{" "}
              <span className="font-serif italic text-stone-500">
                Shaheen Flowers
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-lg leading-relaxed mb-6"
            >
              We are a landscaping company UAE clients work with for both
              installation and long-term care — not just a one-off contractor.
              With over a decade of experience and hundreds of projects
              completed, we understand what works in this climate.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-stone-500 text-lg leading-relaxed mb-6"
            >
              Beyond outdoor work, we supply indoor plants and pots, provide
              indoor plants maintenance with AMC, and install artificial plants
              and green wall solutions where natural planting is not suitable.
              That makes us a practical choice when you want one reliable partner
              for all greenery on your property.
            </motion.p>
            <motion.p variants={fadeUp} className="text-stone-500 text-lg leading-relaxed">
              We value clear communication, fair quoting, and showing up when we
              say we will. Quality, reliability, and customer satisfaction guide
              every project — from the first site visit to each scheduled
              maintenance round.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/services/maintenance.jpg"
              alt="Landscape maintenance team in UAE"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#FAFAFA] border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-12 text-center">
            Frequently Asked{" "}
            <span className="font-serif italic text-stone-500">Questions</span>
          </h2>

          <div className="space-y-0 border-t border-stone-200">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-stone-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-lg font-light text-stone-900 pr-8 group-hover:text-stone-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-stone-400 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-stone-500 font-light leading-relaxed pb-6"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS + CTA PREP */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-stone-500 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our full range of services, browse plants and planters, or
            get in touch to discuss landscaping with AMC for your property.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900 uppercase tracking-widest"
            >
              <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors">
                View All Services
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900 uppercase tracking-widest"
            >
              <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors">
                Browse Products
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-stone-900 uppercase tracking-widest"
            >
              <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors">
                Contact Us
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Get a Landscaping AMC Quote"
        description="Tell us about your villa, compound, or commercial property. We will visit, assess your outdoor space, and propose an annual maintenance plan that fits your needs and budget."
      />
    </div>
  );
}
