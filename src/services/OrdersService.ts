import HttpClient from "./utils/HttpClient";

class OrdersService {
  private httpClient: HttpClient = null;

  constructor() {
    this.httpClient = new HttpClient("");
  }

  async getOrder(trackingCode: string) {
    return this.httpClient.get<OrderDetails>(`/orders/${trackingCode}`);
  }
}

export default new OrdersService();
