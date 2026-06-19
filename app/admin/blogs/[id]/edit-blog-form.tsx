"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import slugify from "slugify";

type Props = {
  blog: Record<string, any>;
};

export default function EditBlogForm({
  blog,
}: Props) {
  const router = useRouter();

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: blog.title || "",
    slug: blog.slug || "",
    excerpt: blog.excerpt || "",
    content: blog.content || "",
    featured_image: blog.featured_image || "",
    meta_title: blog.meta_title || "",
    meta_description: blog.meta_description || "",
  });

  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
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

      toast.success("Image uploaded");
    } catch {
      toast.error("Image upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setSaving(true);

      const res = await fetch(
        `/api/blogs/${blog.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Blog updated");

      router.push("/admin/blogs");
      router.refresh();
    } catch {
      toast.error("Failed to update");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="container mx-auto max-w-3xl py-10">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Blog
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
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

        <div className="space-y-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />

          {uploading && (
            <p>Uploading image...</p>
          )}

          {form.featured_image && (
            <img
              src={form.featured_image}
              alt="Preview"
              className="max-h-80 rounded border"
            />
          )}
        </div>

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

        <button
          type="submit"
          disabled={saving}
          className="border px-6 py-3"
        >
          {saving
            ? "Saving..."
            : "Update Blog"}
        </button>
      </form>
    </div>
  );
}
