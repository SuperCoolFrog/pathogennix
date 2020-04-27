// import firebase from 'firebase';
// import generateUUID from '../helpers/uuid-generator';
// 
// type StorageItemURL = string;
// 
// interface StorageAPI {
//   createStorageItem: (userId: string, path: string, file: File) => Promise<StorageItemURL>;
// }
// 
// const storageApi: StorageAPI = {
//   
//   createStorageItem: async(userId: string, path: string, file: File) => {
//     const storage = firebase.storage();
//     const storageRef = storage.ref();
//     const itemRef = storageRef.child(`${userId}/${path}`);
//     const uuid = generateUUID();
//     const newItemRef = itemRef.child(`${uuid}/${file.name}`);
// 
//     return newItemRef.put(file).then((snapshot) => snapshot.ref.getDownloadURL());
//   }
// };
// 
// export default storageApi;

export default {};