enum OrderState {
  OrderReceived = 'OrderReceived',
  OrderProcessing = 'OrderProcessing',
  OrderShipmentSent = 'OrderShipmentSent',
  OrderShipmentComplete = 'OrderShipmentComplete',
}

export const toOrderState = (str: string): OrderState => {
  switch(str) {
    case OrderState.OrderReceived:
      return OrderState.OrderReceived;
    case OrderState.OrderProcessing:
      return OrderState.OrderProcessing;
    case OrderState.OrderShipmentSent:
      return OrderState.OrderShipmentSent;
    case OrderState.OrderShipmentComplete:
      return OrderState.OrderShipmentComplete;
    default:
      return OrderState.OrderReceived;
  }
};

export default OrderState;