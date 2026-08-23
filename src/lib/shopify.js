const domain =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

const token =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

console.log(
  "DOMAIN:",
  domain
);

console.log(
  "TOKEN:",
  token
);

async function shopifyFetch(
  query,
  options = {}
) {

  try {

    const response = await fetch(
      `https://${domain}/api/2025-01/graphql.json`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": token,
        },

        body: JSON.stringify({
          query,
        }),

        ...options,
      }
    );

    if (!response.ok) {

      throw new Error(
        `HTTP ${response.status}`
      );

    }

    const data =
      await response.json();

    if (data.errors) {

      console.error(data.errors);

      throw new Error(
        data.errors[0].message
      );

    }

    return data.data;

  } catch (err) {

    console.error(
      "Shopify Fetch Error:",
      err
    );

    throw err;

  }

}

export async function getProducts() {

  const query = `
  {
    products(first: 50) {
      edges {
        node {
          id
          title
          handle
          description

          featuredImage {
            url
          }

          priceRange {
            minVariantPrice {
              amount
            }
          }

          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }

          collections(first:10){
            edges{
              node{
                title
                handle
              }
            }
          }
        }
      }
    }
  }
  `;

  const data =
    await shopifyFetch(query);

  return data.products.edges;
}

export async function getCollectionProducts(handle) {

  const query = `
  {
    collection(handle: "${handle}") {

      title

      products(first: 50) {

        edges {

          node {

            id

            title

            handle

            description

            featuredImage{
              url
            }

            priceRange{
              minVariantPrice{
                amount
              }
            }

            variants(first:1){
              edges{
                node{
                  id
                }
              }
            }

          }

        }

      }

    }

  }
  `;

  const data =
    await shopifyFetch(query);

  return data.collection.products.edges;

}

export async function createCart(
  merchandiseId
) {
  const query = `
    mutation {
      cartCreate(
        input: {
          lines: [
            {
              merchandiseId: "${merchandiseId}"
              quantity: 1
            }
          ]
        }
      ) {
        cart {
          id
          checkoutUrl
        }
      }
    }
  `;

  const data = await shopifyFetch(query,{
    cache:"no-store"
  });

  return data.cartCreate.cart;
}

export async function addCartLine(
  cartId,
  merchandiseId
) {
  const query = `
    mutation {
      cartLinesAdd(
        cartId: "${cartId}"
        lines: [
          {
            merchandiseId: "${merchandiseId}"
            quantity: 1
          }
        ]
      ) {
        cart {
          id
          totalQuantity
        }
      }
    }
  `;

  const data = await shopifyFetch(query,{
    cache:"no-store"
  });

  return data.cartLinesAdd.cart;
}

export async function getCart(
  cartId
) {
  const query = `
    {
      cart(id: "${cartId}") {

        id

        checkoutUrl

        totalQuantity

        cost {
          subtotalAmount {
            amount
          }
          totalAmount {
            amount
          }
        }

        lines(first: 50) {

          edges {

            node {

              id

              quantity

              merchandise {

                ... on ProductVariant {

                  id

                  title

                  product {

                    title

                    handle

                    featuredImage {
                      url
                    }

                  }

                  price {
                    amount
                  }

                }

              }

            }

          }

        }

      }
    }
  `;

  const data = await shopifyFetch(query,{
    cache:"no-store"
  });

  return data.cart;
}

export async function updateCartLine(
  cartId,
  lineId,
  quantity
) {
  const query = `
    mutation {
      cartLinesUpdate(
        cartId: "${cartId}"
        lines: [
          {
            id: "${lineId}"
            quantity: ${quantity}
          }
        ]
      ) {
        cart {
          id
          totalQuantity
        }
      }
    }
  `;

  const data =
    await shopifyFetch(
      query,
      {
        cache: "no-store",
      }
    );

  return data.cartLinesUpdate.cart;
}

export async function removeCartLine(
  cartId,
  lineId
) {
  const query = `
    mutation {
      cartLinesRemove(
        cartId: "${cartId}"
        lineIds: [
          "${lineId}"
        ]
      ) {
        cart {
          id
          totalQuantity
        }
      }
    }
  `;

  const data =
    await shopifyFetch(
      query,
      {
        cache: "no-store",
      }
    );

  return data.cartLinesRemove.cart;
}

export async function getProduct(handle) {

  const query = `
  {
    product(handle:"${handle}") {
      id
      title
      handle
      description

      featuredImage{
        url
      }

      priceRange{
        minVariantPrice{
          amount
        }
      }

      variants(first:1){
        edges{
          node{
            id
          }
        }
      }
    }
  }
  `;

  const data =
    await shopifyFetch(query);

  return data.product;
}