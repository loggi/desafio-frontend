export async function fetchOrders(orderNumber) {
  "use server";
  return fetch(`http://localhost:3000/api/order?orderNumber=${orderNumber}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      throw new Error("Failed to fetch data");
    });
}
