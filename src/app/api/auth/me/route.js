import { NextResponse } from "next/server";
import { getSessionWithRefresh, AUTH_COOKIES } from "@/lib/getSession";

export async function GET() {
  const session = await getSessionWithRefresh();

  if (!session) {
    return NextResponse.json({ loggedIn: false, customer: null });
  }

  const response = NextResponse.json({
    loggedIn: true,
    customer: session.customer,
  });

  // If the token had to be refreshed during this check, persist the new
  // tokens so the next request doesn't need to refresh again immediately.
  if (session.refreshed) {
    const expiresAt = Date.now() + session.refreshed.expires_in * 1000;
    const secureCookie = { httpOnly: true, secure: true, sameSite: "lax", path: "/" };

    response.cookies.set(AUTH_COOKIES.ACCESS_TOKEN_COOKIE, session.refreshed.access_token, {
      ...secureCookie,
      maxAge: session.refreshed.expires_in,
    });
    response.cookies.set(AUTH_COOKIES.REFRESH_TOKEN_COOKIE, session.refreshed.refresh_token, {
      ...secureCookie,
      maxAge: 60 * 60 * 24 * 30,
    });
    response.cookies.set(AUTH_COOKIES.EXPIRES_COOKIE, String(expiresAt), {
      ...secureCookie,
      maxAge: session.refreshed.expires_in,
    });
  }

  return response;
}