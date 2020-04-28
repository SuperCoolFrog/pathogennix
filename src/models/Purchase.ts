import InventoryItem from './InventoryItem';

interface Purchase {
  items: InventoryItem[];
  purchaserName: string;
  purchaserEmail: string;
  amount: number;
  created: number;
}

export default Purchase;
