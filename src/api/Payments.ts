import InventoryItem from '../models/InventoryItem';
import PaymentIntent from '../models/PaymentIntent';

class PaymentsAPI {
  
  endpoint: string;
  externalAppKey: string;
  
  constructor(endpoint: string, externalAppKey: string) {
    this.endpoint = endpoint;
    this.externalAppKey = externalAppKey;
  }
  
  public async placeOrder(): Promise<void> {
    // const url = `${this.endpoint}/fetchInventoryItems`;
    // const body = JSON.stringify({externalAppKey: this.externalAppKey});
    // const response = await fetch(url, { method: 'POST', body });
    // const inventoryJSON = await response.json();
    // return inventoryJSON.map((jsonItem: any) => parseInventoryItem(jsonItem));
    return Promise.resolve();
  }
}

export default PaymentsAPI;
