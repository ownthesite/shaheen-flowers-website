import { createBlog } from "@/lib/blogs";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await createBlog({
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      featured_image: body.featured_image,
      meta_title: body.meta_title,
      meta_description: body.meta_description,
    });

    revalidatePath("/blogs");
    revalidatePath("/admin/blogs");

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}
