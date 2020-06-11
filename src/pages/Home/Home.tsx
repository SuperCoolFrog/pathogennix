import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { inventoryStateSelector } from '../../store/inventory/inventory-selector';
import { getItems } from '../../store/inventory/inventory-thunks';
import Footer from '../../components/Footer/Footer';
import LargeItemCard from '../../components/LargeItemCard/LargeItemCard';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Loading from '../../components/Loading/Loading';

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

  return (<section className={"pure-g"}>
    <div className={classNames("pure-u-1", styles.homeContainer)}>
      <div className={"pure-g"}>
        <div className={classNames("pure-u-1", styles.carouselContainer)}>
          <HomeCarousel />
        </div>
        <div className={"pure-u-1"}>
          <div className={classNames("pure-u-g", styles.featuredItemsContainer)}>
            {inventoryItems && inventoryItems.map(featuredItem => (
              <div key={featuredItem.itemId} className={"pure-u-1 pure-u-sm-1-2 pure-u-md-1-3"}>
                  <LargeItemCard key={featuredItem.itemId} item={featuredItem} isLoading={isLoadingInventory} />
              </div>
            ))}
            {!inventoryItems && <div className={styles.loadingContainer}><Loading /></div>}
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