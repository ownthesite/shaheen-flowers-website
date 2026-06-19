import Link from "next/link";
import { getBlogs } from "@/lib/blogs";

export const revalidate = 86400;

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>

      <div className="grid gap-8">
        {blogs.map((blog: any) => (
          <article
            key={blog.id}
            className="border rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {blog.title}
            </h2>

            <p className="text-muted-foreground mb-4">
              {blog.excerpt}
            </p>

            <Link
              href={`/blogs/${blog.slug}`}
              className="underline"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
