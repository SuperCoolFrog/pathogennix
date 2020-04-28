import React from 'react';
import { useSelector } from 'react-redux';
import { navigationDrawerIsOpenSelector } from '../../store/navigation/navigation-selector';
import { shoppingCartDrawerIsOpenSelector } from '../../store/shopping-cart/shopping-cart-selector';
// import NewInventoryModal from '../../features/NewInventoryModal/NewInventoryModal';
// import { newInventoryModalIsVisibleSelector } from '../../store/inventory/inventory-selector';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import ShoppingCartDrawer from '../ShoppingCartDrawer/ShoppingCartDrawer';

const ModalCollection = () => {
  // const newInventoryModalIsVisible = useSelector(newInventoryModalIsVisibleSelector);
  const navigationDrawerIsOpen = useSelector(navigationDrawerIsOpenSelector)
  const shoppingCartDrawerIsOpen = useSelector(shoppingCartDrawerIsOpenSelector)
  return (<>
    {/* newInventoryModalIsVisible && <NewInventoryModal /> */}
    <NavigationDrawer isOpen={navigationDrawerIsOpen} />
    <ShoppingCartDrawer isOpen={shoppingCartDrawerIsOpen} />
  </>);
};

export default ModalCollection;
