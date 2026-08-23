import crypto from "crypto";

const shopId = process.env.SHOPIFY_SHOP_ID;
const clientId = process.env.SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const AUTH_BASE = `https://shopify.com/authentication/${shopId}`;
const REDIRECT_URI = `${siteUrl}/api/auth/callback`;

// Generates the PKCE verifier + its hashed challenge. The verifier stays
// secret in our own cookie; only the challenge is sent to Shopify.
export function generatePKCE() {
  const verifier = crypto.randomBytes(64).toString("base64url");
  const challenge = crypto
    .createHash("sha256")
    .update(verifier)
    .digest("base64url");
  return { verifier, challenge };
}

export function generateState() {
  return crypto.randomBytes(16).toString("hex");
}

// Builds the URL that sends the browser to Shopify's hosted login page.
export function getAuthorizationUrl({ challenge, state }) {
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: "openid email customer-account-api:full",
    state,
    code_challenge: challenge,
    code_challenge_method: "S256",
  });

  return `${AUTH_BASE}/oauth/authorize?${params.toString()}`;
}

// Exchanges the one-time `code` Shopify sends back for real tokens.
export async function exchangeCodeForToken(code, verifier) {
  const res = await fetch(`${AUTH_BASE}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: clientId,
      redirect_uri: REDIRECT_URI,
      code,
      code_verifier: verifier,
    }),
  });

  if (!res.ok) {
    throw new Error(`Token exchange failed: HTTP ${res.status}`);
  }

  return res.json(); // { access_token, refresh_token, expires_in, id_token }
}

// Uses the long-lived refresh token to get a new short-lived access token.
export async function refreshAccessToken(refreshToken) {
  const res = await fetch(`${AUTH_BASE}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) {
    throw new Error(`Token refresh failed: HTTP ${res.status}`);
  }

  return res.json();
}

// Fetches the logged-in customer's profile + addresses from Shopify's
// Customer Account GraphQL API (a different endpoint from your Storefront API).
export async function getCustomerData(accessToken) {
  const endpoint = `https://shopify.com/${shopId}/account/customer/api/2025-01/graphql`;

  const query = `
    query {
      customer {
        firstName
        lastName
        emailAddress {
          emailAddress
        }
        defaultAddress {
          address1
          address2
          city
          province
          zip
          country
        }
        addresses(first: 10) {
          edges {
            node {
              id
              address1
              address2
              city
              province
              zip
              country
              phoneNumber
            }
          }
        }
      }
    }
  `;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Customer Account API failed: HTTP ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data.customer;
}