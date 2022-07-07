import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';

import Logo from '@/doodle/components/Logo';
import PageSeo from '@/doodle/components/PageSeo';
import { useFirebase } from '@/doodle/contexts/Firebase';
import { useToast } from '@/doodle/contexts/Toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const { auth } = useFirebase();
  const { display } = useToast();

  const onPasswordReset = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);

      display(
        'Password reset sent',
        'Please check your email address for a link to reset your password.',
        {
          type: 'success',
          cancelText: 'Continue',
          closeOnRedirect: true,
        },
      );
    } catch (e) {
      switch (e.code) {
        case 'auth/user-not-found':
          display(
            'User not found',
            'Please ensure your email address is correct.',
            {
              type: 'error',
              cancelText: 'Try again',
            },
          );
          break;

        default:
          display('Unknown error', e.message, {
            type: 'error',
            cancelText: 'Try again',
          });
          break;
      }
    }
  };

  return (
    <>
      <PageSeo title='Reset password' />
      <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <div className='w-32 mx-auto'>
              <Logo />
            </div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Reset your password
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              or{' '}
              <Link href='/auth/sign-in'>
                <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                  sign in if you remember
                </a>
              </Link>
            </p>
          </div>
          <form
            onSubmit={onPasswordReset}
            className='mt-8 space-y-6'
            action='#'
            method='POST'
          >
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-indigo-500 group-hover:text-indigo-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                    ></path>
                  </svg>
                </span>
                Send password reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
