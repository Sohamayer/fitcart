import { NextResponse } from "next/server";
import {
  generatePKCE,
  generateState,
  getAuthorizationUrl,
} from "@/lib/customerAuth";

export async function GET(request) {
  const { verifier, challenge } = generatePKCE();
  const state = generateState();

  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirect") || "/";

  const authUrl = getAuthorizationUrl({ challenge, state });
  const response = NextResponse.redirect(authUrl);

  const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600, // 10 minutes — just long enough for the login round trip
    path: "/",
  };

  response.cookies.set("sca_verifier", verifier, cookieOptions);
  response.cookies.set("sca_state", state, cookieOptions);
  response.cookies.set("sca_redirect", redirectTo, cookieOptions);

  return response;
}