import { createContext, useContext } from 'react';

interface IStripeContext {
  getPaymentSessionUrl: (priceApiId: string) => Promise<string>;
  cancelSubscription: (subscriptionId: string) => Promise<void>;
  updateSubscriptions: () => Promise<void>;
}

export const StripeContext = createContext<IStripeContext>(null);

export const useStripe = () => useContext<IStripeContext>(StripeContext);
