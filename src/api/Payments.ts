// import * as firebase from 'firebase';
// 
// export interface PaymentIntentResponse {
//   data: {
//     clientSecret: string;
//     error?: string;
//   }
// }
// 
// export interface PaymentIntentItem {
//   itemId: string;
//   quantity: number;
// }
// 
// export interface  PaymentIntentData {
//   items: PaymentIntentItem[]
// }
// 
// export interface PaymentsAPI {
//   createPaymentIntentAsync: (data: PaymentIntentData) => Promise<PaymentIntentResponse>;
// }
// 
// const paymentsAPI: PaymentsAPI = {
//   createPaymentIntentAsync: async (data: PaymentIntentData) => {
//     return firebase.functions().httpsCallable('createPaymentIntent')(data) as any as PaymentIntentResponse;
//   },
// };
// 
// export default paymentsAPI;

export default {};