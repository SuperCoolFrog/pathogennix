import configAPI from './Config';
import InventoryAPI from './Inventory';

const apiEndpoint = 'https://us-central1-pinnacle-1abfd.cloudfunctions.net';
const externalAppKey = '12345ABC';

const api = {
  configs: configAPI,
  inventory: new InventoryAPI(apiEndpoint, externalAppKey),
};

export default api;

