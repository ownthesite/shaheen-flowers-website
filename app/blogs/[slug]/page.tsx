import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";



export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="container mx-auto py-16 max-w-4xl">
      <Image
        src={blog.featured_image}
        alt={blog.title}
        width={1200}
        height={700}
        className="w-full rounded-xl mb-8"
      />

      <h1 className="text-5xl font-bold mb-6">{blog.title}</h1>

      <div className="prose max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </article>
  );
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.meta_title,
    description: blog.meta_description,
  };
}
