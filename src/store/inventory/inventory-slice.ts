import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import InventoryItem from '../../models/InventoryItem';
// import NewInventoryFormField from '../../models/NewInventoryFormField.enum';
// import HashMap from '../../models/HashMap';
// import validateTruthyValue from '../../helpers/validate-truthy-value';

interface InventoryState {
//   newInventoryModalIsVisible: boolean;
//   newInventoryForm: HashMap<NewInventoryFormField, string>;
//   newInventoryFormIsValid: boolean;
//   validationErrors: NewInventoryFormField[];
//   isSubmittingNewInventory: boolean;
//   newInventoryItemError: string;
  inventoryItems: InventoryItem[];
  hasFetchedInventory: boolean;
  isLoadingInventory: boolean;
  inventoryFetchingError: string;
}

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    hasFetchedInventory: false,
    isLoadingInventory: false,
  } as InventoryState,
  reducers: {
    inventoryIsBeingFetched(state) {
      state.isLoadingInventory = true;
    },
    inventoryFetchingSucceeded(state, action: PayloadAction<InventoryItem[]>) {
      state.isLoadingInventory = false;
      state.hasFetchedInventory = true;
      state.inventoryItems = action.payload;
    },
    inventoryFetchingFailed(state, action: PayloadAction<string>) {
      state.isLoadingInventory = false;
      state.hasFetchedInventory = true;
      state.inventoryFetchingError = action.payload;
    },
  }
});

export default inventorySlice;