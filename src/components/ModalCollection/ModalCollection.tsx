import React from 'react';
import Drawer from '../Drawer/Drawer';
// import { useSelector } from 'react-redux';
// import NewInventoryModal from '../../features/NewInventoryModal/NewInventoryModal';
// import { newInventoryModalIsVisibleSelector } from '../../store/inventory/inventory-selector';

const ModalCollection = () => {
  // const newInventoryModalIsVisible = useSelector(newInventoryModalIsVisibleSelector);

  return (<>
    {/* newInventoryModalIsVisible && <NewInventoryModal /> */}
    <Drawer onClose={() => {}} renderBody={() => <div/>} left />
  </>);
};

export default ModalCollection;
