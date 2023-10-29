import orders from "@/_mock/orders.json";

export async function GET(request: Request, { params }) {
  const { trackCode } = params;

  // fake delay
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const orderData = orders.find(
    ({ trackingNumber }) =>
      trackingNumber.toLowerCase() === trackCode?.toLowerCase()
  );

  if (!orderData) {
    return new Response("Order not found", { status: 404 });
  }

  return Response.json(orderData);
}
