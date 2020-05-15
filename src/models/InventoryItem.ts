interface InventoryItem {
  itemId: string;
  itemName: string;
  SKU: string;
  active: boolean;
  category: string
  created: Date;
  imageSrc: string;
  price: number;
  quantity: number;
  description: string;
}

export const parseInventoryItem = (json: any) => {
  const item = {
    itemId: json.itemId,
    itemName: json.itemName || '',
    SKU: json.sku,
    active: json.active,
    category: json.category || '',
    created: new Date(json.created._seconds * 1000),
    imageSrc: json.imageSrc,
    price: parseFloat(json.price),
    quantity: parseInt(json.quantity),
    description: json.description || '',
  };
  return item as InventoryItem;
};

export default InventoryItem;
