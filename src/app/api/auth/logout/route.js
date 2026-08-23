import { NextResponse } from "next/server";
import { AUTH_COOKIES } from "@/lib/getSession";

export async function GET(request) {
  const url = new URL(request.url);
  const response = NextResponse.redirect(new URL("/", url.origin));

  response.cookies.delete(AUTH_COOKIES.ACCESS_TOKEN_COOKIE);
  response.cookies.delete(AUTH_COOKIES.REFRESH_TOKEN_COOKIE);
  response.cookies.delete(AUTH_COOKIES.EXPIRES_COOKIE);

  return response;
}