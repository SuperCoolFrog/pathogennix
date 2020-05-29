import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { inventoryStateSelector } from '../../store/inventory/inventory-selector';
import { getItems } from '../../store/inventory/inventory-thunks';
import ItemList from '../../components/ItemList/ItemList';
import Footer from '../../components/Footer/Footer';
import InventoryItem from '../../models/InventoryItem';
import LargeItemCard from '../../components/LargeItemCard/LargeItemCard';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';

const FEATURED_ITEM_IDS = [
  'OtEIPnFjy53LMqoWPJgk',
  'OtEIPnFjy53LMqoWPJgk',
  'OtEIPnFjy53LMqoWPJgk',
];

const Home = () => {
  const dispatch = useDispatch();
  const {
    hasFetchedInventory,
    inventoryItems,
    isLoadingInventory,
  } = useSelector(inventoryStateSelector);
  
  useEffect(() => {
    if (!(isLoadingInventory || hasFetchedInventory)) {
      dispatch(getItems());
    }
  }, []); 
  
  // never will be undefined because of filter, but need to make typescript happy
  let featuredItems: InventoryItem[] = [];

  if (hasFetchedInventory) {
    featuredItems = FEATURED_ITEM_IDS
      .map(itemId => inventoryItems.find(item => item.itemId === itemId))
      .filter(item => item) as InventoryItem[];
  }

  return (<section className={"pure-g"}>
    <div className={classNames("pure-u-1", styles.homeContainer)}>
      <div className={"pure-g"}>
        <div className={classNames("pure-u-1", styles.carouselContainer)}>
          <HomeCarousel />
        </div>
        <div className={"pure-u-1"}>
          <div className={classNames("pure-u-g", styles.featuredItemsContainer)}>
            { featuredItems.map(featuredItem => (
              <div className={"pure-u-1 pure-u-sm-1-2 pure-u-md-1-3"}>
                  <LargeItemCard item={featuredItem} isLoading={isLoadingInventory} />
              </div>
            ))}
          </div>
        </div>
        <div className={"pure-u-1"}>
          <div className={styles.itemListContainer}>
            <ItemList header="All Products" items={inventoryItems} isLoading={isLoadingInventory} />
          </div>
        </div>
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default Home;