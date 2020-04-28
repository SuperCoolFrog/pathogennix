import React, { useEffect } from 'react';
import styles from './home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { inventoryStateSelector } from '../../store/inventory/inventory-selector';
import { getItems } from '../../store/inventory/inventory-thunks';
import ItemList from '../../components/ItemList/ItemList';


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
    <div className={"pure-u-1"}>
      <div className={styles.itemListContainer}>
        <ItemList header="Popular Items" items={inventoryItems} />
      </div>
    </div>
  </section>);
};

export default Home;