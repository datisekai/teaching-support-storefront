import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchUser } from "./services/login.services";
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("lg");

  console.log(token);

  try {
    const response = await fetchUser();
    console.log("DATA1:" + response);
  } catch (error) {
    console.log("DATA2:" + error);
  }

  const url = request.nextUrl.clone();

  if (!token && url.pathname.startsWith("/user")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && url.pathname === "/login") {
    return NextResponse.redirect(new URL("/user", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/login"],
};
