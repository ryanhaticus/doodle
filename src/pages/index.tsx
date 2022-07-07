import Logo from '@/doodle/components/Logo';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      {/* Put your own content within the <> </> brackets and start enjoy Doodle! */}
      <div className='flex items-center justify-center bg-indigo-800 min-h-screen'>
        <div>
          <div className='flex items-center gap-x-4 text-white text-7xl'>
            <Logo className='w-36 h-36' href='/' />

            <span>
              <svg
                className='w-20 h-20'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='0.4'
                  d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                ></path>
              </svg>
            </span>

            <span className='font-thin font-display'>You</span>
          </div>
          <div className='mt-4 flex justify-center gap-x-4'>
            <Link href='/auth/sign-in'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white hover:text-indigo-600  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign in
              </button>
            </Link>
            <Link href='/auth/sign-up'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white hover:text-indigo-600  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
