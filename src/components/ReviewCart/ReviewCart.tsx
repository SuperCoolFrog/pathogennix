import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './review-cart.module.scss';
import InventoryItem from '../../models/InventoryItem';
import ItemDetailsRow from './components/ItemDetailsRow/ItemDetailsRow';

const demoItems: InventoryItem[] = [
    { itemId: "1", active: true, category: "1", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 1", price: 1.11, quantity: 11, sku: "Blue",
    },
    { itemId: "2", active: true, category: "2", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 2", price: 2.22, quantity: 22, sku: "Blue",
    },
    { itemId: "3", active: true, category: "3", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 3", price: 3.33, quantity: 33, sku: "Blue",
    },
    { itemId: "4", active: true, category: "4", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 4", price: 4.44, quantity: 44, sku: "Blue",
    },
    { itemId: "5", active: true, category: "5", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 5", price: 5.55, quantity: 55, sku: "Blue",
    },
    { itemId: "6", active: true, category: "6", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 6", price: 6.66, quantity: 66, sku: "Blue",
    },
    { itemId: "7", active: true, category: "7", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 7", price: 7.77, quantity: 77, sku: "Blue",
    },
    { itemId: "8", active: true, category: "8", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 8", price: 8.88, quantity: 88, sku: "Blue",
    },
    { itemId: "9", active: true, category: "9", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 9", price: 9.99, quantity: 99, sku: "Blue",
    },
    { itemId: "10", active: true, category: "10", created: new Date(), description: "Something Something",
      imageSrc: "/mask.placeholder.png", itemName: "Something 10", price: 10.1010, quantity: 1010, sku: "Blue",
    },
];


const ReviewCart = () => {
  const items = [] as InventoryItem[];

  return (<section className={classNames("pure-u-1", styles.cardContainer)}>
    <section className={styles.reviewCartContainer}>
      <header className={styles.header}>
        <h2>Review Cart</h2>
      </header>
      <div className={"pure-g"}>
        <div className={"pure-u-2-3"}>
          <div className={styles.contentContainer}>
            {items.map(item => (
              <ItemDetailsRow item={item} />
            ))}
            {!(items && items.length) && <p className={styles.noItems}>No Items have been added to your cart.</p>}
          </div>
        </div>
        <div className={"pure-u-1-3"}>
          <div className={styles.actionsContainer}>
            <table className={styles.totalsTable}>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>$1.00</td>
                </tr>
                <tr>
                  <td>Processing Fee</td>
                  <td>$1.00</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$1.00</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.totalContainer}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.total}>$1.00</span>
            </div>
            <div className={styles.billingButtonContainer}>
              <Link to="/billing-info" className={styles.billingButton}>Proceed to Payment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>);
  
};

export default ReviewCart;