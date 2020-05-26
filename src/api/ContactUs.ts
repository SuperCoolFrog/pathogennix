import ContactUsDetails from '../models/ContactUsDetails';

class ContactUsAPI {
  
  endpoint: string;
  externalAppKey: string;
  
  constructor(endpoint: string, externalAppKey: string) {
    this.endpoint = endpoint;
    this.externalAppKey = externalAppKey;
  }

  public async postContactUs(contactUsDetails: ContactUsDetails): Promise<void> {
    const url = `${this.endpoint}/postContactUs`;
    const body = JSON.stringify({
      externalAppKey: this.externalAppKey,
      fullName: contactUsDetails.fullName,
      email: contactUsDetails.email,
      message: contactUsDetails.message,
    });

    await fetch(url, { method: 'POST', body });
  }
}

export default ContactUsAPI;