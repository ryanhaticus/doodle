import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Loading from '@/doodle/components/Loading';
import PageSeo from '@/doodle/components/PageSeo';
import doodleConfig from '@/doodle/config';

const Confirm = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await fetch('/api/stripe/subscription/update', {
        method: 'POST',
      });

      const { subscriptionUrl } = doodleConfig.stripe;

      router.push(subscriptionUrl);
    })();
  }, []);

  return (
    <>
      <PageSeo title='Confirming Payment' />
      <Loading className='absolute z-50 min-h-screen w-full flex items-center justify-center bg-indigo-600 text-white' />
    </>
  );
};

export default Confirm;
