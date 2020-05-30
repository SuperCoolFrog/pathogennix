import InventoryItem, { parseInventoryItem } from '../models/InventoryItem';

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
    const inventoryJSON = await response.json();
    return inventoryJSON.map((jsonItem: any) => parseInventoryItem(jsonItem));
  }
}

export default ItemsAPI;