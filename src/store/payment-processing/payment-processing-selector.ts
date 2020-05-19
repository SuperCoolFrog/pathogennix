import { RootState } from '../root-reducer';
import { createSelector } from '@reduxjs/toolkit';

export const paymentProcessingStateSelector = (state: RootState) => state.paymentProcessing;

export const paymentProcessingFormSelector = createSelector(paymentProcessingStateSelector,
  (paymentProcessingState) => {
    const {
      paymentInfoForm,
      paymentInfoFormIsValid,
      validationErrors,
    } = paymentProcessingState;
    
    return {
      paymentInfoForm,
      paymentInfoFormIsValid,
      validationErrors,
    }
  });
