"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function PrivacyPolicyPage() {
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
              Privacy{" "}
              <span className="font-serif italic text-white/90">
                Policy
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
              Your privacy matters to us. This page explains how information is
              collected and used through our website.
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

            <PolicySection
              title="Introduction"
              content="Shaheen Flowers & Landscaping values your privacy and is committed to protecting any personal information shared through this website."
            />

            <PolicySection
              title="Information We Collect"
              content="We may collect information such as your name, phone number, email address, and any details submitted through our contact forms or inquiry messages."
            />

            <PolicySection
              title="How We Use Information"
              content="Information submitted through the website is used to respond to inquiries, discuss projects, provide customer support, and improve our services and communication."
            />

            <PolicySection
              title="Third-Party Services"
              content="We may use trusted third-party services such as WhatsApp, Google Maps, hosting providers, or analytics tools to improve website functionality and communication."
            />

            <PolicySection
              title="Data Protection"
              content="We do not sell, rent, or trade personal information. Information is only used for communication, business operations, or when legally required."
            />

            <PolicySection
              title="External Links"
              content="Our website may contain links to third-party platforms or social media services. We are not responsible for the privacy practices or content of those external websites."
            />

            <PolicySection
              title="Policy Updates"
              content="This Privacy Policy may be updated occasionally to reflect changes in our services or legal requirements."
            />

            <PolicySection
              title="Contact"
              content="If you have any questions regarding this Privacy Policy, please contact us through our website contact page."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function PolicySection({
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