import React from 'react';
import styles from './navigation-drawer.module.scss';
import Drawer from '../Drawer/Drawer';
import { useDispatch } from 'react-redux';
import navigationSlice from '../../store/navigation/navigation-slice';
import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';

interface NavigationDrawerProps {
  isOpen: boolean;
}

const NavigationDrawer = ({ isOpen }: NavigationDrawerProps) => {
  const dispatch = useDispatch();
  const { closeDrawer } = navigationSlice.actions;
  
  const handleClose = () => {
    dispatch(closeDrawer());
  };
  
  const renderBody = () => (<Nav segment="">
    <div className={styles.logoContainer}>
      <Logo style2 />
    </div>
  </Nav>);
  
  return(<Drawer onClose={handleClose} renderBody={renderBody} open={isOpen} left />);
};

export default NavigationDrawer;