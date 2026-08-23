"use client";

import { useState } from "react";
import Image from "next/image";

const filters = [
  "All Products",
  "Strength Equipment",
  "Cardio Equipment",
  "Supplements",
  "Recovery Tools",
];

export default function ProductsClient({
  products,
}) {

  const [search, setSearch] = 
    useState("");
 
  const [activeFilter,
    setActiveFilter] =
    useState("All Products");

  const addToCart =
  async (product) => {

    try {

      const merchandiseId =
        product.variants.edges[0]
          ?.node.id;

      if (!merchandiseId) {
        alert("Product variant not found");
        return;
      }

      const cartId =
        localStorage.getItem(
          "fitcart_cart_id"
        );

      const response =
        await fetch(
          "/api/cart",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              cartId,
              merchandiseId,
            }),
          }
        );

      const data =
        await response.json();

      if (data.success) {

        if (data.cartId) {

          localStorage.setItem(
            "fitcart_cart_id",
            data.cartId
          );

        }

        alert(
          `${product.title} added to cart`
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Failed to add product."
      );

    }
  };

  const filteredProducts =
    products.filter(({ node }) => {

      const searchMatch =
        node.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const collections =
        node.collections.edges.map(
          (item) =>
            item.node.title
        );

      const categoryMatch =
        activeFilter ===
        "All Products"
          ? true
          : collections.includes(
              activeFilter
            );

      return (
        searchMatch &&
        categoryMatch
      );
    });

  return (

    <section className="products-section">

      <div className="search-wrapper">

        <input
          type="text"
          placeholder="Search fitness products..."
          className="search-bar"
          value={search}
          onChange={(e)=>
            setSearch(
              e.target.value
            )
          }
        />

      </div>

      <div className="filter-buttons">

        {filters.map((item)=>(

          <button
            key={item}
            onClick={() =>
              setActiveFilter(item)
            }
            className={
              activeFilter === item
                ? "filter-btn active"
                : "filter-btn"
            }
          >
            {item}
          </button>

        ))}

      </div>

      <div className="products-grid">

        {filteredProducts.map(
          ({ node }) => (

            <div
              key={node.id}
              className="product-card"
            >

              <div className="product-image">

                <Image
                  src={
                    node.featuredImage?.url
                  }
                  alt={node.title}
                  width={500}
                  height={500}
                  className="product-img"
                />

              </div>

              <div className="product-content">

                <span
                  className="product-category"
                >
                  {
                    node.collections
                    .edges[0]
                    ?.node.title
                  }
                </span>

                <h3>
                  {node.title}
                </h3>

                <p className="product-description">

                  {
                    node.description
                    ?.slice(0,100)
                  }

                  ...

                </p>

                <div className="product-bottom">

                  <p className="product-price">

                    ₹
                    {Math.round(
                      node.priceRange
                      .minVariantPrice.amount
                    )}

                  </p>

                </div>

                <div className="product-actions">

                  <button
                    className="cart-btn"
                    onClick={() =>
                      addToCart(node)
                    }
                  >
                    Add To Cart
                  </button>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </section>

  );
} 