import { createBlog } from "@/lib/blogs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Incoming blog:", body);

    const result = await createBlog({
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      featured_image: body.featured_image,
      meta_title: body.meta_title,
      meta_description: body.meta_description,
    });

    console.log("Create result:", result);

    return Response.json({ success: true });
  } catch (error) {
    console.error("BLOG CREATE ERROR:", error);

    return Response.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}
