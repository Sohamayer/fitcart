import {
  removeCartLine,
} from "@/lib/shopify";

export async function POST(
  request
) {
  try {

    const {
      cartId,
      lineId,
    } = await request.json();

    const cart =
      await removeCartLine(
        cartId,
        lineId
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