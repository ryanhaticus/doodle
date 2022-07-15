import stripe from 'stripe';

export const useStripe = () => {
  const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
  });

  return stripeInstance;
};
