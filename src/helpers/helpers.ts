export const asPriceString = (price: number) => {
  try {
    return price.toFixed(2);
  } catch(e) {
    console.error(typeof price, price, e);
  }
}

const STRIPE_FIXED = .30;
const STRIPE_PERC = .029;

export const safeRound = (num: number) => Math.round( ( num + Number.EPSILON ) * 100 ) / 100;

export const  getProcessingFee = (amount: number) => safeRound((amount + STRIPE_FIXED)/(1 - STRIPE_PERC )) - amount;
