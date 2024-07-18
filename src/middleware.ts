import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SERVER_URL } from "./constant";
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("lg");

  const url = request.nextUrl.clone();

  if (!token && !url.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    const response = await fetch(`${SERVER_URL}/api.user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    });
    const data = await response.json();
    if (!data.data && url.pathname !== "/login") {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("lg");
      return response;
    }
    if (url.pathname === "/login") {
      return NextResponse.redirect(new URL("/user", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/login"],
};
