import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './contact-us.module.scss';
import Footer from '../../components/Footer/Footer';
import HashMap from '../../models/HashMap';
import api from '../../api'; 
import ContactUsDetails from '../../models/ContactUsDetails';
import LoadingWithOverlay from '../../components/LoadingWithOverlay/LoadingWithOverlay';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SuccessCard from './components/SuccessCard';

enum FormField {
  fullName = 'fullName',
  email = 'email',
  message = 'message',
}

const formFieldToString = (field: FormField): string => FormField[field];
const stringToFormField = (fieldStr: string): FormField => {
  switch (fieldStr) {
    case FormField.fullName:
      return FormField.fullName;
    case FormField.email:
      return FormField.email;
    case FormField.message:
      return FormField.message;
    default:
      throw new Error("Invalid field provided");
  }
};

interface ContactUsState {
  isProcessing: boolean;
  form: HashMap<FormField, string>;
  formErrors: HashMap<FormField, string>;
  formIsValid: boolean;
  submissionError: string;
  hasSubmitted: boolean;
}

const ContactUs = () => {
  const [state, updateState] = useState({
    isProcessing: false,
    form: new HashMap<FormField, string>(),
    formErrors: new HashMap<FormField, string>(),
    formIsValid: false,
    submissionError: '',
  } as ContactUsState);
  
  const validateForm = () => {
    const formErrors = new HashMap<FormField, string>();
    let formIsValid = true;
    const keys = [FormField.email, FormField.fullName, FormField.message];
    
    keys.forEach((key) => {
      if(!state.form.get(key)) {
        formIsValid = false;
        formErrors.set(stringToFormField(key), "This field is required.");
      }
    });
    
    updateState({
      ...state,
      formErrors,
      formIsValid,
    });
    
    return formIsValid;
  };
  
  const handleFieldChange = (field: FormField) => (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedForm = state.form.clone();
    updatedForm.set(field, ev.currentTarget.value);
    updateState({
      ...state,
      form: updatedForm,
    });
  }
  
  const handleSubmit = async (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const form = state.form;
      const contactUsDetails: ContactUsDetails = {
        fullName: form.getWithDefault(FormField.fullName, ''),
        email: form.getWithDefault(FormField.email, ''),
        message: form.getWithDefault(FormField.message, ''),
      }; 
      
      updateState({ ...state, isProcessing: true });
      
      try {
        await api.contactUs.postContactUs(contactUsDetails);
        updateState({ ...state, hasSubmitted: true, isProcessing: false });
      } catch(e) {
        updateState({
          ...state,
          isProcessing: false,
          hasSubmitted: true,
          submissionError: 'There was an error submitting your request.  Please try again later.'
        });
      }
      
    }
  };
  
  if (state.hasSubmitted && !state.submissionError) {
    return <SuccessCard />
  }
  
  return (<section className={"pure-g"}>
    <div className={"pure-u-1"}>
      <div className={styles.contactUsContainer}>
        { state.isProcessing && <LoadingWithOverlay contained />}
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
          { (state.hasSubmitted && state.submissionError) && (
            <div className={styles.errorContainer}>
              <ErrorMessage message={state.submissionError} />
            </div>
          )}
          <section className={styles.formSection}>
            <form className="pure-form pure-form-aligned">
              <fieldset>
                  <div className="pure-control-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" id="fullName" placeholder="Full Name" required
                        onChange={handleFieldChange(FormField.fullName)}
                      />
                      { state.formErrors.get(FormField.fullName) && (
                        <div className={classNames("pure-form-message-inline", styles.formError)}>{state.formErrors.get(FormField.fullName)}</div>
                      )}
                  </div>
                  <div className="pure-control-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" placeholder="Email Address" required
                        onChange={handleFieldChange(FormField.email)}
                      />
                      { state.formErrors.get(FormField.email) && (
                        <div className={classNames("pure-form-message-inline", styles.formError)}>{state.formErrors.get(FormField.email)}</div>
                      )}
                  </div>
                  <div className="pure-control-group">
                    <p className={styles.formHelperText}>
                      Please include the best time to reach you in your message.  You will be contacted via email with further details.
                    </p>
                  </div>
                  <div className="pure-control-group">
                    <textarea id="message" className={styles.messageTextArea} placeholder="Message" required
                        onChange={handleFieldChange(FormField.message)}
                    ></textarea>
                    { state.formErrors.get(FormField.message) && (
                        <div className={classNames("pure-form-message-inline", styles.formError)}>{state.formErrors.get(FormField.message)}</div>
                    )}
                  </div>
                  <div className={classNames("pure-controls", styles.formActions)}>
                    <button type="submit" className="pure-button pure-button-primary"
                      onClick={handleSubmit}
                    >Submit</button>
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