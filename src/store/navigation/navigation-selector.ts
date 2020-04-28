import { RootState } from '../root-reducer';

export const navigationDrawerIsOpenSelector = (state: RootState) => state.navigation.drawerIsOpen;