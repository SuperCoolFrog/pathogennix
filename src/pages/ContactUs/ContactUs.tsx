import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './contact-us.module.scss';
import Footer from '../../components/Footer/Footer';
import HashMap from '../../models/HashMap';

enum FormField {}

interface ContactUsState {
  isProcessing: boolean;
  form: HashMap<FormField, string>;
}

const ContactUs = () => {
  const [state, updateState] = useState({
    isProcessing: false,
    form: new HashMap<FormField, string>(),
  } as ContactUsState);
  
  const handleFieldChange = (field: FormField) => (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedForm = state.form.clone();
    updatedForm.set(field, ev.currentTarget.value);
    updateState({
      ...state,
      form: updatedForm,
    });
  }
  
  const handleSubmit = (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
  };
  
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.contactUsContainer}>
        <section className={classNames(styles.cardContainer)}>
          <header className={classNames("pure-u-1", styles.header)}>
            <h1>Contact Us</h1>
          </header>
          <section className={classNames(styles.textSection)}>
            <p>
              Customer service is very important to us.  If for any reason your order was not as you expected, please feel free
              to contact us.
            </p>
          </section>
          <section className={styles.formSection}>
            <form className="pure-form pure-form-aligned">
              <fieldset>
                  <div className="pure-control-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" id="fullName" placeholder="Full Name" required />
                  </div>
                  <div className="pure-control-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" placeholder="Email Address" required />
                  </div>
                  <div className="pure-control-group">
                    <p className={styles.formHelperText}>
                      Please include the best time to reach you in your message.  You will be contacted via email with further details.
                    </p>
                  </div>
                  <div className="pure-control-group">
                    <textarea id="message" className={styles.messageTextArea} placeholder="Message" required></textarea>
                  </div>
                  <div className={classNames("pure-controls", styles.formActions)}>
                    <button type="submit" className="pure-button pure-button-primary">Submit</button>
                  </div>
              </fieldset>
            </form>
          </section>
        </section>
      </div>
    </div>
    <div className={"pure-u-1"}>
      <Footer />
    </div>
  </section>);
};

export default ContactUs;