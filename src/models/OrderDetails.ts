import OrderState from './OrderState.enum';

interface PublicOrderDetails {
  orderState?: OrderState;
  publicNotes?: string;
  orderId?: string;
  orderExists: boolean;
}

export default PublicOrderDetails;