"use client";

import { useRouter } from "next/navigation";

export default function DeleteBlogButton({
  id,
}: {
  id: number;
}) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed =
      window.confirm(
        "Delete this blog?"
      );

    if (!confirmed) return;

    await fetch(
      `/api/blogs/${id}`,
      {
        method: "DELETE",
      }
    );

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-500"
    >
      Delete
    </button>
  );
}
