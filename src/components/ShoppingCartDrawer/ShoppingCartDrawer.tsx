import React from 'react';
import { useSelector } from 'react-redux';
import styles from './shopping-cart-drawer.module.scss';
import Drawer from '../Drawer/Drawer';
import { useDispatch } from 'react-redux';
import shoppingCartSlice from '../../store/shopping-cart/shopping-cart-slice';
import { shoppingCartItemsSelector } from '../../store/shopping-cart/shopping-cart-selector';
import DrawerHeader from './components/ShoppingCartDrawerHeader/ShoppingCartDrawerHeader';
import ShoppingCartItems from './components/ShoppingCartItems/ShoppingCartItems';

interface NavigationDrawerProps {
  isOpen: boolean;
}

const NavigationDrawer = ({ isOpen }: NavigationDrawerProps) => {
  const dispatch = useDispatch();
  const { closeDrawer } = shoppingCartSlice.actions;
  const shoppingCartItems = useSelector(shoppingCartItemsSelector);
  
  const handleClose = () => {
    dispatch(closeDrawer());
  };
  
  let subtotal = 0;
  
  if (shoppingCartItems) {
    subtotal = shoppingCartItems.reduce((t, cartItem) => {
      return t + cartItem.inventoryItem.price * cartItem.quantityToBuy;
    }, 0);
  }
  
  const renderBody = () => (<div>
    <div className={styles.headerContainer}>
      <DrawerHeader subtotal={subtotal} />
    </div>
    <div className={styles.cartItemsContainer}>
      <ShoppingCartItems cartItems={shoppingCartItems} />
    </div>
  </div>);
  
  return(<Drawer onClose={handleClose} renderBody={renderBody} open={isOpen} />);
};

export default NavigationDrawer;