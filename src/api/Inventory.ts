// import firebase from 'firebase';
// import Item from '../models/Item';
// import { v4 as createUUID } from 'uuid';
// import { default as FormField } from '../models/NewInventoryFormField.enum';
// import HashMap from '../models/HashMap';
// 
// const inventoryPath = 'inventory';
// 
// type SubscriptionId = string;
// 
// interface ItemsAPI {
//   getInventory: () => Promise<Item[]>;
//   subscribeToInventory: (itemsUpdated: itemsUpdatedHandler) => Promise<SubscriptionId>;
//   unsubscribeFromInventory: (subscriptionId: string) => void;
//   postNewInventory: (userId: string, form: HashMap<FormField, string | File>, imageUrl: string) => Promise<void>;
// }
// 
// type itemsUpdatedHandler = (items: Item[]) => void;
// 
// const SUBSCRIPTION_CACHE: Map<string, () => void> = new Map();
// 
// const itemsAPI: ItemsAPI = {
//   getInventory: async () => {
//     const db = firebase.firestore();
//     const itemsCollection = db.collection('items');
//     const query = itemsCollection.where('active', '==', true);
//     let storeItems: Item[] = [];
// 
//     const snapshot = await query.get();
// 
//     snapshot.forEach((doc) => {
//       const item: Item = {
//         itemId: doc.id as string,
//         ...doc.data() as any,
//       };
//       storeItems = [...storeItems, item];
//     });
// 
//     return storeItems;
//   },
// 
//   subscribeToInventory: async (itemsUpdated: itemsUpdatedHandler) => {
//     const db = firebase.firestore();
//     const itemsCollection = db.collection('items');
//     const query = itemsCollection.where('active', '==', true);
// 
//     const unsubscribe = query.onSnapshot((snapshot) => {
//       let storeItems: Item[] = [];
//       snapshot.forEach((doc) => {
//         const item: Item = {
//           itemId: doc.id as string,
//           ...doc.data() as any,
//         };
//         storeItems = [...storeItems, item];
//       });
//       itemsUpdated(storeItems);
//     });
// 
//     const subscriptionUUID = createUUID();
// 
//     SUBSCRIPTION_CACHE.set(subscriptionUUID, unsubscribe);
// 
//     return subscriptionUUID;
//   },
// 
//   unsubscribeFromInventory: (subscriptionId: string) => {
//     if (SUBSCRIPTION_CACHE.has(subscriptionId)) {
//       const unsubscribe = SUBSCRIPTION_CACHE.get(subscriptionId);
//       unsubscribe && unsubscribe();
//       SUBSCRIPTION_CACHE.delete(subscriptionId);
//     }
//   },
//   
//   postNewInventory: async (userId: string, form: HashMap<FormField, string | File>, imageUrl: string) => {
//     const itemName = form.get(FormField.itemName) as string;
//     const quantity = form.get(FormField.quantity) as string;
//     const price = form.get(FormField.price) as string;
//     const description = form.get(FormField.description) as string;
//     // @TODO: add sku
//     // @TODO: add active checkbox to form
//     const userCollection = firebase.firestore().collection('users');
//     const currentUserDoc = userCollection.doc(userId);
//     const inventoryCollection = currentUserDoc.collection(inventoryPath);
//     
//     return inventoryCollection.add({
//       itemName,
//       quantity,
//       price,
//       description,
//       imageSrc: imageUrl,
//       created: (new Date()).getTime(),
//       active: true,
//       deleted: false,
//     }).then();
//   },
// };
// 
// export default itemsAPI;

export default {};