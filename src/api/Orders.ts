import OrderDetails from '../models/OrderDetails';
import OrderState, { toOrderState } from '../models/OrderState.enum';

class OrdersAPI {
  
  endpoint: string;
  externalAppKey: string;
  
  constructor(endpoint: string, externalAppKey: string) {
    this.endpoint = endpoint;
    this.externalAppKey = externalAppKey;
  }

  public async getOrderDetails(orderId: string): Promise<OrderDetails> {
    const url = `${this.endpoint}/fetchOrderDetails`;
    const body = JSON.stringify({
      externalAppKey: this.externalAppKey,
      orderId,
    });
    const response = await fetch(url, { method: 'POST', body });
    
    debugger;
    
    if (response.status === 204) {
      // Could not find order matching that orderId
      return { orderExists: false } as OrderDetails;
    }
    
    const orderDetailsJSON = await response.json();
    
    const orderState = orderDetailsJSON.orderState;
    
    return {
      orderId: orderDetailsJSON.orderId,
      orderState: orderState ? toOrderState(orderState) : OrderState.OrderReceived,
      publicNotes: orderDetailsJSON.publicNotes,
      orderExists: true,
    } as OrderDetails;
  }
}

export default OrdersAPI;