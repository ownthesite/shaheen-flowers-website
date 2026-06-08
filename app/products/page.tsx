"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
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
              Plants & <br className="hidden md:block" />
              <span className="font-serif italic text-white/90">
                Planters
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-400 max-w-2xl">
              Indoor plants, ornamental varieties, decorative planters, and
              commercial greenery solutions — curated for homes, offices, and
              landscape projects across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category descriptions */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 pb-16 border-b border-stone-200">
            <div>
              <h2 className="text-2xl font-light text-stone-900 mb-4">
                Indoor & Ornamental Plants
              </h2>
              <p className="text-stone-500 font-light leading-relaxed">
                Our indoor plants and ornamental varieties are selected for
                UAE conditions — suitable for offices, lobbies, villas, and
                commercial spaces. We supply and advise on placement, potting,
                and care.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-light text-stone-900 mb-4">
                Planters & Commercial Greenery
              </h2>
              <p className="text-stone-500 font-light leading-relaxed">
                Decorative planters in a range of sizes and finishes, plus
                commercial greenery solutions for hotels, retail, and corporate
                environments. Pair plants with the right vessels for a finished
                look.
              </p>
            </div>
          </div>

          {/* SHADCN TABS */}
          <Tabs
            value={active}
            onValueChange={(value) => setActive(value as Tab)}
            className="w-full"
          >
            <div className="flex justify-center mb-16">
              <TabsList className="inline-flex items-center h-auto rounded-full bg-black p-1.5 gap-1">
                {(["plants", "planters"] as Tab[]).map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="
            h-auto min-h-0
            rounded-full
            px-6 py-2.5

            text-sm font-medium capitalize
            transition-all duration-200

            text-white/70
            bg-transparent
            border-0 shadow-none

            hover:text-white

            data-[state=active]:bg-white
            data-[state=active]:text-black
            data-[state=active]:shadow-none

            focus-visible:ring-0
            focus-visible:outline-none
          "
                  >
                    {tab}
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

          {/* CTA */}
          <div className="mt-24 text-center pt-16 border-t border-stone-200">
            <p className="text-stone-500 font-light max-w-xl mx-auto mb-8 leading-relaxed">
              Need help choosing plants or planters for your project? Our team
              can recommend the right varieties and supply options for your
              space.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm uppercase tracking-[0.2em] text-stone-900 hover:text-stone-500 transition"
            >
              Request a Product Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
