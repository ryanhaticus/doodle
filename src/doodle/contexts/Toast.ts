import { createContext, useContext } from 'react';

import { ToastOptions } from '@/doodle/types/ToastOptions';

interface IToastContext {
  display: (title: string, message: string, options?: ToastOptions) => void;
}

export const ToastContext = createContext<IToastContext>(null);

export const useToast = () => useContext<IToastContext>(ToastContext);
