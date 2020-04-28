import { RootState } from '../root-reducer';

export const shoppingCartDrawerIsOpenSelector = (state: RootState) => state.shoppingCart.drawerIsOpen;