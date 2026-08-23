import { getCart } from "@/lib/shopify";

export async function GET(request, { params }) {
  try {
    const { cartId: rawCartId } = await params;
    const cartId = decodeURIComponent(rawCartId);

    const cart = await getCart(cartId);

    return Response.json({
      success: true,
      cart,
    });
  } catch (error) {
    console.error("Get Cart Error:", error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}