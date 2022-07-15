import { ISubscription } from '../types/Subscription';

export const isSubscribed = (subscriptions: ISubscription[]) => {
  if (!subscriptions) {
    return false;
  }
  return subscriptions.some(
    (subscription: ISubscription) =>
      subscription.current_period_end > Date.now() / 1000,
  );
};
