import { updateBlog, deleteBlog } from "@/lib/blogs";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await req.json();
  const { id } = await params;

  await updateBlog(Number(id), body);

  return Response.json({
    success: true,
  });
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await deleteBlog(Number(id));

  return Response.json({
    success: true,
  });
}
