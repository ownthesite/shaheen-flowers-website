import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/lib/blogs";
import DeleteBlogButton from "@/components/delete-blog-button";

export default async function AdminBlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto py-16">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Manage Blogs</h1>
          <p className="mt-2 text-gray-500">
            Create, edit and manage blog posts.
          </p>
        </div>

        <Link
          href="/admin/blogs/new"
          className="rounded-lg bg-black px-5 py-3 text-white"
        >
          Create Blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="rounded-xl border p-10 text-center">
          <h2 className="text-xl font-semibold">No blogs found</h2>

          <p className="mt-2 text-gray-500">Create your first blog post.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden rounded-xl border bg-white"
            >
              <Image
                src={blog.featured_image}
                alt={blog.title}
                width={800}
                height={500}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="mb-2 text-xl font-semibold">{blog.title}</h2>

                <p className="mb-4 line-clamp-3 text-sm text-gray-500">
                  {blog.excerpt}
                </p>

                <div className="flex gap-3">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    target="_blank"
                    className="rounded border px-4 py-2"
                  >
                    View
                  </Link>

                  <Link href={`/admin/blogs/${blog.id}`}>Edit Blog</Link>

                  <DeleteBlogButton id={blog.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
