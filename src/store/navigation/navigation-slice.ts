import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  drawerIsOpen: boolean;
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    drawerIsOpen: false,
  } as NavigationState,
  reducers: {
    openDrawer(state) {
      state.drawerIsOpen = true;
    },
    closeDrawer(state) {
      state.drawerIsOpen = false;
    },
  }
});

export default navigationSlice;
