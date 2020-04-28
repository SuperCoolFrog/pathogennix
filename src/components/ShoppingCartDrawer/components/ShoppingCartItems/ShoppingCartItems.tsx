import React from 'react';
import styles from './shopping-cart-items.module.scss';
import InventoryItem from '../../../../models/InventoryItem';
import CartListItem from '../CartItemListItem/CartItemListItem';

const demoItems: InventoryItem[] = [
    { itemId: "1", active: true, category: "1", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 1", price: 1.11, quantity: 11, sku: "Blue",
    },
    { itemId: "2", active: true, category: "2", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 2", price: 2.22, quantity: 22, sku: "Blue",
    },
    { itemId: "3", active: true, category: "3", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 3", price: 3.33, quantity: 33, sku: "Blue",
    },
    { itemId: "4", active: true, category: "4", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 4", price: 4.44, quantity: 44, sku: "Blue",
    },
    { itemId: "5", active: true, category: "5", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 5", price: 5.55, quantity: 55, sku: "Blue",
    },
    { itemId: "6", active: true, category: "6", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 6", price: 6.66, quantity: 66, sku: "Blue",
    },
    { itemId: "7", active: true, category: "7", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 7", price: 7.77, quantity: 77, sku: "Blue",
    },
    { itemId: "8", active: true, category: "8", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 8", price: 8.88, quantity: 88, sku: "Blue",
    },
    { itemId: "9", active: true, category: "9", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 9", price: 9.99, quantity: 99, sku: "Blue",
    },
    { itemId: "10", active: true, category: "10", created: new Date(), description: "Something Something",
      imageSrc: "", itemName: "Something 10", price: 10.1010, quantity: 1010, sku: "Blue",
    },
];

interface ShoppingCartItemsProps {
  items?: InventoryItem[];
}

const ShoppingCartItems = ({ items = demoItems }: ShoppingCartItemsProps) => {
  return (<div className={styles.container}>
    {!(items && items.length) && <p className={styles.noItemsText}>No items in your cart</p>}
    {items && items.map(item => (<CartListItem key={item.itemId} item={item} />))}
  </div>);
};

export default ShoppingCartItems;