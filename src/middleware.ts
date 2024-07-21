import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_TOKEN, SERVER_URL } from "./constants";
export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIE_TOKEN)?.value;

  const url = request.nextUrl;

  console.log(token, url.pathname);

  if (url.pathname == "/login") {
    if (token) {
      return NextResponse.redirect(new URL("/user", request.url));
    }
    return NextResponse.next();
  }

  if (token) {
    console.log("called");
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/user/:path*", "/login"],
  // matcher: [],
};
