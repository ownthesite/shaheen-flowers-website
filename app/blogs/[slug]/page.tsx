import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.meta_title,
    description: blog.meta_description,
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-32">
      {/* PREMIUM ARTICLE HERO */}
      <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 bg-stone-950 text-white overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-stone-800/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto px-6 z-10 flex flex-col items-center text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-300">
                Journal Entry
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-8">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto px-6 -mt-16 md:-mt-32 relative z-20">
        {/* Featured Image with overlap */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-16 md:mb-24 bg-stone-100 border border-stone-200">
          <Image
            src={blog.featured_image}
            alt={blog.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>

        {/* Markdown Prose Styling */}
        <div
          className="max-w-3xl mx-auto prose prose-lg prose-stone
            prose-headings:font-light prose-headings:tracking-tight
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:font-light prose-p:text-stone-600 prose-p:leading-relaxed
            prose-a:text-stone-900 prose-a:underline-offset-4 hover:prose-a:decoration-stone-400
            prose-blockquote:border-l-stone-300 prose-blockquote:font-serif prose-blockquote:italic
            prose-img:rounded-xl prose-img:shadow-sm"
        >
          <ReactMarkdown
            components={{
              // HEADINGS
              h1: ({ children }) => (
                <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mt-12 mb-6 leading-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900 mt-10 mb-5 leading-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-light tracking-tight text-stone-900 mt-8 mb-4">
                  {children}
                </h3>
              ),

              // BODY TEXT
              p: ({ children }) => (
                <p className="text-stone-600 font-light leading-relaxed mb-6 text-lg max-w-3xl">
                  {children}
                </p>
              ),

              // LINKS (Matching your tracking-widest CTA style)
              a: ({ children, href }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors duration-300"
                >
                  {children}
                </a>
              ),

              // EDITORIAL BLOCKQUOTES
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-stone-300 pl-6 my-10 font-serif italic text-stone-500 text-xl md:text-2xl leading-relaxed max-w-2xl">
                  {children}
                </blockquote>
              ),

              // LISTS (Using the elegant em-dash style from the Services page)
              // LISTS
              ul: ({ children }) => (
                <ul className="space-y-3 mb-8 max-w-3xl list-none pl-0">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="list-decimal pl-6 space-y-3 mb-8 text-stone-600 font-light text-lg max-w-3xl marker:text-stone-400 marker:italic marker:font-serif">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li className="text-stone-600 font-light leading-relaxed text-lg">
                  {children}
                </li>
              ),

              // IMAGES
              img: ({ src, alt }) => (
                <span className="block my-12 rounded-2xl overflow-hidden shadow-sm border border-stone-100 bg-stone-50">
                  <img
                    src={src}
                    alt={alt || "Blog image"}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  {alt && (
                    <span className="block p-4 text-center text-sm font-light text-stone-400 font-serif italic">
                      {alt}
                    </span>
                  )}
                </span>
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
