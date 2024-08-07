import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Checks if the current path is a public route
  const currentPath = request.nextUrl.pathname;
  const isPublic = currentPath === "/login" || currentPath === "/register";

  // Get the token from cookies
  const token = request.cookies.get("sprouts.auth.token")?.value || "";

  // Validate token and route -> User authenticated -> Redirects to home page
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }

  // Validate token and route -> User not authenticated -> Redirects to login page
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/login", "/register", "/home", "/"],
};
