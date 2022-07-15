import { ReactNode } from 'react';

import { StripeContext } from '@/doodle/contexts/Stripe';

interface IStripeProviderProps {
  children: ReactNode;
}

const StripeProvider = ({ children }: IStripeProviderProps) => {
  const createSession = async (priceApiId: string) => {
    const startSession = await fetch('/api/stripe/session/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: priceApiId,
      }),
    });

    const { url } = await startSession.json();

    return url;
  };

  return (
    <StripeContext.Provider value={{ createSession }}>
      {children}
    </StripeContext.Provider>
  );
};

export default StripeProvider;
