interface InventoryItem {
  itemId: string;
  itemName: string;
  sku: string;
  active: boolean;
  category: string
  created: Date;
  imageSrc: string;
  price: number;
  quantity: number;
  description: string;
}

export default InventoryItem;
