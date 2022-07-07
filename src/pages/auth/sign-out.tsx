import Loading from '@/doodle/components/Loading';
import doodleConfig from '@/doodle/config';
import { useFirebase } from '@/doodle/contexts/Firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SignOut = () => {
  const router = useRouter();
  const { auth } = useFirebase();

  useEffect(() => {
    const { fallback } = doodleConfig.middleware.authentication.redirects;
    (async () => {
      await signOut(auth);

      router.push(fallback);
    })();
  }, []);

  return (
    <Loading className='absolute z-50 min-h-screen w-full flex items-center justify-center bg-indigo-600 text-white' />
  );
};

export default SignOut;
