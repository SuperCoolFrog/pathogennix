import InventoryItem from './InventoryItem';

interface ShoppingCartItem {
  inventoryItem: InventoryItem;
  quantityToBuy: number;
}

export default ShoppingCartItem;