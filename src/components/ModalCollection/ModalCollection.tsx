import React from 'react';
import { useSelector } from 'react-redux';
import { navigationDrawerIsOpenSelector } from '../../store/navigation/navigation-selector';
// import NewInventoryModal from '../../features/NewInventoryModal/NewInventoryModal';
// import { newInventoryModalIsVisibleSelector } from '../../store/inventory/inventory-selector';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';

const ModalCollection = () => {
  // const newInventoryModalIsVisible = useSelector(newInventoryModalIsVisibleSelector);
  const navigationDrawerIsOpen = useSelector(navigationDrawerIsOpenSelector)
  return (<>
    {/* newInventoryModalIsVisible && <NewInventoryModal /> */}
    <NavigationDrawer isOpen={navigationDrawerIsOpen} />
  </>);
};

export default ModalCollection;
