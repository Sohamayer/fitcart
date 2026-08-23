import {
  createCart,
  addCartLine,
} from "@/lib/shopify";

export async function POST(
  request
) {
  try {

    const {
        cartId,
        merchandiseId,
    } = await request.json();

    if (!merchandiseId) {

    return Response.json(
        {
        success: false,
        message:
            "Missing merchandiseId",
        },
        {
        status: 400,
        }
    );

    }

    let cart;

    if (!cartId) {

      cart =
        await createCart(
          merchandiseId
        );

      return Response.json({
        success: true,
        cartId: cart.id,
        checkoutUrl:
          cart.checkoutUrl,
      });

    }

    await addCartLine(
      cartId,
      merchandiseId
    );

    return Response.json({
      success: true,
      cartId,
    });

  } 
  
  catch (error) {

    console.error(
        "Cart API Error:",
        error
    );

    return Response.json(
        {
        success: false,
        message:
            error.message ||
            "Something went wrong",
        },
        {
        status: 500,
        }
    );

    }
}