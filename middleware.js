// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  if (
    url.pathname.startsWith("/home")||
    url.pathname.startsWith("/about") ||
    url.pathname.startsWith("/career") ||
    url.pathname.startsWith("/contact") ||
    url.pathname.startsWith("/testimonial")    
  ) {
    url.pathname = "/";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
