"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  FiShoppingCart,
  FiTrash2,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

const CART_ID_KEY = "fitcart_cart_id";

/**
 * Converts the raw Shopify cart (edges/node GraphQL shape, as returned by
 * lib/shopify.js -> getCart) into a flat, easy-to-render shape.
 */
function normalizeCart(cart) {
  if (!cart || !cart.id) return null;

  const lines = (cart.lines?.edges || [])
    .map(({ node }) => {
      const merchandise = node.merchandise || {};
      const product = merchandise.product || {};
      const price = parseFloat(merchandise.price?.amount || 0);

      return {
        id: node.id,
        quantity: node.quantity,
        title: product.title || merchandise.title || "Product",
        variantTitle:
          merchandise.title && merchandise.title !== "Default Title"
            ? merchandise.title
            : null,
        price,
        lineTotal: price * node.quantity,
      };
    })
    // Defensive: a leftover zero/negative-quantity line should never render.
    .filter((line) => line.quantity > 0);

  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    lines,
    subtotal,
    gst,
    total,
  };
}

function formatPrice(amount) {
  const value = Number(amount) || 0;
  return `₹${value.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  })}`;
}

export default function CartClient() {
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pendingLineId, setPendingLineId] = useState(null);
  const [error, setError] = useState(null);

  // Fetches the authoritative cart from the GET route and normalizes it.
  const fetchCart = useCallback(async (cartId) => {
    
    const res = await fetch(`/api/cart/${encodeURIComponent(cartId)}`);
    const json = await res.json();

    if (!json.success || !json.cart) {
      return null;
    }

    return normalizeCart(json.cart);
  }, []);

  // isLoading already starts `true` (see useState above), so this function
  // never needs to set it true again — only false, once we have an answer.
  const loadCart = useCallback(async () => {
    const cartId =
      typeof window !== "undefined"
        ? localStorage.getItem(CART_ID_KEY)
        : null;

    if (!cartId) {
      setIsLoading(false);
      return;
    }

    try {
      const normalized = await fetchCart(cartId);

      if (!normalized) {
        // cartId was stale/invalid (e.g. expired Shopify cart) — clear it
        // and fall back to the normal empty-cart view, no error needed.
        localStorage.removeItem(CART_ID_KEY);
      }

      setCart(normalized);
    } catch (err) {
      // Fetch itself failed (network error, bad response, etc). Log for
      // debugging, but don't show a scary banner for what the user
      // experiences as simply "an empty cart".
      console.error("Failed to load cart:", err);
      localStorage.removeItem(CART_ID_KEY);
      setCart(null);
    } finally {
      setIsLoading(false);
    }
  }, [fetchCart]);

  useEffect(() => {
    // Known false-positive: react-hooks/set-state-in-effect flags this call
    // because loadCart's early-return branch (no cartId in localStorage)
    // sets state with nothing to await first — there's genuinely no cart to
    // fetch in that case. Tracked upstream: https://github.com/react/react/issues/34743
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCart();
  }, [loadCart]);

  const handleQuantityChange = async (lineId, newQuantity) => {
    if (!cart || pendingLineId || newQuantity < 1) return;

    setPendingLineId(lineId);
    setError(null);

    try {
      const res = await fetch("/api/cart/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cartId: cart.id,
          lineId,
          quantity: newQuantity,
        }),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.message);

      // The update mutation only returns { id, totalQuantity }, so refetch
      // the full cart to get the new prices/subtotal.
      const refreshed = await fetchCart(cart.id);
      setCart(refreshed);
    } catch (err) {
      setError("Couldn't update quantity. Please try again.");
    } finally {
      setPendingLineId(null);
    }
  };

  const handleRemove = async (lineId) => {
    if (!cart || pendingLineId) return;

    setPendingLineId(lineId);
    setError(null);

    try {
      const res = await fetch("/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId: cart.id, lineId }),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.message);

      const refreshed = await fetchCart(cart.id);

      if (!refreshed || refreshed.lines.length === 0) {
        localStorage.removeItem(CART_ID_KEY);
        setCart(null);
      } else {
        setCart(refreshed);
      }
    } catch (err) {
      setError("Couldn't remove this item. Please try again.");
    } finally {
      setPendingLineId(null);
    }
  };

  const handleCheckout = async () => {
    if (!cart?.checkoutUrl) return;

    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      if (!data.loggedIn) {
        window.location.href = "/login?redirect=/cart";
        return;
      }

      window.location.href = cart.checkoutUrl;
    } catch (err) {
      // If the session check itself glitches, don't block a paying
      // customer over it — just let checkout proceed.
      window.location.href = cart.checkoutUrl;
    }
  };

  const isEmpty = !isLoading && (!cart || cart.lines.length === 0);

  return (
    <section className="cart-section">
      <div className="cart-container">
        {/* LEFT */}
        <div className="cart-table">
          {isLoading && (
            <div className="cart-loading">
              <div className="cart-spinner" />
              <p>Loading your cart…</p>
            </div>
          )}

          {!isLoading && isEmpty && (
            <div className="empty-cart">
              <div className="empty-icon">
                <FiShoppingCart />
              </div>

              <h2>Your Cart Is Empty</h2>

              <p>
                Looks like you haven&apos;t added any fitness equipment
                yet.
              </p>

              <Link href="/products" className="continue-btn">
                Continue Shopping
              </Link>
            </div>
          )}

          {!isLoading && !isEmpty && (
            <>
              <div className="cart-items-header">
                <span className="col-name">Product</span>
                <span className="col-qty">Quantity</span>
                <span className="col-price">Price</span>
                <span className="col-action" />
              </div>

              <div className="cart-items-list">
                {cart.lines.map((line) => (
                  <div
                    key={line.id}
                    className={`cart-item-row${
                      pendingLineId === line.id ? " row-pending" : ""
                    }`}
                  >
                    <div className="item-name">
                      <span className="item-title">{line.title}</span>
                      {line.variantTitle && (
                        <span className="item-variant">
                          {line.variantTitle}
                        </span>
                      )}
                    </div>

                    <div className="item-qty">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() =>
                          handleQuantityChange(line.id, line.quantity - 1)
                        }
                        disabled={
                          pendingLineId === line.id || line.quantity <= 1
                        }
                        aria-label="Decrease quantity"
                      >
                        <FiMinus />
                      </button>

                      <span className="qty-value">{line.quantity}</span>

                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() =>
                          handleQuantityChange(line.id, line.quantity + 1)
                        }
                        disabled={pendingLineId === line.id}
                        aria-label="Increase quantity"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <div className="item-price">
                      {formatPrice(line.lineTotal)}
                    </div>

                    <button
                      type="button"
                      className="item-remove"
                      onClick={() => handleRemove(line.id)}
                      disabled={pendingLineId === line.id}
                      aria-label="Remove item"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {!isLoading && !isEmpty && error && (
            <div className="cart-error">{error}</div>
          )}
        </div>

        {/* RIGHT */}
        <aside className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(cart?.subtotal || 0)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row">
            <span>GST (18%)</span>
            <span>{formatPrice(cart?.gst || 0)}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>{formatPrice(cart?.total || 0)}</span>
          </div>

          <button
            className="checkout-btn"
            disabled={isEmpty || !cart?.checkoutUrl}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}