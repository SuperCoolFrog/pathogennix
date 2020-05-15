import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { inventoryStateSelector } from '../../store/inventory/inventory-selector';
import { getItems } from '../../store/inventory/inventory-thunks';
import ItemList from '../../components/ItemList/ItemList';
import Footer from '../../components/Footer/Footer';

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
        <div className={"pure-u-1"}>
          <div className={styles.itemListContainer}>
            <ItemList header="Popular Items" items={inventoryItems} isLoading={isLoadingInventory} />
          </div>
        </div>
        <div className={"pure-u-1"}>
          <div className={styles.itemListContainer}>
            <ItemList header="Masks" items={inventoryItems} isLoading={isLoadingInventory} />
          </div>
        </div>
        <div className={"pure-u-1"}>
          <div className={styles.itemListContainer}>
            <ItemList header="Sanitizer" items={inventoryItems} isLoading={isLoadingInventory} />
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