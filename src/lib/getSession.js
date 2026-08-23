import { cookies } from "next/headers";
import { getCustomerData, refreshAccessToken } from "./customerAuth";

const ACCESS_TOKEN_COOKIE = "sca_access_token";
const REFRESH_TOKEN_COOKIE = "sca_refresh_token";
const EXPIRES_COOKIE = "sca_expires_at";

export const AUTH_COOKIES = {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  EXPIRES_COOKIE,
};

// Read-only session check — safe to call from Server Components (pages).
// Does NOT refresh or write cookies (pages aren't allowed to write
// cookies in Next.js) — if the access token expired, this returns null
// even if a refresh token still exists. Real refreshing happens in
// /api/auth/me, which IS a Route Handler and can write cookies.
export async function getSession() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
  const expiresAt = cookieStore.get(EXPIRES_COOKIE)?.value;

  if (!accessToken || !expiresAt) return null;
  if (Date.now() > Number(expiresAt)) return null;

  try {
    return await getCustomerData(accessToken);
  } catch (err) {
    console.error("getSession error:", err);
    return null;
  }
}

// Full check WITH refresh — only usable inside Route Handlers.
export async function getSessionWithRefresh() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
  const refreshToken = cookieStore.get(REFRESH_TOKEN_COOKIE)?.value;
  const expiresAt = cookieStore.get(EXPIRES_COOKIE)?.value;

  if (!accessToken && !refreshToken) return null;

  let validAccessToken = accessToken;
  let refreshed = null;

  if (!expiresAt || Date.now() > Number(expiresAt)) {
    if (!refreshToken) return null;

    try {
      refreshed = await refreshAccessToken(refreshToken);
      validAccessToken = refreshed.access_token;
    } catch (err) {
      console.error("Token refresh failed:", err);
      return null;
    }
  }

  try {
    const customer = await getCustomerData(validAccessToken);
    return { customer, refreshed };
  } catch (err) {
    console.error("getSessionWithRefresh error:", err);
    return null;
  }
}