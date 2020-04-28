import React, { useState, useEffect } from 'react';
import Drawer from '../Drawer/Drawer';
// import { useSelector } from 'react-redux';
// import NewInventoryModal from '../../features/NewInventoryModal/NewInventoryModal';
// import { newInventoryModalIsVisibleSelector } from '../../store/inventory/inventory-selector';

const ModalCollection = () => {
  // const newInventoryModalIsVisible = useSelector(newInventoryModalIsVisibleSelector);
  const [isOpen, setOpen] = useState(false);
  
  useEffect(() => {
    setTimeout(() => { setOpen(true); }, 1000);
  }, [])
  

  return (<>
    {/* newInventoryModalIsVisible && <NewInventoryModal /> */}
    <Drawer onClose={() => {}} renderBody={() => <div>Hello</div>} open={isOpen} left />
  </>);
};

export default ModalCollection;
