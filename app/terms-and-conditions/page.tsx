"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function TermsPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* HERO */}
      <section className="relative py-32 md:py-40 bg-stone-950 text-white overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-400">
                Legal
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6">
              Terms &{" "}
              <span className="font-serif italic text-white/90">
                Conditions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website or
              submitting inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-16"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-4">
                Last Updated
              </p>
              <p className="text-stone-600 font-light">
                May 2026
              </p>
            </div>

            <TermsSection
              title="Website Usage"
              content="By using this website, you agree to use it lawfully and respectfully without attempting to misuse, disrupt, or damage the website or its content."
            />

            <TermsSection
              title="Content Ownership"
              content="All images, project photographs, branding, designs, text, and website content belong to Shaheen Flowers & Landscaping unless otherwise stated. Unauthorized use or reproduction is prohibited."
            />

            <TermsSection
              title="Services & Availability"
              content="Service details, project timelines, plant availability, and pricing may change without prior notice depending on project requirements and availability."
            />

            <TermsSection
              title="Project Inquiries"
              content="Submitting an inquiry through this website does not create a binding agreement or guarantee project acceptance, scheduling, or availability."
            />

            <TermsSection
              title="External Links"
              content="Our website may include links to third-party platforms such as WhatsApp or social media services. We are not responsible for the content or policies of external websites."
            />

            <TermsSection
              title="Limitation of Liability"
              content="Shaheen Flowers & Landscaping is not responsible for any direct or indirect damages arising from the use of this website or reliance on the information provided."
            />

            <TermsSection
              title="Governing Law"
              content="These terms are governed by the applicable laws of the United Arab Emirates."
            />

            <TermsSection
              title="Changes to Terms"
              content="We may update these Terms & Conditions periodically without prior notice."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function TermsSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="border-b border-stone-200 pb-12">
      <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-6">
        {title}
      </h2>

      <p className="text-stone-600 text-lg leading-relaxed font-light">
        {content}
      </p>
    </div>
  );
}