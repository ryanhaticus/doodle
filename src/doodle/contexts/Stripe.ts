import { createContext, useContext } from 'react';

interface IStripeContext {
  createSession: (priceApiId: string) => Promise<string>;
}

export const StripeContext = createContext<IStripeContext>(null);

export const useStripe = () => useContext<IStripeContext>(StripeContext);
