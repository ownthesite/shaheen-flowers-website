"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import slugify from "slugify";

export default function NewBlogPage() {
  const router = useRouter();

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    meta_title: "",
    meta_description: "",
  });

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      setForm((prev) => ({
        ...prev,
        featured_image: data.url,
      }));

      toast.success("Image uploaded successfully");
    } catch {
      toast.error("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setSaving(true);

      const res = await fetch("/api/blogs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to publish");
      }

      toast.success("Blog published!");

      setTimeout(() => {
        router.push("/admin/blogs");
      }, 1000);
    } catch {
      toast.error("Failed to publish. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 md:py-24 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-200 animate-in fade-in slide-in-from-bottom-4 duration-700">

        {/* EDITORIAL HEADER */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 mb-4 rounded-full border border-stone-200 bg-[#FAFAFA] text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500">
            Authoring
          </span>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-stone-900">
            New <span className="font-serif italic text-stone-500">Entry</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* SECTION: BASIC INFO */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-medium text-stone-500 uppercase tracking-widest">
                  Title
                </label>
                <input
                  placeholder="Enter blog title"
                  className="w-full bg-[#FAFAFA] border border-stone-200 rounded-xl px-5 py-4 font-light text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-all"
                  value={form.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    setForm({
                      ...form,
                      title,
                      slug: slugify(title, {
                        lower: true,
                        strict: true,
                      }),
                    });
                  }}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-stone-500 uppercase tracking-widest">
                  URL Slug
                </label>
                <input
                  placeholder="blog-post-url"
                  className="w-full bg-[#FAFAFA] border border-stone-200 rounded-xl px-5 py-4 font-light text-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-all"
                  value={form.slug}
                  onChange={(e) =>
                    setForm({ ...form, slug: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-stone-500 uppercase tracking-widest">
                Excerpt
              </label>
              <textarea
                placeholder="A brief summary of the article..."
                className="w-full bg-[#FAFAFA] border border-stone-200 rounded-xl px-5 py-4 font-light text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-all resize-none"
                rows={3}
                value={form.excerpt}
                onChange={(e) =>
                  setForm({ ...form, excerpt: e.target.value })
                }
              />
            </div>
          </div>

          <hr className="border-stone-100" />

          {/* SECTION: MEDIA */}
          <div className="space-y-4">
            <label className="text-xs font-medium text-stone-500 uppercase tracking-widest">
              Featured Image
            </label>

            <div className="relative group rounded-2xl border-2 border-dashed border-stone-200 bg-[#FAFAFA] hover:bg-stone-50 transition-colors overflow-hidden">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
              />

              <div className="p-10 flex flex-col items-center justify-center text-center">
                {form.featured_image ? (
                  <div className="space-y-4">
                    <img
                      src={form.featured_image}
                      alt="Preview"
                      className="max-h-64 object-cover rounded-xl shadow-sm border border-stone-200 mx-auto"
                    />
                    <p className="text-sm font-medium text-stone-900 uppercase tracking-widest underline underline-offset-4 decoration-stone-300 group-hover:decoration-stone-900 transition-colors">
                      Click to replace image
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-stone-900 uppercase tracking-widest">
                      {uploading ? "Uploading..." : "Upload Cover Image"}
                    </p>
                    <p className="text-sm font-light text-stone-500">
                      Drag and drop or click to browse
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <hr className="border-stone-100" />

          {/* SECTION: CONTENT */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-stone-500 uppercase tracking-widest flex justify-between">
              <span>Content (Markdown)</span>
            </label>
            <textarea
              placeholder="Write your article content here..."
              className="w-full bg-[#FAFAFA] border border-stone-200 rounded-xl px-5 py-4 font-light text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-all font-mono text-sm leading-relaxed"
              rows={15}
              value={form.content}
              onChange={(e) =>
                setForm({ ...form, content: e.target.value })
              }
              required
            />
          </div>

          <hr className="border-stone-100" />

          {/* SECTION: SEO */}
          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-tight text-stone-900">SEO Settings</h3>

            <div className="space-y-2">
              <label className="text-xs font-medium text-stone-500 uppercase tracking-widest">
                Meta Title
              </label>
              <input
                placeholder="SEO optimized title"
                className="w-full bg-[#FAFAFA] border border-stone-200 rounded-xl px-5 py-4 font-light text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-all"
                value={form.meta_title}
                onChange={(e) =>
                  setForm({ ...form, meta_title: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-stone-500 uppercase tracking-widest">
                Meta Description
              </label>
              <textarea
                placeholder="Brief description for search engines..."
                className="w-full bg-[#FAFAFA] border border-stone-200 rounded-xl px-5 py-4 font-light text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 transition-all resize-none"
                rows={3}
                value={form.meta_description}
                onChange={(e) =>
                  setForm({ ...form, meta_description: e.target.value })
                }
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              disabled={saving || uploading}
              className="bg-stone-900 text-white px-8 py-4 rounded-xl text-sm font-medium uppercase tracking-widest hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[200px]"
            >
              {saving ? (
                <span className="animate-pulse">Publishing...</span>
              ) : (
                <span>Publish Entry</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
