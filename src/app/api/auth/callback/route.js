import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { exchangeCodeForToken } from "@/lib/customerAuth";
import { AUTH_COOKIES } from "@/lib/getSession";

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const cookieStore = await cookies();
  const storedVerifier = cookieStore.get("sca_verifier")?.value;
  const storedState = cookieStore.get("sca_state")?.value;
  const redirectTo = cookieStore.get("sca_redirect")?.value || "/";

  if (!code || !state || !storedVerifier || state !== storedState) {
    return NextResponse.redirect(new URL("/login?error=invalid_state", url.origin));
  }

  try {
    const tokenData = await exchangeCodeForToken(code, storedVerifier);
    const expiresAt = Date.now() + tokenData.expires_in * 1000;

    const response = NextResponse.redirect(new URL(redirectTo, url.origin));

    const secureCookie = {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    };

    response.cookies.set(AUTH_COOKIES.ACCESS_TOKEN_COOKIE, tokenData.access_token, {
      ...secureCookie,
      maxAge: tokenData.expires_in,
    });
    response.cookies.set(AUTH_COOKIES.REFRESH_TOKEN_COOKIE, tokenData.refresh_token, {
      ...secureCookie,
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    response.cookies.set(AUTH_COOKIES.EXPIRES_COOKIE, String(expiresAt), {
      ...secureCookie,
      maxAge: tokenData.expires_in,
    });

    // Clean up the temporary PKCE cookies now that login is complete.
    response.cookies.delete("sca_verifier");
    response.cookies.delete("sca_state");
    response.cookies.delete("sca_redirect");

    return response;
  } catch (err) {
    console.error("Callback token exchange failed:", err);
    return NextResponse.redirect(new URL("/login?error=token_exchange_failed", url.origin));
  }
}