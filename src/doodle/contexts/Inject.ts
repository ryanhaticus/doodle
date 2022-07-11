import { createContext, useContext } from 'react';

interface IInjectContext {
  inject: (form: JSX.Element) => void;
}

export const InjectContext = createContext<IInjectContext>(null);

export const useInject = () => useContext<IInjectContext>(InjectContext);
