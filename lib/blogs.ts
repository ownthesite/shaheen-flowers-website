import { sql } from "@/lib/neon";





export async function deleteBlog(id: number) {
  await sql`
    DELETE FROM blogs
    WHERE id = ${id}
  `;
}

export async function getBlogById(id: number) {
  const result = await sql`
    SELECT *
    FROM blogs
    WHERE id = ${id}
    LIMIT 1
  `;

  return result[0];
}

export async function updateBlog(
  id: number,
  data: any
) {
  await sql`
    UPDATE blogs
    SET
      title = ${data.title},
      slug = ${data.slug},
      excerpt = ${data.excerpt},
      content = ${data.content},
      featured_image = ${data.featured_image},
      meta_title = ${data.meta_title},
      meta_description = ${data.meta_description}
    WHERE id = ${id}
  `;
}

export async function createBlog(data: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  meta_title: string;
  meta_description: string;
}) {
  return await sql`
    INSERT INTO blogs (
      title,
      slug,
      excerpt,
      content,
      featured_image,
      meta_title,
      meta_description,
      published
    )
    VALUES (
      ${data.title},
      ${data.slug},
      ${data.excerpt},
      ${data.content},
      ${data.featured_image},
      ${data.meta_title},
      ${data.meta_description},
      true
    )
  `;
}

export async function getBlogs() {
  return await sql`
    SELECT *
    FROM blogs
    WHERE published = true
    ORDER BY created_at DESC
  `;
}

export async function getBlogBySlug(slug: string) {
  const result = await sql`
    SELECT *
    FROM blogs
    WHERE slug = ${slug}
    LIMIT 1
  `;

  return result[0];
}
