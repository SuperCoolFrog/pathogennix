import ConfigAPI from './Config';
import InventoryAPI from './Inventory';
import PaymentsAPI from './Payments';
import OrdersAPI from './Orders';
import ContactUsAPI from './ContactUs';

const apiEndpoint = 'https://us-central1-pinnacle-1abfd.cloudfunctions.net';
const externalAppKey = '12345ABC';

const api = {
  configs: new ConfigAPI(apiEndpoint, externalAppKey),
  inventory: new InventoryAPI(apiEndpoint, externalAppKey),
  payments: new PaymentsAPI(apiEndpoint, externalAppKey),
  orders: new OrdersAPI(apiEndpoint, externalAppKey),
  contactUs: new ContactUsAPI(apiEndpoint, externalAppKey),
};

export default api;

