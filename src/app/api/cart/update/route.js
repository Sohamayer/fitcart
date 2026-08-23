import {
  updateCartLine,
} from "@/lib/shopify";

export async function POST(
  request
) {
  try {

    const {
      cartId,
      lineId,
      quantity,
    } = await request.json();

    const cart =
      await updateCartLine(
        cartId,
        lineId,
        quantity
      );

    return Response.json({
      success: true,
      cart,
    });

  } catch (error) {

    return Response.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 500,
      }
    );

  }
}