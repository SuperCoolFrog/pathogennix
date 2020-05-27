const STRIPE_FIXED = .30;
const STRIPE_PERC = .029;

const SHIPPING_FEE = 10.00;

const safeRound = (num: number) => Math.round( ( num + Number.EPSILON ) * 100 ) / 100;

export const getProcessingFee = (amount: number) => safeRound((amount + STRIPE_FIXED)/(1 - STRIPE_PERC)) - amount;

export const getShippingFee = () => SHIPPING_FEE;