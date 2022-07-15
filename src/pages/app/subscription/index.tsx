import Link from 'next/link';
import { useInject } from 'react-node-inject';

import ModalForm from '@/doodle/components/ModalForm';
import PageSeo from '@/doodle/components/PageSeo';
import Toast from '@/doodle/components/Toast';
import { useStripe } from '@/doodle/contexts/Stripe';
import { useUser } from '@/doodle/contexts/User';
import { isSubscribed } from '@/doodle/helpers/subscriptions';
import { classNames } from '@/doodle/helpers/tailwindcss';

const Subscription = () => {
  const { user } = useUser();

  const { getPaymentSessionUrl, cancelSubscription, updateSubscriptions } =
    useStripe();
  const { inject } = useInject();

  const handleSubscribe = async () => {
    const url = await getPaymentSessionUrl(
      process.env.NEXT_PUBLIC_STRIPE_PRICE_API_ID,
    );
    window.location.href = url;
  };

  const handleCancel = async (subscriptionId: string) => {
    inject(
      <ModalForm
        title='Cancelling Your Subscription'
        submitText='Cancel'
        cancelText='Nevermind'
        onSubmit={async () => {
          await cancelSubscription(subscriptionId);

          inject(
            <Toast
              title='Subscription cancelled'
              message='Your subscription has been cancelled. It may take a minute for this change to appear.'
            />,
          );

          updateSubscriptions();
        }}
      >
        <p>
          If you cancel, you'll keep your subscription benefits until your
          billing period is over.
        </p>
      </ModalForm>,
    );
  };

  return (
    <>
      <PageSeo title='Subscription' />
      <div className='flex flex-col gap-y-4 items-center justify-center bg-indigo-600 min-h-screen'>
        <span className='text-white text-xl'>Subscription</span>
        {isSubscribed(user.subscriptions) && (
          <div className='flex flex-col gap-y-4'>
            {user.subscriptions.map((subscription) => (
              <div key={subscription.id}>
                <span className='text-white text-xl'>{subscription.name}:</span>{' '}
                <span className='text-white text-xl'>
                  ${(subscription.plan.amount / 100).toFixed(2)}
                </span>
                <span className='ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800'>
                  {subscription.status.toUpperCase()}
                </span>
                <button
                  type='button'
                  className={classNames(
                    'ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white',
                    subscription.cancelled
                      ? 'cursor-not-allowed'
                      : 'hover:bg-gray-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                  )}
                  onClick={() =>
                    !subscription.cancelled && handleCancel(subscription.id)
                  }
                >
                  {subscription.cancelled ? 'Cancelled' : 'Cancel'}
                </button>
              </div>
            ))}
          </div>
        )}
        <div className='mt-2 flex gap-x-4'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white hover:text-indigo-600  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={handleSubscribe}
          >
            {isSubscribed(user.subscriptions) ? 'Subscribe again' : 'Subscribe'}
          </button>

          <Link href='/app'>
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white hover:text-indigo-600  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Subscription;
