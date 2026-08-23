import Link from "next/link";
import "./page.css";
import CartClient from "./CartClient";

export const metadata = {
  title: "Shopping Cart | FitCart",

  description:
    "Review your selected fitness equipment, supplements and recovery tools before secure checkout with FitCart.",

  keywords: [
    "shopping cart",
    "fitcart cart",
    "fitness equipment cart",
    "gym products cart",
    "secure checkout"
  ],

  alternates: {
    canonical: "https://fitcart.in/cart",
  },

  openGraph: {
    title: "Shopping Cart | FitCart",

    description:
      "Review your selected products before checkout.",

    url: "https://fitcart.in/cart",

    siteName: "FitCart",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Shopping Cart | FitCart",

    description:
      "Review your selected products before checkout.",
  },
};

export default function CartPage() {

  return (

    <main className="cart-page">

      <section className="cart-hero">

        <div className="cart-overlay"></div>

        <div className="cart-content">

          <span className="hero-tag">

            Secure Shopping

          </span>

          <h1>

            Your Fitness

            <span>

              Shopping Cart

            </span>

          </h1>

          <p>

            Review your selected fitness
            equipment, supplements and
            recovery essentials before
            proceeding to our secure
            checkout experience.

          </p>

          <div className="hero-buttons">

            <Link
              href="/products"
              className="primary-btn"
            >
              Continue Shopping
            </Link>

            <Link
              href="/contact"
              className="secondary-btn"
            >
              Need Assistance?
            </Link>

          </div>

        </div>

      </section>

      <CartClient />

    </main>

  );

}