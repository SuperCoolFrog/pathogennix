// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import NewInventoryFormField from '../../models/NewInventoryFormField.enum';
// import HashMap from '../../models/HashMap';
// import validateTruthyValue from '../../helpers/validate-truthy-value';
//   
// interface InventoryState {
//   newInventoryModalIsVisible: boolean;
//   newInventoryForm: HashMap<NewInventoryFormField, string>;
//   newInventoryFormIsValid: boolean;
//   validationErrors: NewInventoryFormField[];
//   isSubmittingNewInventory: boolean;
//   newInventoryItemError: string;
// }
// 
// const inventorySlice = createSlice({
//   name: 'inventory',
//   initialState: {
//     newInventoryModalIsVisible: false,
//     newInventoryForm: new HashMap<NewInventoryFormField, string>(),
//     validationErrors: new Array<NewInventoryFormField>(),
//     isSubmittingNewInventory: false,
//   } as InventoryState,
//   reducers: {
//     showNewInventoryModal(state) {
//       state.newInventoryModalIsVisible = true;
//     },
//     hideNewInventoryModal(state) {
//       state.newInventoryModalIsVisible = false;
//     },
//     updateForm(state, action: PayloadAction<{field: NewInventoryFormField, value: string}>) {
//       const { field, value} = action.payload;
//       
//       state.newInventoryForm.set(field, value);
//       
//       const validationErrors = validateTruthyValue(state.newInventoryForm.ref());
// 
//       state.validationErrors = validationErrors;
//       state.newInventoryFormIsValid = !validationErrors.length;
//     },
//     clearForm(state) {
//       state.newInventoryForm.clear();
//       state.newInventoryFormIsValid = false;
//       delete state.validationErrors;
//     },
//     submittingInventoryStarted(state) {
//       state.isSubmittingNewInventory = true;
//     },
//     submittingInventoryCompleted(state) {
//       state.isSubmittingNewInventory = false;
//     },
//     submittingInventoryFailed(state, action: PayloadAction<string>) {
//       state.isSubmittingNewInventory = false;
//       state.newInventoryItemError = action.payload;
//     }
//   }
// });
// 
// export default inventorySlice;

export default {};