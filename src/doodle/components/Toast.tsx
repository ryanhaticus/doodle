import { Dialog, Transition } from '@headlessui/react';
import { useEffect, Fragment, useState } from 'react';

import { ToastType } from '@/doodle/types/ToastType';
import { classNames } from '../helpers/tailwindcss';
import { useRouter } from 'next/router';

interface IToastProps {
  title: string;
  message: string;
  type?: ToastType;
  cancelText?: string;
  closeOnRedirect?: boolean;
  onClose?: () => void;
}

const Toast = ({
  title,
  message,
  type = 'info',
  cancelText = 'Continue',
  closeOnRedirect = false,
  onClose,
}: IToastProps) => {
  const [open, setOpen] = useState(false);
  const [initialPath, setInitialPath] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setOpen(true);

    if (open || !onClose) {
      return;
    }

    onClose();
  }, [close]);

  useEffect(() => {
    if (!closeOnRedirect) {
      return;
    }

    if (!initialPath || router.asPath === initialPath) {
      setInitialPath(router.asPath);
      return;
    }

    setOpen(false);
  }, [router.asPath]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-40' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6'>
                <div>
                  <div
                    className={classNames(
                      'mx-auto flex items-center justify-center h-12 w-12 rounded-full',
                      type === 'success' && 'bg-green-100',
                      type === 'error' && 'bg-red-100',
                      type === 'info' && 'bg-indigo-100',
                    )}
                  >
                    <svg
                      className={classNames(
                        'w-6 h-6',
                        type === 'success' && 'text-green-600',
                        type === 'error' && 'text-red-600',
                        type === 'info' && 'text-indigo-600',
                      )}
                      aria-hidden='true'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 13l4 4L19 7'
                      ></path>
                    </svg>
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg leading-6 font-medium text-gray-900'
                    >
                      {title}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>{message}</p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
                    onClick={() => setOpen(false)}
                  >
                    {cancelText}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Toast;
