import React from 'react';
import Drawer from '../Drawer/Drawer';
import { useDispatch } from 'react-redux';
import navigationSlice from '../../store/navigation/navigation-slice';

interface NavigationDrawerProps {
  isOpen: boolean;
}

const NavigationDrawer = ({ isOpen }: NavigationDrawerProps) => {
  const dispatch = useDispatch();
  const { closeDrawer } = navigationSlice.actions;
  
  const handleClose = () => {
    dispatch(closeDrawer());
  };
  
  return(<Drawer onClose={handleClose} renderBody={() => <div>Hello</div>} open={isOpen} left />);
};

export default NavigationDrawer;