import Item from './Item';

interface Purchase {
  items: Item[];
  purchaserName: string;
  purchaserEmail: string;
  amount: number;
  created: number;
}

export default Purchase;
