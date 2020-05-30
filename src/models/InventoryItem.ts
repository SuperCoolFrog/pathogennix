interface InventoryItem {
  itemId: string;
  itemName: string;
  SKU: string;
  active: boolean;
  category: string
  created: string;
  imageSrc: string;
  price: number;
  quantity: number;
  description: string;
  shippingCost: number;
  shippingDateModifierDays: number;
}

export const parseInventoryItem = (json: any) => {
  const item = {
    itemId: json.itemId,
    itemName: json.itemName || '',
    SKU: json.sku,
    active: json.active,
    category: json.category || '',
    created: json.created,
    imageSrc: json.imageSrc,
    price: parseFloat(json.price),
    quantity: parseInt(json.quantity),
    description: json.description || '',
    shippingCost: parseInt(json.shippingCost),
    shippingDateModifierDays: parseInt(json.shippingDateModifierDays),
  };
  return item as InventoryItem;
};

export default InventoryItem;
