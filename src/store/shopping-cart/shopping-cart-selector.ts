import { RootState } from '../root-reducer';
import { createSelector } from '@reduxjs/toolkit';

export const shoppingCartDrawerIsOpenSelector = (state: RootState) => state.shoppingCart.drawerIsOpen;

export const shoppingCartStateSelector = (state: RootState) => state.shoppingCart;

export const shoppingCartItemsSelector = createSelector(shoppingCartStateSelector, (shoppingCartState) => shoppingCartState.cartItems);