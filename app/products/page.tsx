'use client'

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";
import ProductCard from "@/components/cards/product-card";
import { products } from "@/lib/products";

function ProductsView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [active, setActive] = useState<"plants" | "planters">("plants");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam === "planters") {
      setActive("planters");
    } else {
      setActive("plants");
    }
  }, [searchParams]);

  const filteredProducts = products.filter((p) => p.category === active);

  const handleTabChange = (category: "plants" | "planters") => {
    setActive(category);
    router.push(`/products?category=${category}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-stone-900 text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-950" />
        <div className="relative max-w-6xl mx-auto px-6 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-light">
            Curated For <span className="italic">Your Space</span>
          </h1>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* FILTER */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-stone-200/50 p-1.5 rounded-full">
              {["plants", "planters"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab as "plants" | "planters")}
                  className={`px-6 py-2 rounded-full ${
                    active === tab ? "bg-stone-900 text-white" : "text-stone-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCTS */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, i) => (
                <motion.div
                  key={p.id || i}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard
                    {...p}
                    priority={i < 4}   // ✅ ONLY first 2 images
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY */}
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