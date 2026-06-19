import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const cookieStore = await cookies();

    cookieStore.set("admin-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return Response.json({
      success: true,
    });
  }

  return Response.json(
    {
      success: false,
      message: "Invalid credentials",
    },
    { status: 401 }
  );
}
