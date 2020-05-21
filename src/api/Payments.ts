import InventoryItem from '../models/InventoryItem';
import PaymentIntent from '../models/PaymentIntent';
import ShoppingCartItem from '../models/ShoppingCartItem';
import PaymentIntentResponse from '../models/PaymentIntentResponse';

class PaymentsAPI {
  
  endpoint: string;
  externalAppKey: string;
  
  constructor(endpoint: string, externalAppKey: string) {
    this.endpoint = endpoint;
    this.externalAppKey = externalAppKey;
  }
  
  public async placeOrder(items: ShoppingCartItem[], billingAndShipping: string): Promise<PaymentIntentResponse> {
    const url = `${this.endpoint}/createPaymentIntent`;
    const body = JSON.stringify({
      externalAppKey: this.externalAppKey,
      items,
      billingAndShipping,
    });
    const response = await fetch(url, { method: 'POST', body });

    const placedOrderJSON = await response.json();

    return placedOrderJSON as PaymentIntentResponse;
  }
}

export default PaymentsAPI;
