import { useState } from 'react';

import { ToastContext } from '@/doodle/contexts/Toast';
import { ToastType } from '@/doodle/types/ToastType';
import { ToastOptions } from '../types/ToastOptions';
import Toast from '../components/Toast';

interface IToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: IToastProviderProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('Message');
  const [type, setType] = useState<ToastType>('info');
  const [cancelText, setCancelText] = useState('Continue');

  const display = (title: string, message: string, options?: ToastOptions) => {
    setTitle(title);
    setMessage(message);
    setType(options?.type ?? 'info');
    setCancelText(options?.cancelText ?? 'Continue');
    setOpen(true);
  };

  return (
    <ToastContext.Provider value={{ display }}>
      <Toast
        open={open}
        setOpen={setOpen}
        message={message}
        title={title}
        type={type}
        cancelText={cancelText}
      />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
