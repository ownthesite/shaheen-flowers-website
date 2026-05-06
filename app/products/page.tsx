"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";
import ProductCard from "@/components/cards/product-card";
import { products } from "@/lib/products";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Tab = "plants" | "planters";

export default function ProductsPage() {
  const [active, setActive] = useState<Tab>("plants");
  const [isDesktop, setIsDesktop] = useState(true);

  // ✅ Hydration-safe desktop check to conditionally disable heavy grid animations on mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // ✅ Fast + memoized filtering
  const filteredProducts = useMemo(() => {
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* HERO */}
      <section className="relative py-32 md:py-40 bg-stone-950 text-white overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
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
              Discover a refined selection of plants and premium planters
              designed to elevate your environment.
            </p>
          </div>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* SHADCN TABS */}
          <Tabs
            value={active}
            onValueChange={(value) => setActive(value as Tab)}
            className="w-full"
          >
            <div className="flex justify-center mb-16">
              {/* Added items-center and ensure h-auto overrides any default heights */}
              <TabsList className="inline-flex items-center h-auto rounded-full bg-black p-1.5 gap-1">
                {(["plants", "planters"] as Tab[]).map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className={`
    relative z-0 flex items-center justify-center
    
    h-auto min-h-0
    px-6 py-2.5
    
    rounded-full text-sm font-medium cursor-pointer
    transition-colors duration-300
    
    bg-transparent border-0 shadow-none
    
    focus-visible:ring-0
    focus-visible:outline-none
    
    data-[state=active]:text-black
    data-[state=inactive]:text-white/70
    data-[state=inactive]:hover:text-white
  `}
                  >
                    {/* Sliding Active Pill */}
                    {active === tab && (
                      <motion.div
                        layoutId="active-tab-indicator"
                        className="absolute inset-0 bg-white rounded-full -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}

                    {/* Text Content */}
                    <span className="capitalize relative z-10">{tab}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="plants" className="mt-0">
              {/* Plants Grid */}
            </TabsContent>

            <TabsContent value="planters" className="mt-0">
              {/* Planters Grid */}
            </TabsContent>
          </Tabs>
          {/* ✅ RESPONSIVE GRID (Animated Desktop, Instant Mobile) */}
          <motion.div layout className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={
                  isDesktop ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  isDesktop
                    ? { opacity: 0, y: -15 }
                    : { opacity: 0, transition: { duration: 0 } }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                {filteredProducts.map((p, i) => (
                  <div key={i}>
                    <ProductCard {...p} priority={i < 4} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Leaf className="mx-auto mb-4 text-gray-400" />
              <p>No products found</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
