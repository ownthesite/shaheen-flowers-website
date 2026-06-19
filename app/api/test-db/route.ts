import { sql } from "@/lib/neon";

export async function GET() {
  const result = await sql`
    SELECT NOW() as current_time
  `;

  return Response.json(result);
}
