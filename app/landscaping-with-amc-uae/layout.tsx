import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata.landscapingAmc;

export default function LandscapingAmcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
