"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, MessageCircle } from "lucide-react";
import ProductCard from "@/components/cards/product-card";
import { products } from "@/lib/products";

function ProductsView() {
  const searchParams = useSearchParams();

  const [active, setActive] = useState<"plants" | "planters">("plants");
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam === "planters") {
      setActive("planters");
    } else {
      setActive("plants");
    }
  }, [searchParams]);

  const handleTabChange = (tab: "plants" | "planters") => {
    if (tab === active) return;

    setDirection(tab === "plants" ? -1 : 1);
    setActive(tab);
  };

  const filteredProducts = products.filter(
    (p) => p.category === active
  );

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* HERO */}
      <section className="relative py-32 md:py-40 bg-stone-950 text-white overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-stone-400">
                Plants & Planters
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Curated For <br className="hidden md:block" />
              <span className="font-serif italic text-white/90">
                Your Space
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-400 max-w-2xl">
              Discover a refined selection of plants and premium planters designed
              to elevate your environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* ✅ TAB SWITCH (you were missing this) */}
          <div className="flex justify-center mb-16">
            <div className="relative inline-flex bg-stone-200/50 p-1.5 rounded-full">

              {/* Sliding pill */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-1.5 bottom-1.5 bg-stone-900 rounded-full"
                style={{
                  width: "50%",
                  left: active === "plants" ? "6px" : "calc(50% + 6px)",
                }}
              />

              {["plants", "planters"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab as any)}
                  className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === tab ? "text-white" : "text-stone-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ ANIMATED PRODUCT GRID (single source of truth) */}
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]  as const,
                }}
              >
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {filteredProducts.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <ProductCard {...p} priority={i < 4} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* EMPTY STATE */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Leaf className="mx-auto mb-4 text-gray-400" />
              <p>No products found</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <ProductsView />
    </Suspense>
  );
}