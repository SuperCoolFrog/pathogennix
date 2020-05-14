// import firebase from 'firebase';
import InventoryItem from '../models/InventoryItem';
// import { v4 as createUUID } from 'uuid';
// import { default as FormField } from '../models/NewInventoryFormField.enum';
// import HashMap from '../models/HashMap';
// 
// const inventoryPath = 'inventory';
// 
// type SubscriptionId = string;
// 
// interface ItemsAPI {
//  getInventory: () => Promise<InventoryItem[]>;
//   subscribeToInventory: (itemsUpdated: itemsUpdatedHandler) => Promise<SubscriptionId>;
//   unsubscribeFromInventory: (subscriptionId: string) => void;
//   postNewInventory: (userId: string, form: HashMap<FormField, string | File>, imageUrl: string) => Promise<void>;
// }

// type itemsUpdatedHandler = (items: Item[]) => void;
// 
// const SUBSCRIPTION_CACHE: Map<string, () => void> = new Map();
// 
// const itemsAPI: ItemsAPI = {
//   getInventory: async () => {
//     return Promise.resolve(mockData);
//   }, 
// };

class ItemsAPI {
  
  endpoint: string;
  externalAppKey: string;
  
  constructor(endpoint: string, externalAppKey: string) {
    this.endpoint = endpoint;
    this.externalAppKey = externalAppKey;
  }
  
  public async getInventory(): Promise<InventoryItem[]> {
    const url = `${this.endpoint}/fetchInventoryItems`;
    const body = JSON.stringify({externalAppKey: this.externalAppKey});
    const response = await fetch(url, { method: 'POST', body });
    console.log('RESPONSE', await response.json());
    return [];
  }
}

export default ItemsAPI;