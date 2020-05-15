import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './details.module.scss';
import { useParams } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import { inventoryItemSelector, inventoryStateSelector } from '../../store/inventory/inventory-selector';
import { getItems } from '../../store/inventory/inventory-thunks';

const Details = () => {
  const { itemId } = useParams();
  const item = useSelector(inventoryItemSelector(itemId));
  const dispatch = useDispatch();
  const {
    hasFetchedInventory,
    isLoadingInventory,
  } = useSelector(inventoryStateSelector);
  
  useEffect(() => {
    if (!(isLoadingInventory || hasFetchedInventory)) {
      dispatch(getItems());
    }
  }, []); 
  
  if (!item) {
    return <div>Loading</div>;
  }


  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.detailsContainer}>
        <div className={classNames("pure-g", styles.detailsCard)}>
          <div className="pure-u-1 pure-u-md-1-2">
            <div className={styles.imageContainer}>
              <img src={item?.imageSrc} alt={item?.itemName} className="pure-img" />
            </div>
          </div>
          <div className={classNames("pure-u-1 pure-u-md-1-2", styles.rightContainer)}>
            <header className={styles.detailsHeader}>
              <h1>{item?.itemName}</h1>
            </header>
            <section className={styles.subDetailsHeader}>
              { (item.quantity > 0)
                ? (<div className={styles.inStockText}>In Stock</div>)
                : (<div className={styles.outOfStockText}>Out of Stock</div>)
              }
              <hr />
              <p className={styles.description}>{item?.description}</p>
            </section>
            <section className={styles.actionsContainer}>
              <label className={styles.quantityLabel}>
                Quantity
                <input type="number" min="1" className={styles.quantityInput} />
              </label>
              <button className={styles.addToCart}>Add to Cart</button>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default Details;