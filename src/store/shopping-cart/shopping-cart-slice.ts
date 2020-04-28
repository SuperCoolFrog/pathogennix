import { createSlice } from '@reduxjs/toolkit';

interface ShoppingCartState {
  drawerIsOpen: boolean;
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    drawerIsOpen: false,
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
