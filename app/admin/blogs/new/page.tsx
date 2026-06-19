"use client";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import slugify from "slugify";

export default function NewBlogPage() {
  const router = useRouter();

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setForm({
      ...form,
      featured_image: data.url,
    });
  }

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    meta_title: "",
    meta_description: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/blogs/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success("Blog published!");

      setTimeout(() => {
        router.push("/admin/blogs");
      }, 1000);
    } else {
      toast.error("Failed to publish");
    }
  }

  return (
    <div className="container mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-bold mb-6">Create Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Title"
          className="w-full border p-3"
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
        />

        <input
          placeholder="Slug"
          className="w-full border p-3"
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Excerpt"
          className="w-full border p-3"
          rows={3}
          value={form.excerpt}
          onChange={(e) =>
            setForm({
              ...form,
              excerpt: e.target.value,
            })
          }
        />

        <input type="file" onChange={handleImageUpload} />

        {form.featured_image && (
          <img
            src={form.featured_image}
            alt="Preview"
            className="w-full max-w-md rounded"
          />
        )}

        <textarea
          placeholder="Content"
          className="w-full border p-3"
          rows={10}
          value={form.content}
          onChange={(e) =>
            setForm({
              ...form,
              content: e.target.value,
            })
          }
        />

        <input
          placeholder="Meta Title"
          className="w-full border p-3"
          value={form.meta_title}
          onChange={(e) =>
            setForm({
              ...form,
              meta_title: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Meta Description"
          className="w-full border p-3"
          rows={3}
          value={form.meta_description}
          onChange={(e) =>
            setForm({
              ...form,
              meta_description: e.target.value,
            })
          }
        />

        <button type="submit" className="border px-6 py-3">
          Publish Blog
        </button>
      </form>
    </div>
  );
}
