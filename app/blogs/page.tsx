import Link from "next/link";
import { getBlogs } from "@/lib/blogs";

export const revalidate = 86400;

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* PREMIUM HERO */}
      <section className="relative py-32 md:py-48 bg-stone-950 text-white overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-stone-800/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-6xl mx-auto px-6 z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-300">
                Our Journal
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-8">
              Insights & <br className="hidden md:block" />
              <span className="font-serif italic text-white/90">Stories</span>
            </h1>

            <p className="text-stone-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Explore our latest thoughts, updates, and expert advice to help
              you cultivate and care for your perfect space.
            </p>
          </div>
        </div>
      </section>

      {/* EDITORIAL BLOG LIST */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 space-y-20 md:space-y-32">
          {blogs.map((blog: any, index: number) => (
            <article
              key={blog.id}
              className="group relative flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >
              {/* Subtle Numbering (Editorial Style) */}
              <div className="hidden md:block text-6xl md:text-7xl font-serif italic text-stone-200 select-none shrink-0 -mt-2">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <div className="flex flex-col">
                {/* Mobile Numbering */}
                <span className="md:hidden text-5xl font-serif italic text-stone-200 mb-6 select-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mb-6 group-hover:text-stone-600 transition-colors duration-300">
                  {blog.title}
                </h2>

                <p className="text-stone-500 leading-relaxed text-lg font-light mb-8 max-w-2xl">
                  {blog.excerpt}
                </p>

                <div>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 uppercase tracking-widest"
                  >
                    <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors duration-300">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
