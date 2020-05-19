import ConfigSettings from '../models/ConfigSettings';

class ConfigAPI {
  
  endpoint: string;
  externalAppKey: string;
  
  constructor(endpoint: string, externalAppKey: string) {
    this.endpoint = endpoint;
    this.externalAppKey = externalAppKey;
  }

  public async getConfigSettings(): Promise<ConfigSettings> {
    const url = `${this.endpoint}/fetchPublicSettings`;
    const body = JSON.stringify({
      externalAppKey: this.externalAppKey,
    });
    const response = await fetch(url, { method: 'POST', body });
    const paymentIntentJSON = await response.json();

    return paymentIntentJSON as ConfigSettings;
  }
}

export default ConfigAPI;