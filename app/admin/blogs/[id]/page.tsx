import { getBlogById } from "@/lib/blogs";
import EditBlogForm from "./edit-blog-form";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blog = await getBlogById(
    Number(id)
  );

  return (
    <EditBlogForm blog={blog} />
  );
}
