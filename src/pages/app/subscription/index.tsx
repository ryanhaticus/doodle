import ModalForm from '@/doodle/components/ModalForm';
import PageSeo from '@/doodle/components/PageSeo';
import { useStripe } from '@/doodle/contexts/Stripe';
import { useUser } from '@/doodle/contexts/User';
import { isSubscribed } from '@/doodle/helpers/subscriptions';
import Link from 'next/link';
import { useInject } from 'react-node-inject';

const Subscription = () => {
  const { user } = useUser();

  const { createSession } = useStripe();
  const { inject } = useInject();

  const handleSubscribe = async () => {
    const url = await createSession(
      process.env.NEXT_PUBLIC_STRIPE_PRICE_API_ID,
    );
    window.location.href = url;
  };

  const handleCancel = async () => {
    inject(
      <ModalForm
        title='Cancelling Your Subscription'
        submitText='Cancel'
        cancelText='Nevermind'
        onSubmit={() => {
          fetch('/api/stripe/subscription/cancel', {
            method: 'POST',
          });
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
        <div className='flex gap-x-4'>
          {isSubscribed(user.subscriptions) ? (
            <button
              onClick={handleCancel}
              type='button'
              className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white hover:text-indigo-600  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Cancel subscription
            </button>
          ) : (
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white hover:text-indigo-600  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={handleSubscribe}
            >
              Subscribe now
            </button>
          )}

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
