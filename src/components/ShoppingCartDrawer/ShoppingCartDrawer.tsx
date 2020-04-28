import React from 'react';
import styles from './shopping-cart-drawer.module.scss';
import Drawer from '../Drawer/Drawer';
import { useDispatch } from 'react-redux';
import shoppingCartSlice from '../../store/shopping-cart/shopping-cart-slice';

interface NavigationDrawerProps {
  isOpen: boolean;
}

const NavigationDrawer = ({ isOpen }: NavigationDrawerProps) => {
  const dispatch = useDispatch();
  const { closeDrawer } = shoppingCartSlice.actions;
  
  const handleClose = () => {
    dispatch(closeDrawer());
  };
  
  const renderBody = () => (<div>
    Cart!
  </div>);
  
  return(<Drawer onClose={handleClose} renderBody={renderBody} open={isOpen} />);
};

export default NavigationDrawer;