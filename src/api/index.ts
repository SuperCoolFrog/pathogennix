import ConfigAPI from './Config';
import InventoryAPI from './Inventory';
import PaymentsAPI from './Payments';

const apiEndpoint = 'https://us-central1-pinnacle-1abfd.cloudfunctions.net';
const externalAppKey = '12345ABC';

const api = {
  configs: new ConfigAPI(apiEndpoint, externalAppKey),
  inventory: new InventoryAPI(apiEndpoint, externalAppKey),
  payments: new PaymentsAPI(apiEndpoint, externalAppKey),
};

export default api;

