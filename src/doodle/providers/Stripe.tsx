import { ReactNode } from 'react';

import { StripeContext } from '@/doodle/contexts/Stripe';

interface IStripeProviderProps {
  children: ReactNode;
}

const StripeProvider = ({ children }: IStripeProviderProps) => {
  const getPaymentSessionUrl = async (priceApiId: string) => {
    const session = await fetch('/api/stripe/session/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: priceApiId,
      }),
    });

    const { url } = await session.json();

    return url;
  };

  const updateSubscriptions = async () => {
    await fetch('/api/stripe/subscription/update', {
      method: 'POST',
    });
  };

  const cancelSubscription = async (subscriptionId: string) => {
    await fetch('/api/stripe/subscription/cancel', {
      method: 'POST',
      body: JSON.stringify({
        subscriptionId,
      }),
    });
  };

  return (
    <StripeContext.Provider
      value={{ getPaymentSessionUrl, updateSubscriptions, cancelSubscription }}
    >
      {children}
    </StripeContext.Provider>
  );
};

export default StripeProvider;
