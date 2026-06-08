"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { fadeUp } from "@/lib/animations"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "+971 ",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const SCRIPT_URL = process.env.NEXT_PUBLIC_GAS_URL!;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let v = value;

      // Enforce +971 prefix
      if (!v.startsWith("+971")) {
        v = "+971 ";
      }

      // Extract digits after +971
      let numbers = v.replace("+971", "").replace(/\D/g, "");

      // Limit to 9 digits (UAE standard)
      numbers = numbers.slice(0, 9);

      // Format: +971 50 123 4567
      let formatted = "+971 ";

      if (numbers.length > 0) {
        formatted += numbers.slice(0, 2);
      }
      if (numbers.length >= 3) {
        formatted += " " + numbers.slice(2, 5);
      }
      if (numbers.length >= 6) {
        formatted += " " + numbers.slice(5, 9);
      }

      setForm({ ...form, phone: formatted });
      return;
    }

    // default behavior for other fields
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // ✅ WhatsApp trigger
      const whatsappNumber = "918547416951";

      const message = `📩 New Enquiry

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}`;

      const encoded = encodeURIComponent(message);

      window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");

      // ✅ UI success
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
    }

    setIsSubmitting(false);
  };

  // Refined Framer Motion variants matching the portfolio reference
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* PREMIUM HERO */}
      <section className="relative py-32 md:py-40 bg-stone-950 text-white overflow-hidden flex items-center justify-center">

  {/* Ambient Center Glow (match CTASection) */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="flex flex-col items-center"
    >
      {/* Overline */}
      <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-400">
          Get In Touch
        </span>
      </div>

      {/* Title (same typography system) */}
      <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6">
        Contact <br className="hidden md:block" />
        <span className="font-serif italic text-white/90">
          Shaheen Flowers
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
        Questions about landscaping with AMC, indoor plants, or garden
        maintenance? Call us, send a WhatsApp message, or fill in the form
        below — we will get back to you promptly.
      </p>
    </motion.div>

    {/* CTA Area (same structure as CTASection) */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      className="mt-12 flex flex-col items-center gap-8"
    >
      <a
        href="https://wa.me/918547416951?text=Hi%20Shaheen%20Flowers%2C%20I%27m%20interested%20in%20your%20services.%20Here%20are%20my%20details%3A%0A%0AName%3A%20%0APhone%3A%20%0ALocation%3A%20%0AService%20Needed%3A%20%0A%0APlease%20get%20back%20to%20me."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full sm:w-auto"
      >
        <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-stone-950 rounded-full text-sm font-semibold hover:bg-stone-200 transition-all duration-500 overflow-hidden">
          <MessageCircle size={18} className="relative z-10" />
          <span className="relative z-10">WhatsApp Us</span>
        </button>
      </a>
    </motion.div>

    {/* Optional trust line (kept consistent with system) */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.6 }}
      className="mt-16 text-[11px] uppercase tracking-widest text-stone-500 font-medium"
    >
      Our team typically responds within a few minutes
    </motion.p>

  </div>
</section>

      {/* EDITORIAL CONTENT & FORM SECTION */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 md:gap-24">
          {/* LEFT - CONTACT INFO */}
          <div className="md:col-span-5">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} className="mb-12">
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900">
                  Contact{" "}
                  <span className="font-serif italic text-stone-500">
                    Details
                  </span>
                </h3>
                <div className="mt-6 w-10 h-[1px] bg-stone-300" />
              </motion.div>

              <div className="space-y-10">
                <motion.div variants={fadeUp} className="group">
                  <div className="text-xs text-stone-400 tracking-[0.15em] uppercase mb-3">
                    Phone
                  </div>
                  <div className="flex items-center gap-4 text-stone-900 font-light text-lg">
                    <Phone className="text-stone-400" size={20} />
                    <a
                      href="tel:+918547416951"
                      className="tracking-wide hover:text-stone-600 transition-colors"
                    >
                      +91 85474 16951
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="group">
                  <div className="text-xs text-stone-400 tracking-[0.15em] uppercase mb-3">
                    Email
                  </div>
                  <div className="flex items-center gap-4 text-stone-900 font-light text-lg">
                    <Mail className="text-stone-400" size={20} />
                    <span className="tracking-wide">
                      enquiry@shaheenflowers.ae
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="group">
                  <div className="text-xs text-stone-400 tracking-[0.15em] uppercase mb-3">
                    Location
                  </div>
                  <div className="flex items-center gap-4 text-stone-900 font-light text-lg">
                    <MapPin className="text-stone-400" size={20} />
                    <span className="tracking-wide">
                      P.O. Box 13019, Ajman, UAE
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="group">
                  <div className="text-xs text-stone-400 tracking-[0.15em] uppercase mb-3">
                    Follow Us
                  </div>
                  <div className="flex items-center gap-5 text-stone-600">
                    <a
                      href="https://www.instagram.com/shaheenflowers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-900 transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href="https://www.facebook.com/Shaheenflowers.uae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-900 transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebookF size={18} />
                    </a>
                    <a
                      href="https://www.pinterest.com/shaheenflowersllc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-900 transition-colors"
                      aria-label="Pinterest"
                    >
                      <FaPinterestP size={18} />
                    </a>
                    <a
                      href="https://x.com/shaheenflowersl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-900 transition-colors"
                      aria-label="X"
                    >
                      <FaXTwitter size={18} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - EDITORIAL FORM */}
          <div className="md:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900 mb-10">
                Send an{" "}
                <span className="font-serif italic text-stone-500">
                  Inquiry
                </span>
              </h3>
              <p className="text-stone-500 font-light mb-10 leading-relaxed">
                Share your property details, the service you need, and your
                preferred contact time. We typically respond within a few hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Minimalist Input Fields */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-stone-300 py-4 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors font-light"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-stone-300 py-4 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors font-light"
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (+971 ...)"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-stone-300 py-4 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors font-light"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-stone-300 py-4 h-32 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors font-light resize-none"
                  />
                </div>

                <div className="pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-4 bg-stone-950 text-white hover:bg-stone-800 transition-colors duration-300 text-xs tracking-[0.15em] uppercase font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {/* TOAST */}
                  {status === "success" && (
                    <div className="fixed top-6 right-6 z-50">
                      <div className="flex items-center gap-3 px-5 py-4 bg-white border border-stone-200 shadow-xl rounded-xl animate-[fadeIn_0.4s_ease]">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
                          <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                        </div>

                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-stone-900">
                            Message sent
                          </span>
                          <span className="text-xs text-stone-500">
                            We’ll get back to you soon
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <p className="text-stone-600 text-sm font-light tracking-wide flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      Something went wrong. Try again.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
