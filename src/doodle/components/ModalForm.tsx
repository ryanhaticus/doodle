import { Dialog, Transition } from '@headlessui/react';
import {
  useState,
  Fragment,
  useRef,
  FormEvent,
  useEffect,
  ReactNode,
} from 'react';

interface IModalFormProps {
  onSubmit: (data: EventTarget) => void;
  onClose?: () => void;
  title: string;
  cancelText?: string;
  submitText?: string;
  children: ReactNode;
  onCancel?: () => void;
}

const ModalForm = ({
  onSubmit,
  onClose,
  title,
  cancelText,
  submitText,
  children,
  onCancel,
}: IModalFormProps) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const modalFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(e.target);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!cancelButtonRef.current) {
      return;
    }

    if (open || !onClose) {
      return;
    }

    onClose();
  }, [open]);

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
                <form onSubmit={modalFormSubmit}>
                  <div>
                    <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100'>
                      <svg
                        aria-hidden='true'
                        className='w-6 h-6 text-indigo-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
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
                      <div className='mt-2'>{children}</div>
                    </div>
                  </div>
                  <div className='mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense'>
                    <button
                      type='submit'
                      className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm'
                      onClick={() => setOpen(false)}
                    >
                      {submitText ?? 'Submit'}
                    </button>
                    <button
                      type='button'
                      className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm'
                      onClick={() => {
                        setOpen(false);

                        if (onCancel) {
                          onCancel();
                        }
                      }}
                      ref={cancelButtonRef}
                    >
                      {cancelText ?? 'Cancel'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalForm;
