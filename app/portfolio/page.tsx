"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
          Temporary Page
        </span>

        <h1 className="mt-4 text-5xl md:text-7xl font-light tracking-tight text-stone-900">
          Portfolio
        </h1>

        <p className="mt-6 text-lg text-stone-600 leading-relaxed">
          Our portfolio section is currently being updated. In the meantime,
          you can explore our latest landscaping insights, project stories, and
          industry updates on our blog.
        </p>

        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition"
        >
          Visit Blogs
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
