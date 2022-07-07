import Logo from '@/doodle/components/Logo';

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
        </div>
      </div>
    </>
  );
};

export default Index;
