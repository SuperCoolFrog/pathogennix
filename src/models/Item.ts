interface Item {
  itemId: string;
  sku: string;
  active: boolean;
  category: string
  created: Date;
  imageSrc: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

export default Item;
