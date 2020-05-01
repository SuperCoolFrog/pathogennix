import { createSlice } from '@reduxjs/toolkit';
import CheckoutWizardStep from '../../models/CheckoutWizardStep.enum';

interface ShoppingCartState {
  drawerIsOpen: boolean;
  currentCheckoutWizardStep: CheckoutWizardStep;
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    drawerIsOpen: false,
    currentCheckoutWizardStep: CheckoutWizardStep.ReviewCart,
  } as ShoppingCartState,
  reducers: {
    openDrawer(state) {
      state.drawerIsOpen = true;
    },
    closeDrawer(state) {
      state.drawerIsOpen = false;
    },
  }
});

export default shoppingCartSlice;
