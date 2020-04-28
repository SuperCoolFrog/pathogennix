// import firebase from 'firebase';
import InventoryItem from '../models/InventoryItem';
// import { v4 as createUUID } from 'uuid';
// import { default as FormField } from '../models/NewInventoryFormField.enum';
// import HashMap from '../models/HashMap';
// 
// const inventoryPath = 'inventory';
// 
// type SubscriptionId = string;
// 
interface ItemsAPI {
  getInventory: () => Promise<InventoryItem[]>;
//   subscribeToInventory: (itemsUpdated: itemsUpdatedHandler) => Promise<SubscriptionId>;
//   unsubscribeFromInventory: (subscriptionId: string) => void;
//   postNewInventory: (userId: string, form: HashMap<FormField, string | File>, imageUrl: string) => Promise<void>;
}

// type itemsUpdatedHandler = (items: Item[]) => void;
// 
// const SUBSCRIPTION_CACHE: Map<string, () => void> = new Map();
// 
const itemsAPI: ItemsAPI = {
  getInventory: async () => {
    const mockData: InventoryItem[] = [
      { itemId: "1", active: true, category: "1", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 1", price: 1.11, quantity: 11, sku: "Blue",
      },
      { itemId: "2", active: true, category: "2", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 2", price: 2.22, quantity: 22, sku: "Blue",
      },
      { itemId: "3", active: true, category: "3", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 3", price: 3.33, quantity: 33, sku: "Blue",
      },
      { itemId: "4", active: true, category: "4", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 4", price: 4.44, quantity: 44, sku: "Blue",
      },
      { itemId: "5", active: true, category: "5", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 5", price: 5.55, quantity: 55, sku: "Blue",
      },
      { itemId: "6", active: true, category: "6", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 6", price: 6.66, quantity: 66, sku: "Blue",
      },
      { itemId: "7", active: true, category: "7", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 7", price: 7.77, quantity: 77, sku: "Blue",
      },
      { itemId: "8", active: true, category: "8", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 8", price: 8.88, quantity: 88, sku: "Blue",
      },
      { itemId: "9", active: true, category: "9", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 9", price: 9.99, quantity: 99, sku: "Blue",
      },
      { itemId: "10", active: true, category: "10", created: new Date(), description: "Something Something",
        imageSrc: "", name: "Something 10", price: 10.1010, quantity: 1010, sku: "Blue",
      },
    ];
    
    return Promise.resolve(mockData);
  }, 
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
};

export default itemsAPI;