import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CheckoutWizardStep from '../../models/CheckoutWizardStep.enum';
import ShoppingCartItem from '../../models/ShoppingCartItem';

type ItemId = string;

interface ShoppingCartState {
  drawerIsOpen: boolean;
  currentCheckoutWizardStep: CheckoutWizardStep;
  cartItems: ShoppingCartItem[];
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    drawerIsOpen: false,
    currentCheckoutWizardStep: CheckoutWizardStep.ReviewCart,
    cartItems: new Array<ShoppingCartItem>(),
  } as ShoppingCartState,
  reducers: {
    openDrawer(state) {
      state.drawerIsOpen = true;
    },
    closeDrawer(state) {
      state.drawerIsOpen = false;
    },
    addCartItemQuantity(state, action: PayloadAction<ShoppingCartItem>) {
      const nuCartItem = action.payload;
      const existingCartItem = state.cartItems.find(item => item.inventoryItem.itemId === nuCartItem.inventoryItem.itemId);

      if (existingCartItem) {
        existingCartItem.quantityToBuy += nuCartItem.quantityToBuy;
        
        if (existingCartItem.quantityToBuy > existingCartItem.inventoryItem.quantity) {
          existingCartItem.quantityToBuy = existingCartItem.inventoryItem.quantity;
        }
      } else {
        state.cartItems.push(nuCartItem);
      }
    },
    updateCartItemQuantity(state, action: PayloadAction<ShoppingCartItem>) {
      const nuCartItem = action.payload;
      const existingCartItem = state.cartItems.find(item => item.inventoryItem.itemId === nuCartItem.inventoryItem.itemId);

      if (existingCartItem) {
        existingCartItem.quantityToBuy = nuCartItem.quantityToBuy;

        if (existingCartItem.quantityToBuy > existingCartItem.inventoryItem.quantity) {
          existingCartItem.quantityToBuy = existingCartItem.inventoryItem.quantity;
        }

        if (existingCartItem.quantityToBuy > existingCartItem.inventoryItem.quantity) {
          existingCartItem.quantityToBuy = existingCartItem.inventoryItem.quantity;
        }
      } else {
        state.cartItems.push(nuCartItem);
      }
    },
    removeCartItem(state, action: PayloadAction<ItemId>) {
      state.cartItems = state.cartItems.filter(item => item.inventoryItem.itemId !== action.payload);
    }
  }
});

export default shoppingCartSlice;
