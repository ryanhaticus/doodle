import PageSeo from '@/doodle/components/PageSeo';
import { isSubscribed } from '@/doodle/helpers/subscriptions';
import Link from 'next/link';

const Cancel = () => {
  return (
    <>
      <PageSeo title='Payment Cancelled' />
      <div className='flex flex-col gap-y-4 items-center justify-center bg-indigo-600 min-h-screen'>
        <span className='text-white text-xl'>You canceled your payment.</span>
        <div className='flex gap-x-4'>
          <Link href='/app/subscription'>
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

export default Cancel;
