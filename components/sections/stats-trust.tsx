"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Award, ShieldCheck, Leaf, Briefcase } from "lucide-react";

type CounterProps = {
  from: number;
  to: number;
  duration?: number;
};

function AnimatedCounter({ from, to, duration = 3 }: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1]  as const, // Custom premium ease-out curve
      onUpdate: (value) => setCount(Math.floor(value)),
    });

    return () => controls.stop();
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

type Stat = {
  number: number;
  label: string;
  suffix?: string;
};

export default function StatsTrust() {
  const stats: Stat[] = [
    { number: 300, label: "Luxury Projects Completed", suffix: "+" },
    { number: 12, label: "Years of Expertise", suffix: "+" },
    { number: 50, label: "Custom Designs Delivered", suffix: "+" },
    { number: 98, label: "Client Satisfaction Rate", suffix: "%" },
  ];

  const certifications = [
    { text: "ISO 9001:2015", icon: ShieldCheck },
    { text: "Eco Certified", icon: Leaf },
    { text: "Member of LAWA", icon: Award },
    { text: "Licensed Contractor", icon: Briefcase },
  ];

  return (
    <section className="relative bg-[#FAFAFA] py-32 border-t border-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* ✨ EDITORIAL STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]  as const,
              }}
              className="relative flex flex-col items-center group"
            >
              {/* Refined Architectural Divider */}
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-gradient-to-b from-transparent via-stone-200 to-transparent" />
              )}

              {/* Number Layout */}
              <div className="flex items-baseline justify-center text-6xl md:text-7xl font-light tracking-tighter text-stone-900 mb-4">
                <AnimatedCounter from={0} to={stat.number} duration={3} />
                <span className="text-4xl md:text-5xl font-serif italic text-stone-400 ml-1 group-hover:text-stone-900 transition-colors duration-500">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-xs font-medium uppercase tracking-widest text-stone-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ✨ REFINED TRUST SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-stone-200/70 text-center"
        >
          {/* Overline */}
          <div className="inline-block px-4 py-1.5 mb-10 rounded-full border border-stone-200/60 bg-white/60 backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.25em] font-semibold uppercase text-stone-500">
              Trusted & Certified
            </p>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.08, duration: 0.4 }}
                className="group flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/60 text-sm text-stone-600 transition-all duration-300"
              >
                {/* Icon */}
                <cert.icon className="w-4 h-4 text-stone-400 transition-colors duration-300 group-hover:text-emerald-700" />

                {/* Text */}
                <span className="font-light tracking-wide group-hover:text-stone-900 transition-colors duration-300">
                  {cert.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
