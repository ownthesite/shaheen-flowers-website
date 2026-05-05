"use client"

import { useState, useEffect, Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Leaf } from "lucide-react"
import ProductCard from "@/components/cards/product-card"
import { products } from "@/lib/products"

type Tab = "plants" | "planters"

// 1. ✅ Moved variants OUTSIDE the component so they aren't recreated on every render
const containerVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
}

function ProductsView() {
  const searchParams = useSearchParams()
  const [active, setActive] = useState<Tab>("plants")

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam === "planters") {
      setActive("planters")
    } else {
      setActive("plants")
    }
  }, [searchParams])

  const handleTabChange = (tab: Tab) => {
    if (tab !== active) setActive(tab)
  }

  const filteredProducts = useMemo(() => {
    return products.filter((p) => p.category === active)
  }, [active])

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* HERO SECTION KEEPS ITS ORIGINAL CODE */}
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

      {/* GRID SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="relative inline-flex bg-stone-200/50 p-1.5 rounded-full">
              {/* 2. ✅ Added will-change to help the mobile GPU prepare for the slider animation */}
              <motion.div
                animate={{ x: active === "plants" ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-stone-900 rounded-full will-change-transform"
              />

              {(["plants", "planters"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`relative z-10 px-6 py-3 min-h-[44px] rounded-full text-sm font-medium transition-colors ${
                    active === tab ? "text-white" : "text-stone-600"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[500px]"> {/* 3. ✅ Added min-height to prevent layout thrashing */}
            {/* 4. ✅ Switched to popLayout so the new grid doesn't wait for the old one to finish disappearing entirely */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active}
                variants={containerVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                {filteredProducts.map((p, i) => (
                  /* 5. ✅ Removed the heavy nested <motion.div> wrapper here */
                  <ProductCard key={p.id || i} {...p} priority={i < 4} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Leaf className="mx-auto mb-4 text-gray-400" />
              <p>No products found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <ProductsView />
    </Suspense>
  )
}