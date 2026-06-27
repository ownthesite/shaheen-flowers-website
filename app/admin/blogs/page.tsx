import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/lib/blogs";
import DeleteBlogButton from "@/components/delete-blog-button";

export default async function AdminBlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-32">
      {/* EDITORIAL DASHBOARD HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-24 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div>
            <span className="inline-block px-3 py-1 mb-6 rounded-full border border-stone-200 bg-white text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500 shadow-sm">
              Dashboard
            </span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">
              Manage <span className="font-serif italic text-stone-500">Journal</span>
            </h1>
          </div>

          <Link
            href="/admin/blogs/new"
            className="inline-flex justify-center items-center bg-stone-900 text-white px-8 py-4 rounded-xl text-sm font-medium uppercase tracking-widest hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-all shadow-sm"
          >
            Create Entry
          </Link>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6">
        {blogs.length === 0 ? (
          /* EMPTY STATE */
          <div className="bg-white border border-stone-200 rounded-2xl p-16 md:p-24 text-center flex flex-col items-center justify-center shadow-sm animate-in fade-in duration-700">
            <span className="text-6xl font-serif italic text-stone-200 mb-6 select-none">
              00
            </span>
            <h2 className="text-2xl font-light tracking-tight text-stone-900 mb-4">
              No journal entries found
            </h2>
            <p className="text-stone-500 font-light mb-8 max-w-md">
              Your journal is currently empty. Start writing to share your insights, stories, and expertise with your audience.
            </p>
            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 uppercase tracking-widest group"
            >
              <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors">
                Write your first post
              </span>
            </Link>
          </div>
        ) : (
          /* BLOG GRID */
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="group flex flex-col bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100 border-b border-stone-100">
                  <Image
                    src={blog.featured_image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content Wrapper */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h2 className="mb-4 text-2xl font-light tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors">
                    {blog.title}
                  </h2>

                  <p className="mb-8 line-clamp-3 text-stone-500 font-light leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Actions Footer */}
                  <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex gap-6">
                      <Link
                        href={`/blogs/${blog.slug}`}
                        target="_blank"
                        className="text-xs font-medium uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
                      >
                        View
                      </Link>
                      <Link
                        href={`/admin/blogs/${blog.id}`}
                        className="text-xs font-medium uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
                      >
                        Edit
                      </Link>
                    </div>

                    {/* Assuming DeleteBlogButton handles its own styles, wrapping it to align */}
                    <div className="opacity-70 hover:opacity-100 transition-opacity">
                      <DeleteBlogButton id={blog.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
