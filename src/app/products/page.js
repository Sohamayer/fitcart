import "./page.css";

import {
  getProducts
} from "@/lib/shopify";

import ProductsClient
from "./ProductsClient";

/* ==========================
   SEO METADATA
========================== */

export const metadata = {
  title:
    "Fitness Products India | Gym Equipment, Supplements & Recovery Tools | FitCart",

  description:
    "Shop premium fitness equipment, gym machines, dumbbells, supplements, cardio equipment and recovery tools online in India. Explore high-quality fitness products at FitCart.",

  keywords: [
    "fitness products india",
    "gym equipment india",
    "strength equipment",
    "cardio equipment",
    "fitness supplements india",
    "recovery tools india",
    "dumbbells online",
    "home gym equipment",
    "workout accessories",
    "fitcart"
  ],

  alternates: {
    canonical:
      "https://fitcart.in/products",
  },

  openGraph: {
    title:
      "Fitness Products India | FitCart",

    description:
      "Explore premium gym equipment, supplements and recovery tools for serious athletes.",

    url: 
      "https://fitcart.in/products",

    siteName:
      "FitCart",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Fitness Products India | FitCart",

    description:
      "Premium fitness equipment and supplements in India.",
  },
};

export default async function ProductsPage() {

  const products =
    await getProducts();

  return (

    <div className="products-page">

      <section className="products-hero">

        <div className="products-overlay"></div>

        <div className="products-hero-content">

          <span className="hero-badge">
            Premium Fitness Collection
          </span>
 
          <h1>

            Find The Right

            <span>
              Fitness Equipment
            </span>

          </h1>

          <p>

            Explore premium strength equipment,
            cardio machines, supplements and
            recovery tools trusted by athletes.

          </p>

        </div>

      </section>

      <ProductsClient
        products={products} 
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Fitness Products",
            description:
              "Premium fitness equipment, supplements, cardio equipment and recovery tools.",
            url:
              "https://fitcart.in/products",
            publisher: {
              "@type": "Organization",
              name: "FitCart",
              url: "https://fitcart.in"
            }
          }),
        }}
      />

    </div>

  );
}