import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './search-result-list-item.module.scss';
import InventoryItem from '../../../../models/InventoryItem';

interface SearchResultListItemProps {
  item: InventoryItem;
}

const SearchResultListItem = ({ item }: SearchResultListItemProps) => {
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.detailsContainer}>
        <div className={classNames("pure-g", styles.detailsCard)}>
          <div className="pure-u-1 pure-u-md-1-5">
            <div className={styles.imageContainer}>
              <Link to={`/details/${item.itemId}`}>
                <img src={item?.imageSrc} alt={item?.itemName} className={classNames("pure-img", styles.image)} />
              </Link>
            </div>
          </div>
          <div className={classNames("pure-u-1 pure-u-md-3-4", styles.rightContainer)}>
            <header className={styles.detailsHeader}>
                <h3>
                  <Link to={`/details/${item.itemId}`} className={styles.headerLink}>
                    {item?.itemName}
                  </Link>
                </h3>
            </header>
            <section className={styles.subDetailsHeader}>
              { (item.quantity > 0)
                ? (<div className={styles.inStockText}>In Stock</div>)
                : (<div className={styles.outOfStockText}>Out of Stock</div>)
              }
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
  </section>);
};

export default SearchResultListItem;